import { createFileRoute } from "@tanstack/react-router";
import { Clapperboard, Grid3X3, Images, Instagram, Play, UserRound } from "lucide-react";
import type { SyntheticEvent } from "react";

import { MatLayout } from "@/components/MatLayout";
import grid01 from "@/assets/instagram-feed/01-dcr6etzgvrn.jpg";
import grid02 from "@/assets/instagram-feed/02-dcmvsduv9hf.jpg";
import grid03 from "@/assets/instagram-feed/03-dclvucgm9ga.jpg";
import grid04 from "@/assets/instagram-feed/04-dcipur-uium.jpg";
import grid05 from "@/assets/instagram-feed/05-dcchs5ymsjv.jpg";
import grid06 from "@/assets/instagram-feed/06-db8jqxrdua7.jpg";
import { getInstagramFeed } from "@/lib/api/instagram.functions";
import {
  getInstagramProfileUrl,
  type InstagramMediaType,
  type InstagramPost,
} from "@/lib/instagram";

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
  loader: () => getInstagramFeed(),
  staleTime: 5 * 60 * 1_000,
  component: Model,
});

type DisplayPost = InstagramPost & {
  mediaUrl: string;
  fallbackUrl: string;
};

const fallbackMedia = [grid01, grid02, grid03, grid04, grid05, grid06];

function recoverLocalImage(event: SyntheticEvent<HTMLImageElement>, fallbackUrl: string) {
  const image = event.currentTarget;

  if (image.dataset.fallbackApplied !== "true") {
    image.dataset.fallbackApplied = "true";
    image.src = fallbackUrl;
  }
}

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
  post: DisplayPost;
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
          onError={(event) => recoverLocalImage(event, post.fallbackUrl)}
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
  const feed = Route.useLoaderData();
  const { profile } = feed;
  const profileUrl = getInstagramProfileUrl(profile.username);
  const profileImage = profile.profilePictureUrl ?? grid01;
  const bioLines = profile.biography.split("\n").filter(Boolean);
  const posts: DisplayPost[] = feed.posts.slice(0, 6).map((post, index) => {
    const fallbackUrl = fallbackMedia[index % fallbackMedia.length];

    return {
      ...post,
      mediaUrl: post.mediaUrl ?? fallbackUrl,
      fallbackUrl,
    };
  });
  const isLive = feed.status === "live";

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
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    onError={(event) => recoverLocalImage(event, grid01)}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <h1 className="flex min-w-0 items-center gap-1.5 text-xl font-normal tracking-[-0.02em] sm:text-2xl">
                  <span className="truncate">{profile.username}</span>
                  <span
                    aria-label="Professional account"
                    title="Professional account"
                    className="grid h-[1.05rem] w-[1.05rem] shrink-0 place-items-center rounded-full bg-[#0095f6] text-[9px] font-bold leading-none text-white"
                  >
                    ✓
                  </span>
                </h1>

                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow @${profile.username} on Instagram`}
                  className="inline-flex min-h-9 items-center justify-center rounded-lg bg-[#0095f6] px-5 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#1877f2] focus-visible:ring-2 focus-visible:ring-[#101820] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf8]"
                >
                  Follow
                </a>

                <a
                  href={profileUrl}
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
                    {profile.mediaCount.toLocaleString("en-US")}
                  </dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="order-2">followers</dt>
                  <dd className="order-1 font-semibold tabular-nums">
                    {profile.followersCount.toLocaleString("en-US")}
                  </dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="order-2">following</dt>
                  <dd className="order-1 font-semibold tabular-nums">
                    {profile.followsCount.toLocaleString("en-US")}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 hidden text-sm leading-relaxed sm:block">
                <p className="font-semibold">{profile.name}</p>
                {bioLines.map((line, index) => (
                  <p
                    key={`${line}-${index}`}
                    className={index === 0 ? "text-[#737373]" : undefined}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="col-span-2 mt-5 sm:col-span-1 sm:col-start-2 sm:mt-4">
              <div className="text-sm leading-relaxed sm:hidden">
                <p className="font-semibold">{profile.name}</p>
                {bioLines.map((line, index) => (
                  <p
                    key={`${line}-${index}`}
                    className={index === 0 ? "text-[#737373]" : undefined}
                  >
                    {line}
                  </p>
                ))}
              </div>

              <dl className="mt-5 grid grid-cols-3 border-y border-[#dbdbd8] py-3 text-center text-xs sm:hidden">
                <div className="flex flex-col">
                  <dt className="order-2 text-[#737373]">posts</dt>
                  <dd className="order-1 text-sm font-semibold tabular-nums">
                    {profile.mediaCount.toLocaleString("en-US")}
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 text-[#737373]">followers</dt>
                  <dd className="order-1 text-sm font-semibold tabular-nums">
                    {profile.followersCount.toLocaleString("en-US")}
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 text-[#737373]">following</dt>
                  <dd className="order-1 text-sm font-semibold tabular-nums">
                    {profile.followsCount.toLocaleString("en-US")}
                  </dd>
                </div>
              </dl>

              <p
                className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[9px] uppercase tracking-[0.13em] text-[#737373] sm:mt-0 sm:text-[10px]"
                title={feed.syncedAt ? `Last synced ${feed.syncedAt}` : "Saved profile snapshot"}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-[#2f7d52]" : "bg-[#b77728]"}`}
                />
                <span className="font-semibold text-[#384048]">{isLive ? "Live" : "Cached"}</span>
                <span aria-hidden="true" className="text-[#b3b3ae]">
                  /
                </span>
                <span className="normal-case tracking-[0.05em]">
                  {isLive ? "refreshes every 5 min" : "saved profile"}
                </span>
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
              href={`${profileUrl}reels/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#737373] outline-none transition-colors hover:text-[#101820] focus-visible:ring-2 focus-visible:ring-[#101820] sm:text-[10px]"
            >
              <Clapperboard aria-hidden="true" className="h-3.5 w-3.5" />
              Reels
            </a>
            <a
              href={`${profileUrl}tagged/`}
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
          aria-label={`Latest Instagram posts by @${profile.username}`}
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
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 outline-none hover:text-[#101820] focus-visible:ring-2 focus-visible:ring-[#101820]"
          >
            <Instagram aria-hidden="true" className="h-3.5 w-3.5" />
            Instagram / @{profile.username} ↗
          </a>
        </footer>
      </main>
    </MatLayout>
  );
}
