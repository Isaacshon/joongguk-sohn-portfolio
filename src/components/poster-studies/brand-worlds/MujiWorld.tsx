import { BrandMark } from "@/components/poster-studies/BrandMark";

import { BrandWorldPicture, BrandWorldShell, type BrandWorldProps } from "./BrandWorldShell";
import styles from "./MujiWorld.module.css";

const navigation = [
  { id: "object", label: "Object" },
  { id: "use", label: "Use" },
  { id: "room", label: "Room" },
  { id: "shared-life", label: "Shared life" },
] as const;

export function MujiWorld({ project, pavilion }: BrandWorldProps) {
  return (
    <BrandWorldShell
      project={project}
      pavilion={pavilion}
      navigation={navigation}
      className={styles.muji}
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
        <div className={styles.heroCard}>
          <h1 className={styles.srOnly}>MUJI</h1>
          <BrandMark code={pavilion.code} className={styles.heroBrand} decorative />
          <p className={styles.campaignTitle}>Household Weather</p>
          <p className={styles.heroStatement}>
            Ordinary objects, quiet actions, and rooms that leave space for the people inside them.
          </p>
        </div>
      </header>

      <main className={styles.story}>
        <section className={styles.chapter} id="object" aria-labelledby="muji-object-title">
          <header className={styles.chapterIntro}>
            <p className={styles.chapterNumber}>01 / Object</p>
            <div>
              <h2 id="muji-object-title">Begin with what the hand needs.</h2>
              <p>
                Material, proportion, and usefulness come before display. Translucent storage,
                unbleached paper, and simple tools are photographed at the scale of daily use.
              </p>
              <a
                href="https://atelier.muji.com/jp-en/exhibition/260404_osk/"
                target="_blank"
                rel="noreferrer"
              >
                MUJI / Nothing, Yet Everything
              </a>
            </div>
          </header>

          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <BrandWorldPicture
              project={project}
              slot="tactile"
              sizes="(max-width: 720px) 100vw, 86vw"
              className={`${styles.picture} ${styles.landscape}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Object 01</span>
              <p>
                Plain materials stay legible. Nothing is added to make usefulness look luxurious.
              </p>
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.figurePortrait} ${styles.alignRight}`}>
            <BrandWorldPicture
              project={project}
              slot="hero"
              sizes="(max-width: 720px) 100vw, 56vw"
              className={`${styles.picture} ${styles.portrait}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Object 02</span>
              <p>The object remains quiet enough for posture, air, and movement to stay visible.</p>
            </figcaption>
          </figure>
        </section>

        <section className={styles.chapter} id="use" aria-labelledby="muji-use-title">
          <header className={styles.chapterIntro}>
            <p className={styles.chapterNumber}>02 / Use</p>
            <div>
              <h2 id="muji-use-title">Use is the clearest form of explanation.</h2>
              <p>
                Laundry, folding, and preparation are treated as complete scenes. The action shows
                why an object has its shape without turning the home into a showroom.
              </p>
            </div>
          </header>

          <figure className={`${styles.figure} ${styles.figureMedium} ${styles.alignLeft}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialA"
              sizes="(max-width: 720px) 100vw, 68vw"
              className={`${styles.picture} ${styles.tallLandscape}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Use 01</span>
              <p>Fresh air, one shirt, one repeated action. The product supports the rhythm.</p>
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.figurePortrait} ${styles.alignRight}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialB"
              sizes="(max-width: 720px) 100vw, 58vw"
              className={`${styles.picture} ${styles.portrait}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Use 02</span>
              <p>
                Texture is shown through handling: cloth, wood, ceramic, and the space between them.
              </p>
            </figcaption>
          </figure>
        </section>

        <section className={styles.chapter} id="room" aria-labelledby="muji-room-title">
          <header className={styles.chapterIntro}>
            <p className={styles.chapterNumber}>03 / Room</p>
            <div>
              <h2 id="muji-room-title">Let the room remain unfinished.</h2>
              <p>
                A useful interior does not prescribe a single life. Light, storage, and furniture
                establish calm conditions; weather, arrival, and individual habits complete them.
              </p>
            </div>
          </header>

          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialC"
              sizes="(max-width: 720px) 100vw, 86vw"
              className={`${styles.picture} ${styles.cinematic}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Room 01</span>
              <p>Shared space is organized without demanding the same activity from everyone.</p>
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.figurePortrait} ${styles.alignLeft}`}>
            <BrandWorldPicture
              project={project}
              slot="context"
              sizes="(max-width: 720px) 100vw, 56vw"
              className={`${styles.picture} ${styles.portrait}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Room 02</span>
              <p>An entrance absorbs the day outside before the household continues within.</p>
            </figcaption>
          </figure>
        </section>

        <section
          className={`${styles.chapter} ${styles.finalChapter}`}
          id="shared-life"
          aria-labelledby="muji-shared-title"
        >
          <header className={styles.chapterIntro}>
            <p className={styles.chapterNumber}>04 / Shared life</p>
            <div>
              <h2 id="muji-shared-title">The object recedes. Life becomes the subject.</h2>
              <p>
                Making, repair, conversation, and a shared table carry the same restraint into
                public life. Continuity comes from familiar actions, not a decorative house style.
              </p>
            </div>
          </header>

          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialD"
              sizes="(max-width: 720px) 100vw, 86vw"
              className={`${styles.picture} ${styles.cinematic}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Shared life 01</span>
              <p>Care is visible in the joint, the tool, and the time allowed to make well.</p>
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.figureMedium} ${styles.alignRight}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialE"
              sizes="(max-width: 720px) 100vw, 70vw"
              className={`${styles.picture} ${styles.tallLandscape}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Shared life 02</span>
              <p>
                Repair joins material knowledge to conversation instead of hiding the evidence of
                use.
              </p>
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <BrandWorldPicture
              project={project}
              slot="editorialF"
              sizes="(max-width: 720px) 100vw, 86vw"
              className={`${styles.picture} ${styles.cinematic}`}
              imageClassName={styles.image}
            />
            <figcaption>
              <span>Shared life 03</span>
              <p>A useful object finishes its story by making room for company.</p>
            </figcaption>
          </figure>
        </section>
      </main>
    </BrandWorldShell>
  );
}
