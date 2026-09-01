import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { MatLayout } from "@/components/MatLayout";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import { getDesignProjectArtDirection } from "@/lib/design-project-art-direction";
import {
  getDesignProjectMediaAsset,
  type DesignProjectCoreMediaSlot,
} from "@/lib/design-project-media";
import {
  designProjectCount,
  getAdjacentDesignProjects,
  type DesignProject,
} from "@/lib/design-projects";
import { getPersonalProjectStory, type PersonalStoryBlock } from "@/lib/personal-project-stories";
import { getProjectTitleLockup } from "@/lib/project-title-lockups";

import "@/personal-project-premium.css";

type StudioCaseStyle = CSSProperties & Record<`--${string}`, string | number>;

const mediaLabels: Record<DesignProjectCoreMediaSlot, string> = {
  hero: "Opening image",
  tactile: "Material detail",
  spatial: "Spatial application",
  context: "Context in use",
};

const projectMethodTitles: Record<string, string> = {
  afterimage: "A delay becomes the signature.",
  "memory-type": "Evidence enters every letter.",
  "field-notes-37": "Let the index admit what is missing.",
  "last-letter": "Interruption carries the message.",
  "tactile-forecast": "Pressure makes feeling visible.",
  "night-index": "The frame learns the night.",
  "public-memory": "Routes become a shared language.",
  "soft-machine": "Hold the datum. Let the form breathe.",
  "signal-noise": "Decode without erasing the break.",
  "chroma-tempo": "Turn sound into a visible measure.",
  "79w": "One line holds two cities.",
  tidehold: "Hospitality follows the waterline.",
  offsort: "Name the value before the flavour.",
  horalis: "Let the body keep local time.",
  "selv-00": "Make repair part of the garment.",
  "tessera-live": "Nine rooms move as one season.",
  backmatter: "Put the source beside the claim.",
  seamframe: "Show how the building comes apart.",
  "two-shores": "Make both sides visible before action.",
  coldkiln: "Begin with the heat never used.",
};

