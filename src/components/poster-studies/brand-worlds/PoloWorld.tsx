import { BrandMark } from "@/components/poster-studies/BrandMark";
import type { DesignProjectMediaSlot } from "@/lib/design-project-media";

import { BrandWorldPicture, BrandWorldShell, type BrandWorldProps } from "./BrandWorldShell";
import styles from "./PoloWorld.module.css";

const navigation = [
  { id: "field", label: "Field" },
  { id: "stable", label: "Stable" },
  { id: "city", label: "City" },
  { id: "evening", label: "Evening" },
] as const;

type CampaignFrame = {
  slot: DesignProjectMediaSlot;
  eyebrow: string;
  title: string;
  copy: string;
};

function PoloFrame({
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
      <p>{number} / The Long Match</p>
      <h2>{title}</h2>
      <p>{line}</p>
    </header>
  );
}

export function PoloWorld({ project, pavilion }: BrandWorldProps) {
  const [
    cityPortrait,
    brownstone,
    clubhouse,
    colourArchive,
    saddleCare,
    stableIntroduction,
    courtPreparation,
    stablePortrait,
    stableYard,
    cityPassage,
    cityLife,
    generations,
    eveningDeparture,
    objectStudy,
    blueHour,
  ] = pavilion.world.scenes;

  const fieldFrames: CampaignFrame[] = [
    pavilion.needs.images[0],
    pavilion.needs.images[1],
    pavilion.principles.image,
    courtPreparation,
    pavilion.design.image,
    colourArchive,
  ];
  const stableFrames: CampaignFrame[] = [
    stableIntroduction,
    stablePortrait,
    stableYard,
    saddleCare,
  ];
  const cityFrames: CampaignFrame[] = [
    cityPortrait,
    brownstone,
    cityPassage,
    cityLife,
    generations,
  ];
  const eveningFrames: CampaignFrame[] = [clubhouse, eveningDeparture, objectStudy, blueHour];

  return (
    <BrandWorldShell
      project={project}
      pavilion={pavilion}
      navigation={navigation}
      className={styles.polo}
    >
      <header className={styles.hero} id="world-top">
        <BrandWorldPicture
          project={project}
          slot="spatial"
          sizes="100vw"
          className={styles.heroImage}
          imageClassName={styles.heroImageAsset}
          priority
          showContinuity={false}
        />
        <div className={styles.heroShade} />
        <div className={styles.heroIdentity}>
          <h1>
            <span className={styles.srOnly}>Polo Ralph Lauren</span>
            <BrandMark code="polo" decorative />
          </h1>
          <p className={styles.campaignName}>The Long Match</p>
          <p className={styles.campaignLine}>A sporting life, carried through the day.</p>
        </div>
        <p className={styles.heroSeason}>Polo Ralph Lauren / 2026</p>
      </header>

      <main>
        <section className={styles.introduction} aria-labelledby="polo-introduction-heading">
          <p className={styles.sectionLabel}>Field / Stable / City / Evening</p>
          <h2 id="polo-introduction-heading">
            One wardrobe. <span className={styles.keepTogether}>A complete</span> American day.
          </h2>
          <div className={styles.introductionCopy}>
            <p>
              Sport, craft, city life, and hospitality move as one continuous world. Familiar pieces
              gain character through weather, work, movement, and company.
            </p>
            <a
              href="https://www.ralphlauren.com/brands-prl-men-heritage-icons-cg"
              target="_blank"
              rel="noreferrer"
            >
              Fall 2026 Heritage Icons
            </a>
          </div>
        </section>

        <section className={styles.chapter} id="field" aria-labelledby="polo-field-heading">
          <ChapterHeading
            number="01"
            title="Field"
            line="The match starts before the first serve: preparation, maintenance, and the ritual of arrival."
          />
          <div className={styles.fieldLayout}>
            <PoloFrame
              project={project}
              frame={fieldFrames[0]}
              className={styles.fieldPortrait}
              sizes="(min-width: 900px) 37vw, 100vw"
            />
            <PoloFrame
              project={project}
              frame={fieldFrames[1]}
              className={styles.fieldDomestic}
              sizes="(min-width: 900px) 47vw, 100vw"
            />
            <PoloFrame
              project={project}
              frame={fieldFrames[2]}
              className={styles.fieldCraft}
              sizes="(min-width: 900px) 34vw, 100vw"
              showCopy
            />
            <PoloFrame
              project={project}
              frame={fieldFrames[3]}
              className={styles.fieldPreparation}
              sizes="100vw"
              showCopy
            />
            <PoloFrame
              project={project}
              frame={fieldFrames[4]}
              className={styles.fieldAction}
              sizes="(min-width: 900px) 66vw, 100vw"
            />
            <PoloFrame
              project={project}
              frame={fieldFrames[5]}
              className={styles.fieldColour}
              sizes="(min-width: 900px) 31vw, 100vw"
            />
          </div>
        </section>

        <section className={styles.chapter} id="stable" aria-labelledby="polo-stable-heading">
          <ChapterHeading
            number="02"
            title="Stable"
            line="Equestrian heritage is shown through direct care, worn leather, wet ground, and trust."
          />
          <div className={styles.stableLayout}>
            <PoloFrame
              project={project}
              frame={stableFrames[0]}
              className={styles.stableOpening}
              sizes="(min-width: 900px) 45vw, 100vw"
            />
            <PoloFrame
              project={project}
              frame={stableFrames[1]}
              className={styles.stableIntimacy}
              sizes="(min-width: 900px) 45vw, 100vw"
            />
            <PoloFrame
              project={project}
              frame={stableFrames[2]}
              className={styles.stableWeather}
              sizes="100vw"
              showCopy
            />
            <PoloFrame
              project={project}
              frame={stableFrames[3]}
              className={styles.stableCare}
              sizes="(min-width: 900px) 68vw, 100vw"
              showCopy
            />
          </div>
        </section>

        <section className={styles.chapter} id="city" aria-labelledby="polo-city-heading">
          <ChapterHeading
            number="03"
            title="City"
            line="Oxford, cable knit, navy layers, and the racquet leave the field without becoming costume."
          />
          <div className={styles.cityLayout}>
            <PoloFrame
              project={project}
              frame={cityFrames[0]}
              className={styles.cityPortrait}
              sizes="(min-width: 900px) 38vw, 100vw"
            />
            <PoloFrame
              project={project}
              frame={cityFrames[1]}
              className={styles.cityBrownstone}
              sizes="(min-width: 900px) 54vw, 100vw"
              showCopy
            />
            <PoloFrame
              project={project}
              frame={cityFrames[2]}
              className={styles.cityPassage}
              sizes="(min-width: 900px) 31vw, 100vw"
            />
            <PoloFrame
              project={project}
              frame={cityFrames[3]}
              className={styles.cityRoof}
              sizes="(min-width: 900px) 63vw, 100vw"
            />
            <PoloFrame
              project={project}
              frame={cityFrames[4]}
              className={styles.cityGenerations}
              sizes="(min-width: 900px) 48vw, 100vw"
              showCopy
            />
          </div>
        </section>

        <section className={styles.chapter} id="evening" aria-labelledby="polo-evening-heading">
          <ChapterHeading
            number="04"
            title="Evening"
            line="The match resolves in company. Hospitality, departure, and readiness complete the story."
          />
          <div className={styles.eveningLayout}>
            <PoloFrame
              project={project}
              frame={eveningFrames[0]}
              className={styles.eveningClubhouse}
              sizes="100vw"
              showCopy
            />
            <PoloFrame
              project={project}
              frame={eveningFrames[1]}
              className={styles.eveningDeparture}
              sizes="(min-width: 900px) 62vw, 100vw"
            />
            <PoloFrame
              project={project}
              frame={eveningFrames[2]}
              className={styles.eveningObjects}
              sizes="(min-width: 900px) 30vw, 100vw"
            />
            <PoloFrame
              project={project}
              frame={eveningFrames[3]}
              className={styles.eveningBlueHour}
              sizes="100vw"
              showCopy
            />
          </div>
          <footer className={styles.campaignClose}>
            <BrandMark code="polo" decorative />
            <p>The Long Match / 2026</p>
          </footer>
        </section>
      </main>
    </BrandWorldShell>
  );
}
