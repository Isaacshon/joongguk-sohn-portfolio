import { useState } from "react";
import { BrandMark } from "@/components/poster-studies/BrandMark";
import type { DesignProjectMediaSlot } from "@/lib/design-project-media";

import { BrandWorldPicture, BrandWorldShell, type BrandWorldProps } from "./BrandWorldShell";
import styles from "./LevisWorld.module.css";

const navigation = [
  { id: "construction", label: "Construction" },
  { id: "wear", label: "Wear" },
  { id: "repair", label: "Repair" },
  { id: "pass-on", label: "Pass on" },
] as const;

type CampaignFrame = {
  slot: DesignProjectMediaSlot;
  eyebrow: string;
  title: string;
  copy: string;
};

function LevisFrame({
  project,
  frame,
  className,
  sizes,
  showCopy = false,
}: {
  project: BrandWorldProps["project"];
  frame: CampaignFrame;
  className: string;
  sizes: string;
  showCopy?: boolean;
}) {
  return (
    <figure className={`${styles.frame} ${className}`}>
      <BrandWorldPicture
        project={project}
        slot={frame.slot}
        sizes={sizes}
        className={styles.frameMedia}
      />
      <figcaption>
        <span>{frame.eyebrow}</span>
        <strong>{frame.title}</strong>
        {showCopy ? <p>{frame.copy}</p> : null}
      </figcaption>
    </figure>
  );
}

function ChapterHeading({ number, title, line }: { number: string; title: string; line: string }) {
  return (
    <header className={styles.chapterHeading}>
      <p>{number} / Wear Is the Record</p>
      <h2>{title}</h2>
      <p>{line}</p>
    </header>
  );
}

