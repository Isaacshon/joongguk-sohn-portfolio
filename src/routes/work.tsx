import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Grid2X2,
  List,
  Layers2,
} from "lucide-react";
import { MatLayout } from "@/components/MatLayout";
import { PortfolioMotionRoot } from "@/components/motion/PortfolioMotionRoot";
import { BrandProjectMark } from "@/components/poster-studies/BrandMark";
import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import type { DesignProjectMediaSlot } from "@/lib/design-project-media";
import { designProjects, type DesignProject } from "@/lib/design-projects";
import { projects, type Project } from "@/lib/projects";
import "@/work-studio.css";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Isaac Sohn" },
      {
        name: "description",
        content:
          "Brand worlds, visual identities, editorial systems and digital experiences. Explore the portfolio of Isaac Sohn.",
      },
      { property: "og:title", content: "Work — Isaac Sohn" },
      {
        property: "og:description",
        content: "A collection of brand and personal projects by Isaac Sohn.",
      },
    ],
  }),
  component: Work,
});

type ViewMode = "gallery" | "index";
type ProjectEdit = { cover: DesignProjectMediaSlot; detail: DesignProjectMediaSlot; label: string };
// One quiet reading frame for the index; the individual projects retain their own visual worlds.
const projectEdits: Record<string, ProjectEdit> = {
  "nike-no-second-take": { cover: "hero", detail: "tactile", label: "Sport / Motion / Campaign" },
  "polo-ralph-lauren-the-long-match": {
    cover: "spatial",
    detail: "editorialJ",
    label: "Fashion / Editorial / Lifestyle",
  },
  "levis-wear-is-the-record": {
    cover: "hero",
    detail: "tactile",
    label: "Denim / Identity / Campaign",
  },
  "muji-household-weather": {
    cover: "spatial",
    detail: "tactile",
    label: "Objects / Everyday life / Editorial",
  },
  "prada-the-quiet-error": {
    cover: "hero",
    detail: "editorialB",
    label: "Fashion / Art direction / Exhibition",
  },
  "zara-the-air-between": {
    cover: "context",
    detail: "tactile",
    label: "Fashion / Image / Editorial",
  },
  "uniqlo-comfort-measured": {
    cover: "context",
    detail: "tactile",
    label: "LifeWear / Product / Information",
  },
  "hm-second-sun": {
    cover: "hero",
    detail: "editorialB",
    label: "Fashion / Campaign / Circularity",
  },
  afterimage: { cover: "tactile", detail: "spatial", label: "Festival identity / Print" },
  "night-index": { cover: "hero", detail: "spatial", label: "Hospitality / Art direction" },
  "public-memory": { cover: "spatial", detail: "editorialB", label: "Culture / Wayfinding" },
  "soft-machine": { cover: "tactile", detail: "hero", label: "Material research / Identity" },
  "memory-type": { cover: "hero", detail: "editorialB", label: "Hangul / Community archive" },
  "79w": { cover: "hero", detail: "spatial", label: "Travel / Editorial" },
  "tactile-forecast": {
    cover: "tactile",
    detail: "editorialA",
    label: "Materials / Sensory identity",
  },
  "tessera-live": {
    cover: "spatial",
    detail: "editorialD",
    label: "Live culture / Digital system",
  },
  "field-notes-37": { cover: "context", detail: "tactile", label: "Ecology / Specimen archive" },
  horalis: { cover: "tactile", detail: "editorialA", label: "Time / Product identity" },
  "signal-noise": { cover: "context", detail: "editorialB", label: "Broadcast / Motion identity" },
  tidehold: { cover: "hero", detail: "spatial", label: "Coast / Hospitality" },
  "last-letter": { cover: "tactile", detail: "editorialB", label: "Correspondence / Editorial" },
  backmatter: { cover: "context", detail: "editorialB", label: "Publishing / Archive" },
  "chroma-tempo": { cover: "context", detail: "spatial", label: "Music / Visual identity" },
  offsort: { cover: "tactile", detail: "editorialA", label: "Circular products / Identity" },
  seamframe: { cover: "tactile", detail: "spatial", label: "Architecture / Assembly" },
  "two-shores": { cover: "hero", detail: "editorialB", label: "Culture / Bilingual editorial" },
  "selv-00": { cover: "hero", detail: "tactile", label: "Fashion / Pattern system" },
  coldkiln: { cover: "tactile", detail: "spatial", label: "Ceramics / Material identity" },
};
const brandOrder = [
  "nike-no-second-take",
  "polo-ralph-lauren-the-long-match",
  "levis-wear-is-the-record",
  "muji-household-weather",
  "prada-the-quiet-error",
  "zara-the-air-between",
  "uniqlo-comfort-measured",
  "hm-second-sun",
];
const personalOrder = [
  "afterimage",
  "night-index",
  "public-memory",
  "soft-machine",
  "memory-type",
  "79w",
  "tactile-forecast",
  "tessera-live",
  "field-notes-37",
  "horalis",
  "signal-noise",
  "tidehold",
  "last-letter",
  "backmatter",
  "chroma-tempo",
  "offsort",
  "seamframe",
  "two-shores",
  "selv-00",
  "coldkiln",
];
function resolveProjects(slugs: string[]) {
  return slugs.map((slug) => {
    const project = designProjects.find((item) => item.slug === slug);
    if (!project) throw new Error(`Missing work index project: ${slug}`);
    return project;
  });
}
const brandProjects = resolveProjects(brandOrder);
const personalProjects = resolveProjects(personalOrder);
const totalProjects = brandProjects.length + personalProjects.length + projects.length;
const pad = (value: number) => String(value).padStart(2, "0");