export function ProjectCaseStudy({ project }: { project: DesignProject }) {
  const { previous, next } = getAdjacentDesignProjects(project.slug);
  const direction = getDesignProjectArtDirection(project);
  const story = getPersonalProjectStory(project.slug);
  const titleLockup = getProjectTitleLockup(project.slug, project.title);
  const style: StudioCaseStyle = {
    "--studio-paper": direction.surfaces.paper,
    "--studio-ink": direction.surfaces.ink,
    "--studio-panel": direction.surfaces.panel,
    "--studio-accent": direction.surfaces.accent,
    "--studio-display": direction.fonts.display,
    "--studio-accent-font": direction.fonts.accent,
    "--studio-body": direction.fonts.body,
    "--studio-meta": direction.fonts.meta,
    "--studio-title-weight": direction.title.weight,
    "--studio-title-style": direction.title.style,
    "--studio-title-leading": direction.title.leading,
    "--studio-title-tracking": direction.title.tracking,
  };

  return (
    <MatLayout immersive surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <article
        className="studio-case"
        data-project={project.slug}
        data-motif={project.motif}
        data-hero-layout={story.hero.layout}
        data-hero-shape={getHeroShape(story.hero.ratio)}
        style={style}
      >
        <header className="studio-hero">
          <div className="studio-shell">
            <div className="studio-topline studio-meta">
              <Link to="/work" className="studio-back-link">
                <span aria-hidden="true">←</span> Selected work
              </Link>
              <span>
                Project {project.index} / {designProjectCount} · {project.chapter}
              </span>
            </div>

            <div className="studio-hero-composition">
              <div className="studio-hero-copy">
                <p className="studio-kicker studio-meta">{project.projectLabel}</p>
                <h1 lang={project.titleLang} className="studio-title" aria-label={project.title}>
                  {titleLockup.map((line) => (
                    <span key={line} aria-hidden="true">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="studio-hero-description">{project.description}</p>
                <dl className="studio-hero-facts">
                  <div>
                    <dt className="studio-meta">Discipline</dt>
                    <dd>{project.discipline}</dd>
                  </div>
                  <div>
                    <dt className="studio-meta">Scope</dt>
                    <dd>{project.applications.join(" · ")}</dd>
                  </div>
                </dl>
              </div>

              <MediaFigure
                project={project}
                slot={story.hero.slot}
                ratio={story.hero.ratio}
                className="studio-hero-figure"
                priority
              />
            </div>
          </div>
        </header>

        <main className="studio-story">
          {story.blocks.map((block, index) => (
            <StoryBlock
              key={`${block.type}-${index}`}
              block={block}
              project={project}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </main>

        <ProjectEndMatter project={project} />

        <nav aria-label="Adjacent design projects" className="studio-adjacent">
          {previous ? <AdjacentProject project={previous} direction="previous" /> : <span />}
          {next ? <AdjacentProject project={next} direction="next" /> : <span />}
        </nav>
      </article>
    </MatLayout>
  );
}

function StoryBlock({
  block,
  project,
  number,
}: {
  block: PersonalStoryBlock;
  project: DesignProject;
  number: string;
}) {
  if (block.type === "media") {
    return (
      <section
        className="studio-block studio-media-block studio-shell"
        data-width={block.width}
        data-align={block.align ?? "center"}
        aria-label={`${number} ${mediaLabels[block.slot]}`}
      >
        <MediaFigure
          project={project}
          slot={block.slot}
          ratio={block.ratio}
          captionMode={block.width === "bleed" ? "none" : block.width === "inset" ? "side" : "full"}
        />
      </section>
    );
  }

  if (block.type === "spread") {
    return (
      <section
        className="studio-block studio-spread studio-shell"
        data-split={block.split}
        data-keep-pair={block.keepPair || undefined}
        aria-label={`${number} Image study`}
      >
        {block.slots.map((slot, index) => (
          <MediaFigure
            key={slot}
            project={project}
            slot={slot}
            ratio={block.ratios?.[index]}
            captionMode={index === 0 ? "full" : "label"}
          />
        ))}
      </section>
    );
  }

  if (block.type === "statement") {
    return (
      <section
        className="studio-block studio-statement studio-shell"
        data-align={block.align}
        data-scale={block.scale}
      >
        <p className="studio-statement-index studio-meta">{number} / Project position</p>
        <h2>{project.statement}</h2>
      </section>
    );
  }

  if (block.type === "principle") {
    return (
      <section className="studio-block studio-principle studio-shell" data-align={block.align}>
        <p className="studio-meta">{number} / Non-negotiable rule</p>
        <p className="studio-principle-copy">{project.rule}</p>
      </section>
    );
  }

  if (block.type === "method") {
    return (
      <section
        className="studio-block studio-method studio-shell"
        data-layout={block.layout}
        aria-labelledby={`${project.slug}-method-${number}`}
      >
        <div className="studio-method-heading">
          <p className="studio-meta">{number} / Intent and response</p>
          <h2 id={`${project.slug}-method-${number}`}>
            {projectMethodTitles[project.slug] ?? "One rule holds the system together."}
          </h2>
        </div>
        <article>
          <p className="studio-meta">The need</p>
          <p>{project.challenge}</p>
        </article>
        <article>
          <p className="studio-meta">The response</p>
          <p>{project.response}</p>
        </article>
      </section>
    );
  }

  if (block.type === "material") {
    return (
      <section
        className="studio-block studio-material"
        data-layout={block.layout}
        aria-labelledby={`${project.slug}-material-${number}`}
      >
        <div className="studio-shell studio-material-heading">
          <p className="studio-meta">{number} / Material language</p>
          <h2 id={`${project.slug}-material-${number}`}>A system you can see and touch.</h2>
        </div>
        <div className="studio-shell studio-material-grid">
          <div className="studio-type-specimen">
            <span className="studio-meta">Typography</span>
            <p lang={project.titleLang}>{project.title}</p>
            <small>{project.typography}</small>
          </div>
          <div className="studio-palette" aria-label="Project palette">
            {project.palette.map((swatch) => (
              <div
                key={swatch.name}
                className="studio-swatch"
                style={{ backgroundColor: swatch.value, color: getReadableSwatchInk(swatch.value) }}
              >
                <span>{swatch.name}</span>
                <span>{swatch.value}</span>
              </div>
            ))}
          </div>
          <ol className="studio-material-list" aria-label="Project materials">
            {project.materials.map((material, index) => (
              <li key={material}>
                <span className="studio-meta">{String(index + 1).padStart(2, "0")}</span>
                <span>{material}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section
      className="studio-block studio-sources studio-shell"
      data-layout={block.layout}
      aria-labelledby={`${project.slug}-sources-${number}`}
    >
      <div>
        <p className="studio-meta">{number} / Context and lineage</p>
        <h2 id={`${project.slug}-sources-${number}`}>Research informs the method.</h2>
      </div>
      <p className="studio-lineage">{project.lineage}</p>
      <ol className="studio-reference-list">
        {project.references.map((reference, index) => (
          <li key={reference.href}>
            <a href={reference.href} target="_blank" rel="noreferrer">
              <span className="studio-meta">{String(index + 1).padStart(2, "0")}</span>
              <span>{reference.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

function MediaFigure({
  project,
  slot,
  ratio,
  className = "",
  priority = false,
  captionMode = "full",
}: {
  project: DesignProject;
  slot: DesignProjectCoreMediaSlot;
  ratio?: string;
  className?: string;
  priority?: boolean;
  captionMode?: "full" | "label" | "side" | "none";
}) {
  const asset = getDesignProjectMediaAsset(project.slug, slot);

  return (
    <figure className={`studio-figure ${className}`} data-caption={captionMode}>
      <ProjectPicture
        projectSlug={project.slug}
        slot={slot}
        sizes="(min-width: 1440px) 1320px, (min-width: 768px) calc(100vw - 5rem), calc(100vw - 2rem)"
        style={ratio ? { aspectRatio: ratio } : undefined}
        priority={priority}
        fallback={
          <DesignProjectCover
            project={project}
            variant={slot === "hero" ? "hero" : slot === "tactile" ? "poster" : "screen"}
            showTitle={false}
            className="absolute inset-0 h-full min-h-0 aspect-auto"
          />
        }
      />
      {captionMode === "none" ? null : (
        <figcaption>
          <span className="studio-meta">{mediaLabels[slot]}</span>
          <span>{asset?.alt ?? `${project.title} project image`}</span>
        </figcaption>
      )}
    </figure>
  );
}

function ProjectEndMatter({ project }: { project: DesignProject }) {
  return (
    <footer className="studio-endmatter">
      <div className="studio-shell studio-endmatter-grid">
        <div>
          <p className="studio-meta">Resolved across</p>
          <h2>{project.title}</h2>
        </div>
        <ol>
          {project.applications.map((application, index) => (
            <li key={application}>
              <span className="studio-meta">{String(index + 1).padStart(2, "0")}</span>
              <span>{application}</span>
            </li>
          ))}
        </ol>
        <p>{project.motion}</p>
      </div>
    </footer>
  );
}

function AdjacentProject({
  project,
  direction,
}: {
  project: DesignProject;
  direction: "previous" | "next";
}) {
  const titleLockup = getProjectTitleLockup(project.slug, project.title);

  return (
    <Link
      to="/poster-studies/$slug"
      params={{ slug: project.slug }}
      className="studio-adjacent-link"
      data-direction={direction}
    >
      <ProjectPicture
        projectSlug={project.slug}
        slot="hero"
        sizes="(min-width: 768px) 50vw, 100vw"
        style={{ aspectRatio: "16 / 9" }}
        decorative
        fallback={
          <DesignProjectCover
            project={project}
            variant="screen"
            showTitle={false}
            className="absolute inset-0 h-full min-h-0 aspect-auto"
          />
        }
      />
      <span className="studio-adjacent-copy">
        <span className="studio-meta">
          {direction === "previous" ? "Previous project" : "Next project"} · {project.index}
        </span>
        <strong lang={project.titleLang}>
          {titleLockup.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </strong>
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

function getHeroShape(ratio: string) {
  const [width, height] = ratio.split("/").map((value) => Number.parseFloat(value.trim()));
  return Number.isFinite(width) && Number.isFinite(height) && width < height
    ? "portrait"
    : "landscape";
}
