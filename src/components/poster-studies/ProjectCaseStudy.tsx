import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { MatLayout } from "@/components/MatLayout";
import {
  BrandEditorialGallery,
  BrandProjectStatusBand,
} from "@/components/poster-studies/BrandEditorialGallery";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectApplicationGallery } from "@/components/poster-studies/ProjectApplicationGallery";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import { ProjectVisual } from "@/components/poster-studies/visual-registry";
import {
  getDesignProjectArtDirection,
  type ProjectArtDirection,
} from "@/lib/design-project-art-direction";
import {
  designProjectCount,
  getAdjacentDesignProjects,
  type DesignProject,
} from "@/lib/design-projects";

type ProjectCaseStyle = CSSProperties & Record<`--${string}`, string | number>;

export function ProjectCaseStudy({ project }: { project: DesignProject }) {
  const { previous, next } = getAdjacentDesignProjects(project.slug);
  const direction = getDesignProjectArtDirection(project);
  const style: ProjectCaseStyle = {
    "--project-primary": project.palette[0]?.value ?? direction.surfaces.paper,
    "--project-secondary": project.palette[1]?.value ?? direction.surfaces.ink,
    "--project-accent": project.palette[2]?.value ?? direction.surfaces.accent,
    "--project-support": project.palette[3]?.value ?? direction.surfaces.panel,
    "--case-font-display": direction.fonts.display,
    "--case-font-accent": direction.fonts.accent,
    "--case-font-body": direction.fonts.body,
    "--case-font-meta": direction.fonts.meta,
    "--case-paper": direction.surfaces.paper,
    "--case-ink": direction.surfaces.ink,
    "--case-panel": direction.surfaces.panel,
    "--case-dark": direction.surfaces.dark,
    "--case-light": direction.surfaces.light,
    "--case-accent": direction.surfaces.accent,
    "--case-title-weight": direction.title.weight,
    "--case-title-style": direction.title.style,
    "--case-title-leading": direction.title.leading,
    "--case-title-tracking": direction.title.tracking,
    "--case-title-measure": direction.title.measure,
  };

  return (
    <MatLayout surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <article
        className="project-case"
        data-project={project.slug}
        data-motif={project.motif}
        data-layout={direction.layout}
        data-gallery={direction.gallery}
        style={style}
      >
        <header className="project-hero">
          <div className="project-shell">
            <div className="project-topline project-meta">
              <Link
                to="/poster-studies"
                activeOptions={{ exact: true }}
                className="project-back-link"
              >
                <span aria-hidden="true">←</span> All design projects
              </Link>
              <span>
                {project.index} / {designProjectCount} · {project.chapter}
              </span>
            </div>

            <div className="project-hero-grid">
              <div className="project-hero-title-block">
                <p className="project-kicker project-meta">{project.projectLabel}</p>
                <h1 lang={project.titleLang} className="project-title" data-title={project.title}>
                  {project.title}
                </h1>
              </div>
              <div className="project-hero-copy">
                <p className="project-statement">{project.statement}</p>
                <p className="project-description">{project.description}</p>
                <dl className="project-facts">
                  <div>
                    <dt className="project-meta">Discipline</dt>
                    <dd>{project.discipline}</dd>
                  </div>
                  <div>
                    <dt className="project-meta">Scope</dt>
                    <dd>{project.applications.length} primary applications</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="project-hero-media">
              <ProjectPicture
                projectSlug={project.slug}
                slot="hero"
                sizes="(min-width: 1280px) 1140px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                priority
                fallback={
                  <DesignProjectCover
                    project={project}
                    variant="hero"
                    className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
                  />
                }
              />
              <span className="project-hero-index project-meta" aria-hidden="true">
                {project.index}
              </span>
            </div>
          </div>
        </header>

        <section aria-labelledby="premise" className="project-premise project-section">
          <div className="project-shell project-premise-grid">
            <div className="project-premise-lead">
              <p className="project-section-number project-meta">01 / Premise</p>
              <h2 id="premise" className="project-premise-title">
                {direction.headings.premise}
              </h2>
            </div>
            <div className="project-premise-content">
              <article className="project-premise-block" data-block="challenge">
                <p className="project-premise-label project-meta">{direction.labels.challenge}</p>
                <p className="project-premise-copy">{project.challenge}</p>
              </article>
              <article className="project-premise-block" data-block="response">
                <p className="project-premise-label project-meta">{direction.labels.response}</p>
                <p className="project-premise-copy">{project.response}</p>
              </article>
              <article className="project-premise-block" data-block="rule">
                <p className="project-premise-label project-meta">{direction.labels.rule}</p>
                <p className="project-rule-copy">{project.rule}</p>
              </article>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="visual-system"
          className="project-section project-section--visual"
        >
          <div className="project-shell">
            <ProjectSectionHeading
              number="02"
              label="Signature system"
              title={direction.headings.system}
              id="visual-system"
            />
            <div className="project-visual-register">
              <div className="project-visual-register__label project-meta">
                <span>Hero system</span>
                <span>Key art + core touchpoints</span>
              </div>
              <ProjectVisual project={project} />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="applications"
          className="project-section project-section--applications"
        >
          <div className="project-shell">
            <ProjectSectionHeading
              number="03"
              label="Applications"
              title={direction.headings.applications}
              id="applications"
            />
            <div className="project-applications-grid">
              {project.brandStudy ? (
                <BrandEditorialGallery project={project} />
              ) : (
                <ProjectApplicationGallery project={project} />
              )}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="type-material"
          className="project-section project-section--material"
        >
          <div className="project-shell">
            <ProjectSectionHeading
              number="04"
              label="Type, colour, material"
              title={direction.headings.material}
              id="type-material"
              inverse
            />
            <div className="project-material-grid">
              <div className="project-type-panel">
                <p className="project-material-label project-meta">Typography direction</p>
                <p className="project-type-direction">{project.typography}</p>
                <div
                  className="project-type-specimen"
                  aria-label={`${project.title} type specimen`}
                >
                  <p lang={project.titleLang}>{project.title}</p>
                  <p aria-hidden="true">
                    {project.titleLang === "ko" ? "가나다 · 0123456789" : "Aa Bb Cc · 0123456789"}
                  </p>
                </div>
              </div>
              <div className="project-palette-panel">
                <p className="project-material-label project-meta">Working palette</p>
                <div className="project-palette-grid">
                  {project.palette.map((swatch) => (
                    <div
                      key={swatch.name}
                      className="project-swatch"
                      style={{
                        backgroundColor: swatch.value,
                        color: getReadableSwatchInk(swatch.value),
                      }}
                    >
                      <span className="project-meta">{swatch.name}</span>
                      <span className="project-meta">{swatch.value}</span>
                    </div>
                  ))}
                </div>
                <p className="project-material-label project-material-label--materials project-meta">
                  Material behaviour
                </p>
                <ul className="project-material-list">
                  {project.materials.map((material, index) => (
                    <li key={material}>
                      <span>{material}</span>
                      <span className="project-meta">0{index + 1}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="motion-lineage"
          className="project-section project-section--motion"
        >
          <div className="project-shell">
            <ProjectSectionHeading
              number="05"
              label="Motion + lineage"
              title={direction.headings.motion}
              id="motion-lineage"
            />
            <div className="project-motion-grid">
              <div className="project-motion-study">
                <p className="project-motion-label project-meta">Motion principle</p>
                <p className="project-motion-copy">{project.motion}</p>
                <div className="project-motion-frames" aria-label="Three-frame motion study">
                  {["Start", "Shift", "Hold"].map((label, frame) => (
                    <div key={label} className="project-motion-frame" data-frame={frame + 1}>
                      <div className="project-motion-image">
                        <ProjectPicture
                          projectSlug={project.slug}
                          slot="context"
                          sizes="(min-width: 1024px) 24vw, 31vw"
                          decorative
                          fallback={
                            <DesignProjectCover
                              project={project}
                              variant="screen"
                              showTitle={false}
                              className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
                            />
                          }
                        />
                      </div>
                      <span className="project-frame-label project-meta">
                        {label} / 0{frame + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="project-lineage">
                <p className="project-motion-label project-meta">Design lineage</p>
                <p className="project-lineage-copy">{project.lineage}</p>
                <p className="project-lineage-note">
                  References are research sources, not templates. The identity, copy, layouts, and
                  application system shown here are original self-initiated work.
                </p>
                <ul className="project-reference-list">
                  {project.references.map((reference, index) => (
                    <li key={reference.href}>
                      <a href={reference.href} target="_blank" rel="noreferrer">
                        <span>
                          <span className="project-reference-index project-meta">0{index + 1}</span>
                          {reference.label}
                        </span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <nav aria-label="Adjacent design projects" className="project-adjacent-grid">
          {previous ? (
            <AdjacentProject project={previous} direction="previous" hostDirection={direction} />
          ) : null}
          {next ? (
            <AdjacentProject project={next} direction="next" hostDirection={direction} />
          ) : null}
        </nav>

        <BrandProjectStatusBand project={project} />
      </article>
    </MatLayout>
  );
}

function ProjectSectionHeading({
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
    <div className={`project-section-heading ${inverse ? "is-inverse" : ""}`}>
      <p className="project-section-number project-meta">
        {number} / {label}
      </p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

function AdjacentProject({
  project,
  direction,
  hostDirection,
}: {
  project: DesignProject;
  direction: "previous" | "next";
  hostDirection: ProjectArtDirection;
}) {
  const artDirection = getDesignProjectArtDirection(project);
  const style: ProjectCaseStyle = {
    "--adjacent-display":
      project.titleLang === "ko"
        ? '"Pretendard Variable", "Malgun Gothic", sans-serif'
        : hostDirection.fonts.display,
    "--adjacent-meta": hostDirection.fonts.meta,
    "--adjacent-paper": artDirection.surfaces.paper,
    "--adjacent-ink": artDirection.surfaces.ink,
    "--adjacent-accent": artDirection.surfaces.accent,
  };

  return (
    <Link
      to="/poster-studies/$slug"
      params={{ slug: project.slug }}
      className="project-adjacent-card"
      data-direction={direction}
      data-layout={artDirection.layout}
      style={style}
    >
      <p className="project-adjacent-meta">
        {direction === "previous" ? "← Previous" : "Next →"} / {project.index}
      </p>
      <p lang={project.titleLang} className="project-adjacent-title">
        {project.title}
      </p>
      <span className="project-adjacent-index" aria-hidden="true">
        {project.index}
      </span>
    </Link>
  );
}

function getReadableSwatchInk(hex: string) {
  const value = hex.trim().replace(/^#/, "");
  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((character) => `${character}${character}`)
          .join("")
      : value;

  if (!/^[\da-f]{6}$/i.test(normalized)) return "#151713";

  const channels = [0, 2, 4].map((offset) => {
    const channel = Number.parseInt(normalized.slice(offset, offset + 2), 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  const luminance = channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;

  return luminance > 0.18 ? "#151713" : "#fffaf0";
}
