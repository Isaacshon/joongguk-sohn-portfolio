import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MatLayout } from "@/components/MatLayout";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import type { DesignProjectMediaSlot } from "@/lib/design-project-media";
import "@/portfolio-home.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isaac Sohn — Independent Designer & Art Director" },
      {
        name: "description",
        content:
          "Selected identities, brand worlds, editorial systems and digital experiences by Isaac Sohn.",
      },
      { property: "og:title", content: "Isaac Sohn — Selected Work" },
      {
        property: "og:description",
        content: "Independent design, from the first idea to the complete experience.",
      },
    ],
  }),
  component: PortfolioHome,
});

const selections = [
  {
    slug: "polo-ralph-lauren-the-long-match",
    title: "Polo Ralph Lauren",
    field: "Brand world / Art direction",
    note: "An editorial journey through sporting life, familiar rituals and the details that endure.",
    slot: "hero",
    detail: "tactile",
  },
  {
    slug: "prada-the-quiet-error",
    title: "PRADA",
    field: "Fashion / Editorial",
    note: "A study of familiar objects, precise framing and a change of context.",
    slot: "hero",
    detail: "context",
  },
  {
    slug: "afterimage",
    title: "Afterimage",
    field: "Cultural identity / Print",
    note: "Colour plates, registration and the impression an image leaves behind.",
    slot: "hero",
    detail: "tactile",
  },
  {
    slug: "memory-type",
    title: "기억의 활자",
    field: "Typography / Archive",
    note: "A neighbourhood's visual memory, collected through the shapes of its letters.",
    slot: "hero",
    detail: "editorialB",
  },
  {
    slug: "nike-no-second-take",
    title: "Nike",
    field: "Sport / Campaign",
    note: "The moments around an attempt: preparation, contact, recovery and the next start.",
    slot: "hero",
    detail: "context",
  },
] satisfies Array<{
  slug: string;
  title: string;
  field: string;
  note: string;
  slot: DesignProjectMediaSlot;
  detail: DesignProjectMediaSlot;
}>;

const perspectives = [
  {
    slug: "soft-machine",
    title: "Soft Machine",
    discipline: "Material exploration",
    slot: "tactile",
  },
  {
    slug: "public-memory",
    title: "Public Memory",
    discipline: "Culture in public space",
    slot: "spatial",
  },
  { slug: "tidehold", title: "Tidehold", discipline: "Coastal hospitality", slot: "hero" },
] satisfies Array<{
  slug: string;
  title: string;
  discipline: string;
  slot: DesignProjectMediaSlot;
}>;

function PortfolioHome() {
  const [selected, setSelected] = useState(0);
  const [detail, setDetail] = useState(false);
  const active = selections[selected];
  const choose = (index: number) => {
    setSelected(index);
    setDetail(false);
  };
  const advance = (amount: number) =>
    choose((selected + amount + selections.length) % selections.length);

  return (
    <MatLayout immersive surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <div className="portfolio-home">
        <header className="portfolio-home__intro">
          <div>
            <p className="portfolio-home__eyebrow">Independent designer &amp; art director</p>
            <h1>
              Isaac Sohn<span aria-hidden="true">.</span>
            </h1>
          </div>
          <div className="portfolio-home__intro-copy">
            <p>
              Identities, images, and experiences.
              <br />A distinct point of view for each.
            </p>
            <Link to="/work">
              Explore all work <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>

        <section className="portfolio-home__spotlight" aria-label="Selected project preview">
          <div className="portfolio-home__stage">
            <Link
              className="portfolio-home__image-link"
              to="/poster-studies/$slug"
              params={{ slug: active.slug }}
              aria-label={`Open ${active.title} project`}
            >
              <ProjectPicture
                key={`${active.slug}-${detail}`}
                projectSlug={active.slug}
                slot={detail ? active.detail : active.slot}
                sizes="(min-width: 1100px) 72vw, 100vw"
                priority
                className="portfolio-home__image"
                style={{ aspectRatio: "auto" }}
              />
              <span className="portfolio-home__enter">
                View project <span aria-hidden="true">↗</span>
              </span>
            </Link>
            <div className="portfolio-home__stage-controls">
              <span>
                {String(selected + 1).padStart(2, "0")} /{" "}
                {String(selections.length).padStart(2, "0")}
              </span>
              <div className="portfolio-home__frame-switch" role="group" aria-label="Image view">
                <button type="button" aria-pressed={!detail} onClick={() => setDetail(false)}>
                  Overview
                </button>
                <button type="button" aria-pressed={detail} onClick={() => setDetail(true)}>
                  Another frame
                </button>
              </div>
              <div className="portfolio-home__arrows">
                <button
                  type="button"
                  aria-label="Previous featured project"
                  onClick={() => advance(-1)}
                >
                  ←
                </button>
                <button type="button" aria-label="Next featured project" onClick={() => advance(1)}>
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="portfolio-home__selection">
            <div className="portfolio-home__project-info" aria-live="polite" aria-atomic="true">
              <p className="portfolio-home__eyebrow">{active.field}</p>
              <h2>
                <Link to="/poster-studies/$slug" params={{ slug: active.slug }}>
                  {active.title}
                </Link>
              </h2>
              <p>{active.note}</p>
            </div>
            <nav className="portfolio-home__project-list" aria-label="Featured projects">
              {selections.map((item, index) => (
                <button
                  type="button"
                  key={item.slug}
                  aria-pressed={index === selected}
                  onClick={() => choose(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.title}</span>
                  <span aria-hidden="true">{index === selected ? "↗" : "＋"}</span>
                </button>
              ))}
            </nav>
          </div>
        </section>

        <section className="portfolio-home__perspectives" aria-labelledby="perspectives-heading">
          <header>
            <h2 id="perspectives-heading">Personal projects</h2>
            <Link to="/work" hash="personal-projects">
              View the collection <span aria-hidden="true">↗</span>
            </Link>
          </header>
          <div className="portfolio-home__perspectives-grid">
            {perspectives.map((item) => (
              <Link
                key={item.slug}
                to="/poster-studies/$slug"
                params={{ slug: item.slug }}
                className="portfolio-home__perspective"
              >
                <ProjectPicture
                  projectSlug={item.slug}
                  slot={item.slot}
                  sizes="(min-width: 800px) 33vw, 85vw"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <div>
                  <h3>{item.title}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
                <p>{item.discipline}</p>
              </Link>
            ))}
          </div>
        </section>

        <footer className="portfolio-home__footer">
          <div>
            <p className="portfolio-home__eyebrow">Behind the work</p>
            <p>I work across brand systems, digital experiences, visual art, and writing.</p>
            <Link to="/about">
              Visit my desk <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="portfolio-home__contact">
            <p>Have something in mind?</p>
            <Link to="/services">
              Let's work together <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <small>
            © {new Date().getFullYear()} Isaac Sohn. Brand studies are independent, unofficial
            portfolio projects.
          </small>
        </footer>
      </div>
    </MatLayout>
  );
}
