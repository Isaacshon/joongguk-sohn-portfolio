import { createFileRoute, Link } from "@tanstack/react-router";

import { MatLayout } from "@/components/MatLayout";
import { BrandProjectMark } from "@/components/poster-studies/BrandMark";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import type { DesignProjectCoreMediaSlot } from "@/lib/design-project-media";
import { designProjectCount, designProjects, type DesignProject } from "@/lib/design-projects";
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

const designFamilySpecs = [
  {
    id: "press-archive",
    number: "01",
    title: "Press & Archive",
    eyebrow: "Ink, memory, evidence",
    description:
      "Four systems where physical traces lead the design: registration drift, collected lettering, field specimens, and undelivered correspondence.",
    surface: "#e9e2d5",
    ink: "#171713",
    accent: "#b73527",
    inverse: false,
    slugs: ["afterimage", "memory-type", "field-notes-37", "last-letter"],
  },
  {
    id: "sensory-editorial",
    number: "02",
    title: "Sensory Editorial",
    eyebrow: "Surface, night, body, rhythm",
    description:
      "Editorial worlds directed by touch and tempo, moving from material pressure to fashion, responsive matter, and measured sound.",
    surface: "#17171b",
    ink: "#f5efe5",
    accent: "#cfe7f6",
    inverse: true,
    slugs: ["tactile-forecast", "night-index", "soft-machine", "chroma-tempo"],
  },
  {
    id: "public-signal",
    number: "03",
    title: "Public Signal",
    eyebrow: "Routes, broadcasts, movement",
    description:
      "Identity systems tested at public scale: a neighbourhood route, a stable broadcast layer, an electric journey, and a live campus.",
    surface: "#f1d83d",
    ink: "#161616",
    accent: "#2748a8",
    inverse: false,
    slugs: ["public-memory", "signal-noise", "79w", "tessera-live"],
  },
  {
    id: "product-ritual",
    number: "04",
    title: "Product Ritual",
    eyebrow: "Stay, source, routine, repair",
    description:
      "Products become behaviours through a tide datum, visible food batches, a twenty-four-hour dial, and garment interventions.",
    surface: "#efe6d8",
    ink: "#251f1a",
    accent: "#ef5638",
    inverse: false,
    slugs: ["tidehold", "offsort", "horalis", "selv-00"],
  },
  {
    id: "evidence-infrastructure",
    number: "05",
    title: "Evidence & Infrastructure",
    eyebrow: "Proof, assembly, exchange, return",
    description:
      "Systems that make their workings visible, from documentary sourcing and reversible buildings to paired ledgers and material cycles.",
    surface: "#17251f",
    ink: "#f1eadc",
    accent: "#e66e43",
    inverse: true,
    slugs: ["backmatter", "seamframe", "two-shores", "coldkiln"],
  },
] as const;

type IndependentDesignSlug = (typeof designFamilySpecs)[number]["slugs"][number];
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

const designFamilies = designFamilySpecs.map((family) => ({
  ...family,
  projects: family.slugs.map(getRequiredDesignProject),
}));

