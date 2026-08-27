import { createFileRoute } from "@tanstack/react-router";

import { MatLayout } from "@/components/MatLayout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getWriterLibrary } from "@/lib/api/writer-library.functions";

export const Route = createFileRoute("/writer")({
  loader: () => getWriterLibrary(),
  head: () => ({
    meta: [
      { title: "Writer & Books — Isaac Sohn" },
      {
        name: "description",
        content: "손이삭의 책을 읽고, 작품의 줄거리와 판본 정보를 살펴보는 온라인 서가입니다.",
      },
      { property: "og:title", content: "Writer & Books — Isaac Sohn" },
      {
        property: "og:description",
        content: "Isaac Toast 서점과 연결된 손이삭의 책과 문학 기록.",
      },
    ],
  }),
  component: Writer,
});

type LibraryBook = Awaited<ReturnType<typeof getWriterLibrary>>["books"][number];

const languageNames: Record<string, string> = {
  en: "English",
  es: "Español",
  ko: "한국어",
};

function formatBytes(value: number | null): string {
  if (value === null) return "디지털 판본";
  if (value < 1_000_000) return `${Math.round(value / 1_000)} KB`;
  return `${(value / 1_000_000).toFixed(1)} MB`;
}

function accessLabel(book: LibraryBook): string {
  if (book.free) return "무료 열람";
  if (!book.price) return "서점에서 확인";
  return `${book.price.currency} ${book.price.amount.toFixed(2)}`;
}

