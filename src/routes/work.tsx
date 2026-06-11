import { createFileRoute } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";

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

const projects = [
  {
    src: photo1,
    title: "Portrait Study",
    category: "Creative Direction, Visual Identity",
  },
  {
    src: photo2,
    title: "Storefront Series",
    category: "Photography, Brand System",
  },
  {
    src: photo3,
    title: "Garage Meet",
    category: "Event Direction, Fliers",
  },
  {
    src: photo4,
    title: "Desk Setup",
    category: "Digital Design, Motion",
  },
];

function Work() {
  return (
    <MatLayout surface="plain" contentClassName="pt-14">
      <div className="grid grid-cols-1 gap-x-3 gap-y-5 lg:grid-cols-2">
        {projects.map((project) => (
          <a key={project.title} href="#" className="group block">
            <div className="overflow-hidden rounded-md bg-muted">
              <img
                src={project.src}
                alt={project.title}
                className="block aspect-[1.46/1] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-2 text-[15px] leading-tight text-foreground">{project.title}</div>
            <div className="mt-1 text-[14px] leading-tight text-muted-foreground">{project.category}</div>
          </a>
        ))}
      </div>
    </MatLayout>
  );
}
