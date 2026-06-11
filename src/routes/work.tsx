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
  { src: photo1, title: "Portrait Study", year: "2024", rotate: -3 },
  { src: photo2, title: "Storefront Series", year: "2024", rotate: 2 },
  { src: photo3, title: "Garage Meet", year: "2023", rotate: -2 },
  { src: photo4, title: "Desk Setup", year: "2023", rotate: 3 },
];

function Work() {
  return (
    <MatLayout>
      <div className="relative z-10 px-6 pb-16 pt-4 md:px-10">
        <h1 className="font-serif text-5xl italic text-[#f5efe2] md:text-6xl">
          Selected Work
        </h1>
        <p className="mt-3 max-w-xl text-white/70">
          A scattered archive of recent projects — drag, click, explore.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={i}
              href="#"
              className="polaroid group block"
              style={{ transform: `rotate(${p.rotate}deg)`, transition: "transform 300ms" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg) scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${p.rotate}deg)`)}
            >
              <img src={p.src} alt={p.title} className="block aspect-[4/5] w-full object-cover" />
              <div className="px-1 pt-3 font-serif italic">
                <div className="text-lg text-[#222]">{p.title}</div>
                <div className="text-xs text-[#888]">{p.year}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </MatLayout>
  );
}
