"use client";

import { Link } from "@tanstack/react-router";
import { m } from "framer-motion";
import { useState, type CSSProperties } from "react";
import { BrandMark } from "@/components/poster-studies/BrandMark";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import { getBrandCodeForProject } from "@/lib/brand-registry";
import { getWorkProject, type WorkSelection } from "@/lib/work-gallery";

export function WorkProject({
  selection,
  index,
  kind,
}: {
  selection: WorkSelection;
  index: number;
  kind: "brand" | "personal";
}) {
  const project = getWorkProject(selection.slug);
  const code = getBrandCodeForProject(project.slug);
  const [alternate, setAlternate] = useState(false);
  const [requested, setRequested] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [entered, setEntered] = useState(false);
  const frameStyle = { "--work-ratio": selection.ratio } as CSSProperties;
  const switchImage = () => {
    setRequested(true);
    setAlternate((value) => !value);
  };

  return (
    <m.article
      className={`work-gallery__project work-gallery__project--${selection.placement}`}
      data-work-kind={kind}
      data-work-project={project.slug}
      data-frame={alternate && ready ? "2" : "1"}
      data-entered={entered}
      initial={false}
      onViewportEnter={() => setEntered(true)}
      viewport={{ once: true, margin: "0px 0px -30px 0px" }}
    >
      <Link
        className="work-gallery__image-link"
        to="/poster-studies/$slug"
        params={{ slug: project.slug }}
        aria-label={`View ${project.title} project`}
        style={frameStyle}
      >
        <ProjectPicture
          projectSlug={project.slug}
          slot={selection.slot}
          className="work-gallery__picture"
          sizes="(min-width: 1500px) 850px, (min-width: 768px) 60vw, 100vw"
          priority={kind === "brand" && index < 2}
          focalPoint={selection.focalPoint}
          alt={selection.alt}
          style={{ aspectRatio: "auto" }}
          fallback={
            <span className="work-gallery__image-fallback">
              {project.title}
              <br />
              Open project
            </span>
          }
        />
        {requested && (
          <div
            className="work-gallery__alternate"
            data-visible={alternate && ready}
            aria-hidden="true"
            onLoadCapture={async (event) => {
              const image = event.target;
              if (!(image instanceof HTMLImageElement)) return;
              try {
                await image.decode();
                setReady(true);
                setFailed(false);
              } catch {
                setFailed(true);
              }
            }}
            onErrorCapture={() => setFailed(true)}
          >
            <ProjectPicture
              projectSlug={project.slug}
              slot={selection.alternate}
              className="work-gallery__picture"
              sizes="(min-width: 1500px) 850px, (min-width: 768px) 60vw, 100vw"
              decorative
              priority
              fit="contain"
              style={{ aspectRatio: "auto" }}
            />
          </div>
        )}
        <span className="work-gallery__open-hint" aria-hidden="true">
          View project
        </span>
      </Link>
      <div className="work-gallery__caption">
        <Link
          to="/poster-studies/$slug"
          params={{ slug: project.slug }}
          className="work-gallery__title-link"
        >
          <span className="work-gallery__project-number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 lang={project.titleLang}>
              {kind === "brand" && code ? (
                <>
                  <span className="sr-only">{project.title}</span>
                  <BrandMark code={code} decorative />
                </>
              ) : (
                project.title
              )}
            </h3>
            <p>{selection.category}</p>
          </div>
        </Link>
        <button
          className="work-gallery__frame-button"
          type="button"
          onClick={switchImage}
          aria-label={`Next image — ${project.title}`}
          aria-pressed={alternate}
        >
          <span>
            {alternate && ready ? "02" : "01"}
            <span className="work-gallery__frame-total"> / 02</span>
          </span>
          <span className="work-gallery__frame-action" aria-hidden="true">
            Next image →
          </span>
        </button>
      </div>
      <p className="work-gallery__load-note" role="status">
        {alternate && !ready
          ? failed
            ? "Image unavailable. Original frame shown."
            : "Loading next image…"
          : ""}
      </p>
    </m.article>
  );
}
