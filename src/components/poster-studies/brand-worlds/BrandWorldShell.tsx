import { Link } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";

import { MatLayout } from "@/components/MatLayout";
import { BrandMark } from "@/components/poster-studies/BrandMark";
import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import { getDesignProjectArtDirection } from "@/lib/design-project-art-direction";
import {
  getDesignProjectMediaAsset,
  type DesignProjectMediaSlot,
} from "@/lib/design-project-media";
import type { BrandPavilionProfile } from "@/lib/brand-pavilions";
import { designProjects, type DesignProject } from "@/lib/design-projects";

import styles from "./BrandWorldShell.module.css";

type BrandWorldStyle = CSSProperties & Record<`--world-${string}`, string | number>;

export type BrandWorldProps = {
  project: DesignProject;
  pavilion: BrandPavilionProfile;
};

export type BrandWorldNavigationItem = {
  id: string;
  label: string;
};

export function BrandWorldPicture({
  project,
  slot,
  sizes,
  className,
  imageClassName,
  focalPoint,
  priority = false,
  fit = "cover",
  showContinuity = false,
}: {
  project: DesignProject;
  slot: DesignProjectMediaSlot;
  sizes: string;
  className?: string;
  imageClassName?: string;
  focalPoint?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  showContinuity?: boolean;
}) {
  const continuity = getDesignProjectMediaAsset(project.slug, slot)?.continuity;
  const objectLabel = continuity
    ? `${continuity.objectIds.slice(0, 2).join(" + ")}${
        continuity.objectIds.length > 2 ? ` +${continuity.objectIds.length - 2}` : ""
      }`
    : "";

  return (
    <ProjectPicture
      projectSlug={project.slug}
      slot={slot}
      sizes={sizes}
      className={className}
      imageClassName={imageClassName}
      focalPoint={focalPoint}
      priority={priority}
      fit={fit}
      overlay={
        continuity && showContinuity ? (
          <div
            className={styles.continuityTag}
            data-source-basis={continuity.sourceBasis}
            role="note"
            aria-label={`Visual continuity ${continuity.beat}. Objects: ${continuity.objectIds.join(
              ", ",
            )}. Cast: ${continuity.castIds.join(", ") || "object-only"}. Wardrobe: ${
              continuity.wardrobeIds.join(", ") || "not applicable"
            }. State: ${continuity.state}. Required evidence: ${continuity.visualProof}`}
          >
            <span className={styles.continuityMeta}>
              <b>{continuity.beat}</b>
              <i>
                {continuity.sourceBasis === "official-object/project-sequence"
                  ? "Official anchor / independent sequence"
                  : "Independent project reading"}
              </i>
            </span>
            <strong>{objectLabel}</strong>
            <small>
              {continuity.state}
              {continuity.returnsTo ? ` / returns to ${continuity.returnsTo}` : ""}
            </small>
          </div>
        ) : null
      }
      fallback={
        <DesignProjectCover
          project={project}
          variant={slot === "hero" || slot.startsWith("editorial") ? "poster" : "screen"}
          className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
        />
      }
    />
  );
}

export function BrandWorldShell({
  project,
  pavilion,
  className,
  children,
}: BrandWorldProps & {
  navigation: readonly BrandWorldNavigationItem[];
  className: string;
  children: ReactNode;
}) {
  const direction = getDesignProjectArtDirection(project);
  const brandProjects = designProjects.filter((candidate) => candidate.brandStudy);
  const currentIndex = brandProjects.findIndex((candidate) => candidate.slug === project.slug);
  const previous = brandProjects[(currentIndex - 1 + brandProjects.length) % brandProjects.length];
  const next = brandProjects[(currentIndex + 1) % brandProjects.length];
  const style: BrandWorldStyle = {
    "--world-paper": direction.surfaces.paper,
    "--world-ink": direction.surfaces.ink,
    "--world-panel": direction.surfaces.panel,
    "--world-dark": direction.surfaces.dark,
    "--world-light": direction.surfaces.light,
    "--world-accent": direction.surfaces.accent,
    "--world-display": direction.fonts.display,
    "--world-accent-font": direction.fonts.accent,
    "--world-body": direction.fonts.body,
    "--world-meta": direction.fonts.meta,
  };

  return (
    <MatLayout immersive surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <article
        className={`${styles.world} ${className}`}
        data-brand={pavilion.code}
        data-project={project.slug}
        style={style}
      >
        <nav className={styles.topbar} aria-label={`${project.title} project navigation`}>
          <Link to="/work" className={styles.backLink}>
            <span aria-hidden="true">&larr;</span> Work
          </Link>
          <a
            href="#world-top"
            className={styles.brandHome}
            aria-label={`Back to ${project.title} introduction`}
          >
            <BrandMark code={pavilion.code} decorative />
          </a>
          <span className={styles.topbarSpacer} aria-hidden="true" />
        </nav>

        {children}

        <section className={styles.research} aria-labelledby={`${pavilion.code}-research-heading`}>
          <div className={styles.researchLead}>
            <p>Sources</p>
            <h2 id={`${pavilion.code}-research-heading`}>Official references</h2>
          </div>
          <div className={styles.researchBody}>
            <p>
              Primary materials consulted for factual brand, product, and design-history anchors.
            </p>
            <ol>
              {pavilion.sources.map((source, index) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{source.label}</strong>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <nav className={styles.adjacent} aria-label="Adjacent brand projects">
          <BrandWorldLink project={previous} direction="Previous" />
          <BrandWorldLink project={next} direction="Next" />
        </nav>

        <footer className={styles.disclosure}>
          <strong lang="ko">{"\uac00\uc0c1 \ud504\ub85c\uc81d\ud2b8"}</strong>
          <small lang="ko">
            {"\ube44\uacf5\uc2dd \uac00\uc0c1 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4."}
          </small>
          <small>
            Independent unofficial concept by Isaac Sohn. Not commissioned, sponsored, approved, or
            endorsed by {project.title}.
          </small>
        </footer>
      </article>
    </MatLayout>
  );
}

function BrandWorldLink({
  project,
  direction,
}: {
  project: DesignProject;
  direction: "Previous" | "Next";
}) {
  return (
    <Link to="/poster-studies/$slug" params={{ slug: project.slug }}>
      <span>{direction}</span>
      <strong>{project.title}</strong>
      <span aria-hidden="true">{direction === "Previous" ? "<-" : "->"}</span>
    </Link>
  );
}
