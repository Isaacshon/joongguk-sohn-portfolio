import { useMemo, type ReactNode } from "react";
import { ProjectImageGallery } from "./ProjectImageGallery";
import {
  designProjectMediaSlots,
  getDesignProjectMediaAsset,
  type DesignProjectMediaSlot,
} from "@/lib/design-project-media";
import { getBrandPavilion } from "@/lib/brand-pavilions";
import type { DesignProject } from "@/lib/design-projects";

export function BrandProjectGallery({
  project,
  children,
}: {
  project: DesignProject;
  children: ReactNode;
}) {
  const spec = useMemo(() => {
    const pavilion = getBrandPavilion(project.slug);
    const captions = pavilion
      ? [
          ...pavilion.needs.images,
          pavilion.principles.image,
          pavilion.design.image,
          ...pavilion.world.scenes,
        ]
      : [];
    // Match Polo's editorial chapters rather than jumping around in asset-file order.
    const scenes = pavilion?.world.scenes ?? [];
    const preferred: DesignProjectMediaSlot[] =
      pavilion?.code === "polo"
        ? [
            "spatial",
            ...pavilion.needs.images.map((item) => item.slot),
            pavilion.principles.image.slot,
            scenes[6]?.slot,
            pavilion.design.image.slot,
            scenes[3]?.slot,
            ...[5, 7, 8, 4, 0, 1, 9, 10, 11, 2, 12, 13, 14].map((index) => scenes[index]?.slot),
          ].filter((slot): slot is DesignProjectMediaSlot => Boolean(slot))
        : ["hero", ...captions.map((item) => item.slot)];
    const orderedSlots = [...new Set([...preferred, ...designProjectMediaSlots])];
    return {
      beats: orderedSlots.flatMap((slot, index) => {
        const asset = getDesignProjectMediaAsset(project.slug, slot);
        if (!asset) return [];
        return [
          {
            slot,
            label: `Frame ${String(index + 1).padStart(2, "0")}`,
            title: project.title,
            caption: asset.alt,
            ratio: `${asset.width} / ${asset.height}`,
          },
        ];
      }),
    };
  }, [project.slug, project.title]);
  return (
    <ProjectImageGallery project={project} spec={spec}>
      {children}
    </ProjectImageGallery>
  );
}
