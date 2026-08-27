import { createFileRoute, Link } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";
import hanbyulBeforeAfter from "@/assets/hanbyul-brand/before-after-board.webp";
import hanbyulEditorial from "@/assets/hanbyul-brand/ai-editorial-walk.webp";
import hanbyulFlatLay from "@/assets/hanbyul-brand/flatlay-clean-logo-final.webp";
import passionConferenceA from "@/assets/social-management/passion-conference-a.webp";
import passionConferenceB from "@/assets/social-management/passion-conference-b.webp";
import passionConferenceC from "@/assets/social-management/passion-conference-c.webp";
import hanbyulLogo from "@/assets/social-management/hanbyul-logo.webp";
import passionFruitsLogo from "@/assets/social-management/passionfruits-logo-lockup.webp";

export const Route = createFileRoute("/social-management")({
  head: () => ({
    meta: [
      { title: "Social Management - Isaac Sohn" },
      {
        name: "description",
        content:
          "Selected Instagram direction, content planning, and website management work for Hanbyul and PassionFruits.",
      },
      { property: "og:title", content: "Social Management - Isaac Sohn" },
      {
        property: "og:description",
        content: "Social and digital direction for two distinct brand voices.",
      },
    ],
  }),
  component: SocialManagement,
});

const hanbyulRoles = ["Instagram direction", "Website management", "Product storytelling"];
const passionFruitsRoles = ["Social operations", "Content planning", "Campaign graphics"];
const passionPosters = [
  {
    src: passionConferenceA,
    alt: "PassionFruits Conference 2026 Book of Judges poster in soft purple",
  },
  {
    src: passionConferenceB,
    alt: "PassionFruits Conference 2026 neon purple poster",
  },
  {
    src: passionConferenceC,
    alt: "PassionFruits Conference 2026 campaign poster",
  },
];

const externalLinkClass =
  "inline-flex min-h-11 items-center justify-center border border-current px-4 py-2 text-[12px] font-semibold tracking-[0.12em] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--link-bg)] hover:text-[var(--link-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2";

