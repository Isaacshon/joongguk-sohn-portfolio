import { lazy, Suspense, type ComponentType } from "react";

import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import type { DesignProject } from "@/lib/design-projects";

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
  const Visual = visualRegistry[project.slug];

  if (!Visual) {
    return <DesignProjectCover project={project} variant="hero" />;
  }

  return (
    <Suspense fallback={<VisualFallback project={project} />}>
      <Visual />
    </Suspense>
  );
}

function VisualFallback({ project }: { project: DesignProject }) {
  return (
    <div className="relative overflow-hidden bg-black/[0.04]">
      <DesignProjectCover project={project} variant="hero" />
      <div className="absolute inset-x-0 bottom-0 h-1 origin-left animate-pulse bg-current opacity-30" />
    </div>
  );
}
