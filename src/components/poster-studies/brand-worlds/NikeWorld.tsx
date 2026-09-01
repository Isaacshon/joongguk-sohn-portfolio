import { BrandMark } from "@/components/poster-studies/BrandMark";

import { BrandWorldPicture, BrandWorldShell, type BrandWorldProps } from "./BrandWorldShell";
import styles from "./NikeWorld.module.css";

const navigation = [
  { id: "direction", label: "Visual direction" },
  { id: "instinct", label: "Instinct" },
  { id: "conditions", label: "Object lab" },
  { id: "impact", label: "Athlete loop" },
  { id: "continue", label: "Continue" },
] as const;

const nikeObjectLineage = [
  {
    index: "01",
    date: "1971",
    title: "Swoosh",
    evidence: "official",
    status: "Official archive",
    body: "Carolyn Davidson's mark first appeared on the football boot called the Nike. Its curved stripe was selected for the sense of motion it carried across the shoe.",
    href: "https://about.nike.com/en/magazine/nike-swoosh-logo-history",
  },
  {
    index: "02",
    date: "1971–75",
    title: "Waffle outsole",
    evidence: "official",
    status: "Official archive",
    body: "Hand-cut rubber traction moved from Bowerman's 1971 experiments and the Moon Shoe trials to the 1975 Waffle Trainer: a kitchen pattern became a running surface.",
    href: "https://about.nike.com/en/magazine/nike-moon-shoe-waffle-iron-true-history",
  },
  {
    index: "03",
    date: "1978",
    title: "Nike Air",
    evidence: "official",
    status: "Official product history",
    body: "The Tailwind introduced Air to running in 1978. Air remains a sourced historical lineage here; the project photographs do not claim to show a cushioning-unit cutaway.",
    href: "https://about.nike.com/en/magazine/how-nike-created-the-pegasus-running-shoe",
  },
  {
    index: "04",
    date: "2012",
    title: "Flyknit",
    evidence: "official",
    status: "Official product history",
    body: "Digitally engineered knitting places support, flexibility, and breathability where athletes need them; the upper reads as performance structure rather than applied pattern.",
    href: "https://about.nike.com/en/newsroom/releases/next-generation-flyknit-footwear-official-images",
  },
] as const;

