/* eslint-disable react-refresh/only-export-components -- this module intentionally exports the renderer registry with its components */
import type { ComponentType, CSSProperties, ReactNode } from "react";

import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import type { DesignProjectCoreMediaSlot } from "@/lib/design-project-media";
import type { DesignProject } from "@/lib/design-projects";

import "@/project-signature-modules.css";

type SignatureProps = {
  project: DesignProject;
};

type SignatureRenderer = ComponentType<SignatureProps>;

type SignatureStyle = CSSProperties & {
  "--signature-paper": string;
  "--signature-ink": string;
  "--signature-a": string;
  "--signature-b": string;
  "--signature-c": string;
};

const pictureSizes = "(min-width: 1440px) 52vw, (min-width: 768px) 64vw, 100vw";

function getSignatureStyle(project: DesignProject): SignatureStyle {
  const isDark = project.theme === "dark";

  return {
    "--signature-paper": isDark ? "#11110f" : "#f3efe6",
    "--signature-ink": isDark ? "#f4f0e7" : "#11110f",
    "--signature-a": project.palette[0]?.value ?? (isDark ? "#d9ff45" : "#c7382a"),
    "--signature-b": project.palette[1]?.value ?? (isDark ? "#f4f0e7" : "#1e3656"),
    "--signature-c": project.palette[2]?.value ?? (isDark ? "#6c78ff" : "#c9b996"),
  };
}

function SignaturePicture({
  project,
  slot,
  className = "",
  aspectRatio,
}: {
  project: DesignProject;
  slot: DesignProjectCoreMediaSlot;
  className?: string;
  aspectRatio?: string;
}) {
  return (
    <ProjectPicture
      projectSlug={project.slug}
      slot={slot}
      sizes={pictureSizes}
      className={`signature-picture ${className}`.trim()}
      style={aspectRatio ? { aspectRatio } : undefined}
    />
  );
}

function SignatureHeading({
  project,
  eyebrow,
  title,
}: {
  project: DesignProject;
  eyebrow: string;
  title: string;
}) {
  return (
    <header className="signature-heading">
      <p>{eyebrow}</p>
      <h3 id={`${project.slug}-signature-title`}>{title}</h3>
      <span>{project.index} / 20</span>
    </header>
  );
}

function itemAt(items: readonly string[], index: number, fallback: string) {
  return items[index] ?? fallback;
}

function SignatureSection({
  project,
  signature,
  className,
  children,
}: SignatureProps & {
  signature: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`project-signature ${className}`}
      data-signature={signature}
      aria-labelledby={`${project.slug}-signature-title`}
    >
      {children}
    </section>
  );
}

export function AfterimagePlateRegistration({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="plate-registration" className="signature--plate">
      <SignatureHeading
        project={project}
        eyebrow="Plate registration / 02 passes"
        title="The error is the image."
      />
      <div className="signature-plate__spread">
        <figure className="signature-figure signature-plate__key">
          <SignaturePicture project={project} slot="hero" aspectRatio="4 / 5" />
          <figcaption>Plate A / cobalt image</figcaption>
        </figure>
        <figure className="signature-figure signature-plate__proof">
          <SignaturePicture project={project} slot="tactile" aspectRatio="4 / 3" />
          <figcaption>Plate B / fluorescent proof</figcaption>
        </figure>
      </div>
      <div className="signature-plate__register" aria-label="Registration rule">
        <strong>00</strong>
        <span>aligned</span>
        <span aria-hidden="true" />
        <strong>04</strong>
        <span>maximum drift</span>
      </div>
    </SignatureSection>
  );
}

export function MemoryTypeGlyphSource({ project }: SignatureProps) {
  const glyphs = project.title.replace(/\s/g, "").slice(0, 4).split("");

  return (
    <SignatureSection project={project} signature="glyph-source" className="signature--glyph">
      <SignatureHeading
        project={project}
        eyebrow="Glyph source / neighbourhood archive"
        title="A letter keeps the hand that made it."
      />
      <figure className="signature-glyph__source">
        <SignaturePicture project={project} slot="context" aspectRatio="3 / 4" />
        <figcaption>{project.description}</figcaption>
      </figure>
      <div className="signature-glyph__specimens" aria-label="Collected glyph specimens">
        {glyphs.map((glyph, index) => (
          <article key={`${glyph}-${index}`}>
            <span>0{index + 1}</span>
            <strong lang="ko">{glyph}</strong>
          </article>
        ))}
      </div>
    </SignatureSection>
  );
}

