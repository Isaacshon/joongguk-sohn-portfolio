import { createFileRoute } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";
import { getProject } from "@/lib/projects";

export const Route = createFileRoute("/project/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = project ? `${project.title} - Isaac Sohn` : "Project - Isaac Sohn";

    return {
      meta: [
        { title },
        {
          name: "description",
          content: project?.description ?? "Project detail by Isaac Sohn.",
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: project?.description ?? "Project detail by Isaac Sohn.",
        },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <MatLayout surface="plain" contentClassName="pt-14">
        <div className="max-w-3xl py-8">
          <h1 className="font-serif text-[clamp(48px,8vw,92px)] leading-none">Project not found</h1>
          <a href="/work" className="story-link mt-8 inline-block text-primary">
            Back to Work
          </a>
        </div>
      </MatLayout>
    );
  }

  const logoTiles = [project.accent, "#f8f4e9", project.dark];

  return (
    <MatLayout surface="plain" contentClassName="pt-14">
      <article className="pb-16">
        <header className="max-w-5xl">
          <a href="/work" className="story-link mb-3 inline-block text-[14px] text-primary">
            Back to Work
          </a>
          <h1 className="font-serif text-[clamp(52px,8vw,96px)] font-semibold leading-none tracking-normal">
            {project.title}
          </h1>

          <div className="mt-6 grid max-w-4xl gap-4 text-[14px] leading-relaxed md:grid-cols-[140px_minmax(0,1fr)]">
            <div className="font-bold uppercase">Description</div>
            <p>{project.description}</p>

            <div className="font-bold uppercase">Role</div>
            <p>{project.role}</p>

            <div className="font-bold uppercase">Tools</div>
            <p>{project.tools}</p>
          </div>
        </header>

        <section className="mt-6 overflow-hidden bg-black text-white">
          <div
            className="flex min-h-[520px] items-center justify-center px-8 py-20 text-center"
            style={{ background: project.cover }}
          >
            <div>
              <div className="font-serif text-[clamp(64px,12vw,160px)] font-semibold leading-none text-white drop-shadow-[0_12px_34px_rgba(0,0,0,.35)]">
                {project.title}
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-[18px] font-medium leading-relaxed text-white/90">
                {project.category}
              </p>
            </div>
          </div>

          <div className="px-6 py-10 text-center md:px-16">
            <p className="mx-auto max-w-3xl text-[18px] font-semibold leading-relaxed">
              {project.title} brings together visual identity, interface rhythm, and expressive art
              direction into one cohesive digital system.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-0">
            {logoTiles.map((color, index) => (
              <div
                key={color}
                className="flex aspect-[1.6/1] items-center justify-center"
                style={{ background: index === 1 ? "#f5efe2" : project.dark }}
              >
                <div
                  className="font-serif text-[clamp(44px,7vw,96px)] font-semibold leading-none"
                  style={{ color }}
                >
                  {project.title.slice(0, 1)}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-2 p-6 md:grid-cols-3 md:p-8">
            {[
              "Primary System",
              "Type Direction",
              "Visual Guidelines",
              "Color Story",
              "Interface Grid",
              "Motion Notes",
            ].map((label, index) => (
              <div
                key={label}
                className="flex aspect-[1.35/1] flex-col justify-end overflow-hidden rounded-sm p-5"
                style={{
                  background:
                    index % 2 === 0
                      ? `linear-gradient(135deg, ${project.dark}, #050505)`
                      : project.cover,
                }}
              >
                <div className="text-[12px] uppercase tracking-[0.22em] text-white/55">
                  0{index + 1}
                </div>
                <div className="mt-2 text-[24px] font-bold leading-none text-white">{label}</div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </MatLayout>
  );
}
