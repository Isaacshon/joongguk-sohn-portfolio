import { createFileRoute, Link } from "@tanstack/react-router";

import { MatLayout } from "@/components/MatLayout";
import { BrandProjectMark } from "@/components/poster-studies/BrandMark";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
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

type WorkItem =
  | { kind: "design"; project: DesignProject }
  | { kind: "portfolio"; project: Project };

const featuredBrandSlugs = [
  "hm-second-sun",
  "zara-the-air-between",
  "uniqlo-comfort-measured",
  "prada-the-quiet-error",
] as const;

const featuredBrandSlugSet = new Set<string>(featuredBrandSlugs);

const featuredBrandProjects = featuredBrandSlugs.flatMap((slug) => {
  const project = designProjects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

const archiveWorkItems: WorkItem[] = [
  { kind: "portfolio", project: projects[0] },
  ...designProjects
    .filter((project) => !featuredBrandSlugSet.has(project.slug))
    .map((project): WorkItem => ({ kind: "design", project })),
  ...projects.slice(1).map((project): WorkItem => ({ kind: "portfolio", project })),
];

const totalProjectCount = featuredBrandProjects.length + archiveWorkItems.length;

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

          <section
            aria-labelledby="project-archive"
            className="mx-auto max-w-[1520px] px-5 py-14 sm:px-8 md:py-20 xl:px-12"
          >
            <header className="mb-10 grid gap-5 border-b border-black/25 pb-7 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
              <div>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-primary">
                  Complete archive / {String(archiveWorkItems.length).padStart(2, "0")}
                </p>
                <h2
                  id="project-archive"
                  className="mt-2 font-serif text-[clamp(3.2rem,6vw,6.6rem)] font-medium italic leading-[.82] tracking-[-.05em]"
                >
                  Every project, clearly indexed.
                </h2>
              </div>
              <p className="max-w-[42ch] text-pretty text-[13px] leading-[1.65] text-black/62 md:text-right">
                Open any project for its full case study, visual system, applications, process, and
                final worldview.
              </p>
            </header>

            <ol className="grid gap-x-8 gap-y-14 md:grid-cols-2 min-[1760px]:grid-cols-3">
              {archiveWorkItems.map((item) => (
                <li key={`${item.kind}-${item.project.slug}`}>
                  {item.kind === "design" ? (
                    <DesignWorkCard project={item.project} />
                  ) : (
                    <PortfolioWorkCard project={item.project} />
                  )}
                </li>
              ))}
            </ol>
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
  return (
    <Link
      to="/poster-studies/$slug"
      params={{ slug: project.slug }}
      aria-label={`View ${project.title} case study`}
      className="group block outline-none"
    >
      <div className="relative overflow-hidden bg-black/5 ring-primary transition duration-500 group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-[#f4f1e9]">
        <ProjectPicture
          projectSlug={project.slug}
          slot="spatial"
          sizes="(min-width: 1760px) 33vw, (min-width: 768px) 50vw, calc(100vw - 2.5rem)"
          imageClassName="group-hover:scale-[1.035] group-hover:saturate-[1.06]"
          fallback={
            <DesignProjectCover
              project={project}
              variant="card"
              className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
            />
          }
        />
        <span className="pointer-events-none absolute right-3 top-3 bg-[#f4f1e9]/92 px-2.5 py-1.5 font-mono text-[8px] font-semibold uppercase tracking-[.14em] text-black/70 backdrop-blur-sm">
          {project.chapter}
        </span>
        <div className="pointer-events-none absolute inset-0 border border-black/15 transition-colors group-hover:border-black/45" />
      </div>
      <ProjectCaption
        index={project.index}
        title={project.title}
        titleLang={project.titleLang}
        category={project.discipline}
      />
    </Link>
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
          className={`text-balance text-[clamp(1.08rem,1.35vw,1.35rem)] font-semibold leading-[1.05] tracking-[-.02em] ${titleLang === "ko" ? "font-ko-sans" : ""}`}
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
