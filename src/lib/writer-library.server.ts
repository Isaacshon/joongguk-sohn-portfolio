import { z } from "zod";

const STORE_ORIGIN = "https://store.isaactoast.ca";
const STORE_BOOKS_URL = new URL("/api/books", STORE_ORIGIN);
const UPSTREAM_TIMEOUT_MS = 6_000;

export const BOOK_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const bookSchema = z.object({
  id: z.string().min(1).max(64).regex(BOOK_ID_PATTERN),
  title: z.string().trim().min(1).max(180),
  author: z.string().trim().min(1).max(120),
  description: z.string().trim().min(1).max(2_400),
  descriptionEn: z.string().trim().max(2_400).optional(),
  descriptionEs: z.string().trim().max(2_400).optional(),
  editionLabelEn: z.string().trim().max(100).optional(),
  editionLabelEs: z.string().trim().max(100).optional(),
  language: z.string().trim().min(2).max(12),
  free: z.boolean(),
  published: z.boolean(),
  format: z.string().trim().min(1).max(24),
  mimeType: z.string().trim().min(1).max(100),
  fileSize: z.number().int().nonnegative().optional(),
  coverUrl: z.string().trim().min(1).max(500),
  readerUrl: z.string().trim().min(1).max(500),
  price: z
    .object({
      amount: z.number().nonnegative(),
      currency: z.string().trim().length(3),
    })
    .optional(),
});

const catalogSchema = z.object({
  books: z.array(z.unknown()).max(100),
});

type UpstreamBook = z.infer<typeof bookSchema>;

export type WriterLibraryBook = {
  id: string;
  title: string;
  author: string;
  synopsis: string;
  language: string;
  editionLabel: string;
  format: string;
  mimeType: string;
  fileSize: number | null;
  free: boolean;
  price: { amount: number; currency: string } | null;
  coverUrl: string;
  readUrl: string;
};

export type WriterLibrary = {
  books: WriterLibraryBook[];
  source: "store" | "fallback";
  refreshedAt: string;
};

const fallbackBooks: WriterLibraryBook[] = [
  {
    id: "flowers-ko",
    title: "꽃을 보고 있어야만",
    author: "Isaac Toast",
    synopsis:
      "A piano melody that can be heard only while looking at a flower—and the lives shaped by the memory of hearing it.",
    language: "ko",
    editionLabel: "Korean Ver.",
    format: "epub",
    mimeType: "application/epub+zip",
    fileSize: 102_077,
    free: true,
    price: { amount: 0, currency: "CAD" },
    coverUrl: "/api/book-cover/flowers-ko",
    readUrl: new URL("/read/flowers-ko", STORE_ORIGIN).href,
  },
  {
    id: "flowers-en",
    title: "Only While Looking at the Flowers",
    author: "Isaac Toast",
    synopsis:
      "A piano melody that exists only while someone is looking at a flower—and the lives shaped by the memory of hearing it.",
    language: "en",
    editionLabel: "English Ver.",
    format: "epub",
    mimeType: "application/epub+zip",
    fileSize: 82_507,
    free: true,
    price: { amount: 0, currency: "CAD" },
    coverUrl: "/api/book-cover/flowers-en",
    readUrl: new URL("/read/flowers-en", STORE_ORIGIN).href,
  },
];

function fixedStoreUrl(value: string): URL {
  const url = new URL(value, STORE_ORIGIN);
  if (url.origin !== STORE_ORIGIN) {
    throw new Error("The bookstore returned a URL outside its fixed origin.");
  }
  return url;
}

function editionLabel(book: UpstreamBook): string {
  if (book.language.toLowerCase() === "ko") return "Korean Ver.";
  if (book.language.toLowerCase() === "en") return "English Ver.";
  if (book.language.toLowerCase() === "es") return "Spanish Ver.";
  return `${book.language.toUpperCase()} Ver.`;
}

