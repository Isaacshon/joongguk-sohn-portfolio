import { createFileRoute } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";

type Project = {
  title: string;
  category: string;
  cover: string;
};

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Isaac Sohn" },
      { name: "description", content: "Selected projects in brand design, visual identity, and creative direction." },
      { property: "og:title", content: "Work — Isaac Sohn" },
      { property: "og:description", content: "Selected projects by Isaac Sohn." },
    ],
  }),
  component: Work,
});

const projects: Project[] = [
  {
    title: "Eknoc",
    category: "Web Design, App Interface, Brand System",
    cover: "linear-gradient(135deg, #0f3b35 0%, #5fb6a5 52%, #f2efe4 100%)",
  },
  {
    title: "Wemplate",
    category: "Template System, Web Experience, Visual Identity",
    cover: "linear-gradient(135deg, #151515 0%, #6b63ff 48%, #f5d56f 100%)",
  },
  {
    title: "Blessie",
    category: "Creative Direction, App Design, Digital Artwork",
    cover: "linear-gradient(135deg, #efe7d0 0%, #cf6f8f 46%, #2f5f73 100%)",
  },
  {
    title: "3D Fashion",
    category: "3D Art Direction, Fashion Visualization, Motion",
    cover: "linear-gradient(135deg, #1f2933 0%, #8ea0a8 45%, #f7f4ed 100%)",
  },
];

function Work() {
  return (
    <MatLayout surface="plain" contentClassName="pt-14">
      <div className="grid grid-cols-1 gap-x-3 gap-y-5 lg:grid-cols-2">
        {projects.map((project) => (
          <a key={project.title} href="#" className="group block">
            <div className="overflow-hidden rounded-md bg-muted">
              <div
                className="relative flex aspect-[1.46/1] w-full items-center justify-center overflow-hidden px-8 text-center transition duration-500 group-hover:scale-[1.03]"
                style={{ background: project.cover }}
              >
                <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative font-serif text-[clamp(38px,5vw,72px)] leading-none text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,.35)]">
                  {project.title}
                </div>
              </div>
            </div>
            <div className="mt-2 text-[15px] leading-tight text-foreground">{project.title}</div>
            <div className="mt-1 text-[14px] leading-tight text-muted-foreground">{project.category}</div>
          </a>
        ))}
      </div>
    </MatLayout>
  );
}
