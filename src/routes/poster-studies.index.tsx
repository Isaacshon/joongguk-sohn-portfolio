import { createFileRoute, Link } from "@tanstack/react-router";

import { MatLayout } from "@/components/MatLayout";
import { BrandProjectMark } from "@/components/poster-studies/BrandMark";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import {
  designProjectApplicationCount,
  designProjectChapters,
  designProjectCount,
  designProjects,
} from "@/lib/design-projects";

export const Route = createFileRoute("/poster-studies/")({
  head: () => ({
    meta: [
      { title: `${designProjectCount} Independent Design Projects — Isaac Sohn` },
      {
        name: "description",
        content: `Explore ${designProjectCount} separate art direction and brand case studies, including clearly labelled unofficial self-initiated concepts, each with its own identity, applications, process, and reference lineage.`,
      },
      {
        property: "og:title",
        content: `${designProjectCount} Independent Design Projects — Isaac Sohn`,
      },
      {
        property: "og:description",
        content: `${designProjectCount} projects. ${designProjectCount} individual case studies. ${designProjectCount} distinct visual systems.`,
      },
    ],
  }),
  component: DesignProjectIndex,
});

function DesignProjectIndex() {
  return (
    <MatLayout surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <div className="min-h-screen bg-[#f0eee8] text-[#171713]">
        <header className="relative overflow-hidden border-b border-black/20 px-5 pb-14 pt-16 sm:px-8 md:pb-20 md:pt-24 xl:px-12">
          <div className="pointer-events-none absolute -right-[.04em] -top-[.25em] font-mono text-[clamp(17rem,39vw,46rem)] font-black leading-none tracking-[-.2em] text-black/[.035]">
            {designProjectCount}
          </div>
          <div className="relative mx-auto max-w-[1520px]">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[.22em] text-[#a63829]">
              Independent case studies / 2026
            </p>
            <div className="mt-6 grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
              <h1 className="max-w-[9ch] text-balance font-serif text-[clamp(4.6rem,11vw,11.5rem)] font-medium leading-[.72] tracking-[-.07em]">
                {designProjectCount} projects.
                <span className="block pl-[.22em] italic">Individually built.</span>
              </h1>
              <div className="max-w-[520px] border-t border-black/25 pt-6 lg:mb-2">
                <p className="text-balance font-serif text-[clamp(1.65rem,3vw,2.8rem)] italic leading-[1.02] tracking-[-.025em]">
                  {designProjectCount} complete visual systems, each with its own problem, rule,
                  applications, and point of view.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-5 font-mono text-[9px] uppercase tracking-[.14em] text-black/55">
                  <div>
                    <strong className="block text-xl text-black">{designProjectCount}</strong>Case
                    studies
                  </div>
                  <div>
                    <strong className="block text-xl text-black">
                      {designProjectApplicationCount}
                    </strong>
                    Applications
                  </div>
                  <div>
                    <strong className="block text-xl text-black">{designProjectCount}</strong>Design
                    lineages
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-14 grid h-2 md:mt-20"
              style={{
                gridTemplateColumns: `repeat(${designProjectCount}, minmax(0, 1fr))`,
              }}
              aria-hidden="true"
            >
              {designProjects.map((project) => (
                <span key={project.slug} style={{ backgroundColor: project.palette[2].value }} />
              ))}
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1520px] px-5 py-16 sm:px-8 md:py-24 xl:px-12">
          {designProjectChapters.map(([chapter, projects], chapterIndex) => (
            <section
              key={chapter}
              aria-labelledby={`chapter-${chapterIndex}`}
              className="mb-24 last:mb-0 md:mb-36"
            >
              <header className="mb-9 grid gap-5 border-t border-black/30 pt-5 md:mb-14 md:grid-cols-[.4fr_1fr] md:items-start">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[.18em] text-[#a63829]">
                  Chapter {String(chapterIndex + 1).padStart(2, "0")}
                </p>
                <h2
                  id={`chapter-${chapterIndex}`}
                  className="font-serif text-[clamp(2.8rem,5.8vw,6.5rem)] font-medium italic leading-[.82] tracking-[-.05em]"
                >
                  {chapter}
                </h2>
              </header>
              <ol className="grid gap-x-5 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, projectIndex) => (
                  <li
                    id={project.slug}
                    key={project.slug}
                    className={`scroll-mt-20 ${projectIndex % 5 === 0 ? "xl:col-span-2" : ""}`}
                  >
                    <Link
                      to="/poster-studies/$slug"
                      params={{ slug: project.slug }}
                      className="group block outline-none"
                    >
                      <div className="relative overflow-hidden bg-black/5 ring-[#a63829] transition duration-500 group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-[#f0eee8]">
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
                      <div className="mt-4 grid grid-cols-[auto_1fr_auto] items-start gap-3 border-t border-black/25 pt-3">
                        <span className="font-mono text-[9px] font-semibold text-[#a63829]">
                          {project.index}
                        </span>
                        <div>
                          <h3
                            lang={project.titleLang}
                            className={`text-[15px] font-semibold leading-none ${project.titleLang === "ko" ? "font-ko-sans" : "uppercase tracking-[.04em]"}`}
                          >
                            {project.title}
                          </h3>
                          <p className="mt-2 max-w-[44ch] text-[12px] leading-[1.45] text-black/55">
                            {project.discipline}
                          </p>
                        </div>
                        <span
                          className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </main>

        <footer className="bg-[#171713] px-5 py-14 text-[#f0eee8] sm:px-8 md:py-20 xl:px-12">
          <div className="mx-auto flex max-w-[1520px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[14ch] font-serif text-[clamp(3rem,7vw,7rem)] italic leading-[.78] tracking-[-.055em]">
              Choose a world. Enter the whole system.
            </p>
            <div className="max-w-[35rem] md:text-right">
              <p className="mb-6 text-[11px] leading-[1.6] text-white/55">
                H&amp;M, ZARA, UNIQLO, and PRADA concept studies are independent, self-initiated
                work. They were not commissioned, approved, sponsored, or endorsed by the named
                brands. All trademarks belong to their respective owners.
              </p>
              <Link
                to="/work"
                className="inline-block border-b border-white/45 pb-1 font-mono text-[10px] uppercase tracking-[.16em] transition-colors hover:border-[#ff735c] hover:text-[#ff735c]"
              >
                Back to all work ↗
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </MatLayout>
  );
}
