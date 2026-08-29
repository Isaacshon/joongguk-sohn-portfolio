import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import {
  getDesignProjectMediaAsset,
  type DesignProjectMediaSlot,
} from "@/lib/design-project-media";
import type { DesignProject } from "@/lib/design-projects";

export function ProjectApplicationGallery({ project }: { project: DesignProject }) {
  return (
    <div className="project-application-gallery">
      <ApplicationBoard project={project} label={project.applications[0]} kind="campaign" />
      <ApplicationBoard project={project} label={project.applications[1]} kind="object" />
      <ApplicationBoard project={project} label={project.applications[2]} kind="screen" />
      <ApplicationBoard project={project} label={project.applications[3]} kind="system" />
    </div>
  );
}

function ApplicationBoard({
  project,
  label,
  kind,
}: {
  project: DesignProject;
  label: string;
  kind: "campaign" | "object" | "screen" | "system";
}) {
  const mediaSlot: Record<typeof kind, DesignProjectMediaSlot> = {
    campaign: "hero",
    object: "tactile",
    screen: "spatial",
    system: "context",
  };
  const proof: Record<typeof kind, string> = {
    campaign: "Claim image",
    object: "Material evidence",
    screen: "Spatial evidence",
    system: "In-world evidence",
  };
  const asset = getDesignProjectMediaAsset(project.slug, mediaSlot[kind]);

  return (
    <figure
      className="project-application-board group relative overflow-hidden bg-[#d8d4ca]"
      data-kind={kind}
      style={{ backgroundColor: project.palette[0].value }}
    >
      <ProjectPicture
        projectSlug={project.slug}
        slot={mediaSlot[kind]}
        sizes="(min-width: 1280px) 54vw, (min-width: 1024px) 58vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
        imageClassName="group-hover:scale-[1.025]"
        fallback={<ApplicationFallback project={project} kind={kind} />}
      />
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[.1] mix-blend-soft-light [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.85)_0_.5px,transparent_.8px),radial-gradient(circle_at_70%_60%,rgba(0,0,0,.2)_0_.45px,transparent_.8px)] [background-size:7px_9px,5px_8px]" />
      <figcaption className="project-application-caption">
        <span className="project-application-caption__copy">
          <span className="project-meta">{proof[kind]}</span>
          <strong>{label}</strong>
          <small>{asset?.alt ?? project.rule}</small>
        </span>
        <span className="project-application-caption__law project-meta">
          One law / {project.rule}
        </span>
      </figcaption>
    </figure>
  );
}

function ApplicationFallback({
  project,
  kind,
}: {
  project: DesignProject;
  kind: "campaign" | "object" | "screen" | "system";
}) {
  return (
    <div className="absolute inset-0 min-h-[22rem] sm:min-h-[30rem]">
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.85)_0_.5px,transparent_.8px),radial-gradient(circle_at_70%_60%,rgba(0,0,0,.2)_0_.45px,transparent_.8px)] [background-size:7px_9px,5px_8px]" />
      {kind === "campaign" ? <CampaignMockup project={project} /> : null}
      {kind === "object" ? <ObjectMockup project={project} /> : null}
      {kind === "screen" ? <ScreenMockup project={project} /> : null}
      {kind === "system" ? <SystemMockup project={project} /> : null}
    </div>
  );
}

function CampaignMockup({ project }: { project: DesignProject }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-[8%]">
      <div className="absolute left-[7%] top-[11%] h-[78%] w-[45%] -rotate-6 shadow-[0_30px_75px_rgba(0,0,0,.28)] transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:-rotate-[8deg]">
        <DesignProjectCover project={project} variant="poster" />
      </div>
      <div className="absolute right-[8%] top-[8%] h-[82%] w-[47%] rotate-3 shadow-[0_34px_80px_rgba(0,0,0,.34)] transition-transform duration-700 ease-out group-hover:translate-x-2 group-hover:rotate-[5deg]">
        <DesignProjectCover project={project} variant="poster" showTitle={false} />
      </div>
    </div>
  );
}

