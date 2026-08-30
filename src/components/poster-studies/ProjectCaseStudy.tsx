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
import { ProjectSignatureModule } from "@/components/poster-studies/ProjectSignatureModules";
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
import {
  getProjectChoreography,
  type ProjectChapter,
  type ProjectChoreography,
} from "@/lib/project-choreography";
import { getProjectStatementLockup, getProjectTitleLockup } from "@/lib/project-title-lockups";

import "@/personal-project-premium.css";

type ProjectCaseStyle = CSSProperties & Record<`--${string}`, string | number>;

export function ProjectCaseStudy({ project }: { project: DesignProject }) {
  const { previous, next } = getAdjacentDesignProjects(project.slug);
  const direction = getDesignProjectArtDirection(project);
  const choreography = getProjectChoreography(project.slug);
  const titleLockup = getProjectTitleLockup(project.slug, project.title);
  const statementLockup = getProjectStatementLockup(project.slug, project.statement);
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
        data-choreography={choreography.family}
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
                <h1
                  lang={project.titleLang}
                  className="project-title"
                  data-title={project.title}
                  aria-label={project.title}
                >
                  {titleLockup.map((line) => (
                    <span key={line} className="project-title__line" aria-hidden="true">
                      {line}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="project-hero-copy">
                <p className="project-statement" aria-label={project.statement}>
                  {statementLockup.map((line) => (
                    <span key={line} className="project-statement__line" aria-hidden="true">
                      {line}
                    </span>
                  ))}
                </p>
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

            <ProjectOpening project={project} choreography={choreography} />
          </div>
        </header>

        <ProjectSignatureModule project={project} />

        <ProjectNarrative project={project} direction={direction} choreography={choreography} />

        <ProjectWorldviewClosing project={project} choreography={choreography} />

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

function ProjectNarrative({
  project,
  direction,
  choreography,
}: {
  project: DesignProject;
  direction: ProjectArtDirection;
  choreography: ProjectChoreography;
}) {
  return (
    <div
      className="project-narrative"
      data-family={choreography.family}
      aria-label={project.title + " case-study sequence"}
    >
      {choreography.sequence.map((chapter, index) => (
        <ProjectChapterSection
          key={chapter}
          chapter={chapter}
          number={String(index + 1).padStart(2, "0")}
          project={project}
          direction={direction}
          choreography={choreography}
        />
      ))}
    </div>
  );
}

function ProjectChapterSection({
  chapter,
  number,
  project,
  direction,
  choreography,
}: {
  chapter: ProjectChapter;
  number: string;
  project: DesignProject;
  direction: ProjectArtDirection;
  choreography: ProjectChoreography;
}) {
  const id = project.slug + "-" + chapter;

  if (chapter === "premise") {
    return (
      <section
        aria-labelledby={id}
        className="project-premise project-section"
        data-chapter={chapter}
      >
        <div className="project-shell project-premise-grid">
          <div className="project-premise-lead">
            <p className="project-section-number project-meta">{number} / Premise</p>
            <h2 id={id} className="project-premise-title">
              {direction.headings.premise}
            </h2>
            <p className="project-chapter-cue">{choreography.signatureLabel}</p>
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
    );
  }

  if (chapter === "system") {
    return (
      <section
        aria-labelledby={id}
        className="project-section project-section--visual"
        data-chapter={chapter}
      >
        <div className="project-shell">
          <ProjectSectionHeading
            number={number}
            label="Signature system"
            title={direction.headings.system}
            id={id}
            choreography={choreography}
          />
          <div className="project-visual-register">
            <div className="project-visual-register__label project-meta">
              <span>{choreography.signatureLabel}</span>
              <span>Key art + core touchpoints</span>
            </div>
            <ProjectVisual project={project} />
          </div>
        </div>
      </section>
    );
  }

  if (chapter === "applications") {
    return (
      <section
        aria-labelledby={id}
        className="project-section project-section--applications"
        data-chapter={chapter}
      >
        <div className="project-shell">
          <ProjectSectionHeading
            number={number}
            label="In use"
            title={direction.headings.applications}
            id={id}
            choreography={choreography}
          />
          <div className="project-applications-grid">
            <ProjectApplicationGallery project={project} />
          </div>
        </div>
      </section>
    );
  }

  if (chapter === "material") {
    return (
      <section
        aria-labelledby={id}
        className="project-section project-section--material"
        data-chapter={chapter}
      >
        <div className="project-shell">
          <ProjectSectionHeading
            number={number}
            label="Type, colour, material"
            title={direction.headings.material}
            id={id}
            choreography={choreography}
            inverse
          />
          <div className="project-material-grid">
            <div className="project-type-panel">
              <p className="project-material-label project-meta">Typography direction</p>
              <p className="project-type-direction">{project.typography}</p>
              <div className="project-type-specimen" aria-label={project.title + " type specimen"}>
                <p lang={project.titleLang}>{project.title}</p>
                <p aria-hidden="true">
                  {project.titleLang === "ko" ? "가나다라 · 0123456789" : "Aa Bb Cc · 0123456789"}
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
                    <span className="project-meta">{String(index + 1).padStart(2, "0")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby={id}
      className="project-section project-section--motion"
      data-chapter={chapter}
    >
      <div className="project-shell">
        <ProjectSectionHeading
          number={number}
          label="Time + references"
          title={direction.headings.motion}
          id={id}
          choreography={choreography}
        />
        <div className="project-motion-grid">
          <div className="project-motion-study">
            <p className="project-motion-label project-meta">Motion principle</p>
            <p className="project-motion-copy">{project.motion}</p>
            <figure className="project-motion-scene">
              <ProjectPicture
                projectSlug={project.slug}
                slot="context"
                sizes="(min-width: 1024px) 62vw, calc(100vw - 2.5rem)"
                style={{ aspectRatio: "16 / 10" }}
                fallback={
                  <DesignProjectCover
                    project={project}
                    variant="screen"
                    showTitle={false}
                    className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
                  />
                }
              />
              <figcaption className="project-meta">One system, observed through time</figcaption>
            </figure>
            <ol className="project-motion-score" aria-label="Three-part motion logic">
              <li>
                <span className="project-meta">01 / Hold</span>
                <p>{project.rule}</p>
              </li>
              <li>
                <span className="project-meta">02 / Change</span>
                <p>{project.motion}</p>
              </li>
              <li>
                <span className="project-meta">03 / Resolve</span>
                <p>{choreography.closingCue}</p>
              </li>
            </ol>
          </div>
          <aside className="project-lineage">
            <p className="project-motion-label project-meta">Design lineage</p>
            <p className="project-lineage-copy">{project.lineage}</p>
            <p className="project-lineage-note">
              Research sources inform the method; the identity, copy, layouts, and application
              system shown here are original self-initiated work.
            </p>
            <ul className="project-reference-list">
              {project.references.map((reference, index) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    <span>
                      <span className="project-reference-index project-meta">
                        {String(index + 1).padStart(2, "0")}
                      </span>
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
  );
}

function ProjectSectionHeading({
  number,
  label,
  title,
  id,
  choreography,
  inverse = false,
}: {
  number: string;
  label: string;
  title: string;
  id: string;
  choreography: ProjectChoreography;
  inverse?: boolean;
}) {
  return (
    <div className={inverse ? "project-section-heading is-inverse" : "project-section-heading"}>
      <p className="project-section-number project-meta">
        {number} / {label}
      </p>
      <h2 id={id}>{title}</h2>
      <p className="project-section-heading__folio project-meta">{choreography.familyLabel}</p>
    </div>
  );
}

function ProjectOpening({
  project,
  choreography,
}: {
  project: DesignProject;
  choreography: ProjectChoreography;
}) {
  const headingId = project.slug + "-opening";
  const laws = [
    { label: "Form", value: project.rule },
    { label: "Voice", value: project.typography },
    { label: "Time", value: project.motion },
  ];

  return (
    <section className="project-opening" aria-labelledby={headingId}>
      <div className="project-opening__rail project-meta">
        <span>{choreography.familyLabel}</span>
        <span>{choreography.signatureLabel}</span>
      </div>
      <div className="project-opening__statement">
        <p className="project-meta">Design premise / {choreography.signatureLabel}</p>
        <h2 id={headingId}>{choreography.openingCue}</h2>
        <p>{project.statement}</p>
      </div>
      <ol className="project-opening__laws">
        {laws.map((law, index) => (
          <li key={law.label}>
            <span className="project-meta">
              {String(index + 1).padStart(2, "0")} / {law.label}
            </span>
            <p>{law.value}</p>
          </li>
        ))}
      </ol>
      <ol className="project-opening__sequence" aria-label="Case-study reading order">
        {choreography.sequence.map((chapter, index) => (
          <li key={chapter} data-chapter={chapter}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{chapter}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProjectWorldviewClosing({
  project,
  choreography,
}: {
  project: DesignProject;
  choreography: ProjectChoreography;
}) {
  const headingId = `${project.slug}-final-state`;

  return (
    <section className="project-worldview-closing" aria-labelledby={headingId}>
      <ProjectPicture
        projectSlug={project.slug}
        slot="context"
        sizes="100vw"
        className="project-worldview-closing__picture"
        imageClassName="project-worldview-closing__image"
        style={{ aspectRatio: "auto" }}
        decorative
        fallback={
          <DesignProjectCover
            project={project}
            variant="hero"
            showTitle={false}
            className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
          />
        }
      />
      <div className="project-worldview-closing__wash" aria-hidden="true" />
      <div className="project-shell project-worldview-closing__inner">
        <div className="project-worldview-closing__meta project-meta">
          <span>06 / Final state</span>
          <span>{choreography.signatureLabel}</span>
        </div>
        <h2 id={headingId}>{choreography.closingCue}</h2>
        <p>{project.rule}</p>
        <ol aria-label={`${project.title} applications`}>
          {project.applications.map((application, index) => (
            <li key={application}>
              <span className="project-meta">0{index + 1}</span>
              <span>{application}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
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
  const titleLockup = getProjectTitleLockup(project.slug, project.title);
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
      <p lang={project.titleLang} className="project-adjacent-title" aria-label={project.title}>
        {titleLockup.map((line) => (
          <span key={line} className="project-adjacent-title__line" aria-hidden="true">
            {line}
          </span>
        ))}
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