export function FieldNotesSpecimenCoordinate({ project }: SignatureProps) {
  return (
    <SignatureSection
      project={project}
      signature="specimen-coordinate"
      className="signature--coordinate"
    >
      <SignatureHeading
        project={project}
        eyebrow="Specimen coordinate / field record 37"
        title="Observation begins at the seam."
      />
      <figure className="signature-coordinate__field">
        <SignaturePicture project={project} slot="hero" aspectRatio="16 / 10" />
        <figcaption>43.6532° N / 79.3832° W / rain-darkened masonry</figcaption>
      </figure>
      <dl className="signature-coordinate__ledger">
        <div>
          <dt>Site</dt>
          <dd>{itemAt(project.materials, 0, "Urban seam")}</dd>
        </div>
        <div>
          <dt>Sample</dt>
          <dd>{itemAt(project.materials, 1, "Living trace")}</dd>
        </div>
        <div>
          <dt>Method</dt>
          <dd>{project.rule}</dd>
        </div>
      </dl>
    </SignatureSection>
  );
}

export function LastLetterFoldLine({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="fold-line" className="signature--fold">
      <SignatureHeading
        project={project}
        eyebrow="Fold line / undelivered copy"
        title="The crease is a form of memory."
      />
      <div className="signature-fold__sheet">
        <figure className="signature-figure">
          <SignaturePicture project={project} slot="hero" aspectRatio="5 / 4" />
          <figcaption>Waiting room / final collection</figcaption>
        </figure>
        <blockquote>
          <p>{project.statement}</p>
          <footer>{project.motion}</footer>
        </blockquote>
      </div>
      <ol className="signature-fold__route">
        <li>
          <span>01</span>Written
        </li>
        <li>
          <span>02</span>Folded
        </li>
        <li>
          <span>03</span>Unsent
        </li>
      </ol>
    </SignatureSection>
  );
}

export function TactileForecastPressureScale({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="pressure-scale" className="signature--pressure">
      <SignatureHeading
        project={project}
        eyebrow="Pressure scale / material forecast"
        title="Touch arrives before colour."
      />
      <figure className="signature-pressure__surface">
        <SignaturePicture project={project} slot="tactile" aspectRatio="3 / 2" />
        <figcaption>{project.typography}</figcaption>
      </figure>
      <div className="signature-pressure__meter">
        <span>soft / 01</span>
        <i aria-hidden="true" />
        <strong>08.6</strong>
        <span>firm / 10</span>
      </div>
      <p className="signature-pressure__rule">{project.rule}</p>
    </SignatureSection>
  );
}

export function NightIndexArchCrop({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="arch-crop" className="signature--arch">
      <SignatureHeading
        project={project}
        eyebrow="Arch crop / blue-hour index"
        title="Night is edited by aperture."
      />
      <div className="signature-arch__sequence">
        <figure>
          <SignaturePicture project={project} slot="context" aspectRatio="3 / 5" />
          <figcaption>18:42</figcaption>
        </figure>
        <figure>
          <SignaturePicture project={project} slot="hero" aspectRatio="3 / 5" />
          <figcaption>19:07</figcaption>
        </figure>
        <figure>
          <SignaturePicture project={project} slot="spatial" aspectRatio="3 / 5" />
          <figcaption>19:31</figcaption>
        </figure>
      </div>
      <p className="signature-arch__note">{project.statement}</p>
    </SignatureSection>
  );
}

export function PublicMemoryRouteMap({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="route-map" className="signature--route-map">
      <SignatureHeading
        project={project}
        eyebrow="Route map / public memory"
        title="A place is read while moving."
      />
      <figure className="signature-route-map__place">
        <SignaturePicture project={project} slot="spatial" aspectRatio="16 / 9" />
        <figcaption>{project.response}</figcaption>
      </figure>
      <ol className="signature-route-map__stops">
        {project.applications.slice(0, 4).map((application, index) => (
          <li key={application}>
            <span>0{index + 1}</span>
            <strong>{application}</strong>
          </li>
        ))}
      </ol>
    </SignatureSection>
  );
}

