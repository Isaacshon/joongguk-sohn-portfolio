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

const workItems: WorkItem[] = [
  { kind: "portfolio", project: projects[0] },
  ...designProjects.map((project): WorkItem => ({ kind: "design", project })),
  ...projects.slice(1).map((project): WorkItem => ({ kind: "portfolio", project })),
];

function Work() {
  return (
    <MatLayout surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <div className="min-h-screen bg-[#f4f1e9] text-[#171713]">
        <header className="border-b border-black/20 px-5 pb-12 pt-16 sm:px-8 md:pb-16 md:pt-24 xl:px-12">
          <div className="mx-auto grid max-w-[1520px] gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-primary">
                Selected work / 2026
              </p>
              <h1 className="mt-4 max-w-[8ch] font-serif text-[clamp(5rem,12vw,12rem)] font-medium italic leading-[.7] tracking-[-.075em]">
                Work, one project at a time.
              </h1>
            </div>
            <div className="max-w-[530px] border-t border-black/25 pt-5 lg:mb-2">
              <p className="font-serif text-[clamp(1.6rem,3vw,2.8rem)] italic leading-[1.02] tracking-[-.025em]">
                {designProjectCount} design systems, each opening into its own complete case study.
              </p>
              <div className="mt-7 flex gap-8 font-mono text-[9px] uppercase tracking-[.15em] text-black/50">
                <span>
                  <b className="mr-2 text-lg text-black">{workItems.length}</b>Projects
                </span>
                <Link
                  to="/poster-studies"
                  className="border-b border-black/30 pb-1 text-black transition-colors hover:text-primary"
                >
                  Design index ↗
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1520px] px-5 py-14 sm:px-8 md:py-20 xl:px-12">
          <ol className="grid gap-x-5 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {workItems.map((item, index) => (
              <li
                key={`${item.kind}-${item.project.slug}`}
                className={index % 9 === 0 ? "xl:col-span-2" : ""}
              >
                {item.kind === "design" ? (
                  <DesignWorkCard project={item.project} />
                ) : (
                  <PortfolioWorkCard project={item.project} />
                )}
              </li>
            ))}
          </ol>
        </main>
      </div>
    </MatLayout>
  );
}

function DesignWorkCard({ project }: { project: DesignProject }) {
  return (
    <Link
      to="/poster-studies/$slug"
      params={{ slug: project.slug }}
      className="group block outline-none"
    >
      <div className="relative overflow-hidden bg-black/5 ring-primary transition duration-500 group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-[#f4f1e9]">
        <ProjectPicture
          projectSlug={project.slug}
          slot="spatial"
          sizes="(min-width: 1280px) 66vw, (min-width: 768px) 50vw, calc(100vw - 2.5rem)"
          imageClassName="group-hover:scale-[1.035]"
          fallback={
            <DesignProjectCover
              project={project}
              variant="card"
              className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
            />
          }
        />
        <BrandProjectMark projectSlug={project.slug} />
        <div className="pointer-events-none absolute inset-0 border border-black/10 transition-colors group-hover:border-black/35" />
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
    <a href={project.href ?? `/project/${project.slug}`} className="group block outline-none">
      <div className="relative overflow-hidden bg-black/5 ring-primary transition duration-500 group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-[#f4f1e9]">
        <div
          className="relative flex aspect-[1.46/1] w-full items-center justify-center overflow-hidden px-8 text-center"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/10" />
          <p className="relative mt-auto pb-[7%] font-serif text-[clamp(2.8rem,7vw,7rem)] italic leading-[.75] tracking-[-.055em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,.4)]">
            {project.title}
          </p>
        </div>
        <div className="pointer-events-none absolute inset-0 border border-black/10 transition-colors group-hover:border-black/35" />
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
    <div className="mt-4 grid grid-cols-[auto_1fr_auto] items-start gap-3 border-t border-black/25 pt-3">
      <span className="font-mono text-[9px] font-semibold text-primary">{index ?? "—"}</span>
      <div>
        <p
          lang={titleLang}
          className={`text-[15px] font-semibold leading-none ${titleLang === "ko" ? "font-ko-sans" : "tracking-[.02em]"}`}
        >
          {title}
        </p>
        <p className="mt-2 max-w-[48ch] text-[12px] leading-[1.45] text-black/50">{category}</p>
      </div>
      <span className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </div>
  );
}
