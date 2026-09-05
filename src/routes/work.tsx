import { createFileRoute, Link } from "@tanstack/react-router";
import { LazyMotion, MotionConfig } from "framer-motion";
import { MatLayout } from "@/components/MatLayout";
import { WorkProject } from "@/components/work/WorkProject";
import { WorkIndex } from "@/components/work/WorkIndex";
import { brandWork, personalWork } from "@/lib/work-gallery";
import { projects } from "@/lib/projects";
import "@/work-studio.css";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Isaac Sohn" },
      {
        name: "description",
        content:
          "Selected brand identities, image-making, editorial and digital projects by Isaac Sohn.",
      },
      { property: "og:title", content: "Selected work — Isaac Sohn" },
      {
        property: "og:description",
        content: "Explore brand projects, personal work and selected client collaborations.",
      },
    ],
  }),
  component: Work,
});

const loadFeatures = () =>
  import("@/components/motion/motion-features").then((module) => module.default);

function Work() {
  return (
    <MatLayout immersive surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <LazyMotion features={loadFeatures} strict>
        <MotionConfig reducedMotion="user">
          <div className="work-gallery" id="work-top">
            <header className="work-gallery__masthead">
              <div className="work-gallery__edition">
                <span>Isaac Sohn / Portfolio</span>
                <span>2026</span>
              </div>
              <div className="work-gallery__introduction">
                <h1>
                  Selected work<span aria-hidden="true">.</span>
                </h1>
                <p>
                  Identities, images
                  <br />
                  {" & digital experiences."}
                </p>
              </div>
            </header>
            <nav className="work-gallery__navigation" aria-label="Work sections">
              <div className="work-gallery__jumps">
                <a href="#brand-projects">
                  Brand projects <sup>{String(brandWork.length).padStart(2, "0")}</sup>
                </a>
                <a href="#personal-projects">
                  Personal projects <sup>{String(personalWork.length).padStart(2, "0")}</sup>
                </a>
              </div>
              <WorkIndex />
            </nav>
            <section
              id="brand-projects"
              aria-labelledby="brand-projects-heading"
              className="work-gallery__section"
            >
              <header className="work-gallery__section-heading">
                <h2 id="brand-projects-heading">
                  <span>01</span> Brand projects
                </h2>
                <p>Fashion. Sport. Everyday life.</p>
              </header>
              <div className="work-gallery__spread work-gallery__spread--brands">
                {brandWork.map((selection, index) => (
                  <WorkProject
                    key={selection.slug}
                    selection={selection}
                    index={index}
                    kind="brand"
                  />
                ))}
              </div>
              <p className="work-gallery__legal">
                가상 프로젝트 · Independent, unofficial brand concepts. Not commissioned by or
                affiliated with the brands. All trademarks belong to their respective owners.
              </p>
            </section>
            <section
              id="personal-projects"
              aria-labelledby="personal-projects-heading"
              className="work-gallery__section work-gallery__section--personal"
            >
              <header className="work-gallery__section-heading">
                <h2 id="personal-projects-heading">
                  <span>02</span> Personal projects
                </h2>
                <p>Independent ideas, made visible.</p>
              </header>
              <div className="work-gallery__spread work-gallery__spread--personal">
                {personalWork.map((selection, index) => (
                  <WorkProject
                    key={selection.slug}
                    selection={selection}
                    index={index}
                    kind="personal"
                  />
                ))}
              </div>
              <section
                id="client-projects"
                className="work-gallery__archive"
                aria-labelledby="client-projects-heading"
              >
                <header>
                  <span className="work-gallery__archive-label">Selected collaborations</span>
                  <h3 id="client-projects-heading">
                    Client &amp; digital work<span>{String(projects.length).padStart(2, "0")}</span>
                  </h3>
                </header>
                <ol>
                  {projects.map((project, index) => (
                    <li key={project.slug}>
                      <a href={project.href ?? "/project/" + project.slug}>
                        <span className="work-gallery__archive-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <strong>{project.title}</strong>
                        <span className="work-gallery__archive-category">{project.category}</span>
                        <span className="work-gallery__archive-view">View project</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </section>
            <footer className="work-gallery__footer">
              <div>
                <p>Have a project in mind?</p>
                <Link to="/services">Let's talk.</Link>
              </div>
              <a href="#work-top">Back to top</a>
            </footer>
          </div>
        </MotionConfig>
      </LazyMotion>
    </MatLayout>
  );
}
