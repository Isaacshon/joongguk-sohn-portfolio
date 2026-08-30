import { createFileRoute, Link } from "@tanstack/react-router";

import { MatLayout } from "@/components/MatLayout";
import { BrandProjectMark } from "@/components/poster-studies/BrandMark";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import type { DesignProjectCoreMediaSlot } from "@/lib/design-project-media";
import { designProjects, type DesignProject } from "@/lib/design-projects";
import { projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Isaac Sohn" },
      {
        name: "description",
        content:
          "Independent brand, editorial, art direction, digital, social, and visual design projects by Isaac Sohn.",
      },
      { property: "og:title", content: "Work — Isaac Sohn" },
      {
        property: "og:description",
        content: "Individual projects and complete case studies by Isaac Sohn.",
      },
    ],
  }),
  component: Work,
});

const featuredBrandSlugs = [
  "hm-second-sun",
  "zara-the-air-between",
  "uniqlo-comfort-measured",
  "prada-the-quiet-error",
] as const;

const featuredBrandProjects = featuredBrandSlugs.flatMap((slug) => {
  const project = designProjects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

const personalDesignProjectSlugs = [
  "afterimage",
  "night-index",
  "public-memory",
  "soft-machine",
  "memory-type",
  "79w",
  "tactile-forecast",
  "tessera-live",
  "field-notes-37",
  "horalis",
  "signal-noise",
  "tidehold",
  "last-letter",
  "backmatter",
  "chroma-tempo",
  "offsort",
  "seamframe",
  "two-shores",
  "selv-00",
  "coldkiln",
] as const;

type IndependentDesignSlug = (typeof personalDesignProjectSlugs)[number];
type TeaserTitlePlacement = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type TeaserLayering = "duet" | "inset" | "veil";
type TeaserSurface = "primary" | "secondary" | "accent" | "support";

type DesignTeaserConfig = {
  slot: DesignProjectCoreMediaSlot;
  aspectRatio: string;
  titlePlacement: TeaserTitlePlacement;
  layering: TeaserLayering;
  coverVariant: "card" | "poster" | "screen";
  coverSide: "left" | "right";
  titleSurface: TeaserSurface;
};

const designTeaserRegistry = {
  afterimage: {
    slot: "tactile",
    aspectRatio: "7 / 5",
    titlePlacement: "bottom-left",
    layering: "veil",
    coverVariant: "screen",
    coverSide: "right",
    titleSurface: "accent",
  },
  "memory-type": {
    slot: "hero",
    aspectRatio: "5 / 6",
    titlePlacement: "top-right",
    layering: "duet",
    coverVariant: "poster",
    coverSide: "left",
    titleSurface: "primary",
  },
  "field-notes-37": {
    slot: "context",
    aspectRatio: "4 / 5",
    titlePlacement: "bottom-left",
    layering: "inset",
    coverVariant: "poster",
    coverSide: "right",
    titleSurface: "support",
  },
  "last-letter": {
    slot: "tactile",
    aspectRatio: "3 / 2",
    titlePlacement: "top-left",
    layering: "duet",
    coverVariant: "poster",
    coverSide: "right",
    titleSurface: "primary",
  },
  "tactile-forecast": {
    slot: "tactile",
    aspectRatio: "1 / 1",
    titlePlacement: "bottom-right",
    layering: "inset",
    coverVariant: "screen",
    coverSide: "left",
    titleSurface: "secondary",
  },
  "night-index": {
    slot: "hero",
    aspectRatio: "4 / 5",
    titlePlacement: "top-left",
    layering: "veil",
    coverVariant: "poster",
    coverSide: "right",
    titleSurface: "secondary",
  },
  "soft-machine": {
    slot: "tactile",
    aspectRatio: "1 / 1",
    titlePlacement: "bottom-left",
    layering: "duet",
    coverVariant: "screen",
    coverSide: "left",
    titleSurface: "accent",
  },
  "chroma-tempo": {
    slot: "context",
    aspectRatio: "5 / 7",
    titlePlacement: "top-right",
    layering: "inset",
    coverVariant: "poster",
    coverSide: "right",
    titleSurface: "accent",
  },
  "public-memory": {
    slot: "spatial",
    aspectRatio: "3 / 2",
    titlePlacement: "bottom-left",
    layering: "duet",
    coverVariant: "screen",
    coverSide: "right",
    titleSurface: "primary",
  },
  "signal-noise": {
    slot: "context",
    aspectRatio: "4 / 5",
    titlePlacement: "top-right",
    layering: "veil",
    coverVariant: "screen",
    coverSide: "left",
    titleSurface: "secondary",
  },
  "79w": {
    slot: "hero",
    aspectRatio: "16 / 9",
    titlePlacement: "top-left",
    layering: "inset",
    coverVariant: "screen",
    coverSide: "right",
    titleSurface: "accent",
  },
  "tessera-live": {
    slot: "spatial",
    aspectRatio: "7 / 5",
    titlePlacement: "bottom-right",
    layering: "duet",
    coverVariant: "card",
    coverSide: "left",
    titleSurface: "primary",
  },
  tidehold: {
    slot: "hero",
    aspectRatio: "16 / 9",
    titlePlacement: "bottom-left",
    layering: "veil",
    coverVariant: "screen",
    coverSide: "right",
    titleSurface: "secondary",
  },
  offsort: {
    slot: "tactile",
    aspectRatio: "1 / 1",
    titlePlacement: "top-right",
    layering: "inset",
    coverVariant: "card",
    coverSide: "left",
    titleSurface: "support",
  },
  horalis: {
    slot: "tactile",
    aspectRatio: "1 / 1",
    titlePlacement: "bottom-right",
    layering: "duet",
    coverVariant: "screen",
    coverSide: "right",
    titleSurface: "primary",
  },
  "selv-00": {
    slot: "hero",
    aspectRatio: "4 / 5",
    titlePlacement: "top-left",
    layering: "veil",
    coverVariant: "poster",
    coverSide: "left",
    titleSurface: "accent",
  },
  backmatter: {
    slot: "context",
    aspectRatio: "5 / 7",
    titlePlacement: "bottom-right",
    layering: "duet",
    coverVariant: "poster",
    coverSide: "left",
    titleSurface: "secondary",
  },
  seamframe: {
    slot: "tactile",
    aspectRatio: "3 / 2",
    titlePlacement: "top-left",
    layering: "inset",
    coverVariant: "screen",
    coverSide: "right",
    titleSurface: "support",
  },
  "two-shores": {
    slot: "hero",
    aspectRatio: "4 / 5",
    titlePlacement: "bottom-left",
    layering: "veil",
    coverVariant: "poster",
    coverSide: "right",
    titleSurface: "primary",
  },
  coldkiln: {
    slot: "tactile",
    aspectRatio: "7 / 5",
    titlePlacement: "top-right",
    layering: "duet",
    coverVariant: "screen",
    coverSide: "left",
    titleSurface: "accent",
  },
} satisfies Record<IndependentDesignSlug, DesignTeaserConfig>;

function getRequiredDesignProject(slug: IndependentDesignSlug) {
  const project = designProjects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing design project: ${slug}`);
  return project;
}

const personalDesignProjects = personalDesignProjectSlugs.map(getRequiredDesignProject);
const portfolioArchiveItems = projects;
const personalProjectCount = personalDesignProjects.length + portfolioArchiveItems.length;
const visibleProjectCount = featuredBrandProjects.length + personalProjectCount;

function Work() {
  return (
    <MatLayout compactMobile surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <div className="min-h-screen bg-[#f4f1e9] text-[#171713]">
        <header className="border-b border-black/20 px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 md:pb-12 md:pt-16 xl:px-12">
          <div className="mx-auto grid max-w-[1520px] gap-8 lg:grid-cols-[1.12fr_.88fr] lg:items-end lg:gap-12">
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-primary">
                Selected work / 2026
              </p>
              <h1 className="mt-4 max-w-[10ch] text-balance font-serif text-[clamp(3.65rem,8vw,8.75rem)] font-medium italic leading-[.78] tracking-[-.055em]">
                Work, one project at a time.
              </h1>
            </div>
            <div className="max-w-[560px] border-t border-black/30 pt-5 lg:mb-1">
              <p className="max-w-[28ch] text-balance font-serif text-[1.35rem] italic leading-[1.08] tracking-[-.025em] sm:text-[clamp(1.55rem,2.7vw,2.55rem)] sm:leading-[1.04]">
                {visibleProjectCount} projects, each opening into its own complete case study.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4 border-y border-black/20 py-3 font-mono text-[9px] uppercase tracking-[.14em] text-black/55 sm:mt-7 sm:py-4">
                <p>
                  <b className="mr-2 text-[1.1rem] text-black">04</b>Brand projects
                </p>
                <p>
                  <b className="mr-2 text-[1.1rem] text-black">{personalProjectCount}</b>Personal
                  projects
                </p>
              </div>
              <div className="mt-3 flex items-center justify-end gap-6 sm:mt-5 sm:justify-between">
                <p className="hidden max-w-[34ch] text-[12px] leading-[1.55] text-black/60 sm:block">
                  Brand systems, editorial studies, digital work, and complete visual worlds.
                </p>
                <Link
                  to="/poster-studies"
                  className="shrink-0 border-b border-black/35 pb-1 font-mono text-[9px] font-semibold uppercase tracking-[.14em] text-black transition-colors hover:border-primary hover:text-primary"
                >
                  Design index ↗
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section
            aria-labelledby="brand-projects"
            className="border-b border-black/20 bg-[#121212] px-5 py-10 text-[#f3f1eb] sm:px-8 sm:py-12 md:py-16 xl:px-12"
          >
            <div className="mx-auto max-w-[1520px]">
              <header className="mb-8 flex items-end justify-between gap-8 border-b border-white/24 pb-5 md:mb-11 md:pb-6">
                <div className="flex min-w-0 items-baseline gap-4 sm:gap-7">
                  <span className="font-mono text-[9px] font-semibold tabular-nums tracking-[.16em] text-white/48">
                    01
                  </span>
                  <h2
                    id="brand-projects"
                    className="text-balance text-[clamp(2.25rem,5.2vw,5.6rem)] font-semibold leading-[.86] tracking-[-.055em]"
                  >
                    Brand Projects
                  </h2>
                </div>
                <p className="shrink-0 font-mono text-[9px] uppercase tracking-[.16em] text-white/52">
                  04 projects
                </p>
              </header>

              <ol className="grid gap-px overflow-hidden border border-white/20 bg-white/20 md:grid-cols-2">
                {featuredBrandProjects.map((project) => (
                  <li key={project.slug} className="bg-[#121212] p-3 sm:p-4">
                    <FeaturedBrandCard project={project} />
                  </li>
                ))}
              </ol>

              <p className="mt-6 max-w-[60ch] font-mono text-[8px] uppercase leading-[1.65] tracking-[.13em] text-white/40">
                Independent, unofficial concept studies. All trademarks belong to their respective
                owners.
              </p>
            </div>
          </section>

          <section
            aria-labelledby="personal-projects"
            className="bg-[#eeece6] px-5 py-12 text-[#171713] sm:px-8 sm:py-14 md:py-20 xl:px-12"
          >
            <div className="mx-auto max-w-[1520px]">
              <header className="mb-10 flex items-end justify-between gap-8 border-b border-black/24 pb-5 md:mb-14 md:pb-6">
                <div className="flex min-w-0 items-baseline gap-4 sm:gap-7">
                  <span className="font-mono text-[9px] font-semibold tabular-nums tracking-[.16em] text-black/42">
                    02
                  </span>
                  <h2
                    id="personal-projects"
                    className="text-balance text-[clamp(2.25rem,5.2vw,5.6rem)] font-semibold leading-[.86] tracking-[-.055em]"
                  >
                    Personal Projects
                  </h2>
                </div>
                <p className="shrink-0 font-mono text-[9px] uppercase tracking-[.16em] text-black/48">
                  {String(personalProjectCount).padStart(2, "0")} projects
                </p>
              </header>

              <ol className="grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-16">
                {personalDesignProjects.map((project, index) => (
                  <li
                    key={project.slug}
                    className={
                      index % 4 === 0 || index % 4 === 3 ? "lg:col-span-7" : "lg:col-span-5"
                    }
                  >
                    <DesignWorkCard project={project} />
                  </li>
                ))}
                {portfolioArchiveItems.map((project, archiveIndex) => {
                  const index = personalDesignProjects.length + archiveIndex;

                  return (
                    <li
                      key={project.slug}
                      className={
                        index % 4 === 0 || index % 4 === 3 ? "lg:col-span-7" : "lg:col-span-5"
                      }
                    >
                      <PortfolioWorkCard project={project} />
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>
        </main>
      </div>
    </MatLayout>
  );
}

function FeaturedBrandCard({ project }: { project: DesignProject }) {
  return (
    <Link
      to="/poster-studies/$slug"
      params={{ slug: project.slug }}
      aria-label={`View the ${project.title} brand world`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#9cc3b8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#121512]"
    >
      <article>
        <div className="relative overflow-hidden bg-white/5">
          <ProjectPicture
            projectSlug={project.slug}
            slot="spatial"
            sizes="(min-width: 1760px) 640px, (min-width: 768px) 50vw, calc(100vw - 2.5rem)"
            priority={project.slug === featuredBrandSlugs[0]}
            imageClassName="duration-[900ms] group-hover:scale-[1.035]"
            fallback={
              <DesignProjectCover
                project={project}
                variant="card"
                className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
              />
            }
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/35" />
          <span className="pointer-events-none absolute left-4 top-4 font-mono text-[8px] font-semibold uppercase tracking-[.16em] text-white/85 sm:left-5 sm:top-5">
            {project.index} / Brand world
          </span>
          <span className="pointer-events-none absolute right-4 top-4 border-b border-white/55 pb-1 font-mono text-[8px] font-semibold uppercase tracking-[.14em] text-white transition-transform duration-300 group-hover:translate-x-1 sm:right-5 sm:top-5">
            Open case study ↗
          </span>
          <BrandProjectMark projectSlug={project.slug} />
          <div className="pointer-events-none absolute inset-0 border border-white/18 transition-colors duration-300 group-hover:border-white/55" />
        </div>

        <div className="grid gap-4 border-t border-white/20 px-1 pb-2 pt-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-8">
          <div>
            <h3 className="text-[clamp(2rem,4vw,3.7rem)] font-semibold leading-[.9] tracking-[-.045em]">
              {project.title}
            </h3>
            <p className="mt-3 max-w-[34ch] text-pretty font-serif text-[clamp(1.25rem,2vw,1.75rem)] italic leading-[1.08] tracking-[-.02em] text-white/78">
              {project.statement}
            </p>
          </div>
          <p className="max-w-[24ch] text-[11px] leading-[1.5] text-white/48 sm:text-right">
            {project.discipline}
          </p>
        </div>
      </article>
    </Link>
  );
}

function DesignWorkCard({ project }: { project: DesignProject }) {
  const config = designTeaserRegistry[project.slug as IndependentDesignSlug];

  if (!config) return null;

  return (
    <Link
      to="/poster-studies/$slug"
      params={{ slug: project.slug }}
      aria-label={`View ${project.title} case study`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
      data-teaser-slot={config.slot}
    >
      <div className="relative overflow-hidden bg-black/10 transition duration-500 group-hover:-translate-y-1">
        <DesignTeaserArtwork project={project} config={config} />
        <div className="pointer-events-none absolute inset-0 border border-black/20 transition-colors group-hover:border-black/65" />
      </div>

      <div className="grid gap-4 border-b border-black/25 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(8rem,.38fr)] sm:items-end sm:gap-8">
        <div>
          <p className="font-mono text-[8px] font-semibold uppercase tracking-[.15em] text-black/44">
            {project.index} / {config.slot}
          </p>
          <h3
            lang={project.titleLang}
            className={`mt-2 text-balance break-keep text-[clamp(2rem,3.35vw,4.2rem)] font-semibold leading-[.88] tracking-[-.05em] ${
              project.titleLang === "ko" ? "font-ko-sans" : ""
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-3 max-w-[38ch] text-pretty font-serif text-[18px] italic leading-[1.12] tracking-[-.015em] text-black/68 sm:text-[clamp(20px,1.65vw,27px)]">
            {project.statement}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-[12px] leading-[1.55] text-black/62">{project.discipline}</p>
          <p className="mt-3 font-mono text-[8px] font-semibold uppercase tracking-[.14em] text-black/48 transition-colors group-hover:text-black">
            Open full case study ↗
          </p>
        </div>
      </div>
    </Link>
  );
}

function DesignTeaserArtwork({
  project,
  config,
}: {
  project: DesignProject;
  config: DesignTeaserConfig;
}) {
  const fallback = (
    <DesignProjectCover
      project={project}
      variant={config.coverVariant}
      className="!h-full !min-h-0 !aspect-auto"
    />
  );

  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: config.aspectRatio }}>
      <ProjectPicture
        projectSlug={project.slug}
        slot={config.slot}
        sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 58vw, calc(100vw - 2.5rem)"
        className="h-full"
        imageClassName="duration-[900ms] group-hover:scale-[1.04]"
        style={{ aspectRatio: "auto" }}
        fallback={fallback}
      />
    </div>
  );
}

function PortfolioWorkCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href ?? `/project/${project.slug}`}
      aria-label={`View ${project.title} case study`}
      className="group block outline-none"
    >
      <div className="relative overflow-hidden bg-black/5 ring-primary transition duration-500 group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-[#f4f1e9]">
        <div
          className="relative flex aspect-[1.6/1] w-full items-center justify-center overflow-hidden px-8 text-center"
          style={{ background: project.cover }}
        >
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/28" />
          <span className="absolute left-4 top-4 font-mono text-[8px] font-semibold uppercase tracking-[.14em] text-white/82">
            Portfolio case study
          </span>
          <p className="relative mt-auto pb-[7%] text-balance font-serif text-[clamp(2.7rem,6vw,6.4rem)] italic leading-[.78] tracking-[-.05em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,.4)]">
            {project.title}
          </p>
        </div>
        <div className="pointer-events-none absolute inset-0 border border-black/15 transition-colors group-hover:border-black/45" />
      </div>
      <ProjectCaption title={project.title} category={project.category} />
    </a>
  );
}

function ProjectCaption({
  index,
  title,
  titleLang,
  category,
}: {
  index?: string;
  title: string;
  titleLang?: "ko";
  category: string;
}) {
  return (
    <div className="grid grid-cols-[2rem_minmax(0,1fr)_2rem] items-start gap-3 border-b border-black/25 py-4">
      <span className="pt-0.5 font-mono text-[10px] font-semibold tabular-nums text-primary">
        {index ?? "—"}
      </span>
      <div className="min-w-0">
        <h3
          lang={titleLang}
          className={`text-balance break-keep text-[20px] font-semibold leading-[1.05] tracking-[-.025em] sm:text-[clamp(24px,1.7vw,30px)] ${titleLang === "ko" ? "font-ko-sans" : ""}`}
        >
          {title}
        </h3>
        <p className="mt-2 max-w-[48ch] text-pretty text-[13px] leading-[1.5] text-black/62">
          {category}
        </p>
      </div>
      <span className="border-l border-black/20 pl-3 text-[1.4rem] leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary">
        ↗
      </span>
    </div>
  );
}
