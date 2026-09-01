import { BrandMark } from "@/components/poster-studies/BrandMark";

import { BrandWorldPicture, BrandWorldShell, type BrandWorldProps } from "./BrandWorldShell";
import styles from "./PoloWorld.module.css";

const navigation = [
  { id: "direction", label: "Visual direction" },
  { id: "preparation", label: "Preparation" },
  { id: "match", label: "The match" },
  { id: "stable", label: "Sporting life" },
  { id: "city", label: "City" },
  { id: "objects", label: "Signature objects" },
  { id: "evening", label: "After-hours" },
] as const;

const officialEvidence = {
  identity: {
    label: "Polo Ralph Lauren / official brand identity",
    href: "https://corporate.ralphlauren.com/polo-ralph-lauren",
  },
  sportAndPatina: {
    label: "RL Magazine / Love of the Game",
    href: "https://www.ralphlauren.com/rlmag/ralph-lauren-love-of-the-game.html",
  },
  biography: {
    label: "Ralph Lauren / official biography",
    href: "https://corporate.ralphlauren.com/leadership-ralph-lauren-full-bio.html?redirect=true&searchTerms=RALPH+LAUREN+BIO",
  },
  sportAndGenerations: {
    label: "Polo Ralph Lauren / Team USA 2024",
    href: "https://corporate.ralphlauren.com/pr_240618_PoloRalphLaurenTeamUSA2024.html",
  },
  generations: {
    label: "Ralph Lauren / citizenship and sustainability",
    href: "https://corporate.ralphlauren.com/citizenship-and-sustainability",
  },
  equestrian: {
    label: "RL Magazine / Grit and Glamour",
    href: "https://www.ralphlauren.com/rlmag/grit-and-glamour.html",
  },
  streetHistory: {
    label: "RL Magazine / Made to Move",
    href: "https://www.ralphlauren.com/rlmag/the-story-of-polo-sport.html",
  },
  timeline: {
    label: "Ralph Lauren / official 50th-anniversary timeline",
    href: "https://www.ralphlauren.com/rl-50th-anniversary-the-timeline",
  },
} as const;

