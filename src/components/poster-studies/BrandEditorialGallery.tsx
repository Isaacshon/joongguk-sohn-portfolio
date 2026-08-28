import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import { getBrandEditorialExtras } from "@/lib/brand-editorial";
import type { DesignProjectMediaSlot } from "@/lib/design-project-media";
import type { DesignProject } from "@/lib/design-projects";

type EditorialFrame = {
  slot: DesignProjectMediaSlot;
  eyebrow: string;
  title: string;
  note: string;
};

export function BrandEditorialGallery({ project }: { project: DesignProject }) {
  if (!project.brandStudy) return null;

  const coreFrames: EditorialFrame[] = [
    {
      slot: "hero",
      eyebrow: "Campaign premise",
      title: project.applications[0] ?? "Opening image",
      note: project.statement,
    },
    {
      slot: "tactile",
      eyebrow: "Material evidence",
      title: project.materials.slice(0, 2).join(" / "),
      note: project.materials.slice(2).join(" / "),
    },
    {
      slot: "spatial",
      eyebrow: "Spatial system",
      title: project.applications[1] ?? "Physical application",
      note: project.challenge,
    },
    {
      slot: "context",
      eyebrow: "Context + motion",
      title: project.applications[3] ?? "Public context",
      note: project.motion,
    },
  ];
  const extras = getBrandEditorialExtras(project.slug);
  const frames: readonly EditorialFrame[] = [
    coreFrames[0],
    ...extras.slice(0, 1),
    coreFrames[1],
    ...extras.slice(1, 2),
    coreFrames[2],
    ...extras.slice(2),
    coreFrames[3],
  ];

  return (
    <div
      className="brand-editorial-gallery"
      aria-label={`${project.brandStudy.brand} unofficial concept editorial sequence`}
    >
      <div className="brand-editorial-gallery__intro">
        <BrandIdentityLayer project={project} placement="editorial" />
        <p className="brand-editorial-gallery__label project-meta">
          {frames.length}-image editorial sequence
        </p>
        <p className="brand-editorial-gallery__summary">
          One visual world, resolved across campaign, material, space, editorial, and motion.
        </p>
      </div>

      <div className="brand-editorial-gallery__grid">
        {frames.map((frame, index) => (
          <figure
            key={frame.slot}
            className="brand-editorial-frame"
            data-editorial-slot={frame.slot}
            data-sequence={index + 1}
            data-frame-kind={frame.slot.startsWith("editorial") ? "extra" : "core"}
          >
            <ProjectPicture
              projectSlug={project.slug}
              slot={frame.slot}
              sizes="(min-width: 1280px) 72vw, (min-width: 768px) calc(100vw - 5rem), calc(100vw - 2.5rem)"
              imageClassName="brand-editorial-frame__image"
              fallback={
                <DesignProjectCover
                  project={project}
                  variant={getFallbackVariant(frame.slot)}
                  showTitle={index === 0}
                  className="!absolute !inset-0 !h-full !min-h-0 !aspect-auto"
                />
              }
            />
            <figcaption className="brand-editorial-frame__caption">
              <span className="brand-editorial-frame__number project-meta">
                {String(index + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}
              </span>
              <span className="brand-editorial-frame__copy">
                <span className="brand-editorial-frame__eyebrow project-meta">{frame.eyebrow}</span>
                <strong>{frame.title}</strong>
                <span>{frame.note}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function BrandIdentityLayer({
  project,
  placement,
}: {
  project: DesignProject;
  placement: "hero" | "editorial";
}) {
  if (!project.brandStudy) return null;

  return (
    <div
      className="brand-identity-layer"
      data-brand={project.slug}
      data-placement={placement}
      aria-label={`${project.brandStudy.brand} concept masthead`}
    >
      <span className="brand-identity-layer__wordmark">{project.brandStudy.brand}</span>
      <span className="brand-identity-layer__meta project-meta">
        Concept masthead / {project.index} / 2026
      </span>
    </div>
  );
}

export function BrandProjectStatusBand({ project }: { project: DesignProject }) {
  if (!project.brandStudy) return null;

  const { brand } = project.brandStudy;

  return (
    <aside className="brand-status-band" aria-label="Project relationship and image-use status">
      <div className="project-shell brand-status-band__inner">
        <div className="brand-status-band__heading">
          <p className="brand-status-band__label project-meta">Project status / 2026</p>
          <p className="brand-status-band__status">Independent conceptual study</p>
        </div>
        <p className="brand-status-band__disclaimer">
          {project.title} is an independent, self-initiated conceptual project created by Isaac Sohn
          for portfolio purposes. It was not commissioned, endorsed, sponsored, or approved by{" "}
          {brand} or its affiliated companies. {brand} and related trademarks remain the property of
          their respective owners. AI-assisted imagery is used solely for non-commercial design
          exploration.
        </p>
      </div>
    </aside>
  );
}

function getFallbackVariant(slot: DesignProjectMediaSlot): "hero" | "poster" | "screen" {
  if (slot === "hero") return "hero";
  if (["spatial", "context", "editorialB", "editorialD", "editorialF"].includes(slot)) {
    return "screen";
  }
  return "poster";
}
