import { lazy, Suspense, type ComponentType } from "react";

import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import { designProjectCount, type DesignProject } from "@/lib/design-projects";

type VisualModule = Promise<{ default: ComponentType }>;

const visualLoaders: Record<string, () => VisualModule> = {
  afterimage: () =>
    import("./PosterWorlds").then((module) => ({ default: module.AfterimageWorld })),
  "memory-type": () =>
    import("./PosterWorlds").then((module) => ({ default: module.MemoryTypeWorld })),
  "field-notes-37": () =>
    import("./PosterWorlds").then((module) => ({ default: module.FieldNotesWorld })),
  "last-letter": () =>
    import("./PosterWorlds").then((module) => ({ default: module.LastLetterWorld })),
  "tactile-forecast": () =>
    import("./PosterWorlds").then((module) => ({ default: module.TactileWorld })),
  "night-index": () =>
    import("./PosterWorlds").then((module) => ({ default: module.NightIndexWorld })),
  "public-memory": () =>
    import("./PosterWorlds").then((module) => ({ default: module.PublicMemoryWorld })),
  "soft-machine": () =>
    import("./PosterWorlds").then((module) => ({ default: module.SoftMachineWorld })),
  "signal-noise": () =>
    import("./PosterWorlds").then((module) => ({ default: module.SignalNoiseWorld })),
  "chroma-tempo": () =>
    import("./PosterWorlds").then((module) => ({ default: module.ChromaTempoWorld })),
  "79w": () =>
    import("./BrandWorldsConsumer").then((module) => ({ default: module.SeventyNineWorld })),
  tidehold: () =>
    import("./BrandWorldsConsumer").then((module) => ({ default: module.TideholdWorld })),
  offsort: () =>
    import("./BrandWorldsConsumer").then((module) => ({ default: module.OffsortWorld })),
  horalis: () =>
    import("./BrandWorldsConsumer").then((module) => ({ default: module.HoralisWorld })),
  "selv-00": () =>
    import("./BrandWorldsConsumer").then((module) => ({ default: module.SelvWorld })),
  "tessera-live": () =>
    import("./BrandWorldsCivic").then((module) => ({ default: module.TesseraLiveWorld })),
  backmatter: () =>
    import("./BrandWorldsCivic").then((module) => ({ default: module.BackmatterWorld })),
  seamframe: () =>
    import("./BrandWorldsCivic").then((module) => ({ default: module.SeamframeWorld })),
  "two-shores": () =>
    import("./BrandWorldsCivic").then((module) => ({ default: module.TwoShoresWorld })),
  coldkiln: () =>
    import("./BrandWorldsCivic").then((module) => ({ default: module.ColdkilnWorld })),
};

const visualRegistry = Object.fromEntries(
  Object.entries(visualLoaders).map(([slug, loader]) => [slug, lazy(loader)]),
) as Record<string, ComponentType>;

export function ProjectVisual({ project }: { project: DesignProject }) {
  return (
    <div className="project-visual-grid">
      <ProjectPicture
        projectSlug={project.slug}
        slot="spatial"
        sizes="(min-width: 1536px) 980px, (min-width: 1024px) 65vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
        imageClassName="hover:scale-[1.012]"
        fallback={<LegacyProjectVisual project={project} />}
      />
      <div className="project-visual-secondary">
        <ProjectPicture
          projectSlug={project.slug}
          slot="tactile"
          sizes="(min-width: 1536px) 480px, (min-width: 1024px) 32vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
          imageClassName="hover:scale-[1.02]"
          fallback={
            <DesignProjectCover
              project={project}
              variant="screen"
              showTitle={false}
              className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
            />
          }
        />
        <div className="project-material-register">
          <div className="project-material-register__meta project-meta">
            <span>Material register</span>
            <span>
              {project.index} / {designProjectCount}
            </span>
          </div>
          <p className="project-material-register__title">
            {project.materials.slice(0, 2).join(" / ")}
          </p>
          <div className="grid grid-cols-4 gap-1" aria-label={`${project.title} colour palette`}>
            {project.palette.map((swatch) => (
              <span
                key={swatch.name}
                className="h-3"
                style={{ backgroundColor: swatch.value }}
                title={`${swatch.name}: ${swatch.value}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LegacyProjectVisual({ project }: { project: DesignProject }) {
  const Visual = visualRegistry[project.slug];

  if (!Visual) {
    return <VisualFallback project={project} />;
  }

  return (
    <Suspense fallback={<VisualFallback project={project} />}>
      <Visual />
    </Suspense>
  );
}

function VisualFallback({ project }: { project: DesignProject }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black/[0.04]">
      <DesignProjectCover
        project={project}
        variant="hero"
        className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
      />
      <div className="absolute inset-x-0 bottom-0 h-1 origin-left animate-pulse bg-current opacity-30" />
    </div>
  );
}