export function PoloWorld({ project, pavilion }: BrandWorldProps) {
  const preparationScene = pavilion.needs.images[0];
  const travelScene = pavilion.needs.images[1];
  const [
    portraitScene,
    clubhouseScene,
    tableScene,
    journalScene,
    eveningScene,
    dawnScene,
    courtScene,
    stablePortraitScene,
    stableWideScene,
    brownstoneScene,
    cityLifeScene,
    generationsScene,
    familyScene,
    objectScene,
    blueHourScene,
  ] = pavilion.world.scenes;

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
          className={styles.heroLandscape}
          imageClassName={styles.heroLandscapeImage}
          priority
          showContinuity={false}
        />
        <div className={styles.heroWash} />
        <div className={styles.heroRule} aria-hidden="true">
          <span>27</span>
          <span>{project.projectLabel}</span>
          <span>2026</span>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroIdentity}>
            <BrandMark code="polo" decorative />
            <p className={styles.heroKicker}>{pavilion.hero.kicker}</p>
            <h1>
              <span>The</span>
              <span>Long Match</span>
            </h1>
            <p className={styles.heroStatement}>{project.statement}</p>
          </div>
          <figure className={styles.heroPortrait}>
            <BrandWorldPicture
              project={project}
              slot="hero"
              sizes="(min-width: 900px) 28vw, 62vw"
              className={styles.coverPicture}
              priority
            />
            <figcaption>
              <span>{portraitScene.eyebrow}</span>
              <strong>{portraitScene.title}</strong>
            </figcaption>
          </figure>
        </div>
        <p className={styles.heroSummary}>{pavilion.hero.summary}</p>
      </header>

      <main>
        <section
          className={styles.direction}
          id="direction"
          aria-labelledby="polo-direction-heading"
        >
          <header className={styles.directionHeader}>
            <div className={styles.chapterIndex}>
              <span>Direction 00</span>
              <span>Visual language / moodboard</span>
            </div>
            <h2 id="polo-direction-heading">
              One sporting world. Five object families. Twenty frames.
            </h2>
            <div className={styles.chapterNote}>
              <p>{pavilion.design.intro}</p>
              <a
                className={styles.chapterEvidence}
                href={officialEvidence.identity.href}
                target="_blank"
                rel="noreferrer"
              >
                Official evidence / {officialEvidence.identity.label} ↗
              </a>
              <small>Independent visual interpretation / unofficial concept study</small>
            </div>
          </header>

          <div className={styles.moodboardFolio}>
            <div className={`${styles.moodboardLandscape} ${styles.routeMap}`}>
              <header>
                <span>Independent sequence / one connected sporting world</span>
                <b>PREP—DUSK</b>
              </header>
              <strong>FIELD → STABLE → CITY → TABLE</strong>
              <ol aria-label="The Long Match editorial route">
                {["Dawn", "Match", "Stable", "Brownstone", "Clubhouse", "Blue hour"].map(
                  (place, index) => (
                    <li key={place}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {place}
                    </li>
                  ),
                )}
              </ol>
              <p>Locations and cast change. Five object families remain legible.</p>
            </div>

            <aside className={styles.directionNotation} aria-label="Visual direction notes">
              <div className={styles.paletteIndex}>
                <p>Palette / restrained and lived</p>
                {project.palette.map((color, index) => (
                  <div key={color.name}>
                    <span style={{ backgroundColor: color.value }} aria-hidden="true" />
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <strong>{color.name}</strong>
                    <small>{color.value}</small>
                  </div>
                ))}
              </div>
              <dl className={styles.directionSpecs}>
                <div>
                  <dt>Material</dt>
                  <dd>{project.materials.join(" / ")}</dd>
                </div>
                <div>
                  <dt>Lens</dt>
                  <dd>35 mm environment / 50 mm movement / 85 mm intimacy</dd>
                </div>
                <div>
                  <dt>Light</dt>
                  <dd>Dawn haze / open-field daylight / window light / warm evening practicals</dd>
                </div>
                <div>
                  <dt>Format</dt>
                  <dd>Wide landscape / quiet portrait / bound editorial sequence</dd>
                </div>
              </dl>
            </aside>

            <aside className={`${styles.moodboardDetail} ${styles.wardrobeIndex}`}>
              <p>One vocabulary / five recurring object families / twenty frames</p>
              <ol>
                {["1972 Polo shirt", "Oxford cloth", "Cable knit", "Racquet", "Saddle leather"].map(
                  (object, index) => (
                    <li key={object}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {object}
                    </li>
                  ),
                )}
              </ol>
              <small>
                Official history anchors the 1971 Pony and 1972 shirt. This independent study uses
                oxford, cable knit, racquet, and saddle leather as its continuity system.
              </small>
            </aside>

            <div className={`${styles.moodboardEvening} ${styles.lightScore}`}>
              <span>Light score / four exposures</span>
              <div>
                <b>Dawn</b>
                <b>Field</b>
                <b>Table</b>
                <b>Blue hour</b>
              </div>
              <strong>ONE MATERIAL LANGUAGE / DIFFERENT HOURS</strong>
              <p>Independent pacing device / no repeated campaign frame.</p>
            </div>
          </div>

          <div className={styles.photographicRules}>
            <div className={styles.rulesLead}>
              <p>Photographic rules / Field notes</p>
              <h3>{project.motion}</h3>
            </div>
            <ol>
              <li>
                <span>01</span>
                <h4>Continuity over costume</h4>
                <p>{project.rule}</p>
              </li>
              <li>
                <span>02</span>
                <h4>Scale follows time</h4>
                <p>{pavilion.principles.intro}</p>
              </li>
              <li>
                <span>03</span>
                <h4>Character before the look</h4>
                <p>{preparationScene.copy}</p>
              </li>
              <li>
                <span>04</span>
                <h4>Company, not a victory tableau</h4>
                <p>{eveningScene.copy}</p>
              </li>
            </ol>
          </div>
        </section>

        <section
          className={styles.preparation}
          id="preparation"
          aria-labelledby="polo-preparation-heading"
        >
          <header className={styles.folioHeader}>
            <div className={styles.chapterIndex}>
              <span>Chapter 01</span>
              <span>{pavilion.philosophy.label}</span>
            </div>
            <h2 id="polo-preparation-heading">{pavilion.philosophy.title}</h2>
            <div className={styles.headerNote}>
              <p>{pavilion.philosophy.body}</p>
              <a href={pavilion.philosophy.source.href} target="_blank" rel="noreferrer">
                Official evidence / {pavilion.philosophy.source.label} ↗
              </a>
              <small className={styles.objectThread}>
                Official anchor / 1971 Pony + 1972 shirt. Project thread / making + care + company.
              </small>
            </div>
          </header>

          <div className={styles.preparationFolio}>
            <figure className={styles.preparationPortrait}>
              <BrandWorldPicture
                project={project}
                slot="editorialA"
                sizes="(min-width: 900px) 47vw, 92vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{preparationScene.eyebrow}</span>
                <strong>{preparationScene.title}</strong>
                <p>{preparationScene.copy}</p>
              </figcaption>
            </figure>

            <div className={styles.preparationCopy}>
              <p className={styles.dropCap}>{project.challenge}</p>
              <blockquote>{project.response}</blockquote>
            </div>

            <figure className={styles.dawnPanorama}>
              <BrandWorldPicture
                project={project}
                slot="editorialG"
                sizes="(min-width: 900px) 54vw, 100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{dawnScene.eyebrow}</span>
                <strong>{dawnScene.title}</strong>
                <p>{dawnScene.copy}</p>
              </figcaption>
            </figure>
          </div>

          <div className={styles.valuesLedger}>
            {pavilion.values.map((value) => (
              <article key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.match} id="match" aria-labelledby="polo-match-heading">
          <header className={styles.matchHeader}>
            <div className={styles.chapterIndex}>
              <span>Chapter 02</span>
              <span>{pavilion.design.image.eyebrow}</span>
            </div>
            <h2 id="polo-match-heading">The court is prepared. Then the body answers.</h2>
            <div className={styles.chapterNote}>
              <p>{pavilion.design.intro}</p>
              <a
                className={styles.chapterEvidence}
                href={officialEvidence.sportAndPatina.href}
                target="_blank"
                rel="noreferrer"
              >
                Official evidence / {officialEvidence.sportAndPatina.label} ↗
              </a>
              <small className={styles.objectThread}>
                Independent object thread / cotton piqué + wooden racquet + worn grass
              </small>
            </div>
          </header>

          <figure className={styles.matchField}>
            <BrandWorldPicture
              project={project}
              slot="editorialB"
              sizes="100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              <span>{pavilion.design.image.eyebrow}</span>
              <strong>{pavilion.design.image.title}</strong>
              <p>{pavilion.design.image.copy}</p>
            </figcaption>
          </figure>

          <div className={styles.fieldSequence}>
            <figure className={styles.fieldWide}>
              <BrandWorldPicture
                project={project}
                slot="editorialH"
                sizes="(min-width: 900px) 64vw, 100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{courtScene.eyebrow}</span>
                <strong>{courtScene.title}</strong>
                <p>{courtScene.copy}</p>
              </figcaption>
            </figure>
            <aside className={styles.fieldNotes}>
              <p>Field contact / 08 frames</p>
              <strong>{project.statement}</strong>
              <ol>
                {project.applications.map((application, index) => (
                  <li key={application}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {application}
                  </li>
                ))}
              </ol>
            </aside>
          </div>

          <div className={styles.matchMethod}>
            <div className={styles.methodIntro}>
              <p>{pavilion.principles.label}</p>
              <h3>{pavilion.principles.title}</h3>
              <p>{pavilion.principles.intro}</p>
            </div>
            <ol className={styles.longDaySequence}>
              {pavilion.principles.items.map((item) => (
                <li key={item.key}>
                  <span>{item.key}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.stable} id="stable" aria-labelledby="polo-stable-heading">
          <header className={styles.stableHeader}>
            <div className={styles.chapterIndex}>
              <span>Chapter 03</span>
              <span>Stable / Equestrian</span>
            </div>
            <h2 id="polo-stable-heading">Sporting life begins with a relationship.</h2>
            <div className={styles.chapterNote}>
              <p>{pavilion.values[0].body}</p>
              <a
                className={styles.chapterEvidence}
                href={officialEvidence.equestrian.href}
                target="_blank"
                rel="noreferrer"
              >
                Official evidence / {officialEvidence.equestrian.label} ↗
              </a>
              <small className={styles.objectThread}>
                Project thread / layered cloth + horse + saddle leather + direct care
              </small>
            </div>
          </header>

          <figure className={styles.stableWide}>
            <BrandWorldPicture
              project={project}
              slot="editorialJ"
              sizes="100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              <span>{stableWideScene.eyebrow}</span>
              <strong>{stableWideScene.title}</strong>
              <p>{stableWideScene.copy}</p>
            </figcaption>
          </figure>

          <div className={styles.stableFolio}>
            <aside className={styles.stablePause}>
              <span>{pavilion.values[0].number}</span>
              <h3>{pavilion.values[0].title}</h3>
              <p>{pavilion.values[0].body}</p>
              <blockquote>{project.lineage}</blockquote>
            </aside>
            <figure className={styles.equestrianPortrait}>
              <BrandWorldPicture
                project={project}
                slot="editorialI"
                sizes="(min-width: 900px) 38vw, 84vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{stablePortraitScene.eyebrow}</span>
                <strong>{stablePortraitScene.title}</strong>
                <p>{stablePortraitScene.copy}</p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.city} id="city" aria-labelledby="polo-city-heading">
          <header className={styles.cityHeader}>
            <div className={styles.chapterIndex}>
              <span>Chapter 04</span>
              <span>Nature / City</span>
            </div>
            <h2 id="polo-city-heading">The object language crosses into the city.</h2>
            <div className={styles.chapterNote}>
              <p>{pavilion.needs.items[3].body}</p>
              <a
                className={styles.chapterEvidence}
                href={officialEvidence.biography.href}
                target="_blank"
                rel="noreferrer"
              >
                Official evidence / {officialEvidence.biography.label} ↗
              </a>
              <small className={styles.objectThread}>
                Project thread / navy + oxford + cable knit + racquet bag move through company
              </small>
            </div>
          </header>

          <aside className={styles.historyBand} aria-labelledby="polo-history-heading">
            <header>
              <p>Official evidence / compact history</p>
              <h3 id="polo-history-heading">Official codes. One independent route.</h3>
              <div>
                <a href={officialEvidence.streetHistory.href} target="_blank" rel="noreferrer">
                  {officialEvidence.streetHistory.label} ↗
                </a>
                <a href={officialEvidence.timeline.href} target="_blank" rel="noreferrer">
                  {officialEvidence.timeline.label} ↗
                </a>
              </div>
            </header>
            <ol>
              <li>
                <time>1967</time>
                <p>Polo begins and establishes the name at the centre of the brand&apos;s world.</p>
                <a href={officialEvidence.timeline.href} target="_blank" rel="noreferrer">
                  Timeline ↗
                </a>
              </li>
              <li>
                <time>Bronx</time>
                <p>
                  Pickup basketball and street sport connect athletic life to Ralph Lauren&apos;s
                  New York beginnings.
                </p>
                <a href={officialEvidence.streetHistory.href} target="_blank" rel="noreferrer">
                  Made to Move ↗
                </a>
              </li>
              <li>
                <time>1992–93</time>
                <p>Polo Sport launches, then opens its Madison Avenue store the following year.</p>
                <a href={officialEvidence.streetHistory.href} target="_blank" rel="noreferrer">
                  Made to Move ↗
                </a>
              </li>
              <li>
                <time>Now</time>
                <p>
                  Sporting codes move on and off the field while the people wearing them change.
                </p>
                <a href={officialEvidence.generations.href} target="_blank" rel="noreferrer">
                  Generations ↗
                </a>
              </li>
            </ol>
          </aside>

          <div className={styles.cityFolio}>
            <figure className={styles.brownstoneWide}>
              <BrandWorldPicture
                project={project}
                slot="editorialL"
                sizes="(min-width: 900px) 66vw, 100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{cityLifeScene.eyebrow}</span>
                <strong>{cityLifeScene.title}</strong>
                <p>{cityLifeScene.copy}</p>
              </figcaption>
            </figure>
            <figure className={styles.cityPortrait}>
              <BrandWorldPicture
                project={project}
                slot="editorialK"
                sizes="(min-width: 900px) 27vw, 74vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{brownstoneScene.eyebrow}</span>
                <strong>{brownstoneScene.title}</strong>
                <p>{brownstoneScene.copy}</p>
              </figcaption>
            </figure>
          </div>

          <div className={styles.cityPause}>
            <p>{project.response}</p>
            <blockquote>{pavilion.values[1].body}</blockquote>
          </div>
        </section>

        <section
          className={styles.clubhouse}
          id="clubhouse"
          aria-labelledby="polo-clubhouse-heading"
        >
          <header className={styles.clubhouseHeader}>
            <div className={styles.chapterIndex}>
              <span>Chapter 05</span>
              <span>{clubhouseScene.eyebrow}</span>
            </div>
            <h2 id="polo-clubhouse-heading">The field becomes a social world.</h2>
            <div className={styles.chapterNote}>
              <p>{pavilion.needs.intro}</p>
              <a
                className={styles.chapterEvidence}
                href={officialEvidence.sportAndGenerations.href}
                target="_blank"
                rel="noreferrer"
              >
                Official evidence / {officialEvidence.sportAndGenerations.label} ↗
              </a>
              <small className={styles.objectThread}>
                Project thread / brownstone + clubhouse + colour archive + generations
              </small>
            </div>
          </header>

          <div className={styles.clubhouseFolio}>
            <figure className={styles.clubhousePortrait}>
              <BrandWorldPicture
                project={project}
                slot="editorialC"
                sizes="(min-width: 900px) 38vw, 88vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{clubhouseScene.eyebrow}</span>
                <strong>{clubhouseScene.title}</strong>
                <p>{clubhouseScene.copy}</p>
              </figcaption>
            </figure>

            <ol className={styles.needsList}>
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

            <figure className={styles.journalStill}>
              <BrandWorldPicture
                project={project}
                slot="editorialE"
                sizes="(min-width: 900px) 27vw, 72vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{journalScene.eyebrow}</span>
                <strong>{journalScene.title}</strong>
                <p>{journalScene.copy}</p>
              </figcaption>
            </figure>
          </div>

          <figure className={styles.longTable}>
            <BrandWorldPicture
              project={project}
              slot="editorialD"
              sizes="100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              <span>{tableScene.eyebrow}</span>
              <strong>{tableScene.title}</strong>
              <p>{tableScene.copy}</p>
            </figcaption>
          </figure>

          <div className={styles.generationsSequence}>
            <header>
              <p>Family / Generations</p>
              <h3>The hands change. The object language remains recognisable.</h3>
              <a
                className={styles.chapterEvidence}
                href={officialEvidence.generations.href}
                target="_blank"
                rel="noreferrer"
              >
                Official evidence / {officialEvidence.generations.label} ↗
              </a>
            </header>
            <figure className={styles.familyWide}>
              <BrandWorldPicture
                project={project}
                slot="editorialN"
                sizes="(min-width: 900px) 61vw, 100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{familyScene.eyebrow}</span>
                <strong>{familyScene.title}</strong>
                <p>{familyScene.copy}</p>
              </figcaption>
            </figure>
            <figure className={styles.generationsPortrait}>
              <BrandWorldPicture
                project={project}
                slot="editorialM"
                sizes="(min-width: 900px) 29vw, 76vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{generationsScene.eyebrow}</span>
                <strong>{generationsScene.title}</strong>
                <p>{generationsScene.copy}</p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className={styles.materialChapter}
          id="objects"
          aria-labelledby="polo-material-heading"
        >
          <header className={styles.materialHeader}>
            <div className={styles.chapterIndex}>
              <span>Chapter 06</span>
              <span>{pavilion.principles.image.eyebrow}</span>
            </div>
            <h2 id="polo-material-heading">{pavilion.principles.image.title}</h2>
            <div className={styles.chapterNote}>
              <p>{pavilion.principles.image.copy}</p>
              <a
                className={styles.chapterEvidence}
                href={officialEvidence.sportAndPatina.href}
                target="_blank"
                rel="noreferrer"
              >
                Official evidence / {officialEvidence.sportAndPatina.label} ↗
              </a>
              <small className={styles.objectThread}>
                Object audit / shirt + oxford + cable knit + racquet + saddle leather
              </small>
            </div>
          </header>
          <div className={styles.materialSpread}>
            <figure className={styles.materialStudy}>
              <BrandWorldPicture
                project={project}
                slot="tactile"
                sizes="(min-width: 900px) 58vw, 100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{pavilion.principles.label}</span>
                <strong>{pavilion.principles.title}</strong>
                <p>{pavilion.principles.intro}</p>
              </figcaption>
            </figure>
            <aside className={styles.materialIndex} aria-label="Project material index">
              <p>{project.typography}</p>
              <div className={styles.materialNames}>
                {project.materials.map((material, index) => (
                  <span key={material}>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    {material}
                  </span>
                ))}
              </div>
            </aside>

            <section className={styles.signatureNarrative} aria-labelledby="polo-signature-heading">
              <header>
                <p>Signature item / official history + project interpretation</p>
                <h3 id="polo-signature-heading">Five object families carry the whole world.</h3>
                <p>
                  Official history fixes two anchors—the Pony mark in 1971 and the Polo shirt in
                  1972. This independent study follows cotton piqué, blue oxford, cream cable knit,
                  wooden racquets, and saddle leather across an intergenerational ensemble. The
                  categories recur; the people, specific garments, and places are allowed to change.
                </p>
              </header>
              <ol className={styles.signatureLedger}>
                <li>
                  <time>1971</time>
                  <div>
                    <span>Official history / mark</span>
                    <h4>The Pony mark debuts.</h4>
                    <p>The official Ralph Lauren timeline records the mark as an early anchor.</p>
                  </div>
                  <a href={officialEvidence.timeline.href} target="_blank" rel="noreferrer">
                    Official timeline ↗
                  </a>
                </li>
                <li>
                  <time>1972</time>
                  <div>
                    <span>Official history / shirt</span>
                    <h4>The Polo shirt is introduced.</h4>
                    <p>
                      The official date anchors the item; the colour archive and lived wardrobe
                      belong to this project&apos;s independent visual sequence.
                    </p>
                  </div>
                  <a href={officialEvidence.timeline.href} target="_blank" rel="noreferrer">
                    Official timeline ↗
                  </a>
                </li>
                <li>
                  <time>On field</time>
                  <div>
                    <span>Project interpretation / wardrobe</span>
                    <h4>Oxford and cable knit extend the shirt into weather and occasion.</h4>
                    <p>
                      Oxford cloth moves from workday structure to rolled-sleeve ease; cable knit
                      moves from warm-up layer to evening texture.
                    </p>
                  </div>
                  <a href={officialEvidence.sportAndPatina.href} target="_blank" rel="noreferrer">
                    Love of the Game ↗
                  </a>
                </li>
                <li>
                  <time>Equipment</time>
                  <div>
                    <span>Project interpretation / use</span>
                    <h4>Wooden racquets and saddle leather keep sport physical.</h4>
                    <p>
                      A handled racquet and cared-for saddle leather make repetition, maintenance,
                      and touch visible rather than using sport as a decorative backdrop.
                    </p>
                  </div>
                  <a href={officialEvidence.sportAndPatina.href} target="_blank" rel="noreferrer">
                    Love of the Game ↗
                  </a>
                </li>
                <li>
                  <time>Off field</time>
                  <div>
                    <span>Project interpretation / route</span>
                    <h4>Five object families carry continuity between people and places.</h4>
                    <p>
                      Shirt, oxford, knit, racquet, and leather recur as families through field,
                      stable, brownstone, clubhouse, and table; the setting and specific user can
                      change while the world remains legible.
                    </p>
                  </div>
                  <a href={officialEvidence.sportAndPatina.href} target="_blank" rel="noreferrer">
                    Love of the Game ↗
                  </a>
                </li>
              </ol>
            </section>

            <figure className={styles.objectStrip}>
              <BrandWorldPicture
                project={project}
                slot="editorialO"
                sizes="100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{objectScene.eyebrow}</span>
                <strong>{objectScene.title}</strong>
                <p>{objectScene.copy}</p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.evening} id="evening" aria-labelledby="polo-evening-heading">
          <header className={styles.eveningHeader}>
            <div className={styles.chapterIndex}>
              <span>Chapter 07</span>
              <span>{eveningScene.eyebrow}</span>
            </div>
            <h2 id="polo-evening-heading">{pavilion.world.title}</h2>
            <div className={styles.chapterNote}>
              <p>{pavilion.world.intro}</p>
              <a
                className={styles.chapterEvidence}
                href={officialEvidence.biography.href}
                target="_blank"
                rel="noreferrer"
              >
                Official evidence / nature-to-city American storytelling ↗
              </a>
              <small className={styles.objectThread}>
                Independent resolution / preparation, maintenance, company, and dusk return
              </small>
            </div>
          </header>

          <div className={styles.eveningFolio}>
            <figure className={styles.travelPortrait}>
              <BrandWorldPicture
                project={project}
                slot="context"
                sizes="(min-width: 900px) 34vw, 84vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{travelScene.eyebrow}</span>
                <strong>{travelScene.title}</strong>
                <p>{travelScene.copy}</p>
              </figcaption>
            </figure>
            <figure className={styles.eveningArrival}>
              <BrandWorldPicture
                project={project}
                slot="editorialF"
                sizes="(min-width: 900px) 61vw, 100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>{eveningScene.eyebrow}</span>
                <strong>{eveningScene.title}</strong>
                <p>{eveningScene.copy}</p>
              </figcaption>
            </figure>
          </div>

          <figure className={styles.blueHourWide}>
            <BrandWorldPicture
              project={project}
              slot="editorialP"
              sizes="100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              <span>{blueHourScene.eyebrow}</span>
              <strong>The equipment waits for another day of use.</strong>
              <p>
                A folded navy sweater, wooden racquet, balls, and towel rest beside the grass court;
                the world closes on readiness rather than a staged victory.
              </p>
            </figcaption>
          </figure>

          <div className={styles.closingLine}>
            <p>{project.rule}</p>
            <strong>{project.statement}</strong>
          </div>
        </section>
      </main>
    </BrandWorldShell>
  );
}
