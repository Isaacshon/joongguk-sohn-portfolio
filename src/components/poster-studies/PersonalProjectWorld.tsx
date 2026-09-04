import { Link } from "@tanstack/react-router";
import type { ComponentType, CSSProperties } from "react";

import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import { ProjectSignatureModule } from "@/components/poster-studies/ProjectSignatureModules";
import {
  getDesignProjectMediaAsset,
  type DesignProjectMediaSlot,
} from "@/lib/design-project-media";
import { getPersonalProjectWorld, type PersonalProjectWorld } from "@/lib/personal-project-worlds";
import type { DesignProject } from "@/lib/design-projects";
import { getProjectTitleLockup } from "@/lib/project-title-lockups";

import "@/personal-project-worlds.css";
import "@/personal-project-openings.css";
import "@/personal-project-mobile-worlds.css";
import "@/personal-project-motion.css";

type WorldRendererProps = {
  project: DesignProject;
  spec: PersonalProjectWorld;
  slots: readonly DesignProjectMediaSlot[];
};

type WorldChapter = 1 | 2 | 3 | 4;

const eightSlots = [
  "hero",
  "tactile",
  "spatial",
  "context",
  "editorialA",
  "editorialB",
  "editorialC",
  "editorialD",
] as const satisfies readonly DesignProjectMediaSlot[];

const openingMediaByProject: Record<string, DesignProjectMediaSlot> = {
  afterimage: "editorialB",
  "memory-type": "editorialA",
  "field-notes-37": "editorialB",
  "last-letter": "editorialC",
  "tactile-forecast": "editorialB",
  "night-index": "editorialA",
  "public-memory": "editorialD",
  "soft-machine": "editorialA",
  "signal-noise": "editorialD",
  "chroma-tempo": "editorialB",
  "79w": "editorialA",
  tidehold: "editorialD",
  offsort: "editorialA",
  horalis: "editorialB",
  "selv-00": "editorialC",
  "tessera-live": "editorialB",
  backmatter: "editorialA",
  seamframe: "editorialD",
  "two-shores": "editorialC",
  coldkiln: "editorialB",
};

const signatureSlots: Record<string, readonly DesignProjectMediaSlot[]> = {
  afterimage: ["hero", "tactile"],
  "memory-type": ["context"],
  "field-notes-37": ["hero"],
  "last-letter": ["hero"],
  "tactile-forecast": ["tactile"],
  "night-index": ["context", "hero", "spatial"],
  "public-memory": ["spatial"],
  "soft-machine": ["hero", "tactile"],
  "signal-noise": ["context"],
  "chroma-tempo": ["hero", "spatial"],
  "79w": ["spatial"],
  tidehold: ["hero", "spatial"],
  offsort: ["tactile"],
  horalis: ["hero"],
  "selv-00": ["hero", "tactile"],
  "tessera-live": ["hero", "spatial", "context", "tactile"],
  backmatter: ["tactile", "context"],
  seamframe: ["tactile", "hero", "spatial"],
  "two-shores": ["hero", "context"],
  coldkiln: ["tactile", "hero"],
};

const rendererByLayout: Record<string, ComponentType<WorldRendererProps>> = {
  "overprint-bands": OverprintWorld,
  "archive-cards": ArchiveWorld,
  "specimen-dossier": FieldWorld,
  "correspondence-scroll": LetterWorld,
  "material-atlas": MaterialWorld,
  "deco-axis": NightWorld,
  "route-sign": RouteWorld,
  "soft-datum": SoftDatumWorld,
  "signal-console": BroadcastWorld,
  "score-grid": ScoreWorld,
  "westbound-line": JourneyWorld,
  "tide-datum": TideWorld,
  "batch-stack": BatchWorld,
  "circadian-dial": OrbitWorld,
  "pattern-table": PatternWorld,
  "live-nine": LiveNineWorld,
  "evidence-ledger": EvidenceWorld,
  "assembly-grid": AssemblyWorld,
  "paired-ledger": PairedWorld,
  "material-spec": CycleWorld,
};

