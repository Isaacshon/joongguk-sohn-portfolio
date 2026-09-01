import { BrandMark } from "@/components/poster-studies/BrandMark";

import { BrandWorldPicture, BrandWorldShell, type BrandWorldProps } from "./BrandWorldShell";
import styles from "./MujiWorld.module.css";

const navigation = [
  { id: "direction", label: "Household evidence" },
  { id: "premise", label: "Empty vessel" },
  { id: "method", label: "Product archetypes" },
  { id: "living", label: "Objects in use" },
  { id: "world", label: "Objects recede" },
] as const;

const mujiObjectArchive = [
  {
    index: "01",
    date: "1984",
    family: "Polypropylene storage",
    evidence: "official",
    status: "Official product archive",
    title: "The material stays visible.",
    body: "MUJI's archive traces the PP Box to 1984: pigment, small dividers, and special-purpose cut-outs were removed so one translucent container could hold many kinds of things.",
    href: "https://www.muji.com/jp/feature/polypropylene-storage/",
    source: "PP storage archive",
  },
  {
    index: "02",
    date: "Archive",
    family: "Wall-mounted CD player",
    evidence: "mixed",
    status: "Official object / project reading",
    title: "One action explains the object.",
    body: "The official catalogue records the wall-mounted player. In this independent study, its mounted square and hanging cord become an example of operation made immediately legible.",
    href: "https://www.muji.com/public/media/jp/doc/7677181/catalog_10ss_fab01.pdf",
    source: "Official catalogue",
  },
  {
    index: "03",
    date: "Project",
    family: "Recycled paper / household tools",
    evidence: "project",
    status: "Independent display + prop system",
    title: "Simple tools keep the task visible.",
    body: "Recycled paper is this project's exhibition substrate, and the recurring tray, brush, cloth, and kettle are its household prop system. They interpret MUJI's material-selection principle; they are not presented as an official product-history claim.",
    href: "https://www.muji.com/sg/about",
    source: "Three principles",
  },
  {
    index: "04",
    date: "Package",
    family: "Unbleached paper",
    evidence: "official",
    status: "Official production principle",
    title: "The package stops at protection and information.",
    body: "MUJI explains that omitting the pulp-bleaching process creates light-beige paper used for packaging and labels: a production decision becomes the visual identity.",
    href: "https://www.muji.com/sg/about",
    source: "About MUJI",
  },
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
          className={styles.heroPicture}
          imageClassName={styles.heroImage}
          priority
          showContinuity={false}
        />
        <div className={styles.heroVeil} />
        <div className={styles.heroCopy}>
          <p>{pavilion.hero.kicker}</p>
          <BrandMark code="muji" decorative />
          <h1>HOUSEHOLD WEATHER</h1>
          <p className={styles.heroStatement}>{project.statement}</p>
        </div>
        <p className={styles.heroNote}>{pavilion.hero.summary}</p>
      </header>

      <main>
        <section
          className={styles.direction}
          id="direction"
          aria-labelledby="muji-direction-heading"
        >
          <header className={styles.directionHeader}>
            <div className={styles.sectionLabel}>
              <span>01</span>
              <span>Moodboard / photographic rules</span>
            </div>
            <h2 id="muji-direction-heading">The object stays. The household changes.</h2>
            <p>
              Household weather is evidence, not styling. Translucent storage, pale cloth, plain
              paper, wood, and legible actions recur across different rooms and people. Photograph
              the use before naming the product.
            </p>
          </header>
          <div className={styles.moodTable}>
            <figure className={styles.moodRoom}>
              <div className={styles.roomDiagram} aria-hidden="true">
                <div className={styles.roomDatum}>
                  <span>Household field</span>
                  <span>08:20 / indirect light</span>
                </div>
                <ol>
                  <li>
                    <span>01</span>
                    Store
                  </li>
                  <li>
                    <span>02</span>
                    Listen
                  </li>
                  <li>
                    <span>03</span>
                    Prepare
                  </li>
                  <li>
                    <span>04</span>
                    Rest
                  </li>
                </ol>
                <p>Need → object → room</p>
              </div>
              <figcaption>Storage changes contents / the room changes with it</figcaption>
            </figure>
            <figure className={styles.moodMaterial}>
              <BrandWorldPicture
                project={project}
                slot="tactile"
                sizes="(min-width: 900px) 24vw, 62vw"
                className={styles.coverPicture}
              />
              <figcaption>
                Material field / translucent storage + plain paper + simple tools
              </figcaption>
            </figure>
            <figure className={styles.moodObject}>
              <div className={styles.objectDiagram} aria-hidden="true">
                <span className={styles.objectIndex}>Object / 01</span>
                <div className={styles.storageStudy}>
                  <span />
                  <span />
                  <span />
                </div>
                <dl>
                  <div>
                    <dt>Need</dt>
                    <dd>Recurring</dd>
                  </div>
                  <div>
                    <dt>Form</dt>
                    <dd>Open</dd>
                  </div>
                </dl>
              </div>
              <figcaption>
                Design test / one visible action should explain how an object is used
              </figcaption>
            </figure>
            <aside className={styles.directionNotes} aria-label="MUJI visual direction notes">
              <div className={styles.paletteStrip} aria-label="Project palette">
                {project.palette.map((colour) => (
                  <span key={colour.name} style={{ backgroundColor: colour.value }}>
                    {colour.name}
                  </span>
                ))}
              </div>
              <dl>
                <div>
                  <dt>Light</dt>
                  <dd>North-window daylight / soft overcast falloff</dd>
                </div>
                <div>
                  <dt>Lens</dt>
                  <dd>35–50 mm / eye level / normal perspective</dd>
                </div>
                <div>
                  <dt>Material</dt>
                  <dd>{project.materials.slice(0, 3).join(" / ")}</dd>
                </div>
                <div>
                  <dt>Rule</dt>
                  <dd>Show the task before the product claim.</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className={styles.premise} id="premise" aria-labelledby="muji-premise-heading">
          <div className={styles.sectionLabel}>
            <span>02</span>
            <span>{pavilion.philosophy.label}</span>
          </div>
          <div className={styles.premiseCopy}>
            <h2 id="muji-premise-heading">{pavilion.philosophy.title}</h2>
            <p>{pavilion.philosophy.body}</p>
            <a href={pavilion.philosophy.source.href} target="_blank" rel="noreferrer">
              Official source ↗
            </a>
          </div>
          <figure className={styles.objectPortrait}>
            <BrandWorldPicture
              project={project}
              slot="hero"
              sizes="(min-width: 900px) 38vw, 92vw"
              className={styles.coverPicture}
            />
            <figcaption>
              <span>Independent household sequence / official sources in the ledger below</span>
              <strong>One material language supports many ordinary routines.</strong>
            </figcaption>
          </figure>
          <figure className={styles.singleObject}>
            <BrandWorldPicture
              project={project}
              slot="editorialA"
              sizes="(min-width: 900px) 22vw, 58vw"
              className={styles.coverPicture}
            />
            <figcaption>Laundry / cloth, rail, weather, and hand remain fully legible</figcaption>
          </figure>
        </section>

        <section className={styles.method} id="method" aria-labelledby="muji-method-heading">
          <header className={styles.methodHeader}>
            <div className={styles.sectionLabel}>
              <span>03</span>
              <span>Product-development method</span>
            </div>
            <h2 id="muji-method-heading">{pavilion.principles.title}</h2>
            <p>{pavilion.principles.intro}</p>
          </header>
          <div className={styles.methodLedger}>
            {pavilion.values.map((value) => (
              <article key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
          <div className={styles.objectArchive} aria-labelledby="muji-object-archive-heading">
            <header>
              <p>Object evidence / official anchor + independent use sequence</p>
              <h3 id="muji-object-archive-heading">Four threads. One home.</h3>
              <p>
                Official sources anchor the PP box, wall player, and reduced unbleached package. The
                recycled-paper display stock, simple tool kit, household cast, and photographic
                sequence are identified as this independent project&apos;s interpretation.
              </p>
            </header>
            <ol className={styles.objectLedger}>
              {mujiObjectArchive.map((object) => (
                <li key={object.family}>
                  <span>{object.index}</span>
                  <div className={styles.objectMeta}>
                    <time>{object.date}</time>
                    <small data-evidence={object.evidence}>{object.status}</small>
                    <p>{object.family}</p>
                  </div>
                  <div className={styles.objectReason}>
                    <h4>{object.title}</h4>
                    <p>{object.body}</p>
                  </div>
                  <a href={object.href} target="_blank" rel="noreferrer">
                    {object.source} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ol>
            <div className={styles.materialKey} aria-label="Independent MUJI material study">
              <span>Project material study</span>
              <p>
                <strong>PP</strong> translucent
              </p>
              <p>
                <strong>UB</strong> unbleached paper
              </p>
              <p>
                <strong>RP</strong> recycled stock
              </p>
              <p>
                <strong>TL</strong> simple tools
              </p>
            </div>
          </div>
          <div className={styles.materialSpread}>
            <figure className={styles.materialEvidence}>
              <div className={styles.materialEvidenceBoard} aria-hidden="true">
                <p>
                  <span>Material evidence</span>
                  <span>Finish only where function asks</span>
                </p>
                <ol>
                  <li>
                    <span>PP</span>
                    Translucent
                  </li>
                  <li>
                    <span>UB</span>
                    Reduced package
                  </li>
                  <li>
                    <span>RP</span>
                    Project substrate
                  </li>
                  <li>
                    <span>TL</span>
                    Task before display
                  </li>
                </ol>
              </div>
              <figcaption>
                PP / unbleached paper / recycled stock / simple tool / each role stays legible
              </figcaption>
            </figure>
            <figure>
              <BrandWorldPicture
                project={project}
                slot="editorialB"
                sizes="(min-width: 900px) 34vw, 100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                Material handling / cloth, ceramics, brush, and wood organised by task
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.living} id="living" aria-labelledby="muji-living-heading">
          <header>
            <div className={styles.sectionLabel}>
              <span>04</span>
              <span>Household life</span>
            </div>
            <h2 id="muji-living-heading">{pavilion.needs.title}</h2>
            <p>{pavilion.needs.intro}</p>
          </header>
          <ol className={styles.needList}>
            {pavilion.needs.items.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.livingImages}>
            <figure className={styles.lifePortrait}>
              <BrandWorldPicture
                project={project}
                slot="context"
                sizes="(min-width: 900px) 34vw, 88vw"
                className={styles.coverPicture}
              />
              <figcaption>
                Arrival / umbrella, entry, and weather make the household need visible
              </figcaption>
            </figure>
            <figure className={styles.morningFrame}>
              <BrandWorldPicture
                project={project}
                slot="editorialC"
                sizes="(min-width: 900px) 44vw, 92vw"
                className={styles.coverPicture}
              />
              <figcaption>
                Shared room / reading and writing coexist without competing for attention
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.worldSection} id="world" aria-labelledby="muji-world-heading">
          <div className={styles.worldTitle}>
            <div className={styles.sectionLabel}>
              <span>05</span>
              <span>Public / archive / shared</span>
            </div>
            <h2 id="muji-world-heading">{pavilion.world.title}</h2>
            <p>{pavilion.world.intro}</p>
          </div>
          <figure className={styles.retailFrame}>
            <BrandWorldPicture
              project={project}
              slot="editorialD"
              sizes="100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              Workshop / material, joint, tool, and maker remain in the same field of view
            </figcaption>
          </figure>
          <div className={styles.finalPair}>
            <figure>
              <BrandWorldPicture
                project={project}
                slot="editorialE"
                sizes="(min-width: 900px) 30vw, 78vw"
                className={styles.coverPicture}
              />
              <figcaption>
                Repair counter / folded material, conversation, and a rain-marked arrival
              </figcaption>
            </figure>
            <figure>
              <BrandWorldPicture
                project={project}
                slot="editorialF"
                sizes="(min-width: 900px) 58vw, 100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                Shared table / useful objects recede while company becomes the subject
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
    </BrandWorldShell>
  );
}
