import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { MatLayout } from "@/components/MatLayout";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectApplicationGallery } from "@/components/poster-studies/ProjectApplicationGallery";
import { ProjectVisual } from "@/components/poster-studies/visual-registry";
import {
  getAdjacentDesignProjects,
  getDesignProject,
  type DesignProject,
} from "@/lib/design-projects";

export const Route = createFileRoute("/poster-studies/$slug")({
  head: ({ params }) => {
    const project = getDesignProject(params.slug);
    const title = project
      ? `${project.title} — Design Case Study by Isaac Sohn`
      : "Design Project — Isaac Sohn";
    const description = project?.description ?? "Independent design project by Isaac Sohn.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: DesignProjectDetail,
});

function DesignProjectDetail() {
  const { slug } = Route.useParams();
  const project = getDesignProject(slug);

  if (!project) {
    return (
      <MatLayout surface="plain" contentClassName="pt-16">
        <div className="mx-auto max-w-4xl py-20">
          <p className="font-mono text-[10px] uppercase tracking-[.18em] text-primary">
            404 / Design project
          </p>
          <h1 className="mt-4 font-serif text-[clamp(4rem,10vw,9rem)] italic leading-[.75] tracking-[-.06em]">
            Project not found.
          </h1>
          <Link
            to="/poster-studies"
            className="mt-10 inline-block border-b border-current pb-1 text-sm"
          >
            View all 20 projects ↗
          </Link>
        </div>
      </MatLayout>
    );
  }

  return <ProjectCaseStudy project={project} />;
}

function ProjectCaseStudy({ project }: { project: DesignProject }) {
  const { previous, next } = getAdjacentDesignProjects(project.slug);
  const style = {
    "--project-primary": project.palette[0].value,
    "--project-secondary": project.palette[1].value,
    "--project-accent": project.palette[2].value,
    "--project-support": project.palette[3].value,
  } as CSSProperties;

  return (
    <MatLayout surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <article className="bg-[#f1efe9] text-[#171713]" style={style}>
        <header className="px-5 pb-10 pt-10 sm:px-8 md:pb-16 md:pt-14 xl:px-12">
          <div className="mx-auto max-w-[1520px]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/25 pb-4 font-mono text-[9px] font-semibold uppercase tracking-[.17em]">
              <Link
                to="/poster-studies"
                className="transition-colors hover:text-[var(--project-secondary)]"
              >
                ← All design projects
              </Link>
              <span>
                {project.index} / 20 · {project.chapter}
              </span>
            </div>

            <div className="grid gap-12 py-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end md:py-20">
              <div>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-[var(--project-secondary)]">
                  {project.projectLabel}
                </p>
                <h1
                  lang={project.titleLang}
                  className={`mt-5 text-balance ${
                    project.titleLang === "ko"
                      ? "font-ko-sans max-w-none whitespace-nowrap text-[clamp(3.7rem,7vw,7.6rem)] font-black leading-[1.08] tracking-[-.03em]"
                      : "max-w-[10ch] font-serif text-[clamp(5rem,12vw,12.5rem)] font-medium leading-[.73] tracking-[-.075em]"
                  }`}
                >
                  {project.title}
                </h1>
              </div>
              <div className="max-w-[570px] border-t border-black/25 pt-6 lg:mb-2">
                <p className="text-balance font-serif text-[clamp(1.8rem,3.2vw,3.25rem)] italic leading-[.98] tracking-[-.03em]">
                  {project.statement}
                </p>
                <p className="mt-6 max-w-[62ch] text-[13px] leading-[1.75] text-black/60">
                  {project.description}
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-black/15 pt-5 text-[11px]">
                  <div>
                    <dt className="font-mono text-[8px] uppercase tracking-[.16em] text-black/45">
                      Discipline
                    </dt>
                    <dd className="mt-2 leading-[1.4]">{project.discipline}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[8px] uppercase tracking-[.16em] text-black/45">
                      Scope
                    </dt>
                    <dd className="mt-2 leading-[1.4]">
                      {project.applications.length} primary applications
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="relative overflow-hidden shadow-[0_45px_110px_rgba(35,29,20,.18)]">
              <DesignProjectCover project={project} variant="hero" />
            </div>
          </div>
        </header>

        <section aria-labelledby="premise" className="px-5 py-20 sm:px-8 md:py-32 xl:px-12">
          <div className="mx-auto grid max-w-[1520px] gap-12 lg:grid-cols-[.36fr_.64fr]">
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[.18em] text-[var(--project-secondary)]">
                01 / Premise
              </p>
              <h2
                id="premise"
                className="mt-4 max-w-[8ch] font-serif text-[clamp(3.4rem,7vw,7.5rem)] font-medium italic leading-[.77] tracking-[-.055em]"
              >
                A reason to exist.
              </h2>
            </div>
            <div className="grid border-t border-black/30 md:grid-cols-2">
              <div className="border-b border-black/20 py-7 md:border-r md:pr-10">
                <p className="font-mono text-[9px] uppercase tracking-[.16em] text-black/45">
                  The problem
                </p>
                <p className="mt-5 max-w-[34ch] text-pretty font-serif text-[clamp(1.65rem,3vw,2.65rem)] leading-[1.02] tracking-[-.025em]">
                  {project.challenge}
                </p>
              </div>
              <div className="border-b border-black/20 py-7 md:pl-10">
                <p className="font-mono text-[9px] uppercase tracking-[.16em] text-black/45">
                  The response
                </p>
                <p className="mt-5 max-w-[34ch] text-pretty font-serif text-[clamp(1.65rem,3vw,2.65rem)] italic leading-[1.02] tracking-[-.025em]">
                  {project.response}
                </p>
              </div>
              <div className="border-b border-black/20 py-7 md:col-span-2">
                <p className="font-mono text-[9px] uppercase tracking-[.16em] text-black/45">
                  Non-negotiable system rule
                </p>
                <p className="mt-4 max-w-[55ch] text-[clamp(1.15rem,2vw,1.6rem)] font-semibold leading-[1.35]">
                  {project.rule}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="visual-system"
          className="bg-[#e4e0d6] px-5 py-16 sm:px-8 md:py-24 xl:px-12"
        >
          <div className="mx-auto max-w-[1520px]">
            <SectionHeading
              number="02"
              label="Signature system"
              title="One world, fully articulated."
              id="visual-system"
            />
            <div className="mt-10 border-t border-black/25 pt-4 md:mt-16">
              <div className="mb-3 flex items-center justify-between font-mono text-[8px] font-semibold uppercase tracking-[.17em] text-black/50">
                <span>Hero system</span>
                <span>Key art + core touchpoints</span>
              </div>
              <ProjectVisual project={project} />
            </div>
          </div>
        </section>

        <section aria-labelledby="applications" className="px-5 py-20 sm:px-8 md:py-32 xl:px-12">
          <div className="mx-auto max-w-[1520px]">
            <SectionHeading
              number="03"
              label="Applications"
              title="A brand only becomes real in use."
              id="applications"
            />
            <div className="mt-10 md:mt-16">
              <ProjectApplicationGallery project={project} />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="type-material"
          className="bg-[#171713] px-5 py-20 text-[#f1efe9] sm:px-8 md:py-32 xl:px-12"
        >
          <div className="mx-auto max-w-[1520px]">
            <SectionHeading
              number="04"
              label="Type, colour, material"
              title="The details carry the argument."
              id="type-material"
              inverse
            />
            <div className="mt-14 grid border-t border-white/25 lg:grid-cols-[1.15fr_.85fr]">
              <div className="border-b border-white/20 py-9 lg:border-r lg:pr-12">
                <p className="font-mono text-[9px] uppercase tracking-[.17em] text-white/45">
                  Typography direction
                </p>
                <p className="mt-6 max-w-[30ch] font-serif text-[clamp(2rem,4vw,4.5rem)] italic leading-[.92] tracking-[-.04em]">
                  {project.typography}
                </p>
                <div className="mt-14 overflow-hidden border-y border-white/20 py-5">
                  <p
                    lang={project.titleLang}
                    className={`whitespace-nowrap text-[clamp(3.5rem,10vw,10rem)] ${project.titleLang === "ko" ? "font-ko-sans font-black leading-[1.08] tracking-[-.025em]" : "font-serif italic leading-[.72] tracking-[-.065em]"}`}
                  >
                    {project.title} · {project.title}
                  </p>
                </div>
              </div>
              <div className="border-b border-white/20 py-9 lg:pl-12">
                <p className="font-mono text-[9px] uppercase tracking-[.17em] text-white/45">
                  Working palette
                </p>
                <div className="mt-6 grid grid-cols-2 gap-px bg-white/20">
                  {project.palette.map((swatch) => (
                    <div
                      key={swatch.name}
                      className="flex aspect-[1.4/1] flex-col justify-between p-4 text-[#171713]"
                      style={{ backgroundColor: swatch.value }}
                    >
                      <span className="font-mono text-[8px] uppercase tracking-[.15em]">
                        {swatch.name}
                      </span>
                      <span className="font-mono text-[9px] uppercase">{swatch.value}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-10 font-mono text-[9px] uppercase tracking-[.17em] text-white/45">
                  Material behaviour
                </p>
                <ul className="mt-4 border-t border-white/20">
                  {project.materials.map((material, index) => (
                    <li
                      key={material}
                      className="flex items-center justify-between border-b border-white/20 py-3 text-sm"
                    >
                      <span>{material}</span>
                      <span className="font-mono text-[9px] text-white/40">0{index + 1}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="motion-lineage" className="px-5 py-20 sm:px-8 md:py-32 xl:px-12">
          <div className="mx-auto max-w-[1520px]">
            <SectionHeading
              number="05"
              label="Motion + lineage"
              title="Movement has a rule. References have a source."
              id="motion-lineage"
            />
            <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[.17em] text-black/45">
                  Motion principle
                </p>
                <p className="mt-5 max-w-[38ch] text-pretty font-serif text-[clamp(2.2rem,4.6vw,5rem)] italic leading-[.9] tracking-[-.045em]">
                  {project.motion}
                </p>
                <div className="mt-10 grid grid-cols-3 gap-2" aria-label="Three-frame motion study">
                  {[0, 1, 2].map((frame) => (
                    <div
                      key={frame}
                      className="relative overflow-hidden border border-black/15 bg-black/5"
                    >
                      <div
                        className={`transition-transform ${frame === 0 ? "-translate-x-[5%] opacity-55" : frame === 2 ? "translate-x-[5%] opacity-85" : ""}`}
                      >
                        <DesignProjectCover project={project} variant="screen" showTitle={false} />
                      </div>
                      <span className="absolute bottom-2 right-2 bg-[#f1efe9]/90 px-2 py-1 font-mono text-[7px] uppercase tracking-[.14em]">
                        F / 0{frame + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="border-t border-black/30 pt-6">
                <p className="font-mono text-[9px] uppercase tracking-[.17em] text-black/45">
                  Design lineage
                </p>
                <p className="mt-5 max-w-[50ch] text-[15px] leading-[1.7]">{project.lineage}</p>
                <p className="mt-6 max-w-[56ch] text-[11px] leading-[1.65] text-black/45">
                  References are research sources, not templates. The identity, copy, layouts, and
                  application system shown here are original self-initiated work.
                </p>
                <ul className="mt-8 border-t border-black/20">
                  {project.references.map((reference, index) => (
                    <li key={reference.href} className="border-b border-black/20">
                      <a
                        href={reference.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-5 py-4 text-[13px] font-semibold transition-colors hover:text-[var(--project-secondary)]"
                      >
                        <span>
                          <span className="mr-3 font-mono text-[8px] text-black/35">
                            0{index + 1}
                          </span>
                          {reference.label}
                        </span>
                        <span className="transition-transform group-hover:translate-x-1">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <nav
          aria-label="Adjacent design projects"
          className="grid border-t border-black/25 md:grid-cols-2"
        >
          {previous ? <AdjacentProject project={previous} direction="previous" /> : null}
          {next ? <AdjacentProject project={next} direction="next" /> : null}
        </nav>
      </article>
    </MatLayout>
  );
}

function SectionHeading({
  number,
  label,
  title,
  id,
  inverse = false,
}: {
  number: string;
  label: string;
  title: string;
  id: string;
  inverse?: boolean;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-[.34fr_.66fr] md:items-end">
      <p
        className={`font-mono text-[9px] font-semibold uppercase tracking-[.18em] ${inverse ? "text-white/45" : "text-[var(--project-secondary)]"}`}
      >
        {number} / {label}
      </p>
      <h2
        id={id}
        className="max-w-[13ch] font-serif text-[clamp(3.2rem,7vw,7.4rem)] font-medium italic leading-[.78] tracking-[-.055em]"
      >
        {title}
      </h2>
    </div>
  );
}

function AdjacentProject({
  project,
  direction,
}: {
  project: DesignProject;
  direction: "previous" | "next";
}) {
  return (
    <Link
      to="/poster-studies/$slug"
      params={{ slug: project.slug }}
      className={`group relative min-h-[23rem] overflow-hidden p-6 sm:p-9 ${direction === "next" ? "border-t border-black/25 md:border-l md:border-t-0" : ""}`}
      style={{
        backgroundColor: project.palette[0].value,
        color: project.theme === "dark" ? "#f4f0e8" : project.palette[1].value,
      }}
    >
      <p className="relative z-10 font-mono text-[9px] uppercase tracking-[.17em] opacity-60">
        {direction === "previous" ? "← Previous" : "Next →"} / {project.index}
      </p>
      <p
        lang={project.titleLang}
        className={`relative z-10 mt-20 max-w-[9ch] text-[clamp(3.2rem,6vw,6.5rem)] leading-[.74] ${project.titleLang === "ko" ? "font-ko-sans font-black tracking-[-.03em]" : "font-serif italic tracking-[-.06em]"}`}
      >
        {project.title}
      </p>
      <span className="absolute -bottom-[.25em] -right-[.08em] font-mono text-[15rem] font-black leading-none opacity-[.06] transition-transform duration-500 group-hover:-translate-x-3">
        {project.index}
      </span>
    </Link>
  );
}