const nikeIterationLoop = ["Experiment", "Athlete voice", "Prototype", "Test", "Iterate"] as const;

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
          className={styles.heroEnvironment}
          imageClassName={styles.heroEnvironmentImage}
          priority
          showContinuity={false}
        />
        <div className={styles.heroWash} />
        <div className={styles.heroHeader}>
          <span>Attempt 28 / 2026</span>
          <BrandMark code="nike" decorative />
          <span>One committed action</span>
        </div>
        <div className={styles.heroTitle}>
          <p>{pavilion.hero.kicker}</p>
          <h1>
            <span>No second</span>
            <span>take.</span>
          </h1>
        </div>
        <figure className={styles.heroAction}>
          <BrandWorldPicture
            project={project}
            slot="hero"
            sizes="(min-width: 1000px) 35vw, 74vw"
            className={styles.coverPicture}
          />
          <figcaption>
            <span>00:00:01</span>
            The decisive moment arrives before certainty.
          </figcaption>
        </figure>
        <p className={styles.heroStatement}>{project.statement}</p>
        <span className={styles.heroLine} aria-hidden="true" />
      </header>

      <main>
        <section
          className={styles.direction}
          id="direction"
          aria-labelledby="nike-direction-heading"
        >
          <header className={styles.directionHeading}>
            <span>01 / Moodboard and image rules</span>
            <h2 id="nike-direction-heading">
              <span>Pressure without</span>
              <span>performance theatre.</span>
            </h2>
            <p>
              The research ledger keeps four official histories separate. The photographs follow a
              different contemporary loop—attempt, contact, recovery, feedback, and return—across
              running, wheelchair racing, boxing, and basketball. Hard available light keeps every
              body and surface physical.
            </p>
          </header>
          <div className={styles.cutBoard}>
            <figure className={styles.boardEnvironment}>
              <BrandWorldPicture
                project={project}
                slot="editorialD"
                sizes="(min-width: 900px) 68vw, 100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                Boxing / the recovery interval carries as much evidence as impact
              </figcaption>
            </figure>
            <figure className={styles.boardContact}>
              <div className={styles.contactDiagram} aria-hidden="true">
                <span>Surface / 02</span>
                <div>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <strong>Waffle contact leaves a pattern.</strong>
              </div>
              <figcaption>Waffle lineage / loaded outsole + matching wet-surface print</figcaption>
            </figure>
            <figure className={styles.boardInstinct}>
              <div className={styles.instinctDiagram} aria-hidden="true">
                <span>00:00.00</span>
                <span>00:00.08</span>
                <span>00:00.16</span>
                <i />
                <strong>The mark records the chosen line.</strong>
              </div>
              <figcaption>
                Swoosh lineage / direction identifier, not a performance claim
              </figcaption>
            </figure>
            <aside className={styles.boardSpecification} aria-label="Nike visual direction notes">
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
                  <dd>24–50 mm / enter the action / no distant surveillance</dd>
                </div>
                <div>
                  <dt>Light</dt>
                  <dd>Hard sun, court spill, practical floodlight, deep shadow</dd>
                </div>
                <div>
                  <dt>Material</dt>
                  <dd>{project.materials.slice(0, 3).join(" / ")}</dd>
                </div>
                <div>
                  <dt>Cut</dt>
                  <dd>Hold the decision. End before the result explains it.</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className={styles.instinct} id="instinct" aria-labelledby="nike-instinct-heading">
          <div className={styles.instinctLead}>
            <span>02 / Instinct</span>
            <h2 id="nike-instinct-heading">{pavilion.philosophy.title}</h2>
            <p>{pavilion.philosophy.body}</p>
            <a href={pavilion.philosophy.source.href} target="_blank" rel="noreferrer">
              Mission / official source <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className={styles.turnFrame}>
            <BrandWorldPicture
              project={project}
              slot="editorialA"
              sizes="(min-width: 900px) 50vw, 100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              <strong>The body chooses the line.</strong>
              <span>Instinct / action before composition</span>
            </figcaption>
          </figure>
          <div className={styles.valueRun} aria-label="Nike project values">
            {pavilion.values.map((value) => (
              <article key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.conditions}
          id="conditions"
          aria-labelledby="nike-conditions-heading"
        >
          <header>
            <span>03 / Product lineage</span>
            <h2 id="nike-conditions-heading">
              <span>Four lineages.</span>
              <span>One sourced ledger.</span>
            </h2>
            <p>
              Official histories keep the Swoosh, waffle outsole, Nike Air, and Flyknit distinct.
              The close photography below directly studies only the waffle-like sole; the other
              lineages remain documented research rather than unsupported claims about the images.
            </p>
          </header>
          <figure className={styles.contactFrame}>
            <BrandWorldPicture
              project={project}
              slot="tactile"
              sizes="100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              Waffle lineage / rubber geometry, wear, hand, and scale remain visible
            </figcaption>
          </figure>
          <ol className={styles.objectLedger}>
            {nikeObjectLineage.map((item) => (
              <li key={item.title}>
                <span>{item.index}</span>
                <div>
                  <time>{item.date}</time>
                  <small data-evidence={item.evidence}>{item.status}</small>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Official history <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ol>
          <div className={styles.iterationLoop} aria-labelledby="nike-iteration-heading">
            <div>
              <span>03B / Athlete-led development</span>
              <h3 id="nike-iteration-heading">A test loop does not rewrite origin.</h3>
              <p>
                This independent five-step loop abstracts Nike's published contemporary A.I.R.
                process. It informs the proposed test method below; it is not presented as the
                historical origin of the Swoosh, waffle outsole, Air, or Flyknit.
              </p>
            </div>
            <ol>
              {nikeIterationLoop.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
            <a
              href="https://about.nike.com/en/magazine/nike-design-athlete-imagined-revolution"
              target="_blank"
              rel="noreferrer"
            >
              A.I.R. process / official source <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className={styles.impact} id="impact" aria-labelledby="nike-impact-heading">
          <header>
            <span>04 / Athlete evidence</span>
            <h2 id="nike-impact-heading">One design loop. Many body conditions.</h2>
            <p>
              <span className={styles.interpretationFlag}>Independent test narrative</span>
              Contact, movement, recovery, and athlete observation become evidence points. These
              frames do not report lab results; they show how different sports create different
              questions for the next iteration.
            </p>
          </header>
          <div className={styles.sequenceGrid}>
            <figure className={styles.improvisationFrame}>
              <BrandWorldPicture
                project={project}
                slot="editorialB"
                sizes="(min-width: 900px) 68vw, 100vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>A / waffle lineage / material measurement</span>
                <strong>
                  A caliper makes sole geometry discussable without inventing test data.
                </strong>
              </figcaption>
            </figure>
            <figure className={styles.suspensionFrame}>
              <BrandWorldPicture
                project={project}
                slot="editorialC"
                sizes="(min-width: 900px) 31vw, 82vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>B / basketball / loaded stance</span>
                <strong>The body stores direction before the next move is released.</strong>
              </figcaption>
            </figure>
            <figure className={styles.environmentFrame}>
              <div className={styles.conditionDiagram} aria-hidden="true">
                <div className={styles.conditionField}>
                  <span />
                  <span />
                  <span />
                </div>
                <ol>
                  <li>
                    <span>01</span>
                    Surface
                  </li>
                  <li>
                    <span>02</span>
                    Angle
                  </li>
                  <li>
                    <span>03</span>
                    Load
                  </li>
                  <li>
                    <span>04</span>
                    Revise
                  </li>
                </ol>
              </div>
              <figcaption>
                <span>C / Swoosh lineage / direction record</span>
                <strong>The mark tracks orientation without claiming traction, Air, or fit.</strong>
              </figcaption>
            </figure>
            <figure className={styles.journalFrame}>
              <BrandWorldPicture
                project={project}
                slot="editorialE"
                sizes="(min-width: 900px) 28vw, 78vw"
                className={styles.coverPicture}
              />
              <figcaption>
                <span>D / track / recovery record</span>
                <strong>Recovery creates the space in which the next question can be heard.</strong>
              </figcaption>
            </figure>
          </div>
          <div className={styles.needRun}>
            {pavilion.needs.items.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.continue} id="continue" aria-labelledby="nike-continue-heading">
          <div className={styles.continueLead}>
            <span>05 / Continue elsewhere</span>
            <h2 id="nike-continue-heading">{pavilion.world.title}</h2>
            <p>{pavilion.world.intro}</p>
          </div>
          <figure className={styles.recoveryFrame}>
            <BrandWorldPicture
              project={project}
              slot="context"
              sizes="(min-width: 900px) 40vw, 100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              Track / the athlete after exertion; breath, posture, and place record what changed
            </figcaption>
          </figure>
          <figure className={styles.finalFrame}>
            <BrandWorldPicture
              project={project}
              slot="editorialF"
              sizes="100vw"
              className={styles.coverPicture}
            />
            <figcaption>
              <span>Next attempt / a different athlete continues the loop</span>
              <strong>
                Basketball closes the sequence on committed movement, not on a manufactured victory.
              </strong>
            </figcaption>
          </figure>
        </section>
      </main>
    </BrandWorldShell>
  );
}