function ObjectMockup({ project }: { project: DesignProject }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center [perspective:1200px]">
      <div className="relative h-[68%] w-[64%] -rotate-3 bg-[#f6f0e4] p-[5%] shadow-[0_35px_80px_rgba(0,0,0,.3)] transition-transform duration-700 ease-out [transform:rotateX(10deg)_rotateY(-8deg)_rotateZ(-3deg)] group-hover:[transform:rotateX(4deg)_rotateY(-3deg)_rotateZ(-1deg)_translateY(-6px)]">
        <DesignProjectCover project={project} variant="screen" />
        <div className="project-meta mt-[5%] flex items-center justify-between text-[clamp(7px,.8vw,10px)] uppercase tracking-[0.15em] text-black/65">
          <span>
            {project.index} / {project.title}
          </span>
          <span>{project.materials[0]}</span>
        </div>
      </div>
      <div
        className="absolute bottom-[8%] right-[5%] h-[32%] w-[31%] rotate-6 border border-black/15 p-[5%] shadow-[0_18px_45px_rgba(0,0,0,.22)]"
        style={{ backgroundColor: project.palette[2].value, color: project.palette[1].value }}
      >
        <p className="project-meta text-[clamp(8px,1vw,12px)] uppercase tracking-[0.13em]">
          Material note
        </p>
        <p className="mt-[18%] text-[clamp(13px,2vw,25px)] font-bold leading-[.9]">
          {project.materials.slice(0, 2).join(" / ")}
        </p>
      </div>
    </div>
  );
}

function ScreenMockup({ project }: { project: DesignProject }) {
  return (
    <div className="absolute inset-[8%] flex items-center justify-center rounded-[1.4rem] bg-[#111] p-[1.8%] shadow-[0_38px_90px_rgba(0,0,0,.38)]">
      <div className="relative h-full w-full overflow-hidden rounded-[.85rem] bg-white">
        <DesignProjectCover project={project} variant="screen" />
        <div className="absolute bottom-[4%] right-[4%] grid min-w-[34%] grid-cols-[1fr_auto] items-center gap-4 bg-black/85 px-[4%] py-[3%] text-white backdrop-blur-sm">
          <div>
            <p className="project-meta text-[clamp(7px,.8vw,10px)] uppercase tracking-[.14em] text-white/55">
              Current state
            </p>
            <p className="mt-1 text-[clamp(10px,1.4vw,18px)] font-semibold">{project.motion}</p>
          </div>
          <span
            className="size-3 animate-pulse rounded-full"
            style={{ backgroundColor: project.palette[2].value }}
          />
        </div>
      </div>
    </div>
  );
}

function SystemMockup({ project }: { project: DesignProject }) {
  return (
    <div className="absolute inset-[8%] grid grid-cols-[1fr_.74fr] gap-[4%]">
      <div className="grid grid-rows-[auto_1fr] bg-[#f4f0e7] p-[7%] text-[#171713] shadow-[0_28px_70px_rgba(0,0,0,.24)]">
        <div className="project-meta flex justify-between border-b border-black/30 pb-[4%] text-[clamp(7px,.8vw,10px)] uppercase tracking-[.14em]">
          <span>System rule</span>
          <span>{project.index}</span>
        </div>
        <div className="flex flex-col justify-between pt-[8%]">
          <p className="project-application-display max-w-[20ch] text-[clamp(22px,4vw,56px)] leading-[.9] tracking-[-.04em]">
            {project.statement}
          </p>
          <p className="max-w-[44ch] text-[clamp(8px,1vw,12px)] leading-relaxed text-black/60">
            {project.rule}
          </p>
        </div>
      </div>
      <div className="grid grid-rows-4 gap-[3%]">
        {project.palette.map((swatch, index) => (
          <div
            key={swatch.name}
            className="project-meta flex items-end justify-between p-[8%] text-[clamp(7px,.8vw,10px)] font-semibold uppercase tracking-[.12em]"
            style={{
              backgroundColor: swatch.value,
              color:
                index === 0 && project.theme === "light"
                  ? project.palette[1].value
                  : index === 1 && project.theme === "dark"
                    ? project.palette[0].value
                    : index > 1
                      ? project.palette[1].value
                      : project.palette[0].value,
            }}
          >
            <span>{swatch.name}</span>
            <span>{swatch.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
