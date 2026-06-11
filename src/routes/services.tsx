import { createFileRoute } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";

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

const serviceImages = [
  { src: photo1, alt: "Portrait reference", rotate: -3 },
  { src: photo2, alt: "Storefront reference", rotate: 2 },
  { src: photo3, alt: "Garage reference", rotate: -2 },
  { src: photo4, alt: "Desk reference", rotate: 3 },
];

function Services() {
  return (
    <MatLayout>
      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-10 pt-2 md:px-6">
        <h1 className="font-serif text-5xl italic text-[#f5efe2] md:text-6xl">
          Services
        </h1>
        <p className="mt-3 max-w-xl text-white/70">
          A small studio offering — focused, hands-on, and end-to-end.
        </p>

        <div className="mt-5 grid max-w-xl grid-cols-4 gap-2">
          {serviceImages.map((image) => (
            <div
              key={image.alt}
              className="bg-[#fbfaf6] p-2 pb-7 shadow-[0_1px_2px_rgba(0,0,0,0.18),0_18px_30px_-10px_rgba(0,0,0,0.45)]"
              style={{ transform: `rotate(${image.rotate}deg)` }}
            >
              <img src={image.src} alt={image.alt} className="block aspect-square w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.n}
              className="group rounded-md border border-white/15 bg-black/15 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/40 hover:bg-black/25"
            >
              <div className="font-serif text-sm italic text-white/50">{s.n}</div>
              <h3 className="mt-1 font-serif text-2xl italic leading-tight text-[#f5efe2]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{s.desc}</p>
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