const independentDesignProjectCount = designFamilies.reduce(
  (total, family) => total + family.projects.length,
  0,
);
const portfolioArchiveItems = projects;
const totalProjectCount =
  featuredBrandProjects.length + independentDesignProjectCount + portfolioArchiveItems.length;

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
                {designProjectCount} design systems, each opening into its own complete case study.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4 border-y border-black/20 py-3 font-mono text-[9px] uppercase tracking-[.14em] text-black/55 sm:mt-7 sm:py-4">
                <p>
                  <b className="mr-2 text-[1.1rem] text-black">04</b>New brand worlds
                </p>
                <p>
                  <b className="mr-2 text-[1.1rem] text-black">{totalProjectCount}</b>Projects
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
            aria-labelledby="latest-brand-worlds"
            className="border-b border-black/20 bg-[#121512] px-5 py-10 text-[#f4f1e9] sm:px-8 sm:py-12 md:py-16 xl:px-12"
          >
            <div className="mx-auto max-w-[1520px]">
              <header className="mb-6 grid gap-4 border-b border-white/20 pb-6 sm:mb-8 sm:gap-6 sm:pb-8 md:mb-10 lg:grid-cols-[1fr_.72fr] lg:items-end lg:gap-12">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-[#9cc3b8]">
                    Latest brand worlds / 04
                  </p>
                  <h2
                    id="latest-brand-worlds"
                    className="mt-3 max-w-[11ch] text-balance font-serif text-[clamp(3rem,6.5vw,7.4rem)] font-medium italic leading-[.78] tracking-[-.055em]"
                  >
                    New work, shown first.
                  </h2>
                </div>
                <div className="hidden max-w-[52ch] sm:block lg:justify-self-end">
                  <p className="text-pretty text-[15px] leading-[1.65] text-white/72">
                    Four complete brand environments—each with its own image language, values,
                    typography, applications, and visual logic.
                  </p>
                  <p className="mt-4 font-mono text-[8px] uppercase leading-[1.6] tracking-[.14em] text-white/42">
                    Independent, unofficial concept studies. All trademarks belong to their
                    respective owners.
                  </p>
                </div>
              </header>

              <ol className="grid gap-px overflow-hidden border border-white/20 bg-white/20 md:grid-cols-2">
                {featuredBrandProjects.map((project) => (
                  <li key={project.slug} className="bg-[#121512] p-3 sm:p-4">
                    <FeaturedBrandCard project={project} />
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section aria-labelledby="independent-design-worlds">
            <header className="border-b border-black/20 bg-[#f4f1e9] px-5 py-14 sm:px-8 md:py-20 xl:px-12">
              <div className="mx-auto grid max-w-[1520px] gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-primary">
                    Independent design worlds / {independentDesignProjectCount}
                  </p>
                  <h2
                    id="independent-design-worlds"
                    className="mt-3 max-w-[12ch] text-balance font-serif text-[clamp(3.2rem,6vw,7rem)] font-medium italic leading-[.8] tracking-[-.05em]"
                  >
                    Five families. Twenty distinct systems.
                  </h2>
                </div>
                <p className="max-w-[48ch] text-pretty text-[14px] leading-[1.7] text-black/65 md:text-right">
                  Each family begins with a different physical or behavioural law. The image crop,
                  proportion, title position, and cover logic change with the project—not with a
                  reusable card template.
                </p>
              </div>
            </header>

            {designFamilies.map((family) => {
              const headingId = `family-${family.id}`;

              return (
                <section
                  key={family.id}
                  aria-labelledby={headingId}
                  data-theme={family.inverse ? "dark" : "light"}
                  className="border-b border-black/20 px-5 py-14 sm:px-8 md:py-20 xl:px-12"
                  style={{ backgroundColor: family.surface, color: family.ink }}
                >
                  <div className="mx-auto max-w-[1520px]">
                    <header
                      className={`mb-10 grid gap-5 border-b pb-7 md:mb-14 md:grid-cols-[minmax(0,1fr)_minmax(18rem,.62fr)] md:items-end md:gap-12 ${
                        family.inverse ? "border-white/25" : "border-black/25"
                      }`}
                    >
                      <div>
                        <p
                          className="font-mono text-[9px] font-semibold uppercase tracking-[.2em]"
                          style={{ color: family.accent }}
                        >
                          Family {family.number} / 04 projects
                        </p>
                        <h3
                          id={headingId}
                          className="mt-3 max-w-full text-balance break-keep text-[clamp(2.05rem,9vw,2.5rem)] font-black uppercase leading-[.84] tracking-[-.055em] sm:text-[clamp(2.65rem,5.5vw,6.5rem)] sm:leading-[.82] sm:tracking-[-.065em]"
                        >
                          {family.title}
                        </h3>
                      </div>
                      <div className="md:justify-self-end">
                        <p className="text-balance break-keep font-serif text-[clamp(1.35rem,2.1vw,2.15rem)] italic leading-[1.02] tracking-[-.025em]">
                          {family.eyebrow}
                        </p>
                        <p
                          className={`mt-4 max-w-[52ch] text-pretty text-[13px] leading-[1.65] ${
                            family.inverse ? "text-white/66" : "text-black/62"
                          }`}
                        >
                          {family.description}
                        </p>
                      </div>
                    </header>

                    <ol className="grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-16">
                      {family.projects.map((project, index) => (
                        <li
                          key={project.slug}
                          className={index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"}
                        >
                          <DesignWorkCard project={project} inverse={family.inverse} />
                        </li>
                      ))}
                    </ol>
                  </div>
                </section>
              );
            })}
          </section>

          <section
            aria-labelledby="practice-archive"
            className="bg-[#f4f1e9] px-5 py-14 sm:px-8 md:py-20 xl:px-12"
          >
            <div className="mx-auto max-w-[1520px]">
              <header className="mb-10 grid gap-5 border-b border-black/25 pb-7 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-primary">
                    Practice archive / {String(portfolioArchiveItems.length).padStart(2, "0")}
                  </p>
                  <h2
                    id="practice-archive"
                    className="mt-2 max-w-[12ch] text-balance font-serif text-[clamp(3.2rem,6vw,6.6rem)] font-medium italic leading-[.82] tracking-[-.05em]"
                  >
                    Client, digital, and social practice.
                  </h2>
                </div>
                <p className="max-w-[42ch] text-pretty text-[13px] leading-[1.65] text-black/62 md:text-right">
                  Six additional portfolio case studies, kept separate from the independent design
                  worlds above.
                </p>
              </header>

              <ol className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 min-[1760px]:grid-cols-3">
                {portfolioArchiveItems.map((project) => (
                  <li key={project.slug}>
                    <PortfolioWorkCard project={project} />
                  </li>
                ))}
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

function DesignWorkCard({ project, inverse }: { project: DesignProject; inverse: boolean }) {
  const config = designTeaserRegistry[project.slug as IndependentDesignSlug];

  if (!config) return null;

  return (
    <Link
      to="/poster-studies/$slug"
      params={{ slug: project.slug }}
      aria-label={`View ${project.title} case study`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
      data-teaser-slot={config.slot}
      data-teaser-layering={config.layering}
      data-teaser-title={config.titlePlacement}
    >
      <div className="relative overflow-hidden bg-black/10 transition duration-500 group-hover:-translate-y-1">
        <DesignTeaserArtwork project={project} config={config} />
        <TeaserTitlePanel project={project} config={config} />
        <div
          className={`pointer-events-none absolute inset-0 border transition-colors ${
            inverse
              ? "border-white/25 group-hover:border-white/70"
              : "border-black/20 group-hover:border-black/65"
          }`}
        />
      </div>

      <div
        className={`grid gap-4 border-b py-5 sm:grid-cols-[minmax(0,1fr)_minmax(8rem,.38fr)] sm:items-end sm:gap-8 ${
          inverse ? "border-white/25" : "border-black/25"
        }`}
      >
        <p className="max-w-[34ch] text-balance break-keep font-serif text-[20px] italic leading-[1.08] tracking-[-.02em] sm:text-[clamp(24px,2.15vw,34px)]">
          {project.statement}
        </p>
        <div className="sm:text-right">
          <p
            className={`text-[12px] leading-[1.55] ${inverse ? "text-white/64" : "text-black/62"}`}
          >
            {project.discipline}
          </p>
          <p
            className="mt-3 font-mono text-[8px] font-semibold uppercase tracking-[.14em]"
            style={{ color: project.palette[2]?.value }}
          >
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
  const cover = (
    <div aria-hidden="true" className="relative h-full min-h-0 overflow-hidden">
      <DesignProjectCover
        project={project}
        variant={config.coverVariant}
        showTitle={false}
        className="!h-full !min-h-0 !aspect-auto"
      />
    </div>
  );
  const picture = (
    <ProjectPicture
      projectSlug={project.slug}
      slot={config.slot}
      sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 58vw, calc(100vw - 2.5rem)"
      className="h-full min-h-0"
      imageClassName="duration-[900ms] group-hover:scale-[1.04] group-hover:saturate-[1.05]"
      style={{ aspectRatio: "auto" }}
      fallback={fallback}
    />
  );

  if (config.layering === "duet") {
    const coverFirst = config.coverSide === "left";

    return (
      <div
        className={`grid overflow-hidden ${
          coverFirst ? "grid-cols-[.38fr_.62fr]" : "grid-cols-[.62fr_.38fr]"
        }`}
        style={{ aspectRatio: config.aspectRatio }}
      >
        {coverFirst ? cover : picture}
        {coverFirst ? picture : cover}
      </div>
    );
  }

  if (config.layering === "inset") {
    return (
      <div className="relative overflow-hidden" style={{ aspectRatio: config.aspectRatio }}>
        <div className="absolute inset-0">{cover}</div>
        <ProjectPicture
          projectSlug={project.slug}
          slot={config.slot}
          sizes="(min-width: 1280px) 44vw, (min-width: 1024px) 50vw, calc(88vw - 2.5rem)"
          className="!absolute inset-[7%] !h-[86%] !w-[86%] shadow-[0_20px_60px_rgba(0,0,0,.28)]"
          imageClassName="duration-[900ms] group-hover:scale-[1.035]"
          style={{ aspectRatio: "auto" }}
          fallback={fallback}
        />
      </div>
    );
  }

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
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-[.16] ${
          project.theme === "dark" ? "mix-blend-screen" : "mix-blend-multiply"
        }`}
      >
        <DesignProjectCover
          project={project}
          variant={config.coverVariant}
          showTitle={false}
          className="!h-full !min-h-0 !aspect-auto"
        />
      </div>
    </div>
  );
}

const teaserTitlePlacementClasses: Record<TeaserTitlePlacement, string> = {
  "top-left": "left-3 top-3 sm:left-5 sm:top-5",
  "top-right": "right-3 top-3 text-right sm:right-5 sm:top-5",
  "bottom-left": "bottom-3 left-3 sm:bottom-5 sm:left-5",
  "bottom-right": "bottom-3 right-3 text-right sm:bottom-5 sm:right-5",
};

function TeaserTitlePanel({
  project,
  config,
}: {
  project: DesignProject;
  config: DesignTeaserConfig;
}) {
  const surface = getTeaserSurface(project, config.titleSurface);
  const ink = getReadableTeaserInk(surface);

  return (
    <div
      className={`absolute z-20 w-[min(78%,28rem)] px-3 py-3 sm:w-[min(68%,34rem)] sm:px-5 sm:py-4 ${teaserTitlePlacementClasses[config.titlePlacement]}`}
      style={{
        backgroundColor: surface,
        color: ink,
        boxShadow: `inset 0 0 0 1px ${ink}33`,
      }}
    >
      <p className="font-mono text-[8px] font-semibold uppercase tracking-[.15em] opacity-70">
        {project.index} / {config.slot}
      </p>
      <h4
        lang={project.titleLang}
        className={`mt-2 text-balance break-keep text-[20px] font-black leading-[.92] tracking-[-.04em] sm:text-[clamp(24px,2.25vw,44px)] ${
          project.titleLang === "ko" ? "font-ko-sans" : ""
        }`}
      >
        {project.title}
      </h4>
    </div>
  );
}

function getTeaserSurface(project: DesignProject, surface: TeaserSurface) {
  const paletteIndex: Record<TeaserSurface, number> = {
    primary: 0,
    secondary: 1,
    accent: 2,
    support: 3,
  };

  return project.palette[paletteIndex[surface]]?.value ?? "#f4f1e9";
}

function getReadableTeaserInk(hex: string) {
  const value = hex.trim().replace(/^#/, "");
  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((character) => `${character}${character}`)
          .join("")
      : value;

  if (!/^[\da-f]{6}$/i.test(normalized)) return "#171713";

  const channels = [0, 2, 4].map((offset) => {
    const channel = Number.parseInt(normalized.slice(offset, offset + 2), 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  const luminance = channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;

  return luminance > 0.18 ? "#171713" : "#fffaf0";
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