function BookDialog({ book, children }: { book: LibraryBook; children: React.ReactNode }) {
  const language = languageNames[book.language] ?? book.language.toUpperCase();

  return (
    <Dialog>
      {children}
      <DialogContent className="max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-[920px] overflow-y-auto rounded-none border border-[#2b271f] bg-[#f2ede2] p-0 text-[#26221c] shadow-[0_28px_80px_rgba(30,25,17,0.34)] sm:rounded-none">
        <div className="grid md:grid-cols-[minmax(220px,0.72fr)_minmax(0,1.28fr)]">
          <div className="border-b border-[#2b271f]/25 bg-[#ddd4c3] p-5 sm:p-7 md:border-b-0 md:border-r md:p-10">
            <img
              src={book.coverUrl}
              alt={`${book.title} 표지`}
              width={520}
              height={780}
              className="mx-auto aspect-[2/3] w-full max-w-[210px] object-cover shadow-[12px_15px_0_rgba(43,39,31,0.14)] sm:max-w-[240px] md:max-w-[260px]"
            />
          </div>

          <div className="flex min-w-0 flex-col p-6 sm:p-8 md:p-10">
            <p className="pr-9 text-[10px] font-semibold tracking-[0.2em] text-[#8e382a]">
              {book.editionLabel} · {book.format.toUpperCase()}
            </p>
            <DialogTitle className="mt-5 break-keep font-serif text-[clamp(2.3rem,5vw,4.5rem)] font-medium leading-[0.93] tracking-[-0.045em]">
              {book.title}
            </DialogTitle>
            <p className="mt-4 text-sm font-medium text-[#26221c]/60">{book.author}</p>

            <DialogDescription className="mt-8 border-t border-[#2b271f]/25 pt-6 text-[15px] leading-[1.85] text-[#26221c]/78 sm:text-[16px]">
              {book.synopsis}
            </DialogDescription>

            <dl className="mt-8 grid grid-cols-2 border-y border-[#2b271f]/25 text-xs sm:grid-cols-4">
              {[
                ["언어", language],
                ["형식", book.format.toUpperCase()],
                ["용량", formatBytes(book.fileSize)],
                ["이용", accessLabel(book)],
              ].map(([term, detail]) => (
                <div
                  key={term}
                  className="border-b border-[#2b271f]/15 py-4 odd:border-r sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <dt className="text-[9px] font-semibold tracking-[0.16em] text-[#26221c]/45">
                    {term}
                  </dt>
                  <dd className="mt-1.5 font-semibold text-[#26221c]">{detail}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <a
                href={book.readUrl}
                className="inline-flex min-h-12 w-full items-center justify-between bg-[#8e382a] px-5 text-sm font-semibold text-[#fbf7ee] transition duration-200 hover:bg-[#6f2a20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8e382a] active:translate-y-px"
              >
                {book.free ? "무료로 읽기" : "읽기"}
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function BookRow({ book, index }: { book: LibraryBook; index: number }) {
  const language = languageNames[book.language] ?? book.language.toUpperCase();

  return (
    <li className="border-t border-[#2b271f]/30 py-6 last:border-b sm:py-8">
      <BookDialog book={book}>
        <div className="grid grid-cols-[92px_minmax(0,1fr)] gap-x-4 gap-y-5 sm:grid-cols-[124px_minmax(0,1fr)] sm:gap-x-7 lg:grid-cols-[minmax(0,1fr)_190px] lg:items-center lg:gap-x-10">
          <DialogTrigger asChild>
            <button
              type="button"
              className="group col-span-2 grid min-w-0 grid-cols-[92px_minmax(0,1fr)] gap-x-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8e382a] sm:grid-cols-[124px_minmax(0,1fr)] sm:gap-x-7 lg:col-span-1 lg:grid-cols-[132px_minmax(0,1fr)] lg:gap-x-10"
              aria-label={`${book.title} 상세 정보 열기`}
            >
              <span className="relative block">
                <span className="absolute -left-2 -top-2 font-serif text-xs italic text-[#8e382a]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <img
                  src={book.coverUrl}
                  alt=""
                  width={264}
                  height={396}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="aspect-[2/3] w-full object-cover shadow-[6px_8px_0_rgba(43,39,31,0.12)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[8px_12px_0_rgba(43,39,31,0.16)]"
                />
              </span>

              <span className="min-w-0 self-center">
                <span className="flex flex-wrap gap-1.5 text-[9px] font-semibold tracking-[0.13em] text-[#795e4c] sm:text-[10px]">
                  <span className="border border-[#8e382a]/35 bg-[#eadfd0] px-2 py-1 text-[#8e382a]">
                    {book.editionLabel}
                  </span>
                  <span className="border border-[#2b271f]/20 px-2 py-1">{language}</span>
                  <span className="border border-[#2b271f]/20 px-2 py-1">
                    {book.format.toUpperCase()}
                  </span>
                </span>
                <span className="mt-4 block break-keep font-serif text-[clamp(1.65rem,4vw,3.1rem)] font-medium leading-[0.98] tracking-[-0.035em] transition-colors group-hover:text-[#8e382a]">
                  {book.title}
                </span>
                <span className="mt-3 block text-xs font-medium text-[#26221c]/55 sm:text-sm">
                  {book.author}
                </span>
                <span className="mt-4 line-clamp-3 break-keep text-[12px] leading-[1.7] text-[#26221c]/68 sm:max-w-[52rem] sm:text-sm">
                  {book.synopsis}
                </span>
              </span>
            </button>
          </DialogTrigger>

          <div className="col-span-2 flex items-center gap-3 border-t border-[#2b271f]/15 pt-4 lg:col-span-1 lg:flex-col lg:items-stretch lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex min-h-10 flex-1 items-center justify-between border border-[#2b271f]/40 px-3.5 text-xs font-semibold transition duration-200 hover:bg-[#e3dacb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8e382a] active:translate-y-px"
              >
                상세 정보
                <span aria-hidden>＋</span>
              </button>
            </DialogTrigger>
            <a
              href={book.readUrl}
              className="inline-flex min-h-10 flex-1 items-center justify-between bg-[#2b271f] px-3.5 text-xs font-semibold text-[#f7f1e6] transition duration-200 hover:bg-[#8e382a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8e382a] active:translate-y-px"
            >
              {book.free ? "무료로 읽기" : "읽기"}
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </BookDialog>
    </li>
  );
}

function Writer() {
  const library = Route.useLoaderData();

  return (
    <MatLayout surface="plain" contentClassName="max-w-none" compactMobile>
      <main className="relative isolate -mx-3 -mb-12 min-h-[calc(100dvh-4rem)] overflow-hidden bg-[#f2ede2] text-[#26221c] selection:bg-[#8e382a] selection:text-[#fbf7ee]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-55 [background-image:linear-gradient(to_right,rgba(43,39,31,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(43,39,31,0.025)_1px,transparent_1px)] [background-size:28px_28px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_0%,rgba(255,255,255,0.88),transparent_30%),radial-gradient(circle_at_94%_70%,rgba(142,56,42,0.07),transparent_34%)]"
        />

        <div className="mx-auto w-full max-w-[1320px] px-5 pb-20 pt-9 sm:px-8 sm:pt-12 lg:px-14 lg:pb-28 lg:pt-16">
          <header className="border-t-2 border-[#2b271f]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2b271f]/30 py-3 text-[9px] font-semibold tracking-[0.18em] text-[#26221c]/55 sm:text-[10px]">
              <span>ISAAC SOHN · WRITER</span>
              <span className="flex items-center gap-2">
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 ${library.source === "store" ? "bg-[#557056]" : "bg-[#a56b43]"}`}
                />
                {library.source === "store" ? "서점 서지 정보 연동 중" : "기본 서지 정보 표시 중"}
              </span>
            </div>

            <div className="grid gap-8 py-10 sm:py-14 md:grid-cols-[minmax(0,1.2fr)_minmax(250px,0.8fr)] md:items-end lg:py-20">
              <div>
                <p className="mb-4 text-[10px] font-semibold tracking-[0.23em] text-[#8e382a]">
                  BOOKS & WRITING
                </p>
                <h1 className="break-keep font-serif text-[clamp(3.8rem,9vw,8.4rem)] font-medium leading-[0.78] tracking-[-0.06em]">
                  읽는 서가
                </h1>
              </div>
              <p className="max-w-[31rem] break-keep border-l-2 border-[#8e382a] pl-5 text-[15px] leading-[1.85] text-[#26221c]/72 sm:text-[17px]">
                출간한 이야기를 고르고, 줄거리를 살펴보고, 바로 읽을 수 있습니다. 이 목록은 Isaac
                Toast 서점의 공개 서지 정보와 연결됩니다.
              </p>
            </div>
          </header>

          <section aria-labelledby="books-heading">
            <div className="flex items-end justify-between border-b-2 border-[#2b271f] pb-3">
              <h2 id="books-heading" className="text-sm font-bold tracking-[-0.01em]">
                출간작
              </h2>
              <span className="font-serif text-sm italic text-[#26221c]/45">
                {library.books.length} editions
              </span>
            </div>
            <ol>
              {library.books.map((book, index) => (
                <BookRow key={book.id} book={book} index={index} />
              ))}
            </ol>
          </section>

          <aside
            aria-labelledby="archive-heading"
            className="mt-20 border-y border-[#2b271f] py-6 sm:mt-28 sm:py-8"
          >
            <div className="grid gap-7 md:grid-cols-[170px_minmax(0,1fr)_170px] md:items-center md:gap-9">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.2em] text-[#8e382a]">
                  ARCHIVE / PRESS
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-[#26221c]/52">2026 문학 기록</p>
              </div>

              <div className="md:border-x md:border-[#2b271f]/25 md:px-9">
                <p className="text-[10px] font-semibold tracking-[0.14em] text-[#8e382a]">
                  제16회 애국지사 문예작품 공모전 · 최우수상
                </p>
                <h2
                  id="archive-heading"
                  className="mt-3 break-keep font-serif text-[clamp(2rem,4.5vw,3.8rem)] leading-none tracking-[-0.035em]"
                >
                  적히지 않은 이름들
                </h2>
                <p className="mt-4 max-w-[48rem] break-keep text-[13px] leading-[1.75] text-[#26221c]/66 sm:text-sm">
                  1919년 발안장터 만세시위와 제암리·고주리 학살 기록에서 출발해, 기록에
                  ‘김씨(金氏·강태성 부인)’로 남은 독립유공자의 자리를 바라본 작품입니다.
                </p>
              </div>

              <a
                href="https://www.koreatimes.net/ArticleViewer/Article/177183"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-between border-b border-[#2b271f] text-xs font-semibold transition-colors hover:border-[#8e382a] hover:text-[#8e382a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8e382a]"
              >
                수상 기록 보기
                <span aria-hidden>↗</span>
              </a>
            </div>
          </aside>
        </div>
      </main>
    </MatLayout>
  );
}
