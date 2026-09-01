import { BrandMark } from "@/components/poster-studies/BrandMark";

import { BrandWorldPicture, BrandWorldShell, type BrandWorldProps } from "./BrandWorldShell";
import styles from "./LevisWorld.module.css";

const navigation = [
  { id: "direction", label: "Visual direction" },
  { id: "original", label: "Original" },
  { id: "construction", label: "501 anatomy" },
  { id: "wear", label: "Wear cycle" },
  { id: "archive", label: "Living archive" },
] as const;

const levis501Anatomy = [
  {
    index: "01",
    date: "1873",
    evidence: "Official construction history",
    title: "Copper rivets",
    body: "Patent No. 139,121 reinforced pocket openings at points of strain and created the construction premise for blue jeans.",
    href: "https://www.levistrauss.com/2021/05/20/celebrating-the-levis-501-jean/",
  },
  {
    index: "02",
    date: "501",
    evidence: "Official product signature",
    title: "Straight leg / button fly",
    body: "Levi's identifies the 501 by its five-pocket straight fit and signature button fly: the silhouette is the constant that wear can change.",
    href: "https://www.levistrauss.com/2022/05/20/celebrating-501-day-around-the-world/",
  },
  {
    index: "03",
    date: "1873",
    evidence: "Official pocket signature",
    title: "Arcuate",
    body: "The stitched bow on the back pocket has appeared since the first jeans; Levi's received its Arcuate trademark in 1943.",
    href: "https://www.levistrauss.com/2018/11/15/happy-75th-anniversary-arcuate-5-facts-pocket-design/",
  },
  {
    index: "04",
    date: "1886",
    evidence: "Official patch history",
    title: "Two Horse patch",
    body: "The Two Horse trademark appeared on the original leather patch in 1886, turning a strength claim into an immediately recognisable object detail.",
    href: "https://www.levistrauss.com/levis-history/",
  },
  {
    index: "05",
    date: "1936",
    evidence: "Official pocket identifier",
    title: "Red Tab",
    body: "The folded red cloth tab was placed on the right back pocket to distinguish the 501 from competitors at a glance.",
    href: "https://www.levistrauss.com/2017/03/01/levis-tabs/",
  },
] as const;

const levisWearCycle = [
  {
    step: "01",
    title: "Make",
    anchor: "Copper rivets / button fly / five-pocket form",
    body: "Copper hardware and seams establish a working structure that can be recognised across many lived examples.",
  },
  {
    step: "02",
    title: "Wear",
    anchor: "Straight leg / body / movement",
    body: "The stable silhouette meets different bodies; creases, abrasion, and styling make each record personal.",
  },
  {
    step: "03",
    title: "Fade",
    anchor: "Indigo / friction / washing",
    body: "Friction and washing create individual fade maps around pockets, knees, seats, and hems.",
  },
  {
    step: "04",
    title: "Repair",
    anchor: "Needle / patch / visible intervention",
    body: "Mending reinforces a worn area while earlier fade and abrasion remain visible as part of the garment's history.",
  },
  {
    step: "05",
    title: "Pass on",
    anchor: "Two Horse patch / Red Tab / another life",
    body: "Care, reuse, and handoff allow construction and accumulated wear to continue with another owner.",
  },
] as const;