export function SoftMachineDeformationDatum({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="deformation-datum" className="signature--datum">
      <SignatureHeading
        project={project}
        eyebrow="Deformation datum / pressure sample"
        title="The form moves. The datum stays."
      />
      <div className="signature-datum__stage">
        <figure>
          <SignaturePicture project={project} slot="hero" aspectRatio="4 / 5" />
          <figcaption>Unloaded / 00</figcaption>
        </figure>
        <figure>
          <SignaturePicture project={project} slot="tactile" aspectRatio="4 / 5" />
          <figcaption>Memory / 08</figcaption>
        </figure>
      </div>
      <div className="signature-datum__baseline">
        <span>fixed datum</span>
        <strong>{project.motion}</strong>
      </div>
    </SignatureSection>
  );
}

export function SignalNoiseChannelMixer({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="channel-mixer" className="signature--mixer">
      <SignatureHeading
        project={project}
        eyebrow="Channel mixer / signal desk"
        title="Meaning survives the interference."
      />
      <figure className="signature-mixer__screen">
        <SignaturePicture project={project} slot="context" aspectRatio="16 / 8" />
        <figcaption>{project.statement}</figcaption>
      </figure>
      <ol className="signature-mixer__channels">
        {project.palette.slice(0, 3).map((swatch, index) => (
          <li key={swatch.name} style={{ "--channel-color": swatch.value } as CSSProperties}>
            <span>CH {index + 1}</span>
            <i aria-hidden="true" />
            <strong>{swatch.name}</strong>
          </li>
        ))}
      </ol>
    </SignatureSection>
  );
}

export function ChromaTempoBpmScore({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="bpm-score" className="signature--bpm">
      <SignatureHeading
        project={project}
        eyebrow="BPM score / colour frequency"
        title="Colour enters on the beat."
      />
      <div className="signature-bpm__media">
        <SignaturePicture project={project} slot="hero" aspectRatio="4 / 5" />
        <SignaturePicture project={project} slot="spatial" aspectRatio="4 / 3" />
      </div>
      <ol className="signature-bpm__beats" aria-label="Four-beat chromatic score">
        {project.palette.slice(0, 4).map((swatch, index) => (
          <li key={swatch.name} style={{ backgroundColor: swatch.value }}>
            <span>0{index + 1}</span>
            <strong>{swatch.name}</strong>
          </li>
        ))}
      </ol>
    </SignatureSection>
  );
}

export function SeventyNineJourneyLine({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="journey-line" className="signature--journey">
      <SignatureHeading
        project={project}
        eyebrow="Journey line / westbound 79W"
        title="The route becomes the identity."
      />
      <figure className="signature-journey__window">
        <SignaturePicture project={project} slot="spatial" aspectRatio="16 / 7" />
        <figcaption>{project.description}</figcaption>
      </figure>
      <ol className="signature-journey__stages">
        <li>
          <span>00</span>Origin
        </li>
        <li>
          <span>37</span>Crossing
        </li>
        <li>
          <span>79W</span>Arrival
        </li>
      </ol>
      <p className="signature-journey__rule">{project.rule}</p>
    </SignatureSection>
  );
}

export function TideholdTideDatum({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="tide-datum" className="signature--tide">
      <SignatureHeading
        project={project}
        eyebrow="Tide datum / shoreline record"
        title="The water moves around a fixed mark."
      />
      <div className="signature-tide__pair">
        <figure>
          <SignaturePicture project={project} slot="hero" aspectRatio="4 / 5" />
          <figcaption>High water / 06:14</figcaption>
        </figure>
        <figure>
          <SignaturePicture project={project} slot="spatial" aspectRatio="4 / 5" />
          <figcaption>Low water / 12:42</figcaption>
        </figure>
      </div>
      <dl className="signature-tide__readings">
        <div>
          <dt>Rise</dt>
          <dd>{itemAt(project.materials, 0, "Salt trace")}</dd>
        </div>
        <div>
          <dt>Hold</dt>
          <dd>{project.rule}</dd>
        </div>
      </dl>
    </SignatureSection>
  );
}