function Work() {
  const [view, setView] = useState<ViewMode>("gallery");
  const brandRail = useRef<HTMLOListElement>(null);
  const [railPage, setRailPage] = useState(0);
  function moveRail(direction: number) {
    const rail = brandRail.current;
    if (!rail) return;
    const step = rail.firstElementChild?.getBoundingClientRect().width ?? rail.clientWidth;
    rail.scrollBy({
      left: direction * (step + 16),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }
  return (
    <MatLayout immersive surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <PortfolioMotionRoot
        as="div"
        className="work-studio"
        profile="work-index"
        projectId="selected-work"
        projectLabel="Selected work"
        sceneSelector=".work-studio__header, .work-studio__section-heading"
        attributes={{ "data-view": view }}
      >
        <header id="work-top" className="work-studio__header work-studio__shell">
          <div className="work-studio__heading-line">
            <p className="work-studio__eyebrow">Isaac Sohn / Portfolio</p>
            <span className="work-studio__edition">Selected projects · 2026</span>
          </div>
          <div className="work-studio__introduction">
            <h1>
              Work<span className="work-studio__total">({totalProjects})</span>
            </h1>
            <p>
              Identity, image, and interaction.
              <br />A different world in every project.
            </p>
          </div>
        </header>
        <div className="work-studio__toolbar">
          <div className="work-studio__shell work-studio__toolbar-inner">
            <nav className="work-studio__categories" aria-label="Project categories">
              <a href="#brand-projects">
                Brand projects <span>{pad(brandProjects.length)}</span>
              </a>
              <a href="#personal-projects">
                Personal projects <span>{pad(personalProjects.length + projects.length)}</span>
              </a>
            </nav>
            <div className="work-studio__view-toggle" role="group" aria-label="Portfolio view">
              <button
                type="button"
                aria-pressed={view === "gallery"}
                onClick={() => {
                  setView("gallery");
                  setRailPage(0);
                }}
              >
                <Grid2X2 size={15} aria-hidden="true" />
                <span>Gallery</span>
              </button>
              <button
                type="button"
                aria-pressed={view === "index"}
                onClick={() => setView("index")}
              >
                <List size={17} aria-hidden="true" />
                <span>Index</span>
              </button>
            </div>
          </div>
        </div>
        <main>
          <section
            className="work-studio__section work-studio__shell"
            id="brand-projects"
            aria-labelledby="brand-projects-heading"
          >
            <SectionHeading
              id="brand-projects-heading"
              title="Brand projects"
              number="01"
              count={brandProjects.length}
              note="Fashion, culture, and everyday life."
            />
            {view === "gallery" ? (
              <>
                <div className="work-studio__rail-controls">
                  <span>
                    Explore the brand worlds <ArrowRight size={14} aria-hidden="true" />
                  </span>
                  <div>
                    <span aria-live="polite">
                      {pad(railPage + 1)} / {pad(brandProjects.length)}
                    </span>
                    <button
                      type="button"
                      aria-label="Previous brand project"
                      disabled={railPage === 0}
                      onClick={() => moveRail(-1)}
                    >
                      <ArrowLeft size={17} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next brand project"
                      disabled={railPage === brandProjects.length - 1}
                      onClick={() => moveRail(1)}
                    >
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>
                <ol
                  ref={brandRail}
                  className="work-studio__brand-gallery"
                  aria-label="Brand projects gallery"
                  onScroll={(event) => {
                    const rail = event.currentTarget;
                    const step = (rail.firstElementChild?.getBoundingClientRect().width ?? 1) + 16;
                    setRailPage(
                      Math.min(brandProjects.length - 1, Math.round(rail.scrollLeft / step)),
                    );
                  }}
                >
                  {brandProjects.map((project, index) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      index={index}
                      brand
                      priority={index < 2}
                    />
                  ))}
                </ol>
              </>
            ) : (
              <ProjectIndex items={brandProjects} brand />
            )}
            <p className="work-studio__legal">
              가상 프로젝트 · Independent concept projects. Not commissioned by or affiliated with
              the brands shown. Trademarks belong to their respective owners.
            </p>
          </section>
          <section
            className="work-studio__section work-studio__section--personal work-studio__shell"
            id="personal-projects"
            aria-labelledby="personal-projects-heading"
          >
            <SectionHeading
              id="personal-projects-heading"
              title="Personal projects"
              number="02"
              count={personalProjects.length}
              note="Independent ideas, developed into visual systems."
            />
            {view === "gallery" ? (
              <ol className="work-studio__personal-gallery">
                {personalProjects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </ol>
            ) : (
              <ProjectIndex items={personalProjects} />
            )}
            <section className="work-studio__applied" aria-labelledby="applied-work-heading">
              <div className="work-studio__applied-heading">
                <h3 id="applied-work-heading">Client &amp; digital work</h3>
                <span>{pad(projects.length)} projects</span>
              </div>
              <ol>
                {projects.map((project, index) => (
                  <li key={project.slug}>
                    <AppliedWork project={project} index={index} />
                  </li>
                ))}
              </ol>
            </section>
          </section>
          <footer className="work-studio__footer work-studio__shell">
            <p>Have something in mind?</p>
            <Link to="/services">
              Let’s make it happen.
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <a className="work-studio__back-top" href="#work-top">
              Back to top <ArrowDown aria-hidden="true" size={14} />
            </a>
          </footer>
        </main>
      </PortfolioMotionRoot>
    </MatLayout>
  );
}

function SectionHeading({
  id,
  title,
  number,
  count,
  note,
}: {
  id: string;
  title: string;
  number: string;
  count: number;
  note: string;
}) {
  return (
    <header className="work-studio__section-heading">
      <div>
        <span className="work-studio__eyebrow">
          {number} / {pad(count)}
        </span>
        <h2 id={id}>{title}</h2>
      </div>
      <p>{note}</p>
    </header>
  );
}

function ProjectCard({
  project,
  index,
  brand = false,
  priority = false,
}: {
  project: DesignProject;
  index: number;
  brand?: boolean;
  priority?: boolean;
}) {
  const edit = projectEdits[project.slug];
  const [preview, setPreview] = useState(false);
  const [hovered, setHovered] = useState(false);
  const showDetail = preview || hovered;
  const sizes = brand
    ? "(min-width: 1700px) 800px, (min-width: 700px) 47vw, 85vw"
    : "(min-width: 1700px) 800px, (min-width: 700px) 47vw, 50vw";
  return (
    <li
      className={`work-studio__card${brand ? " work-studio__card--brand" : ""}`}
      data-preview={showDetail}
      data-project={project.slug}
    >
      <Link
        to="/poster-studies/$slug"
        params={{ slug: project.slug }}
        className="work-studio__project-link"
        aria-label={`View ${project.title} project`}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setHovered(true);
        }}
        onPointerLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <div className="work-studio__frame">
          <ProjectPicture
            projectSlug={project.slug}
            slot={edit.cover}
            focalPoint={project.slug === "nike-no-second-take" ? "50% 20%" : undefined}
            sizes={sizes}
            className="work-studio__picture work-studio__picture--cover"
            priority={priority}
            style={{ aspectRatio: "auto" }}
          />
          <ProjectPicture
            projectSlug={project.slug}
            slot={edit.detail}
            sizes={sizes}
            className="work-studio__picture work-studio__picture--detail"
            decorative
            style={{ aspectRatio: "auto" }}
          />
          <span className="work-studio__open">
            <ArrowUpRight size={21} aria-hidden="true" />
          </span>
        </div>
        <div className="work-studio__caption">
          <div>
            <h3 lang={project.titleLang}>{project.title}</h3>
            <p>{edit.label}</p>
          </div>
          {brand ? (
            <BrandProjectMark projectSlug={project.slug} className="work-studio__brand-mark" />
          ) : (
            <span className="work-studio__card-number">{pad(index + 1)}</span>
          )}
        </div>
      </Link>
      <button
        className="work-studio__preview-button"
        type="button"
        aria-label={`${preview ? "Show cover" : "Preview another image"} — ${project.title}`}
        aria-pressed={preview}
        onClick={() => setPreview(!preview)}
      >
        <Layers2 size={13} aria-hidden="true" />
        <span>{showDetail ? "02" : "01"} / 02</span>
      </button>
    </li>
  );
}

