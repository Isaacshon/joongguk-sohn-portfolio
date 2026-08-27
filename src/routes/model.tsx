import { createFileRoute } from "@tanstack/react-router";
import { Clapperboard, Grid3X3, Images, Instagram, Play, UserRound } from "lucide-react";

import { MatLayout } from "@/components/MatLayout";
import grid01 from "@/assets/instagram-feed/01-dcr6etzgvrn.jpg";
import grid02 from "@/assets/instagram-feed/02-dcmvsduv9hf.jpg";
import grid03 from "@/assets/instagram-feed/03-dclvucgm9ga.jpg";
import grid04 from "@/assets/instagram-feed/04-dcipur-uium.jpg";
import grid05 from "@/assets/instagram-feed/05-dcchs5ymsjv.jpg";
import grid06 from "@/assets/instagram-feed/06-db8jqxrdua7.jpg";
import grid07 from "@/assets/instagram-feed/07-dbtyttblld.jpg";

type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

const INSTAGRAM_USERNAME = "lsaac_toast";
const INSTAGRAM_PROFILE_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

export const Route = createFileRoute("/model")({
  head: () => ({
    meta: [
      { title: "Model & Instagram — Isaac Sohn" },
      {
        name: "description",
        content:
          "An Instagram-style grid and selected modeling work by Toronto-based model, actor, and writer Isaac Sohn.",
      },
      { property: "og:title", content: "Model & Instagram — Isaac Sohn" },
      {
        property: "og:description",
        content: "A direct-linked social casting archive from @lsaac_toast.",
      },
    ],
  }),
  component: Model,
});

type SavedPost = {
  id: string;
  permalink: string;
  mediaType: InstagramMediaType;
  mediaUrl: string;
  caption: string;
  alt: string;
};

const savedPosts: SavedPost[] = [
  {
    id: "DcR6eTZGVRN",
    permalink: "https://www.instagram.com/lsaac_toast/p/DcR6eTZGVRN/",
    mediaType: "CAROUSEL_ALBUM",
    mediaUrl: grid01,
    caption: "졸리면 진해지는 쌍꺼풀. Clouds of the Northern Hemisphere — Toronto field notes.",
    alt: "Isaac Sohn lying in green grass in a close-up portrait",
  },
  {
    id: "DcMvsduv9HF",
    permalink: "https://www.instagram.com/lsaac_toast/reel/DcMvsduv9HF/",
    mediaType: "VIDEO",
    mediaUrl: grid02,
    caption:
      "Finally choosing to create instead of just watching — modeling, acting, and everyday life in Toronto.",
    alt: "A dark cinematic reel cover introducing Isaac Sohn's creative journey",
  },
  {
    id: "DcLVUcGm9Ga",
    permalink: "https://www.instagram.com/lsaac_toast/p/DcLVUcGm9Ga/",
    mediaType: "CAROUSEL_ALBUM",
    mediaUrl: grid03,
    caption: "조금은 시원해진 것 같기도.",
    alt: "Isaac Sohn in a low-light close-up selfie",
  },
  {
    id: "DcIPUR-uIUm",
    permalink: "https://www.instagram.com/lsaac_toast/reel/DcIPUR-uIUm/",
    mediaType: "VIDEO",
    mediaUrl: grid04,
    caption: "Hi, I’m Isaac — a Korean model, actor and writer based in Toronto.",
    alt: "Isaac Sohn wearing a gray polo in an introductory reel",
  },
  {
    id: "DcCHs5ymSJV",
    permalink: "https://www.instagram.com/lsaac_toast/p/DcCHs5ymSJV/",
    mediaType: "CAROUSEL_ALBUM",
    mediaUrl: grid05,
    caption: "🐈 ⭐ 🌝",
    alt: "A close side-profile portrait of Isaac Sohn",
  },
  {
    id: "Db8jQxrDuA7",
    permalink: "https://www.instagram.com/lsaac_toast/p/Db8jQxrDuA7/",
    mediaType: "CAROUSEL_ALBUM",
    mediaUrl: grid06,
    caption: "Skipping leg days.",
    alt: "Isaac Sohn photographed outdoors in daylight",
  },
  {
    id: "DbTYTtblld",
    permalink: "https://www.instagram.com/hanbyul.official/p/DbTYTtblld-/",
    mediaType: "CAROUSEL_ALBUM",
    mediaUrl: grid07,
    caption: "HANBYUL FW2026 — dropping August 20, 6PM EST.",
    alt: "Isaac Sohn modeling for Hanbyul while reclining on a park bench",
  },
];