export function PersonalProjectWorld({ project }: { project: DesignProject }) {
  const spec = getPersonalProjectWorld(project.slug) ?? getPersonalProjectWorld("afterimage");

  if (!spec) return null;

  const Renderer = rendererByLayout[spec.layout] ?? OverprintWorld;
  const openingSlot = openingMediaByProject[project.slug] ?? "editorialA";
  const signatureMedia = new Set([...(signatureSlots[project.slug] ?? []), openingSlot]);
  const remainingSlots = spec.beats
    .map((beat) => beat.slot)
    .filter((slot) => !signatureMedia.has(slot));

  return (
    <article
      className="personal-world"
      data-world-layout={spec.layout}
      data-world-project={project.slug}
      style={
        {
          "--case-panel": "var(--studio-panel)",
          "--case-ink": "var(--studio-ink)",
          "--case-font-body": "var(--studio-body)",
          "--case-font-display": "var(--studio-display)",
        } as CSSProperties
      }
    >
      <WorldOpening project={project} spec={spec} openingSlot={openingSlot} />
      <Renderer project={project} spec={spec} slots={remainingSlots} />
      <WorldSources project={project} label={spec.chapterLabels[3]} />
    </article>
  );
}

function WorldOpening({
  project,
  spec,
  openingSlot,
}: {
  project: DesignProject;
  spec: PersonalProjectWorld;
  openingSlot: DesignProjectMediaSlot;
}) {
  const title = getProjectTitleLockup(project.slug, project.title);
  const chapterTargets = spec.chapterLabels.map((_, index) => `${project.slug}-world-${index + 1}`);

  return (
    <header className="personal-world__opening" id={`${project.slug}-opening`}>
      <div className="personal-world__topline">
        <Link to="/work">← Selected work</Link>
        <span>{project.index} / 20</span>
        <span>{project.discipline}</span>
      </div>
      <div className="personal-world__opening-grid">
        <div className="personal-world__title-group">
          <p>{project.projectLabel}</p>
          <h1 lang={project.titleLang} aria-label={project.title}>
            {title.map((line) => (
              <span key={line} aria-hidden="true">
                {line}
              </span>
            ))}
          </h1>
        </div>
        <div className="personal-world__position">
          <p>{spec.message}</p>
          <p>{spec.worldview}</p>
        </div>
        <WorldFigure
          project={project}
          slot={openingSlot}
          className="personal-world__opening-visual"
          priority
        />
      </div>
      <dl className="personal-world__contract">
        <div>
          <dt>Setting</dt>
          <dd>{spec.setting}</dd>
        </div>
        <div>
          <dt>Core value</dt>
          <dd>{spec.coreValue}</dd>
        </div>
        <div>
          <dt>Tension</dt>
          <dd>{spec.tension}</dd>
        </div>
      </dl>
      <nav className="personal-world__chapters" aria-label={`${project.title} chapters`}>
        {spec.chapterLabels.map((label, index) => (
          <a key={label} href={`#${chapterTargets[index]}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {label}
          </a>
        ))}
      </nav>
      <p className="sr-only">Mobile interaction: {spec.mobileInteraction}</p>
    </header>
  );
}

function WorldFigure({
  project,
  slot,
  className = "",
  priority = false,
  chapter,
  captionChapter,
}: {
  project: DesignProject;
  slot: DesignProjectMediaSlot;
  className?: string;
  priority?: boolean;
  chapter?: WorldChapter;
  captionChapter?: WorldChapter;
}) {
  const asset = getDesignProjectMediaAsset(project.slug, slot);
  const beat = getPersonalProjectWorld(project.slug)?.beats.find((item) => item.slot === slot);

  return (
    <figure
      id={chapter ? `${project.slug}-world-${chapter}` : undefined}
      className={`personal-world__figure ${className}`}
      data-world-slot={slot}
    >
      <ProjectPicture
        projectSlug={project.slug}
        slot={slot}
        sizes="(min-width: 1440px) 1240px, (min-width: 768px) 72vw, 92vw"
        priority={priority}
        fallback={
          <div
            className="personal-world__missing"
            role="img"
            aria-label={beat?.caption ?? asset?.alt ?? `${project.title} ${slot}`}
            style={beat?.ratio ? { aspectRatio: beat.ratio } : undefined}
          >
            <span>{slot.replace("editorial", "frame ")}</span>
          </div>
        }
      />
      <figcaption id={captionChapter ? `${project.slug}-world-${captionChapter}` : undefined}>
        <span>{beat?.label ?? slot.replace("editorial", "frame ")}</span>
        <span>
          <strong>{beat?.title}</strong>
          {beat?.caption ?? asset?.alt ?? `${project.title} visual study`}
        </span>
      </figcaption>
    </figure>
  );
}

function MediaRun({
  project,
  slots,
  className = "",
  chapters = [],
  captionChapters = [],
}: {
  project: DesignProject;
  slots: readonly DesignProjectMediaSlot[];
  className?: string;
  chapters?: readonly (WorldChapter | undefined)[];
  captionChapters?: readonly (WorldChapter | undefined)[];
}) {
  return (
    <div className={`personal-world__media-run ${className}`}>
      {slots.map((slot, index) => (
        <WorldFigure
          key={slot}
          project={project}
          slot={slot}
          priority={index === 0 && slot === "hero"}
          chapter={chapters[index]}
          captionChapter={captionChapters[index]}
        />
      ))}
    </div>
  );
}

function Signature({ project, chapter }: { project: DesignProject; chapter?: WorldChapter }) {
  return (
    <div
      id={chapter ? `${project.slug}-world-${chapter}` : `${project.slug}-signature`}
      className="personal-world__signature"
    >
      <ProjectSignatureModule project={project} />
    </div>
  );
}

function WorldRule({ project, label }: { project: DesignProject; label: string }) {
  return (
    <aside id={`${project.slug}-principle`} className="personal-world__rule">
      <span>{label}</span>
      <p>{project.rule}</p>
    </aside>
  );
}

function chapterAriaLabel(props: WorldRendererProps, chapterIndex: number, context?: string) {
  const chapter = props.spec.chapterLabels[chapterIndex] ?? "Project world";
  return `${props.project.title}: ${chapter}${context ? ` — ${context}` : ""}`;
}

function OverprintWorld(props: WorldRendererProps) {
  const [first, second, ...rest] = props.slots;
  return (
    <div className="world-overprint">
      <section
        id={`${props.project.slug}-world-1`}
        className="world-overprint__plates"
        aria-label={chapterAriaLabel(props, 0, "two-colour exposure plates")}
      >
        <MediaRun project={props.project} slots={[first, second].filter(Boolean)} />
      </section>
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-2`}
        className="world-overprint__drift"
        aria-label={chapterAriaLabel(props, 1, "registration drift")}
      >
        <MediaRun project={props.project} slots={rest.slice(0, 2)} />
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
      </section>
      <section
        id={`${props.project.slug}-world-3`}
        className="world-overprint__public"
        aria-label={chapterAriaLabel(props, 2, "public afterimage")}
      >
        <MediaRun project={props.project} slots={rest.slice(2)} captionChapters={[4]} />
      </section>
    </div>
  );
}

function ArchiveWorld(props: WorldRendererProps) {
  return (
    <div className="world-archive">
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-1`}
        className="world-archive__drawer world-archive__drawer--wide"
        aria-label={chapterAriaLabel(props, 0, "wide collection drawer")}
      >
        <MediaRun project={props.project} slots={props.slots.slice(0, 2)} />
      </section>
      <section
        id={`${props.project.slug}-world-2`}
        className="world-archive__drawer world-archive__drawer--index"
        aria-label={chapterAriaLabel(props, 1, "resident index drawer")}
      >
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
        <MediaRun project={props.project} slots={props.slots.slice(2, 5)} />
      </section>
      <section
        id={`${props.project.slug}-world-3`}
        className="world-archive__drawer world-archive__drawer--return"
        aria-label={chapterAriaLabel(props, 3, "archive returned to the street")}
      >
        <MediaRun project={props.project} slots={props.slots.slice(5)} captionChapters={[4]} />
      </section>
    </div>
  );
}

function FieldWorld(props: WorldRendererProps) {
  return (
    <div className="world-field">
      <section
        id={`${props.project.slug}-world-1`}
        className="world-field__coordinate"
        aria-label={chapterAriaLabel(props, 0, "field coordinates")}
      >
        <MediaRun project={props.project} slots={props.slots.slice(0, 2)} />
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
      </section>
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-2`}
        className="world-field__specimens"
        aria-label={chapterAriaLabel(props, 2, "living specimen record")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(2)}
          chapters={[undefined, 3]}
          captionChapters={[undefined, 4]}
        />
      </section>
    </div>
  );
}

function LetterWorld(props: WorldRendererProps) {
  return (
    <div className="world-letter">
      <section
        id={`${props.project.slug}-world-1`}
        className="world-letter__address"
        aria-label={chapterAriaLabel(props, 0, "the unaddressed draft")}
      >
        <MediaRun project={props.project} slots={props.slots.slice(0, 2)} />
      </section>
      <section
        id={`${props.project.slug}-world-2`}
        className="world-letter__fold"
        aria-label={chapterAriaLabel(props, 1, "the attempted fold and route")}
      >
        <Signature project={props.project} />
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
      </section>
      <section
        id={`${props.project.slug}-world-3`}
        className="world-letter__route"
        aria-label={chapterAriaLabel(props, 2, "return and unopened evidence")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(2)}
          captionChapters={[undefined, undefined, undefined, 4]}
        />
      </section>
    </div>
  );
}

function MaterialWorld(props: WorldRendererProps) {
  return (
    <div className="world-material">
      <section
        id={`${props.project.slug}-world-1`}
        className="world-material__fan"
        aria-label={chapterAriaLabel(props, 0, "material temperature fan")}
      >
        <MediaRun project={props.project} slots={props.slots.slice(0, 3)} />
      </section>
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-2`}
        className="world-material__rake"
        aria-label={chapterAriaLabel(props, 2, "light response and human use")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(3)}
          chapters={[undefined, undefined, 4]}
          captionChapters={[3]}
        />
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
      </section>
    </div>
  );
}

function NightWorld(props: WorldRendererProps) {
  return (
    <div className="world-night">
      <section
        id={`${props.project.slug}-world-1`}
        className="world-night__apertures"
        aria-label={chapterAriaLabel(props, 0, "backstage apertures")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(0, 2)}
          captionChapters={[undefined, 2]}
        />
      </section>
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-3`}
        className="world-night__axis"
        aria-label={chapterAriaLabel(props, 2, "city reflection axis")}
      >
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
        <MediaRun project={props.project} slots={props.slots.slice(2)} chapters={[undefined, 4]} />
      </section>
    </div>
  );
}

function RouteWorld(props: WorldRendererProps) {
  const chapterByStop = [undefined, 2, undefined, 3, undefined, 4] as const;

  return (
    <div className="world-route">
      <div className="world-route__line" aria-hidden="true" />
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-1`}
        className="world-route__stops"
        aria-label={chapterAriaLabel(props, 0, "the public-memory walking route")}
      >
        {props.slots.map((slot, index) => {
          const chapter = chapterByStop[index];

          return (
            <div
              id={chapter ? `${props.project.slug}-world-${chapter}` : undefined}
              className="world-route__stop"
              key={slot}
              data-stop={String(index + 1).padStart(2, "0")}
            >
              <WorldFigure project={props.project} slot={slot} />
            </div>
          );
        })}
      </section>
      <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
    </div>
  );
}

function SoftDatumWorld(props: WorldRendererProps) {
  return (
    <div className="world-datum">
      <div className="world-datum__baseline" aria-hidden="true" />
      <section
        id={`${props.project.slug}-world-1`}
        className="world-datum__states"
        aria-label={chapterAriaLabel(props, 0, "soft material states")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(0, 3)}
          captionChapters={[undefined, undefined, 2]}
        />
      </section>
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-3`}
        className="world-datum__release"
        aria-label={chapterAriaLabel(props, 3, "release from the fixed datum")}
      >
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
        <MediaRun
          project={props.project}
          slots={props.slots.slice(3)}
          captionChapters={[undefined, 4]}
        />
      </section>
    </div>
  );
}