function normalizeBook(book: UpstreamBook): WriterLibraryBook {
  const upstreamCoverUrl = fixedStoreUrl(book.coverUrl);
  const readUrl = fixedStoreUrl(book.readerUrl);

  if (upstreamCoverUrl.pathname !== `/api/books/${book.id}/cover`) {
    throw new Error(`Unexpected cover path for ${book.id}.`);
  }
  if (readUrl.pathname !== `/read/${book.id}`) {
    throw new Error(`Unexpected reader path for ${book.id}.`);
  }

  return {
    id: book.id,
    title: book.title,
    author: book.author,
    synopsis: book.descriptionEn?.trim() || book.description,
    language: book.language.toLowerCase(),
    editionLabel: editionLabel(book),
    format: book.format.toLowerCase(),
    mimeType: book.mimeType,
    fileSize: book.fileSize ?? null,
    free: book.free,
    price: book.price ?? null,
    coverUrl: `/api/book-cover/${book.id}`,
    readUrl: readUrl.href,
  };
}

async function fetchWithTimeout(url: URL, init: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

  try {
    return await fetch(url, {
      ...init,
      cache: "no-store",
      redirect: "error",
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

export async function loadWriterLibrary(): Promise<WriterLibrary> {
  try {
    const response = await fetchWithTimeout(STORE_BOOKS_URL, {
      headers: {
        accept: "application/json",
        "cache-control": "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error(`Bookstore catalog responded with ${response.status}.`);
    }

    const catalog = catalogSchema.parse(await response.json());
    const books = catalog.books
      .map((candidate) => bookSchema.safeParse(candidate))
      .filter((result): result is z.SafeParseSuccess<UpstreamBook> => result.success)
      .map((result) => result.data)
      .filter((book) => book.published)
      .map(normalizeBook);

    if (books.length === 0) {
      throw new Error("The bookstore catalog has no valid published books.");
    }

    return {
      books,
      source: "store",
      refreshedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Unable to refresh the Writer library from the bookstore.", error);
    return {
      books: fallbackBooks.map((book) => ({ ...book })),
      source: "fallback",
      refreshedAt: new Date().toISOString(),
    };
  }
}

const allowedCoverTypes = new Set(["image/avif", "image/jpeg", "image/png", "image/webp"]);

export async function maybeHandleBookCoverRequest(request: Request): Promise<Response | null> {
  const url = new URL(request.url);
  const match = /^\/api\/book-cover\/([^/]+)$/.exec(url.pathname);
  if (!match) return null;

  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { allow: "GET, HEAD" },
    });
  }

  let id: string;
  try {
    id = decodeURIComponent(match[1]);
  } catch {
    return new Response("Invalid book ID", { status: 400 });
  }

  if (!BOOK_ID_PATTERN.test(id) || id.length > 64) {
    return new Response("Invalid book ID", { status: 400 });
  }

  const upstreamUrl = new URL(`/api/books/${id}/cover`, STORE_ORIGIN);

  try {
    const upstream = await fetchWithTimeout(upstreamUrl, {
      method: request.method,
      headers: { accept: "image/avif,image/webp,image/png,image/jpeg" },
    });

    if (upstream.status === 404) {
      return new Response("Cover not found", { status: 404 });
    }
    if (!upstream.ok) {
      return new Response("Cover unavailable", { status: 502 });
    }

    const contentType = (upstream.headers.get("content-type") ?? "")
      .split(";", 1)[0]
      .trim()
      .toLowerCase();
    if (!allowedCoverTypes.has(contentType)) {
      return new Response("Unexpected cover format", { status: 502 });
    }

    const headers = new Headers({
      "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      "content-type": contentType,
      "cross-origin-resource-policy": "same-origin",
      "x-content-type-options": "nosniff",
    });
    for (const name of ["content-length", "etag", "last-modified"]) {
      const value = upstream.headers.get(name);
      if (value) headers.set(name, value);
    }

    return new Response(request.method === "HEAD" ? null : upstream.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error(`Unable to proxy cover for ${id}.`, error);
    return new Response("Cover unavailable", { status: 504 });
  }
}