function Arrow() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className="ml-2 h-4 w-4" fill="none">
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function RoleList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="mt-7 grid gap-px border-y border-current/15 sm:grid-cols-3">
      {items.map((item, index) => (
        <li
          key={item}
          className={`flex min-h-16 items-center gap-3 py-3 text-[13px] font-medium sm:px-3 ${
            index > 0 ? "sm:border-l sm:border-current/15" : ""
          } ${dark ? "text-white/78" : "text-black/70"}`}
        >
          <span className="font-serif text-lg italic opacity-45">0{index + 1}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function SocialManagement() {
  return (
    <MatLayout surface="plain" contentClassName="!max-w-none !px-0 !pb-0 !pt-11">
      <article className="overflow-x-clip bg-[#f4f0e8] text-[#1c1a17]">
        <section className="relative border-b border-black/15 px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 16% 20%, rgba(117,84,53,.28), transparent 34%), repeating-linear-gradient(90deg, transparent 0 79px, rgba(28,26,23,.12) 80px)",
            }}
          />
          <div className="relative mx-auto grid max-w-[1380px] gap-12 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,.65fr)] xl:items-end">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] text-black/55">
                SELECTED ACCOUNTS · 01—02
              </p>
              <h1 className="mt-7 max-w-5xl text-balance font-serif text-[clamp(48px,10vw,154px)] font-medium leading-[0.78] tracking-[-0.05em]">
                Social
                <span className="block pl-[0.18em] italic text-[#6f3f2d]">Management</span>
              </h1>
            </div>
            <div className="max-w-[34rem] xl:pb-2">
              <p className="text-pretty text-[clamp(18px,2vw,27px)] leading-[1.25] tracking-[-0.02em]">
                Planning, publishing, and site upkeep for brands that need a recognizable voice in
                every update.
              </p>
              <p className="mt-5 max-w-[54ch] text-[14px] leading-7 text-black/58">
                Two accounts, two different audiences. The system changes; the attention to rhythm,
                clarity, and visual continuity does not.
              </p>
            </div>
          </div>
        </section>

        <nav
          aria-label="Selected social management accounts"
          className="sticky top-11 z-20 border-b border-black/15 bg-[#f4f0e8]/92 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-[1380px] items-center gap-7 overflow-x-auto px-5 py-3 text-[12px] font-semibold tracking-[0.12em] [scrollbar-width:none] sm:px-8 lg:px-12 [&::-webkit-scrollbar]:hidden">
            <span className="mr-auto whitespace-nowrap text-black/60">CASE INDEX</span>
            <a
              href="#hanbyul"
              className="whitespace-nowrap transition hover:opacity-55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              01 HANBYUL
            </a>
            <a
              href="#passionfruits"
              className="whitespace-nowrap transition hover:opacity-55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              02 PASSIONFRUITS
            </a>
          </div>
        </nav>

        <section
          id="hanbyul"
          aria-labelledby="hanbyul-title"
          className="scroll-mt-24 bg-[#ded4c4] px-5 py-16 text-[#241d18] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
        >
          <div className="mx-auto max-w-[1380px]">
            <h2 id="hanbyul-title" className="sr-only">
              Hanbyul
            </h2>
            <header className="grid gap-10 border-t border-[#241d18]/25 pt-6 xl:grid-cols-12 xl:gap-8">
              <div className="xl:col-span-2">
                <p
                  aria-hidden
                  className="font-serif text-[56px] italic leading-none text-[#241d18]/30"
                >
                  01
                </p>
                <p className="mt-3 text-[11px] font-semibold tracking-[0.2em] text-[#241d18]/70">
                  APPAREL · DIGITAL
                </p>
              </div>
              <div className="xl:col-span-5">
                <img
                  src={hanbyulLogo}
                  alt="Hanbyul logo"
                  width={480}
                  height={77}
                  className="h-auto w-full max-w-[520px]"
                />
              </div>
              <div className="xl:col-span-5 xl:pl-8">
                <p className="max-w-[43ch] text-pretty text-[17px] leading-7 text-[#241d18]/72">
                  An apparel account built around product clarity and everyday wear. Instagram
                  direction, website upkeep, and campaign imagery meet in one measured voice.
                </p>
                <RoleList items={hanbyulRoles} />
                <div
                  className="mt-7 flex flex-wrap gap-2 [--link-bg:#241d18] [--link-fg:#ded4c4]"
                  aria-label="Hanbyul links"
                >
                  <a
                    href="https://www.instagram.com/hanbyul.official/"
                    target="_blank"
                    rel="noreferrer"
                    className={externalLinkClass}
                  >
                    Instagram <Arrow />
                  </a>
                  <a
                    href="https://www.hanbyul.ca/"
                    target="_blank"
                    rel="noreferrer"
                    className={externalLinkClass}
                  >
                    Visit website <Arrow />
                  </a>
                  <Link
                    to="/hanbyul-brand"
                    className={`${externalLinkClass} bg-[#241d18] text-[#ded4c4]`}
                  >
                    Case study <Arrow />
                  </Link>
                </div>
              </div>
            </header>

            <div className="mt-14 grid gap-3 md:grid-cols-12 md:grid-rows-2 xl:mt-20">
              <figure className="group relative overflow-hidden bg-[#c8bcaa] md:col-span-8 md:row-span-2">
                <img
                  src={hanbyulBeforeAfter}
                  alt="Hanbyul styling comparison showing two knitwear directions"
                  className="aspect-[16/10] h-full w-full object-cover transition duration-700 group-hover:scale-[1.015]"
                />
                <figcaption className="absolute bottom-0 left-0 bg-[#f4f0e8]/92 px-3 py-2 text-[10px] font-semibold tracking-[0.16em] backdrop-blur-sm">
                  PRODUCT STORY · DAILY-LIFE POSITIONING
                </figcaption>
              </figure>
              <figure className="group overflow-hidden bg-[#c8bcaa] md:col-span-4">
                <img
                  src={hanbyulFlatLay}
                  alt="Hanbyul brown cable-knit sweater product flat lay"
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />
              </figure>
              <figure className="group overflow-hidden bg-[#c8bcaa] md:col-span-4">
                <img
                  src={hanbyulEditorial}
                  alt="Hanbyul AI-assisted editorial study in an urban setting"
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />
              </figure>
            </div>
          </div>
        </section>

        <section
          id="passionfruits"
          aria-labelledby="passionfruits-title"
          className="scroll-mt-24 bg-[#28103f] px-5 py-16 text-[#fff7da] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
        >
          <div className="mx-auto max-w-[1380px]">
            <h2 id="passionfruits-title" className="sr-only">
              PassionFruits
            </h2>
            <header className="grid gap-10 border-t border-white/20 pt-6 xl:grid-cols-12 xl:gap-8">
              <div className="xl:col-span-2">
                <p aria-hidden className="font-serif text-[56px] italic leading-none text-white/30">
                  02
                </p>
                <p className="mt-3 text-[11px] font-semibold tracking-[0.2em] text-[#e6d5ff]/72">
                  COMMUNITY · CULTURE
                </p>
              </div>
              <div className="xl:order-3 xl:col-span-5 xl:pl-8">
                <div className="mx-auto max-w-[420px] bg-[#fff7da] p-5 shadow-[0_28px_70px_rgba(0,0,0,.28)] sm:p-8">
                  <img
                    src={passionFruitsLogo}
                    alt="PassionFruits logo"
                    width={720}
                    height={652}
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
              <div className="xl:order-2 xl:col-span-5 xl:pl-8">
                <p className="max-w-[43ch] text-pretty text-[17px] leading-7 text-white/72">
                  A youth ministry with a faster visual tempo. Social operations and conference
                  graphics turn event information into a feed people can recognize and act on.
                </p>
                <RoleList items={passionFruitsRoles} dark />
                <div
                  className="mt-7 flex flex-wrap gap-2 [--link-bg:#fff7da] [--link-fg:#28103f]"
                  aria-label="PassionFruits links"
                >
                  <a
                    href="https://www.instagram.com/passionfruits_ministry/"
                    target="_blank"
                    rel="noreferrer"
                    className={externalLinkClass}
                  >
                    Instagram <Arrow />
                  </a>
                  <a
                    href="https://passionfruits.ca/"
                    target="_blank"
                    rel="noreferrer"
                    className={externalLinkClass}
                  >
                    Visit website <Arrow />
                  </a>
                  <Link
                    to="/fliers"
                    className={`${externalLinkClass} border-[#fff7da] bg-[#fff7da] text-[#28103f]`}
                  >
                    Poster work <Arrow />
                  </Link>
                </div>
              </div>
            </header>

            <div className="mt-14 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:pb-0 xl:mt-20 [&::-webkit-scrollbar]:hidden">
              {passionPosters.map((poster) => (
                <figure
                  key={poster.alt}
                  className="group min-w-[82vw] snap-center overflow-hidden bg-[#9c77b8] sm:min-w-[58vw] md:min-w-0"
                >
                  <img
                    src={poster.src}
                    alt={poster.alt}
                    width={1400}
                    height={1867}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] h-auto w-full object-cover object-top transition duration-700 group-hover:scale-[1.012]"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-black/15 bg-[#f4f0e8] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto flex max-w-[1380px] flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-3xl text-balance font-serif text-[clamp(38px,6vw,82px)] italic leading-[0.95] tracking-[-0.035em]">
              Two brands. Two voices. One attentive operating rhythm.
            </p>
            <Link
              to="/book"
              className="inline-flex min-h-12 shrink-0 items-center justify-center bg-[#1c1a17] px-5 py-3 text-[12px] font-semibold tracking-[0.14em] text-[#f4f0e8] transition hover:-translate-y-1 hover:bg-[#6f3f2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1a17] focus-visible:ring-offset-2"
            >
              START A PROJECT <Arrow />
            </Link>
          </div>
        </footer>
      </article>
    </MatLayout>
  );
}
