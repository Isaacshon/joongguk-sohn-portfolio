import { BrandMark } from "@/components/poster-studies/BrandMark";

import { BrandWorldPicture, BrandWorldShell, type BrandWorldProps } from "./BrandWorldShell";
import styles from "./NikeWorld.module.css";

const navigation = [
  { id: "attempt", label: "Attempt" },
  { id: "contact", label: "Contact" },
  { id: "recovery", label: "Recovery" },
  { id: "next-attempt", label: "Next attempt" },
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
        <div className={styles.heroCopy}>
          <h1 className={styles.srOnly}>NIKE</h1>
          <BrandMark code={pavilion.code} className={styles.heroBrand} decorative />
          <p className={styles.campaignTitle}>No Second Take</p>
          <p>
            The Swoosh follows the athlete forward. The decisive image is the instant they choose to
            try.
          </p>
        </div>
      </header>

      <main className={styles.story}>
        <section className={styles.chapter} id="attempt" aria-labelledby="nike-attempt-title">
          <header className={styles.chapterIntro}>
            <p className={styles.chapterNumber}>01 / Attempt</p>
            <div>
              <h2 id="nike-attempt-title">Start before certainty.</h2>
              <p>
                Performance begins with a decision, not a victory pose. The 1971 Swoosh enters as a
                mark of motion while each frame stays close to the athlete at the point where
                instinct becomes movement.
              </p>
              <a
                href="https://about.nike.com/en/newsroom/releases/nike-why-do-it-campaign"
                target="_blank"
                rel="noreferrer"
              >
                Official campaign reference
              </a>
            </div>
          </header>

          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <BrandWorldPicture
              project={project}
              slot="hero"
              sizes="(max-width: 720px) 100vw, 88vw"
              className={`${styles.picture} ${styles.cinematic}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Attempt 01</span>
              <p>The lane closes. The body commits before the outcome can be known.</p>
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.figureMedium} ${styles.alignRight}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialA"
              sizes="(max-width: 720px) 100vw, 70vw"
              className={`${styles.picture} ${styles.tallLandscape}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Attempt 02</span>
              <p>Acceleration is photographed as effort: imperfect, immediate, and alive.</p>
            </figcaption>
          </figure>
        </section>

        <section
          className={`${styles.chapter} ${styles.darkChapter}`}
          id="contact"
          aria-labelledby="nike-contact-title"
        >
          <header className={styles.chapterIntro}>
            <p className={styles.chapterNumber}>02 / Contact</p>
            <div>
              <h2 id="nike-contact-title">Contact makes the question visible.</h2>
              <p>
                From Bowerman&apos;s waffle experiment to Nike Air and Flyknit, design begins where
                the body meets material and surface. Traction, cushioning, containment, and response
                become visible only through performance.
              </p>
              <a
                href="https://about.nike.com/en/magazine/bill-bowerman-nike-s-original-innovator"
                target="_blank"
                rel="noreferrer"
              >
                Nike archive / Waffle to Flyknit
              </a>
            </div>
          </header>

          <figure className={`${styles.figure} ${styles.figurePortrait} ${styles.alignLeft}`}>
            <BrandWorldPicture
              project={project}
              slot="tactile"
              sizes="(max-width: 720px) 100vw, 58vw"
              className={`${styles.picture} ${styles.portrait}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Contact 01</span>
              <p>A worn outsole records the places where force returns to the athlete.</p>
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.figureMedium} ${styles.alignRight}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialB"
              sizes="(max-width: 720px) 100vw, 68vw"
              className={`${styles.picture} ${styles.tallLandscape}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Contact 02</span>
              <p>
                Testing turns a familiar pattern into evidence: depth, interval, and repeatable
                grip.
              </p>
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialC"
              sizes="(max-width: 720px) 100vw, 88vw"
              className={`${styles.picture} ${styles.cinematic}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Contact 03</span>
              <p>A loaded stance holds the next move inside it. Stillness is part of speed.</p>
            </figcaption>
          </figure>
        </section>

        <section className={styles.chapter} id="recovery" aria-labelledby="nike-recovery-title">
          <header className={styles.chapterIntro}>
            <p className={styles.chapterNumber}>03 / Recovery</p>
            <div>
              <h2 id="nike-recovery-title">Recovery is part of performance.</h2>
              <p>
                Cushioning is not an abstract diagram; it is felt in the body between impacts. Air,
                breath, fatigue, and repetition keep recovery inside the same performance story.
              </p>
              <a
                href="https://about.nike.com/en/magazine/creating-the-unreal-how-nike-made-its-wildest-air-footwear-yet"
                target="_blank"
                rel="noreferrer"
              >
                Nike archive / Air as continuous reinvention
              </a>
            </div>
          </header>

          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialD"
              sizes="(max-width: 720px) 100vw, 88vw"
              className={`${styles.picture} ${styles.cinematic}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Recovery 01</span>
              <p>The ring stays active while one athlete resets for another effort.</p>
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.figurePortrait} ${styles.alignRight}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialE"
              sizes="(max-width: 720px) 100vw, 58vw"
              className={`${styles.picture} ${styles.portrait}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Recovery 02</span>
              <p>
                Rest is not outside the campaign. It is where the next decision becomes possible.
              </p>
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.figureMedium} ${styles.alignLeft}`}>
            <BrandWorldPicture
              project={project}
              slot="context"
              sizes="(max-width: 720px) 100vw, 70vw"
              className={`${styles.picture} ${styles.tallLandscape}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Recovery 03</span>
              <p>The track remains in frame. The attempt is over; the practice continues.</p>
            </figcaption>
          </figure>
        </section>

        <section
          className={`${styles.chapter} ${styles.finalChapter}`}
          id="next-attempt"
          aria-labelledby="nike-next-title"
        >
          <header className={styles.chapterIntro}>
            <p className={styles.chapterNumber}>04 / Next attempt</p>
            <div>
              <h2 id="nike-next-title">Return before the moment disappears.</h2>
              <p>
                The final frame refuses closure. A change of direction begins another sequence and
                carries the campaign back to its central act: trying again.
              </p>
            </div>
          </header>

          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialF"
              sizes="(max-width: 720px) 100vw, 88vw"
              className={`${styles.picture} ${styles.finalImage}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Next attempt 01</span>
              <p>No replay. No perfect frame. Just the next move.</p>
            </figcaption>
          </figure>
        </section>
      </main>
    </BrandWorldShell>
  );
}