function BroadcastWorld(props: WorldRendererProps) {
  return (
    <div className="world-broadcast">
      <aside className="world-broadcast__channel">LIVE / CH 03 / INFORMATION LOCKED</aside>
      <section
        id={`${props.project.slug}-world-1`}
        className="world-broadcast__screens"
        aria-label={chapterAriaLabel(props, 0, "live signal screens")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(0, 4)}
          captionChapters={[undefined, undefined, undefined, 2]}
        />
      </section>
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-3`}
        className="world-broadcast__decoded"
        aria-label={chapterAriaLabel(props, 3, "decoded signal")}
      >
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
        <MediaRun
          project={props.project}
          slots={props.slots.slice(4)}
          captionChapters={[undefined, 4]}
        />
      </section>
    </div>
  );
}

function ScoreWorld(props: WorldRendererProps) {
  return (
    <div className="world-score">
      <ol className="world-score__beats" aria-label="Four beat score">
        {props.spec.chapterLabels.map((label, index) => (
          <li key={label}>
            <span>0{index + 1}</span>
            {label}
          </li>
        ))}
      </ol>
      <section
        id={`${props.project.slug}-world-1`}
        className="world-score__timeline"
        aria-label={chapterAriaLabel(props, 0, "four-beat visual score")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(0, 3)}
          chapters={[undefined, 2]}
        />
        <Signature project={props.project} />
        <MediaRun project={props.project} slots={props.slots.slice(3)} chapters={[3, 4]} />
      </section>
      <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
    </div>
  );
}

function JourneyWorld(props: WorldRendererProps) {
  return (
    <div className="world-journey">
      <section
        id={`${props.project.slug}-world-1`}
        className="world-journey__track"
        aria-label={chapterAriaLabel(props, 0, "westbound departure track")}
      >
        {props.slots.slice(0, 3).map((slot, index) => (
          <div key={slot} data-mile={index * 37}>
            <WorldFigure
              project={props.project}
              slot={slot}
              captionChapter={index === 2 ? 2 : undefined}
            />
          </div>
        ))}
      </section>
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-3`}
        className="world-journey__arrival"
        aria-label={chapterAriaLabel(props, 3, "arrival and distance")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(3)}
          chapters={[undefined, undefined, 4]}
        />
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
      </section>
    </div>
  );
}

