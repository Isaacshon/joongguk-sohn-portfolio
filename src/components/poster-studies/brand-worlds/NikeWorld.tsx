import { BrandMark } from "@/components/poster-studies/BrandMark";

import { BrandWorldPicture, BrandWorldShell, type BrandWorldProps } from "./BrandWorldShell";
import styles from "./NikeWorld.module.css";

const navigation = [
  { id: "attempt", label: "Attempt" },
  { id: "contact", label: "Contact" },
  { id: "recovery", label: "Recovery" },
  { id: "next-attempt", label: "Next attempt" },
] as const;

const technologies = [
  {
    index: "01",
    name: "Swoosh",
    role: "Motion",
  },
  {
    index: "02",
    name: "Waffle",
    role: "Traction",
  },
  {
    index: "03",
    name: "Air",
    role: "Cushioning",
  },
  {
    index: "04",
    name: "Flyknit",
    role: "Fit",
  },
] as const;

export function NikeWorld({ project, pavilion }: BrandWorldProps) {
  return (
    <BrandWorldShell
      project={project}
      pavilion={pavilion}
      navigation={navigation}
      className={styles.nike}
    >
      <header className={styles.hero} id="world-top">
        <BrandWorldPicture
          project={project}
          slot="spatial"
          sizes="100vw"
          className={`${styles.picture} ${styles.heroPicture}`}
          imageClassName={styles.image}
          priority
        />
        <div className={styles.heroShade} aria-hidden="true" />

        <div className={styles.heroTopline}>
          <p>NIKE / Independent athlete study</p>
          <p>Frame 000:00:01 / Attempt 001</p>
        </div>

        <div className={styles.heroIdentity}>
          <h1>
            <span className={styles.srOnly}>NIKE — No Second Take</span>
            <BrandMark code={pavilion.code} className={styles.heroBrand} decorative />
            <span className={styles.heroCampaign} aria-hidden="true">
              <span>No second</span>
              <span>take.</span>
            </span>
          </h1>
          <p className={styles.heroStatement}>
            The Swoosh follows the athlete forward. The decisive image is the instant they choose to
            try.
          </p>
        </div>
      </header>

      <div className={styles.story}>
        <section
          className={`${styles.chapter} ${styles.attemptChapter}`}
          id="attempt"
          aria-labelledby="nike-attempt-title"
        >
          <header className={styles.chapterIntro}>
            <p className={styles.chapterNumber}>01 / Attempt</p>
            <div>
              <h2 id="nike-attempt-title">Start before certainty.</h2>
              <p>
                Performance begins with a decision, not a victory pose. The 1971 Swoosh enters as a
                mark of motion while each frame stays close to the athlete at the point where
                instinct becomes movement.
              </p>
            </div>
          </header>

          <div className={styles.attemptManifesto}>
            <span>Choice &gt; outcome</span>
            <p>The first win is starting.</p>
            <span>Try / fail / return</span>
          </div>

          <div className={styles.attemptLayout}>
            <figure className={`${styles.figure} ${styles.attemptLead}`}>
              <BrandWorldPicture
                project={project}
                slot="hero"
                sizes="(max-width: 720px) 100vw, 76vw"
                className={`${styles.picture} ${styles.cinematic}`}
                imageClassName={styles.image}
              />
              <figcaption>
                <span>Attempt 01 / Commit</span>
                <p>The lane closes. The body decides before the outcome can be known.</p>
              </figcaption>
            </figure>

            <div className={styles.attemptCounter} aria-hidden="true">
              <span>Attempt</span>
              <strong>001</strong>
              <i>00:00:01</i>
            </div>

            <figure className={`${styles.figure} ${styles.attemptDetail}`}>
              <BrandWorldPicture
                project={project}
                slot="editorialA"
                sizes="(max-width: 720px) 100vw, 42vw"
                className={`${styles.picture} ${styles.portrait}`}
                imageClassName={styles.image}
              />
              <figcaption>
                <span>Attempt 02 / Accelerate</span>
                <p>Effort stays imperfect, immediate, and alive.</p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className={`${styles.chapter} ${styles.contactChapter}`}
          id="contact"
          aria-labelledby="nike-contact-title"
        >
          <header className={`${styles.chapterIntro} ${styles.contactIntro}`}>
            <p className={styles.chapterNumber}>02 / Contact</p>
            <div>
              <h2 id="nike-contact-title">
                Contact makes <span className={styles.keepTogether}>the question</span> visible.
              </h2>
              <p>
                From Bowerman&apos;s waffle experiment to Nike Air and Flyknit, design begins where
                the body meets material and surface. Traction, cushioning, containment, and response
                become visible only through performance.
              </p>
            </div>
          </header>

          <ol className={styles.technologyIndex} aria-label="Nike design lineage used in the study">
            {technologies.map((technology) => (
              <li key={technology.name}>
                <span>{technology.index}</span>
                <div>
                  <strong>{technology.name}</strong>
                  <i>{technology.role}</i>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.contactLayout}>
            <figure className={`${styles.figure} ${styles.contactSole}`}>
              <BrandWorldPicture
                project={project}
                slot="tactile"
                sizes="(max-width: 720px) 100vw, 38vw"
                className={`${styles.picture} ${styles.portrait}`}
                imageClassName={styles.image}
              />
              <figcaption>
                <span>Surface 01 / Worn</span>
                <p>The outsole keeps a physical record of where force returned.</p>
              </figcaption>
            </figure>

            <figure className={`${styles.figure} ${styles.contactMeasure}`}>
              <BrandWorldPicture
                project={project}
                slot="editorialB"
                sizes="(max-width: 720px) 100vw, 54vw"
                className={`${styles.picture} ${styles.tallLandscape}`}
                imageClassName={styles.image}
              />
              <figcaption>
                <span>Surface 02 / Measured</span>
                <p>Depth and interval turn a familiar pattern into testable evidence.</p>
              </figcaption>
            </figure>

            <figure className={`${styles.figure} ${styles.contactAction}`}>
              <BrandWorldPicture
                project={project}
                slot="editorialC"
                sizes="(max-width: 720px) 100vw, 82vw"
                className={`${styles.picture} ${styles.cinematic}`}
                imageClassName={styles.image}
              />
              <figcaption>
                <span>Surface 03 / Loaded</span>
                <p>A loaded stance holds the next move inside it. Stillness is part of speed.</p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className={`${styles.chapter} ${styles.recoveryChapter}`}
          id="recovery"
          aria-labelledby="nike-recovery-title"
        >
          <header className={styles.chapterIntro}>
            <p className={styles.chapterNumber}>03 / Recovery</p>
            <div>
              <h2 id="nike-recovery-title">
                Recovery is <span className={styles.keepTogether}>part of</span>{" "}
                <span className={styles.keepTogether}>performance.</span>
              </h2>
              <p>
                Cushioning is not an abstract diagram; it is felt in the body between impacts. Air,
                breath, fatigue, and repetition keep recovery inside the same performance story.
              </p>
            </div>
          </header>

          <div className={styles.recoveryStatement}>
            <span>Body archive / after impact</span>
            <p>Every pause stores the next move.</p>
            <div aria-hidden="true">
              <span>Breathe</span>
              <span>Reset</span>
              <span>Return</span>
            </div>
          </div>

          <div className={styles.recoveryLayout}>
            <figure className={`${styles.figure} ${styles.recoveryLead}`}>
              <BrandWorldPicture
                project={project}
                slot="editorialD"
                sizes="(max-width: 720px) 100vw, 76vw"
                className={`${styles.picture} ${styles.cinematic}`}
                imageClassName={styles.image}
              />
              <figcaption>
                <span>Interval 01 / Ring</span>
                <p>The room stays active while one athlete resets for another effort.</p>
              </figcaption>
            </figure>

            <figure className={`${styles.figure} ${styles.recoveryPortrait}`}>
              <BrandWorldPicture
                project={project}
                slot="editorialE"
                sizes="(max-width: 720px) 100vw, 35vw"
                className={`${styles.picture} ${styles.portrait}`}
                imageClassName={styles.image}
              />
              <figcaption>
                <span>Interval 02 / Breath</span>
                <p>Rest is where the next decision becomes possible.</p>
              </figcaption>
            </figure>

            <figure className={`${styles.figure} ${styles.recoveryTrack}`}>
              <BrandWorldPicture
                project={project}
                slot="context"
                sizes="(max-width: 720px) 100vw, 58vw"
                className={`${styles.picture} ${styles.tallLandscape}`}
                imageClassName={styles.image}
              />
              <figcaption>
                <span>Interval 03 / Return</span>
                <p>The attempt is over. The practice continues.</p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className={`${styles.chapter} ${styles.finalChapter}`}
          id="next-attempt"
          aria-labelledby="nike-next-title"
        >
          <header className={`${styles.chapterIntro} ${styles.finalIntro}`}>
            <p className={styles.chapterNumber}>04 / Next attempt</p>
            <div>
              <h2 id="nike-next-title" className={styles.longHeading}>
                Return before <span className={styles.keepTogether}>the moment</span> disappears.
              </h2>
              <p>
                The final frame refuses closure. A change of direction begins another sequence and
                carries the campaign back to its central act: trying again.
              </p>
            </div>
          </header>

          <figure className={`${styles.figure} ${styles.finalPoster}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialF"
              sizes="100vw"
              className={`${styles.picture} ${styles.finalImage}`}
              imageClassName={styles.image}
            />
            <div className={styles.finalShade} aria-hidden="true" />
            <BrandMark code={pavilion.code} className={styles.finalBrand} decorative />
            <p className={styles.finalWord} aria-hidden="true">
              Again.
            </p>
            <figcaption>
              <span>Attempt 002 / No replay</span>
              <p>No perfect frame. Just the next move.</p>
            </figcaption>
          </figure>
        </section>
      </div>
    </BrandWorldShell>
  );
}
