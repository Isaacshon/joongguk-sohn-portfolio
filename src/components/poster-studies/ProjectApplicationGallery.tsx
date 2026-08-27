import { DesignProjectCover } from "@/components/poster-studies/DesignProjectCover";
import type { DesignProject } from "@/lib/design-projects";

export function ProjectApplicationGallery({ project }: { project: DesignProject }) {
  const layout = Number(project.index) % 4;

  return (
    <div className="space-y-4 md:space-y-6">
      <div
        className={`grid gap-4 md:gap-6 ${
          layout === 0 || layout === 3
            ? "lg:grid-cols-[1.28fr_0.72fr]"
            : "lg:grid-cols-[0.78fr_1.22fr]"
        }`}
      >
        <ApplicationBoard project={project} label={project.applications[0]} kind="campaign" />
        <ApplicationBoard project={project} label={project.applications[1]} kind="object" />
      </div>
      <div
        className={`grid gap-4 md:gap-6 ${
          layout === 1 || layout === 2
            ? "lg:grid-cols-[1.18fr_0.82fr]"
            : "lg:grid-cols-[0.72fr_1.28fr]"
        }`}
      >
        <ApplicationBoard project={project} label={project.applications[2]} kind="screen" />
        <ApplicationBoard project={project} label={project.applications[3]} kind="system" />
      </div>
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
  return (
    <figure
      className="group relative min-h-[22rem] overflow-hidden bg-[#d8d4ca] sm:min-h-[30rem]"
      style={{ backgroundColor: project.palette[0].value }}
    >
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.85)_0_.5px,transparent_.8px),radial-gradient(circle_at_70%_60%,rgba(0,0,0,.2)_0_.45px,transparent_.8px)] [background-size:7px_9px,5px_8px]" />
      {kind === "campaign" ? <CampaignMockup project={project} /> : null}
      {kind === "object" ? <ObjectMockup project={project} /> : null}
      {kind === "screen" ? <ScreenMockup project={project} /> : null}
      {kind === "system" ? <SystemMockup project={project} /> : null}
      <figcaption className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-5 pb-4 pt-16 text-white sm:px-6 sm:pb-5">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]">{label}</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] opacity-65">
          {project.index} / application
        </span>
      </figcaption>
    </figure>
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
        <div className="mt-[5%] flex items-center justify-between font-mono text-[clamp(6px,.8vw,10px)] uppercase tracking-[0.15em] text-black/65">
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
        <p className="font-mono text-[clamp(7px,1vw,12px)] uppercase tracking-[0.13em]">
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
            <p className="font-mono text-[clamp(6px,.8vw,10px)] uppercase tracking-[.14em] text-white/55">
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
        <div className="flex justify-between border-b border-black/30 pb-[4%] font-mono text-[clamp(6px,.8vw,10px)] uppercase tracking-[.14em]">
          <span>System rule</span>
          <span>{project.index}</span>
        </div>
        <div className="flex flex-col justify-between pt-[8%]">
          <p className="max-w-[20ch] font-serif text-[clamp(22px,4vw,56px)] italic leading-[.9] tracking-[-.04em]">
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
            className="flex items-end justify-between p-[8%] font-mono text-[clamp(6px,.8vw,10px)] font-semibold uppercase tracking-[.12em]"
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