export function LevisWorld({ project, pavilion }: BrandWorldProps) {
  const [inspection, setInspection] = useState(0);
  const constructionFrames: CampaignFrame[] = [pavilion.principles.image, pavilion.world.scenes[2]];
  const wearFrames: CampaignFrame[] = [pavilion.needs.images[1], pavilion.world.scenes[0]];
  const repairFrames: CampaignFrame[] = [
    pavilion.design.image,
    pavilion.world.scenes[1],
    pavilion.world.scenes[4],
  ];
  const passOnFrame: CampaignFrame = {
    slot: "hero",
    eyebrow: "Record 0147 / handoff",
    title: "Repair ends. The next life begins.",
    copy: "The repaired pair leaves the workbench in another wearer's hands, keeping its fades, patch, red tab, and visible intervention in motion.",
  };
  const inspectionFrames = [
    {
      label: "Detail",
      frame: {
        ...constructionFrames[0],
        title: "Read the construction.",
        copy: "Denim is laid out, marked, and inspected. Begin with what is visible in the cloth.",
      },
    },
    {
      label: "Wear",
      frame: {
        slot: "context",
        eyebrow: "Street / movement",
        title: "Read it in motion.",
        copy: "Loose denim crosses a city street. The silhouette is understood through the body, not a fit diagram.",
      },
    },
    {
      label: "Repair",
      frame: {
        slot: "editorialB",
        eyebrow: "Workbench / stitching",
        title: "Read the intervention.",
        copy: "Hands guide layered denim beneath the needle. The next stage is made, not concealed.",
      },
    },
  ] satisfies { label: string; frame: CampaignFrame }[];

  return (
    <BrandWorldShell
      project={project}
      pavilion={pavilion}
      navigation={navigation}
      className={styles.levis}
    >
      <header className={styles.hero} id="world-top">
        <div className={styles.heroTitlePlate}>
          <div className={styles.heroSeries}>
            <p>Levi Strauss &amp; Co. / Since 1873</p>
            <p>Independent brand study / 2026</p>
          </div>
          <h1>
            <span className={styles.srOnly}>Levi&apos;s</span>
            <BrandMark code="levis" decorative />
          </h1>
          <div className={styles.heroThesis}>
            <p className={styles.campaignName}>Wear is the record.</p>
            <p className={styles.campaignLine}>
              One construction.
              <br />
              More than one life.
            </p>
          </div>
        </div>
        <figure className={styles.heroPhotograph}>
          <BrandWorldPicture
            project={project}
            slot="hero"
            sizes="100vw"
            className={styles.heroImage}
            imageClassName={styles.heroImageAsset}
            priority
            showContinuity={false}
          />
          <figcaption className={styles.heroCaption}>
            <span>Record no. 0147</span>
            <strong>Repair complete. Ready for another life.</strong>
            <span>San Francisco / 2026</span>
          </figcaption>
        </figure>
      </header>

      <div className={styles.story}>
        <section className={styles.introduction} aria-labelledby="levis-introduction-heading">
          <p className={styles.sectionLabel}>Construction / Wear / Repair / Pass on</p>
          <h2 id="levis-introduction-heading">The original changes with every person.</h2>
          <div className={styles.introductionCopy}>
            <p>
              The 501 begins with a recognisable construction. Movement, friction, washing, and
              repair turn that shared form into an individual record.
            </p>
            <a
              href="https://www.levistrauss.com/2026/08/09/levis-keep-it-loose/"
              target="_blank"
              rel="noreferrer"
            >
              Keep It Loose / Fall 2026
            </a>
          </div>
        </section>

        <section
          className={styles.chapter}
          id="construction"
          aria-labelledby="levis-construction-heading"
        >
          <ChapterHeading
            number="01"
            title="Construction"
            line="Copper rivets, five pockets, a straight leg, button fly, Arcuate, Two Horse patch, and Red Tab make the 501 readable before styling begins."
          />
          <div className={styles.constructionLayout}>
            <div className={`${styles.constructionTable} ${styles.recordViewer}`}>
              <div
                className={styles.recordControls}
                role="group"
                aria-label="Inspect the denim record"
              >
                {inspectionFrames.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    aria-pressed={inspection === index}
                    aria-controls="levis-record-frame"
                    onClick={() => setInspection(index)}
                  >
                    <span>0{index + 1}</span>
                    {item.label}
                  </button>
                ))}
              </div>
              <div id="levis-record-frame" className={styles.recordStage}>
                {inspectionFrames.map((item, index) => (
                  <div
                    key={item.label}
                    hidden={inspection !== index}
                    className={styles.recordScene}
                  >
                    <LevisFrame
                      project={project}
                      frame={item.frame}
                      className={styles.recordImage}
                      sizes="(min-width: 900px) 58vw, 100vw"
                    />
                  </div>
                ))}
              </div>
              <p className={styles.recordReading} aria-live="polite">
                {inspectionFrames[inspection].frame.copy}
              </p>
            </div>
            <LevisFrame
              project={project}
              frame={constructionFrames[1]}
              className={styles.constructionDetail}
              sizes="(min-width: 900px) 34vw, 100vw"
            />
          </div>
          <aside className={styles.heritageNote}>
            <p>1873 / 1886 / 1936</p>
            <h3>Workwear signatures became a global language.</h3>
            <p>
              Riveted construction established strength in 1873. The Two Horse trademark made that
              claim visible in 1886, and the Red Tab added an instant pocket identifier in 1936.
            </p>
            <a href="https://www.levistrauss.com/levis-history/" target="_blank" rel="noreferrer">
              Levi Strauss &amp; Co. history
            </a>
          </aside>
        </section>

        <section className={styles.chapter} id="wear" aria-labelledby="levis-wear-heading">
          <ChapterHeading
            number="02"
            title="Wear"
            line="Real bodies, ordinary routes, and repeated movement shape the denim more honestly than a perfect studio pose."
          />
          <div className={styles.wearLayout}>
            <LevisFrame
              project={project}
              frame={wearFrames[0]}
              className={styles.wearPortrait}
              sizes="(min-width: 900px) 46vw, 100vw"
              showCopy
            />
            <LevisFrame
              project={project}
              frame={wearFrames[1]}
              className={styles.wearMotion}
              sizes="(min-width: 900px) 54vw, 100vw"
              showCopy
            />
          </div>
          <div className={styles.redStatement}>
            <p>Same construction.</p>
            <strong>Never the same record.</strong>
          </div>
        </section>

        <section className={styles.chapter} id="repair" aria-labelledby="levis-repair-heading">
          <ChapterHeading
            number="03"
            title="Repair"
            line="A repair should extend the life of the garment without erasing the evidence that made it personal."
          />
          <div className={styles.repairLayout}>
            <LevisFrame
              project={project}
              frame={repairFrames[0]}
              className={styles.repairBench}
              sizes="(min-width: 900px) 58vw, 100vw"
              showCopy
            />
            <LevisFrame
              project={project}
              frame={repairFrames[1]}
              className={styles.repairInspection}
              sizes="(min-width: 900px) 34vw, 100vw"
            />
            <LevisFrame
              project={project}
              frame={repairFrames[2]}
              className={styles.repairNeedle}
              sizes="100vw"
              showCopy
            />
          </div>
        </section>

        <section className={styles.passOn} id="pass-on" aria-labelledby="levis-pass-on-heading">
          <LevisFrame
            project={project}
            frame={passOnFrame}
            className={styles.passOnImage}
            sizes="100vw"
          />
          <div className={styles.passOnCopy}>
            <p>04 / Pass on</p>
            <h2 id="levis-pass-on-heading">A new wearer begins another record.</h2>
            <p>
              Care, repair, reuse, and handoff keep the construction in motion while a new wearer
              adds another chapter.
            </p>
            <a
              href="https://www.levistrauss.com/how-we-do-business/use-and-reuse/"
              target="_blank"
              rel="noreferrer"
            >
              Use and reuse
            </a>
          </div>
          <footer className={styles.campaignClose}>
            <BrandMark code="levis" decorative />
            <p>Wear Is the Record / 2026</p>
          </footer>
        </section>
      </div>
    </BrandWorldShell>
  );
}