export function OffsortBatchPassport({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="batch-passport" className="signature--batch">
      <SignatureHeading
        project={project}
        eyebrow="Batch passport / off-standard fruit"
        title="Difference is the unit of measure."
      />
      <div className="signature-batch__passport">
        <figure>
          <SignaturePicture project={project} slot="tactile" aspectRatio="4 / 3" />
          <figcaption>Batch {project.index}-A</figcaption>
        </figure>
        <dl>
          <div>
            <dt>Origin</dt>
            <dd>{itemAt(project.materials, 0, "Local harvest")}</dd>
          </div>
          <div>
            <dt>Grade</dt>
            <dd>OFF / accepted</dd>
          </div>
          <div>
            <dt>Rule</dt>
            <dd>{project.rule}</dd>
          </div>
        </dl>
      </div>
      <p className="signature-batch__stamp">PASSED BY DIFFERENCE</p>
    </SignatureSection>
  );
}

export function HoralisLocalDial({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="local-dial" className="signature--dial">
      <SignatureHeading
        project={project}
        eyebrow="Local dial / circadian light"
        title="Time is a colour condition."
      />
      <div className="signature-dial__face">
        <SignaturePicture project={project} slot="hero" aspectRatio="1 / 1" />
        <span>06</span>
        <span>12</span>
        <span>18</span>
        <span>24</span>
      </div>
      <div className="signature-dial__reading">
        <strong>18:42</strong>
        <p>{project.motion}</p>
      </div>
    </SignatureSection>
  );
}

export function SelvRepairLedger({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="repair-ledger" className="signature--repair">
      <SignatureHeading
        project={project}
        eyebrow="Repair ledger / seam record"
        title="A repair should remain legible."
      />
      <div className="signature-repair__evidence">
        <SignaturePicture project={project} slot="hero" aspectRatio="4 / 5" />
        <SignaturePicture project={project} slot="tactile" aspectRatio="4 / 3" />
      </div>
      <ol className="signature-repair__ledger">
        {project.materials.slice(0, 3).map((material, index) => (
          <li key={material}>
            <span>R-{index + 1}</span>
            <strong>{material}</strong>
            <em>retained</em>
          </li>
        ))}
      </ol>
    </SignatureSection>
  );
}

export function TesseraLiveNineTiles({ project }: SignatureProps) {
  const informationTiles = [
    project.statement,
    project.rule,
    project.motion,
    project.typography,
    project.index,
  ];

  return (
    <SignatureSection project={project} signature="nine-tiles" className="signature--tiles">
      <SignatureHeading
        project={project}
        eyebrow="Nine tiles / live civic grid"
        title="One system, nine public states."
      />
      <div className="signature-tiles__grid">
        <SignaturePicture project={project} slot="hero" aspectRatio="1 / 1" />
        <article>
          <span>01</span>
          <strong>{informationTiles[0]}</strong>
        </article>
        <SignaturePicture project={project} slot="spatial" aspectRatio="1 / 1" />
        <article>
          <span>02</span>
          <strong>{informationTiles[1]}</strong>
        </article>
        <SignaturePicture project={project} slot="context" aspectRatio="1 / 1" />
        <article>
          <span>03</span>
          <strong>{informationTiles[2]}</strong>
        </article>
        <SignaturePicture project={project} slot="tactile" aspectRatio="1 / 1" />
        <article>
          <span>04</span>
          <strong>{informationTiles[3]}</strong>
        </article>
        <article>
          <span>05</span>
          <strong>{informationTiles[4]} / LIVE</strong>
        </article>
      </div>
    </SignatureSection>
  );
}

export function BackmatterClaimEvidence({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="claim-evidence" className="signature--evidence">
      <SignatureHeading
        project={project}
        eyebrow="Claim / evidence ledger"
        title="Nothing enters without a source."
      />
      <div className="signature-evidence__claim">
        <span>CLAIM 01</span>
        <blockquote>{project.statement}</blockquote>
        <p>{project.rule}</p>
      </div>
      <figure className="signature-evidence__proof">
        <SignaturePicture project={project} slot="tactile" aspectRatio="3 / 2" />
        <figcaption>Evidence A / material record</figcaption>
      </figure>
      <figure className="signature-evidence__context">
        <SignaturePicture project={project} slot="context" aspectRatio="3 / 4" />
        <figcaption>Evidence B / observed use</figcaption>
      </figure>
    </SignatureSection>
  );
}

