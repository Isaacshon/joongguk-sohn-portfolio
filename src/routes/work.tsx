import { createFileRoute } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work - Isaac Sohn" },
      {
        name: "description",
        content: "Selected projects in web design, app design, and visual artwork.",
      },
      { property: "og:title", content: "Work - Isaac Sohn" },
      { property: "og:description", content: "Selected projects by Isaac Sohn." },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <MatLayout surface="plain" contentClassName="pt-14">
      <div className="grid grid-cols-1 gap-x-3 gap-y-5 lg:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.href ?? `/project/${project.slug}`}
            className="group block"
          >
            <div className="overflow-hidden rounded-md bg-muted">
              <div
                className="relative flex aspect-[1.46/1] w-full items-center justify-center overflow-hidden px-8 text-center transition duration-500 group-hover:scale-[1.03]"
                style={{ background: project.cover }}
              >
                {project.coverImage && (
                  <img
                    src={project.coverImage}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div
                  className={`absolute inset-0 ${project.coverImage ? "bg-gradient-to-t from-black/70 via-black/5 to-black/5" : "bg-black/10"}`}
                />
                <div
                  className={`relative font-serif text-[clamp(38px,5vw,72px)] leading-none text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,.45)] ${project.coverImage ? "mt-auto pb-7" : ""}`}
                >
                  {project.title}
                </div>
              </div>
            </div>
            <div className="mt-2 text-[15px] leading-tight text-foreground">{project.title}</div>
            <div className="mt-1 text-[14px] leading-tight text-muted-foreground">
              {project.category}
            </div>
          </a>
        ))}
      </div>
    </MatLayout>
  );
}