function TideWorld(props: WorldRendererProps) {
  const left = props.slots.filter((_, index) => index % 2 === 0);
  const right = props.slots.filter((_, index) => index % 2 === 1);
  return (
    <div className="world-tide">
      <div className="world-tide__datum" aria-hidden="true">
        <span>WATER / 01</span>
      </div>
      <section
        id={`${props.project.slug}-world-1`}
        className="world-tide__shore"
        aria-label={chapterAriaLabel(props, 0, "host shore")}
      >
        <MediaRun project={props.project} slots={left} />
      </section>
      <section
        id={`${props.project.slug}-world-2`}
        className="world-tide__guest"
        aria-label={chapterAriaLabel(props, 1, "guest shore")}
      >
        <MediaRun
          project={props.project}
          slots={right}
          chapters={[undefined, 4]}
          captionChapters={[3]}
        />
      </section>
      <Signature project={props.project} />
      <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
    </div>
  );
}

function BatchWorld(props: WorldRendererProps) {
  return (
    <div className="world-batch">
      <section
        id={`${props.project.slug}-world-1`}
        className="world-batch__passports"
        aria-label={chapterAriaLabel(props, 0, "batch passports")}
      >
        {props.slots.slice(0, 4).map((slot, index) => (
          <div key={slot} style={{ "--batch-index": index } as CSSProperties}>
            <WorldFigure
              project={props.project}
              slot={slot}
              captionChapter={index === 0 ? 2 : undefined}
            />
          </div>
        ))}
      </section>
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-3`}
        className="world-batch__route"
        aria-label={chapterAriaLabel(props, 3, "return route")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(4)}
          captionChapters={[undefined, 4]}
        />
      </section>
      <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
    </div>
  );
}

function OrbitWorld(props: WorldRendererProps) {
  return (
    <div className="world-orbit">
      <div className="world-orbit__dial" role="img" aria-label="24 hour sequence">
        <span>06</span>
        <span>12</span>
        <strong>24H</strong>
        <span>18</span>
        <span>24</span>
      </div>
      <section
        id={`${props.project.slug}-world-1`}
        className="world-orbit__frames"
        aria-label={chapterAriaLabel(props, 0, "circadian crossing")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(0, 4)}
          captionChapters={[undefined, undefined, undefined, 2]}
        />
      </section>
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-3`}
        className="world-orbit__rest"
        aria-label={chapterAriaLabel(props, 3, "local rest window")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(4)}
          captionChapters={[undefined, 4]}
        />
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
      </section>
    </div>
  );
}