export function SeamframeAssemblyPath({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="assembly-path" className="signature--assembly">
      <SignatureHeading
        project={project}
        eyebrow="Assembly path / open construction"
        title="Every join explains the whole."
      />
      <div className="signature-assembly__images">
        <SignaturePicture project={project} slot="tactile" aspectRatio="4 / 3" />
        <SignaturePicture project={project} slot="hero" aspectRatio="4 / 5" />
        <SignaturePicture project={project} slot="spatial" aspectRatio="4 / 3" />
      </div>
      <ol className="signature-assembly__steps">
        <li>
          <span>01</span>Cut
        </li>
        <li>
          <span>02</span>Join
        </li>
        <li>
          <span>03</span>Expose
        </li>
      </ol>
    </SignatureSection>
  );
}

export function TwoShoresPairedLedger({ project }: SignatureProps) {
  return (
    <SignatureSection project={project} signature="paired-ledger" className="signature--paired">
      <SignatureHeading
        project={project}
        eyebrow="Paired ledger / exchange record"
        title="Difference is held in parallel."
      />
      <div className="signature-paired__columns">
        <article>
          <figure>
            <SignaturePicture project={project} slot="hero" aspectRatio="4 / 5" />
            <figcaption>Shore A / departure</figcaption>
          </figure>
          <p>{itemAt(project.applications, 0, project.challenge)}</p>
        </article>
        <article>
          <figure>
            <SignaturePicture project={project} slot="context" aspectRatio="4 / 5" />
            <figcaption>Shore B / arrival</figcaption>
          </figure>
          <p>{itemAt(project.applications, 1, project.response)}</p>
        </article>
      </div>
      <p className="signature-paired__equation">
        <span>A</span>
        {project.rule}
        <span>B</span>
      </p>
    </SignatureSection>
  );
}

export function ColdkilnMaterialPassport({ project }: SignatureProps) {
  return (
    <SignatureSection
      project={project}
      signature="material-passport"
      className="signature--material-passport"
    >
      <SignatureHeading
        project={project}
        eyebrow="Material passport / cold kiln"
        title="Matter carries its own provenance."
      />
      <figure className="signature-material-passport__macro">
        <SignaturePicture project={project} slot="tactile" aspectRatio="16 / 9" />
        <figcaption>Surface / unglazed mineral body</figcaption>
      </figure>
      <div className="signature-material-passport__record">
        <SignaturePicture project={project} slot="hero" aspectRatio="3 / 4" />
        <dl>
          {project.materials.slice(0, 3).map((material, index) => (
            <div key={material}>
              <dt>M-{index + 1}</dt>
              <dd>{material}</dd>
            </div>
          ))}
        </dl>
        <p>{project.rule}</p>
      </div>
    </SignatureSection>
  );
}

export const projectSignatureRegistry = {
  afterimage: AfterimagePlateRegistration,
  "memory-type": MemoryTypeGlyphSource,
  "field-notes-37": FieldNotesSpecimenCoordinate,
  "last-letter": LastLetterFoldLine,
  "tactile-forecast": TactileForecastPressureScale,
  "night-index": NightIndexArchCrop,
  "public-memory": PublicMemoryRouteMap,
  "soft-machine": SoftMachineDeformationDatum,
  "signal-noise": SignalNoiseChannelMixer,
  "chroma-tempo": ChromaTempoBpmScore,
  "79w": SeventyNineJourneyLine,
  tidehold: TideholdTideDatum,
  offsort: OffsortBatchPassport,
  horalis: HoralisLocalDial,
  "selv-00": SelvRepairLedger,
  "tessera-live": TesseraLiveNineTiles,
  backmatter: BackmatterClaimEvidence,
  seamframe: SeamframeAssemblyPath,
  "two-shores": TwoShoresPairedLedger,
  coldkiln: ColdkilnMaterialPassport,
} as const satisfies Record<string, SignatureRenderer>;

export type ProjectSignatureSlug = keyof typeof projectSignatureRegistry;

export function ProjectSignatureModule({ project }: SignatureProps) {
  const Renderer = projectSignatureRegistry[project.slug as ProjectSignatureSlug];

  if (!Renderer) {
    return null;
  }

  return (
    <div
      className="project-signature-boundary"
      data-project-signature={project.slug}
      style={getSignatureStyle(project)}
    >
      <Renderer project={project} />
    </div>
  );
}