function ProjectIndex({ items, brand = false }: { items: DesignProject[]; brand?: boolean }) {
  const [activeSlug, setActiveSlug] = useState(items[0].slug);
  const activeProject = items.find((project) => project.slug === activeSlug) ?? items[0];
  return (
    <div className="work-studio__index-layout">
      <ol className="work-studio__index-list">
        {items.map((project, index) => (
          <li key={project.slug} data-active={project.slug === activeProject.slug}>
            <Link
              to="/poster-studies/$slug"
              params={{ slug: project.slug }}
              onPointerEnter={() => setActiveSlug(project.slug)}
              onFocus={() => setActiveSlug(project.slug)}
            >
              <span className="work-studio__index-number">{pad(index + 1)}</span>
              <ProjectPicture
                projectSlug={project.slug}
                slot={projectEdits[project.slug].cover}
                sizes="80px"
                decorative
                className="work-studio__index-thumb"
                style={{ aspectRatio: "1 / 1" }}
              />
              <span className="work-studio__index-copy">
                <strong lang={project.titleLang}>{project.title}</strong>
                <small>{projectEdits[project.slug].label}</small>
              </span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ol>
      <aside className="work-studio__index-preview" aria-label="Project preview" aria-hidden="true">
        <div className="work-studio__index-preview-media">
          <ProjectPicture
            key={activeProject.slug}
            projectSlug={activeProject.slug}
            slot={projectEdits[activeProject.slug].cover}
            sizes="(min-width: 1700px) 640px, 42vw"
            decorative
            priority
            className="work-studio__picture"
            style={{ aspectRatio: "auto" }}
          />
        </div>
        <div className="work-studio__index-preview-heading">
          <span>{activeProject.title}</span>
          {brand ? (
            <BrandProjectMark
              projectSlug={activeProject.slug}
              className="work-studio__brand-mark"
            />
          ) : null}
        </div>
        <p>{activeProject.statement}</p>
      </aside>
    </div>
  );
}

function AppliedWork({ project, index }: { project: Project; index: number }) {
  return (
    <a href={project.href ?? `/project/${project.slug}`} className="work-studio__applied-link">
      <span className="work-studio__index-number">{pad(index + 1)}</span>
      <span>
        <strong>{project.title}</strong>
        <small>{project.category}</small>
      </span>
      <ArrowUpRight size={20} aria-hidden="true" />
    </a>
  );
}