function PatternWorld(props: WorldRendererProps) {
  return (
    <div className="world-pattern">
      <section
        id={`${props.project.slug}-world-1`}
        className="world-pattern__cut"
        aria-label={chapterAriaLabel(props, 0, "base pattern state")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(0, 3)}
          captionChapters={[undefined, undefined, 2]}
        />
      </section>
      <div className="world-pattern__seam">
        <span>/00</span>
        <span>/01</span>
        <span>/02</span>
      </div>
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-3`}
        className="world-pattern__history"
        aria-label={chapterAriaLabel(props, 3, "visible repair history")}
      >
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
        <MediaRun
          project={props.project}
          slots={props.slots.slice(3)}
          captionChapters={[undefined, 4]}
        />
      </section>
    </div>
  );
}

function LiveNineWorld(props: WorldRendererProps) {
  const anchorRooms = [
    { room: "02", phase: props.spec.chapterLabels[0], modifier: "rehearsal" },
    { room: "05", phase: props.spec.chapterLabels[1], modifier: "live" },
    { room: "09", phase: props.spec.chapterLabels[3], modifier: "release" },
  ] as const;

  return (
    <div className="world-nine">
      <Signature project={props.project} chapter={1} />
      <section
        className="world-nine__grid"
        aria-label={chapterAriaLabel(
          props,
          0,
          "three photographic anchors within the nine-room live system",
        )}
      >
        <p className="sr-only">
          Three photographic anchors mark rehearsal, live build, and release within a nine-room
          performing-arts system; the room count does not describe the number of photographs.
        </p>
        {props.slots.map((slot, index) => {
          const anchor = anchorRooms[index] ?? {
            room: String(index + 1).padStart(2, "0"),
            phase: "Programme anchor",
            modifier: "programme",
          };
          const chapter = index === 1 ? 2 : index === 2 ? 3 : undefined;

          return (
            <div
              key={slot}
              id={chapter ? `${props.project.slug}-world-${chapter}` : undefined}
              className={`world-nine__tile world-nine__tile--anchor world-nine__tile--${anchor.modifier}${index === 1 ? " is-live" : ""}`}
              data-room={anchor.room}
              role="group"
              aria-label={`Room ${anchor.room}: ${anchor.phase} photographic anchor`}
            >
              <span className="sr-only">Room {anchor.room}</span>
              <WorldFigure
                project={props.project}
                slot={slot}
                captionChapter={index === 2 ? 4 : undefined}
              />
            </div>
          );
        })}
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
      </section>
    </div>
  );
}

function EvidenceWorld(props: WorldRendererProps) {
  return (
    <div className="world-evidence">
      <section
        id={`${props.project.slug}-world-1`}
        className="world-evidence__frames"
        aria-label={chapterAriaLabel(props, 0, "field evidence frames")}
      >
        <MediaRun
          project={props.project}
          slots={props.slots.slice(0, 3)}
          captionChapters={[undefined, undefined, 2]}
        />
      </section>
      <aside className="world-evidence__ledger">
        <Signature project={props.project} />
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
      </aside>
      <section
        id={`${props.project.slug}-world-3`}
        className="world-evidence__proof"
        aria-label={chapterAriaLabel(props, 2, "verification proof")}
      >
        <MediaRun project={props.project} slots={props.slots.slice(3)} chapters={[undefined, 4]} />
      </section>
    </div>
  );
}

function AssemblyWorld(props: WorldRendererProps) {
  return (
    <div className="world-assembly">
      <ol id={`${props.project.slug}-world-1`} className="world-assembly__steps">
        {props.spec.chapterLabels.map((label, index) => (
          <li key={label}>
            <span>0{index + 1}</span>
            {label}
          </li>
        ))}
      </ol>
      <section
        id={`${props.project.slug}-world-2`}
        className="world-assembly__parts"
        aria-label={chapterAriaLabel(props, 0, "numbered component inventory")}
      >
        <MediaRun project={props.project} slots={props.slots.slice(0, 3)} />
      </section>
      <Signature project={props.project} />
      <section
        id={`${props.project.slug}-world-3`}
        className="world-assembly__building"
        aria-label={chapterAriaLabel(props, 2, "inhabited reversible assembly")}
      >
        <MediaRun project={props.project} slots={props.slots.slice(3)} captionChapters={[4]} />
        <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
      </section>
    </div>
  );
}

function PairedWorld(props: WorldRendererProps) {
  const hasReconciliation = props.slots.length % 2 === 1;
  const reconciliationSlot = hasReconciliation ? props.slots.at(-1) : undefined;
  const pairedSlots = hasReconciliation ? props.slots.slice(0, -1) : props.slots;
  const pairRows = Array.from({ length: pairedSlots.length / 2 }, (_, index) =>
    pairedSlots.slice(index * 2, index * 2 + 2),
  );

  return (
    <div className="world-paired">
      <section
        id={`${props.project.slug}-world-1`}
        className="world-paired__ledger"
        aria-label={chapterAriaLabel(props, 0, "synchronised records across both shores")}
      >
        {pairRows.map(([shoreA, shoreB], index) => (
          <div
            key={`${shoreA}-${shoreB}`}
            id={index === 1 ? `${props.project.slug}-world-2` : undefined}
            className="world-paired__row"
            data-pair-row={String(index + 1).padStart(2, "0")}
            role="group"
            aria-label={`Matched record ${index + 1}: origin and arrival`}
          >
            <div className="world-paired__shore world-paired__shore--a">
              <span>SHORE A / {String(index + 1).padStart(2, "0")}</span>
              {shoreA ? <WorldFigure project={props.project} slot={shoreA} /> : null}
            </div>
            <div className="world-paired__spine world-paired__spine--row" aria-hidden="true">
              <span>A</span>
              <span>↔</span>
              <span>B</span>
            </div>
            <div className="world-paired__shore world-paired__shore--b">
              <span>SHORE B / {String(index + 1).padStart(2, "0")}</span>
              {shoreB ? <WorldFigure project={props.project} slot={shoreB} /> : null}
            </div>
          </div>
        ))}
      </section>
      {reconciliationSlot ? (
        <section
          id={`${props.project.slug}-world-3`}
          className="world-paired__reconciliation"
          aria-label={chapterAriaLabel(props, 3, "full-width reconciliation evidence")}
          style={{ gridColumn: "1 / -1" }}
        >
          <span className="world-paired__reconciliation-label">MATCHED / SHARED RECORD</span>
          <WorldFigure project={props.project} slot={reconciliationSlot} captionChapter={4} />
        </section>
      ) : null}
      <Signature project={props.project} />
      <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
    </div>
  );
}

function CycleWorld(props: WorldRendererProps) {
  const stages = props.spec.chapterLabels;
  const processSlots = props.slots.slice(0, 4);
  const proofSlot = props.slots[4];

  return (
    <div className="world-cycle">
      <section
        className="world-cycle__grid"
        aria-label={chapterAriaLabel(props, 0, "four-stage reversible material cycle")}
      >
        {processSlots.map((slot, index) => (
          <div
            key={slot}
            id={index % 2 === 0 ? `${props.project.slug}-world-${index + 1}` : undefined}
            className={`world-cycle__stage world-cycle__stage--${index + 1}`}
          >
            <span>{stages[index]}</span>
            <WorldFigure
              project={props.project}
              slot={slot}
              captionChapter={index % 2 === 1 ? ((index + 1) as WorldChapter) : undefined}
            />
          </div>
        ))}
      </section>
      {proofSlot ? (
        <section
          className="world-cycle__proof"
          aria-label={chapterAriaLabel(props, 3, "recovered material evidence")}
        >
          <WorldFigure project={props.project} slot={proofSlot} />
        </section>
      ) : null}
      <div className="world-cycle__return" aria-hidden="true">
        PRESS → CURE → INSTALL → RETURN ↺
      </div>
      <Signature project={props.project} />
      <WorldRule project={props.project} label={props.spec.chapterLabels[2]} />
    </div>
  );
}

function WorldSources({ project, label }: { project: DesignProject; label: string }) {
  return (
    <footer className="personal-world__sources">
      <div>
        <span>{label}</span>
        <p>{project.lineage}</p>
      </div>
      <ol>
        {project.references.map((reference, index) => (
          <li key={reference.href}>
            <a href={reference.href} target="_blank" rel="noreferrer">
              <span>{String(index + 1).padStart(2, "0")}</span>
              {reference.label}
            </a>
          </li>
        ))}
      </ol>
    </footer>
  );
}
