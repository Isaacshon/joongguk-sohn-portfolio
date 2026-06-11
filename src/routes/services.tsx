import { createFileRoute } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Isaac Sohn" },
      { name: "description", content: "Brand design, visual identity, and creative direction services." },
      { property: "og:title", content: "Services — Isaac Sohn" },
      { property: "og:description", content: "How we can work together." },
    ],
  }),
  component: Services,
});

const services = [
  { n: "01", title: "Brand Identity", desc: "Logos, marks, type systems, and the rules that hold them together." },
  { n: "02", title: "Visual Direction", desc: "Photography, art direction, and editorial systems for launches." },
  { n: "03", title: "Print & Editorial", desc: "Zines, posters, packaging, and tangible takeaways with intention." },
  { n: "04", title: "Web & Motion", desc: "Marketing sites and short-form motion that extend the brand story." },
];

function Services() {
  return (
    <MatLayout>
      <div className="relative z-10 px-6 pb-16 pt-4 md:px-10">
        <h1 className="font-serif text-5xl italic text-[#f5efe2] md:text-6xl">
          Services
        </h1>
        <p className="mt-3 max-w-xl text-white/70">
          A small studio offering — focused, hands-on, and end-to-end.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.n}
              className="group rounded-md border border-white/15 bg-black/15 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/40 hover:bg-black/25"
            >
              <div className="font-serif text-sm italic text-white/50">{s.n}</div>
              <h3 className="mt-1 font-serif text-3xl italic text-[#f5efe2]">{s.title}</h3>
              <p className="mt-3 text-white/75">{s.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mt-12 inline-block font-serif text-2xl italic tracking-wide text-[#f5efe2] underline decoration-white/40 underline-offset-8 hover:decoration-white"
        >
          Book a project →
        </a>
      </div>
    </MatLayout>
  );
}
