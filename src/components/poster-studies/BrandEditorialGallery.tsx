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
      aria-label={`${project.brandStudy.brand} project editorial sequence`}
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
      aria-label={`${project.brandStudy.brand} project masthead`}
    >
      <span className="brand-identity-layer__wordmark">{project.brandStudy.brand}</span>
      <span className="brand-identity-layer__meta project-meta">
        Project masthead / {project.index} / 2026
      </span>
    </div>
  );
}

export function BrandProjectStatusBand({ project }: { project: DesignProject }) {
  if (!project.brandStudy) return null;

  const { brand } = project.brandStudy;

  return (
    <aside className="brand-status-band" aria-label="가상 프로젝트 안내">
      <div className="project-shell brand-status-band__inner">
        <p className="brand-status-band__status" lang="ko">
          가상 프로젝트
        </p>
        <p className="brand-status-band__disclaimer">
          포트폴리오를 위해 제작한 비공식 디자인 프로젝트로, {brand} 또는 관련 회사의
          의뢰·승인·후원을 받은 작업이 아닙니다. 상표권은 각 권리자에게 있으며, 이미지는 비상업적
          디자인 연구를 위해 AI의 도움을 받아 제작했습니다.
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