const savedProfileStats = {
  followers: 1_583,
  following: 264,
};

function MediaMark({ type }: { type: InstagramMediaType }) {
  if (type === "VIDEO") {
    return <Play aria-hidden="true" className="h-4 w-4 fill-current" />;
  }

  if (type === "CAROUSEL_ALBUM") {
    return <Images aria-hidden="true" className="h-4 w-4" />;
  }

  return null;
}

type GridTileProps = {
  post: SavedPost;
  index: number;
};

function GridTile({ post, index }: GridTileProps) {
  const title = post.caption;

  return (
    <li className="min-w-0 bg-[#efefed]">
      <a
        href={post.permalink}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open Instagram post ${index + 1}: ${title}`}
        className="group relative block aspect-square overflow-hidden bg-[#dededb] outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
      >
        <img
          src={post.mediaUrl}
          alt={post.alt}
          loading={index < 6 ? "eager" : "lazy"}
          fetchPriority={index < 3 ? "high" : "auto"}
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover saturate-[0.9] transition duration-500 group-hover:scale-[1.015] group-hover:saturate-100 motion-reduce:transition-none"
        />

        <span className="absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.75)] md:right-4 md:top-4">
          <MediaMark type={post.mediaType} />
        </span>

        <span className="absolute inset-0 hidden flex-col justify-end bg-gradient-to-t from-[#0b141a]/90 via-[#0b141a]/18 to-transparent p-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none md:flex lg:p-7">
          <span className="line-clamp-3 max-w-md text-sm leading-relaxed lg:text-base">
            {title}
          </span>
          <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
            Open on Instagram ↗
          </span>
        </span>
      </a>
    </li>
  );
}

function Model() {
  const posts = savedPosts;
  const profileImage = grid01;
  const postCount = posts.length;

  return (
    <MatLayout surface="plain" contentClassName="max-w-none pt-11">
      <main className="relative -mx-3 -mb-12 min-h-screen overflow-hidden bg-[#fafaf8] text-[#101820]">
        <header className="mx-auto w-full max-w-[1040px] px-4 pb-8 pt-7 sm:px-8 sm:pb-11 sm:pt-10 lg:px-12">
          <div className="mb-7 flex items-center justify-between border-b border-[#dbdbd8] pb-3 font-mono text-[9px] uppercase tracking-[0.15em] text-[#687078] sm:mb-9 sm:text-[10px]">
            <span>Model / Instagram</span>
            <span>Professional profile</span>
          </div>

          <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-5 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:gap-x-10 lg:gap-x-16">
            <div className="row-span-2 flex justify-center pt-1 sm:row-span-1">
              <div className="h-[5.25rem] w-[5.25rem] rounded-full bg-[conic-gradient(from_210deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5,#feda75)] p-[3px] sm:h-36 sm:w-36 sm:p-1">
                <div className="h-full w-full rounded-full bg-[#fafaf8] p-[3px] sm:p-1">
                  <img
                    src={profileImage}
                    alt="Isaac Sohn"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <h1 className="flex min-w-0 items-center gap-1.5 text-xl font-normal tracking-[-0.02em] sm:text-2xl">
                  <span className="truncate">{INSTAGRAM_USERNAME}</span>
                  <span
                    aria-label="Professional account"
                    title="Professional account"
                    className="grid h-[1.05rem] w-[1.05rem] shrink-0 place-items-center rounded-full bg-[#0095f6] text-[9px] font-bold leading-none text-white"
                  >
                    ✓
                  </span>
                </h1>

                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow @${INSTAGRAM_USERNAME} on Instagram`}
                  className="inline-flex min-h-9 items-center justify-center rounded-lg bg-[#0095f6] px-5 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#1877f2] focus-visible:ring-2 focus-visible:ring-[#101820] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf8]"
                >
                  Follow
                </a>

                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden min-h-9 items-center justify-center rounded-lg bg-[#e8e8e5] px-4 text-sm font-semibold outline-none transition-colors hover:bg-[#ddddda] focus-visible:ring-2 focus-visible:ring-[#101820] focus-visible:ring-offset-2 sm:inline-flex"
                >
                  View profile
                </a>
              </div>

              <dl className="mt-5 hidden items-center gap-8 text-[15px] sm:flex">
                <div className="flex gap-1.5">
                  <dt className="order-2">posts</dt>
                  <dd className="order-1 font-semibold tabular-nums">
                    {postCount.toLocaleString("en-US")}
                  </dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="order-2">followers</dt>
                  <dd className="order-1 font-semibold tabular-nums">
                    {savedProfileStats.followers.toLocaleString("en-US")}
                  </dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="order-2">following</dt>
                  <dd className="order-1 font-semibold tabular-nums">
                    {savedProfileStats.following.toLocaleString("en-US")}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 hidden text-sm leading-relaxed sm:block">
                <p className="font-semibold">Isaac Sohn</p>
                <p className="text-[#737373]">Model · Actor · Writer</p>
                <p>Korean creative based in Toronto.</p>
                <p>Brand Copywriter &amp; Model @hanbyul.official</p>
              </div>
            </div>

            <div className="col-span-2 mt-5 sm:col-span-1 sm:col-start-2 sm:mt-4">
              <div className="text-sm leading-relaxed sm:hidden">
                <p className="font-semibold">Isaac Sohn</p>
                <p className="text-[#737373]">Model · Actor · Writer</p>
                <p>Korean creative based in Toronto.</p>
                <p>Brand Copywriter &amp; Model @hanbyul.official</p>
              </div>

              <dl className="mt-5 grid grid-cols-3 border-y border-[#dbdbd8] py-3 text-center text-xs sm:hidden">
                <div className="flex flex-col">
                  <dt className="order-2 text-[#737373]">posts</dt>
                  <dd className="order-1 text-sm font-semibold tabular-nums">
                    {postCount.toLocaleString("en-US")}
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 text-[#737373]">followers</dt>
                  <dd className="order-1 text-sm font-semibold tabular-nums">
                    {savedProfileStats.followers.toLocaleString("en-US")}
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 text-[#737373]">following</dt>
                  <dd className="order-1 text-sm font-semibold tabular-nums">
                    {savedProfileStats.following.toLocaleString("en-US")}
                  </dd>
                </div>
              </dl>

              <p className="mt-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.13em] text-[#737373] sm:mt-0 sm:text-[10px]">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#2f7d52]" />
                Direct-linked Instagram grid
              </p>
            </div>
          </div>
        </header>

        <div className="border-t border-[#dbdbd8]">
          <nav
            aria-label="Instagram profile views"
            className="mx-auto flex h-14 w-full max-w-[1040px] items-stretch justify-center gap-8 px-4 sm:gap-14"
          >
            <a
              href="#instagram-grid"
              aria-current="page"
              className="-mt-px inline-flex items-center gap-1.5 border-t border-[#101820] font-mono text-[9px] font-semibold uppercase tracking-[0.14em] outline-none focus-visible:ring-2 focus-visible:ring-[#101820] sm:text-[10px]"
            >
              <Grid3X3 aria-hidden="true" className="h-3.5 w-3.5" />
              Posts
            </a>
            <a
              href={`${INSTAGRAM_PROFILE_URL}reels/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#737373] outline-none transition-colors hover:text-[#101820] focus-visible:ring-2 focus-visible:ring-[#101820] sm:text-[10px]"
            >
              <Clapperboard aria-hidden="true" className="h-3.5 w-3.5" />
              Reels
            </a>
            <a
              href={`${INSTAGRAM_PROFILE_URL}tagged/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#737373] outline-none transition-colors hover:text-[#101820] focus-visible:ring-2 focus-visible:ring-[#101820] sm:text-[10px]"
            >
              <UserRound aria-hidden="true" className="h-3.5 w-3.5" />
              Tagged
            </a>
          </nav>
        </div>

        <section
          id="instagram-grid"
          aria-label={`Latest Instagram posts by @${INSTAGRAM_USERNAME}`}
          className="mx-auto w-full max-w-[1040px] scroll-mt-14"
        >
          <ul className="grid grid-cols-3 gap-[3px] bg-[#fafaf8] sm:gap-1">
            {posts.map((post, index) => (
              <GridTile key={post.id} post={post} index={index} />
            ))}
          </ul>
        </section>

        <footer className="mx-auto flex w-full max-w-[1040px] flex-col gap-3 border-t border-[#dbdbd8] px-4 py-9 font-mono text-[9px] uppercase tracking-[0.12em] text-[#737373] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-[10px] lg:px-0">
          <p>Isaac Sohn / Model · Actor · Writer</p>
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 outline-none hover:text-[#101820] focus-visible:ring-2 focus-visible:ring-[#101820]"
          >
            <Instagram aria-hidden="true" className="h-3.5 w-3.5" />
            Instagram / @lsaac_toast ↗
          </a>
        </footer>
      </main>
    </MatLayout>
  );
}
