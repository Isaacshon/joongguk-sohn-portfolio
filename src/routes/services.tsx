import { createFileRoute, Link } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";
import homeClouds from "@/assets/home-board/home-clouds.webp";
import homeMoon from "@/assets/home-board/home-moon.webp";
import homePortrait from "@/assets/home-board/home-portrait.webp";
import homeSelfie from "@/assets/home-board/home-selfie.webp";

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
  {
    src: homePortrait,
    alt: "Isaac Sohn standing on a sunlit street",
    rotate: -3,
    position: "50% 38%",
  },
  {
    src: homeMoon,
    alt: "A pale crescent moon in a clear blue daytime sky",
    rotate: 2,
    position: "50% 50%",
  },
  {
    src: homeClouds,
    alt: "Golden evening clouds against a blue-gray sky",
    rotate: -2,
    position: "50% 50%",
  },
  {
    src: homeSelfie,
    alt: "Isaac Sohn taking a mirror selfie",
    rotate: 3,
    position: "50% 38%",
  },
];

function Services() {
  return (
    <MatLayout surface="plain" contentClassName="!px-0 !pb-0 !pt-11">
      <section className="relative min-h-[calc(100dvh-2.75rem)] overflow-x-clip bg-cutting-mat px-5 py-12 text-[#f5efe2] sm:px-8 sm:py-16 xl:px-12 xl:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,.06),transparent_34%),linear-gradient(180deg,transparent_65%,rgba(0,0,0,.18))]"
        />
        <div className="relative z-10 mx-auto max-w-[1180px]">
          <header className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-white/60">
              CREATIVE STUDIO · TORONTO
            </p>
            <h1 className="mt-3 font-serif text-[clamp(52px,8vw,96px)] italic leading-none tracking-[-0.035em]">
              Services
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-7 text-white/75 sm:text-[18px]">
              A small studio offering — focused, hands-on, and end-to-end.
            </p>
          </header>

          <div className="mt-8 grid max-w-[880px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2 lg:mt-10">
            {serviceImages.map((image) => (
              <figure
                key={image.alt}
                className="bg-[#fbfaf6] p-2 pb-7 shadow-[0_1px_2px_rgba(0,0,0,0.18),0_18px_30px_-10px_rgba(0,0,0,0.45)] sm:pb-9"
                style={{ transform: `rotate(${image.rotate}deg)` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block aspect-square w-full object-cover"
                  style={{ objectPosition: image.position }}
                />
              </figure>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.n}
                className="group min-h-48 border border-white/20 bg-[#123f3a]/72 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-[#103832]/90"
              >
                <p className="font-serif text-sm italic text-white/60">{service.n}</p>
                <h2 className="mt-2 font-serif text-[28px] italic leading-[1.02]">
                  {service.title}
                </h2>
                <p className="mt-5 max-w-[28ch] text-[14px] leading-6 text-white/78">
                  {service.desc}
                </p>
              </article>
            ))}
          </div>

          <Link
            to="/book"
            className="mt-10 inline-flex min-h-12 items-center border border-white/45 px-5 py-3 font-serif text-xl italic tracking-wide transition hover:-translate-y-0.5 hover:bg-[#f5efe2] hover:text-[#164f48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#164f48] sm:mt-12"
          >
            Book a project <span className="ml-3 not-italic">→</span>
          </Link>
        </div>
      </section>
    </MatLayout>
  );
}