export function LevisWorld({ project, pavilion }: BrandWorldProps) {
  return (
    <BrandWorldShell
      project={project}
      pavilion={pavilion}
      navigation={navigation}
      className={styles.levis}
    >
      <header className={styles.hero} id="world-top">
        <BrandWorldPicture
          project={project}
          slot="context"
          sizes="100vw"
          className={styles.heroBackground}
          imageClassName={styles.heroBackgroundImage}
          priority
          showContinuity={false}
        />
        <div className={styles.heroShade} />
        <div className={styles.heroTopline}>
          <span>Record 26 / 2026</span>
          <span>Utility becomes personal</span>
        </div>
        <div className={styles.heroTitle}>
          <BrandMark code="levis" decorative />
          <p>{pavilion.hero.kicker}</p>
          <h1>WEAR IS THE RECORD</h1>
        </div>
        <figure className={styles.heroPortrait}>
          <BrandWorldPicture
            project={project}
            slot="hero"
            sizes="(min-width: 900px) 34vw, 72vw"
            className={styles.coverPicture}
          />
          <figcaption>501 signatures / back patch, Arcuate, and Red Tab</figcaption>
        </figure>
        <p className={styles.heroStatement}>{project.statement}</p>
      </header>

      <main>
        <section
          className={styles.direction}
          id="direction"
          aria-labelledby="levis-direction-heading"
        >
          <header className={styles.directionHeading}>
            <span>01 / Moodboard and image rules</span>
            <h2 id="levis-direction-heading">Built clean. Recorded worn.</h2>
            <p>
              The visual world follows one construction language through many lived examples. Copper
              rivets establish structure; patch placement, Red Tab, Arcuate, button fly, and
              straight form remain recognisable while wear and repair make each pair unique. The
              official Two Horse history is kept in the sourced object ledger below.
            </p>
          </header>
          <div className={styles.archiveBoard}>
            <div className={`${styles.boardStreet} ${styles.contactSheet}`}>
              <div className={styles.contactHeader}>
                <span>Street record / movement study</span>
                <b>01—05</b>
              </div>
              <strong>BODY / ROUTE / REPEAT</strong>
              <ol aria-label="Street movement sequence">
                {["Depart", "Stride", "Pocket", "Turn", "Return"].map((moment, index) => (
                  <li key={moment}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {moment}
                  </li>
                ))}
              </ol>
              <p>Direction rule / available light; movement remains imperfect.</p>
            </div>
            <div className={`${styles.boardDenim} ${styles.materialCard}`}>
              <span>Material proof / 01</span>
              <strong>Cu</strong>
              <div aria-hidden="true" />
              <p>Copper holds the load; indigo, abrasion, and thread record time.</p>
            </div>
            <div className={`${styles.boardPortrait} ${styles.formNotation}`}>
              <span>501 / form before styling</span>
              <strong>ONE FORM</strong>
              <ol>
                <li>Straight leg</li>
                <li>Button fly</li>
                <li>Five pockets</li>
              </ol>
              <p>Direction rule / body first; the garment is already owned.</p>
            </div>
            <aside className={styles.boardRules} aria-label="Levi's visual direction notes">
              <div className={styles.boardPalette} aria-label="Project palette">
                {project.palette.map((colour) => (
                  <span key={colour.name} style={{ backgroundColor: colour.value }}>
                    {colour.name}
                  </span>
                ))}
              </div>
              <dl>
                <div>
                  <dt>Lens</dt>
                  <dd>28–50 mm / close enough to feel present</dd>
                </div>
                <div>
                  <dt>Light</dt>
                  <dd>Window, workshop fluorescent, open street shade</dd>
                </div>
                <div>
                  <dt>Material</dt>
                  <dd>{project.materials.slice(0, 3).join(" / ")}</dd>
                </div>
                <div>
                  <dt>Rule</dt>
                  <dd>Never retouch away the evidence of use.</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className={styles.original} id="original" aria-labelledby="levis-original-heading">
          <div className={styles.recordNumber}>02</div>
          <div className={styles.originalCopy}>
            <p>{pavilion.philosophy.label}</p>
            <h2 id="levis-original-heading">{pavilion.philosophy.title}</h2>
            <p>{pavilion.philosophy.body}</p>
            <a href={pavilion.philosophy.source.href} target="_blank" rel="noreferrer">
              Official source ↗
            </a>
            <small className={styles.interpretationNote}>
              Independent exhibition premise / unofficial portfolio study
            </small>
          </div>
          <figure className={styles.seatedPortrait}>
            <BrandWorldPicture
              project={project}
              slot="editorialA"
              sizes="(min-width: 900px) 42vw, 92vw"
              className={styles.coverPicture}
            />
            <figcaption>
              <span>Portrait record</span>
              <strong>Styling makes the standard personal.</strong>
            </figcaption>
          </figure>
          <aside className={styles.values} aria-label="Levi's project values">
            {pavilion.values.map((value) => (
              <article key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </aside>
        </section>

        <section
          className={styles.construction}
          id="construction"
          aria-labelledby="levis-construction-heading"
        >
          <header>
            <span>03 / Construction</span>
            <h2 id="levis-construction-heading">{pavilion.principles.title}</h2>
            <p>{pavilion.principles.intro}</p>
          </header>
          <div className={styles.constructionImages}>
            <figure className={styles.materialCloseup}>
              <BrandWorldPicture
                project={project}
                slot="tactile"
                sizes="(min-width: 900px) 62vw, 100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                Inspection table / denim, patch material, scissors, tape, and two sets of hands
              </figcaption>
            </figure>
            <figure className={styles.repairTable}>
              <BrandWorldPicture
                project={project}
                slot="editorialB"
                sizes="(min-width: 900px) 38vw, 86vw"
                className={styles.coverPicture}
              />
              <figcaption>
                Repair / layered denim passes beneath the needle without hiding prior wear
              </figcaption>
            </figure>
          </div>
          <div className={styles.signatureAnatomy} aria-labelledby="levis-501-anatomy-heading">
            <div className={styles.anatomyLead}>
              <span>501 Original / object anatomy</span>
              <strong aria-hidden="true">501</strong>
              <h3 id="levis-501-anatomy-heading">
                The 501. Five signatures. A lifetime of records.
              </h3>
              <p>
                Official sources identify the copper rivets, straight form, Arcuate, Two Horse back
                patch, and Red Tab. The wear, repair, and reuse sequence is this independent
                project&apos;s interpretation across several photographed examples.
              </p>
            </div>
            <ol className={styles.anatomyLedger}>
              {levis501Anatomy.map((detail) => (
                <li key={detail.title}>
                  <span>{detail.index}</span>
                  <time>{detail.date}</time>
                  <div>
                    <small>{detail.evidence}</small>
                    <h4>{detail.title}</h4>
                    <p>{detail.body}</p>
                  </div>
                  <a href={detail.href} target="_blank" rel="noreferrer">
                    Official history <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <ol className={styles.constructionRules}>
            {pavilion.principles.items.map((item) => (
              <li key={item.key}>
                <span>{item.key}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.wear} id="wear" aria-labelledby="levis-wear-heading">
          <div className={styles.wearHeading}>
            <span>04 / Wear is evidence</span>
            <h2 id="levis-wear-heading">{pavilion.needs.title}</h2>
            <p>{pavilion.needs.intro}</p>
          </div>
          <figure className={styles.garmentFile}>
            <BrandWorldPicture
              project={project}
              slot="editorialC"
              sizes="(min-width: 900px) 34vw, 86vw"
              className={styles.coverPicture}
            />
            <figcaption>
              Movement record / loose denim, repeated flex, concrete, and abrasion
            </figcaption>
          </figure>
          <div className={styles.wearList}>
            {pavilion.needs.items.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className={styles.lifecycle} aria-labelledby="levis-lifecycle-heading">
            <header>
              <span>Independent project sequence / official care + reuse anchors</span>
              <h3 id="levis-lifecycle-heading">
                One construction: make → wear → fade → mend → pass on.
              </h3>
              <p>
                This proposed sequence carries the documented 501 construction through Levi's
                published care, repair, and reuse guidance. It is a narrative framework for this
                unofficial study, not an official Levi's lifecycle model.
              </p>
            </header>
            <ol>
              {levisWearCycle.map((phase) => (
                <li key={phase.title}>
                  <span>{phase.step}</span>
                  <h4>{phase.title}</h4>
                  <div className={styles.phaseCopy}>
                    <small>{phase.anchor}</small>
                    <p>{phase.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className={styles.lifecycleSources}>
              <a
                href="https://www.levistrauss.com/wearlongerproject/"
                target="_blank"
                rel="noreferrer"
              >
                Wear Longer Project <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.levistrauss.com/how-we-do-business/use-and-reuse/"
                target="_blank"
                rel="noreferrer"
              >
                Use and reuse <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <figure className={styles.gestureFrame}>
            <BrandWorldPicture
              project={project}
              slot="editorialE"
              sizes="(min-width: 900px) 46vw, 100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              Button fly / an official signature handled beside thread, scissors, and tools
            </figcaption>
          </figure>
        </section>

        <section className={styles.archive} id="archive" aria-labelledby="levis-archive-heading">
          <header>
            <span>05 / Living archive</span>
            <h2 id="levis-archive-heading">{pavilion.world.title}</h2>
            <p>{pavilion.world.intro}</p>
          </header>
          <figure className={styles.archiveRoom}>
            <BrandWorldPicture
              project={project}
              slot="spatial"
              sizes="100vw"
              className={styles.coverPicture}
            />
            <figcaption>Transfer / two denim wearers lift a worn trunk from a van</figcaption>
          </figure>
          <figure className={styles.repairFloor}>
            <BrandWorldPicture
              project={project}
              slot="editorialD"
              sizes="(min-width: 900px) 64vw, 100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              Wash and inspection / tears, fade, patch, tab, basin, and tools remain visible
            </figcaption>
          </figure>
          <figure className={styles.streetFinale}>
            <BrandWorldPicture
              project={project}
              slot="editorialF"
              sizes="100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              <span>Independent conclusion / repair and return</span>
              <strong>
                Older hands guide worn denim beneath the needle; the archive ends by making another
                period of use possible.
              </strong>
            </figcaption>
          </figure>
        </section>
      </main>
    </BrandWorldShell>
  );
}
