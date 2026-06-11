import { createFileRoute } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Project — Isaac Sohn" },
      {
        name: "description",
        content: "Start a project inquiry with Isaac Sohn.",
      },
      { property: "og:title", content: "Book a Project — Isaac Sohn" },
      { property: "og:description", content: "Project inquiry form for creative direction and design work." },
    ],
  }),
  component: Book,
});

const services = [
  "Brand Identity Design",
  "Album Design",
  "Merch Design",
  "Social Media",
  "Videography",
  "Other / Not Sure",
];

function Book() {
  return (
    <MatLayout surface="plain" contentClassName="pt-20">
      <div className="max-w-none">
        <h1 className="font-serif text-[clamp(3rem,6vw,5.25rem)] font-semibold leading-none tracking-[-0.02em] text-foreground">
          Let's work together!
        </h1>

        <div className="mt-7 max-w-5xl space-y-8 text-[clamp(1.35rem,2vw,2rem)] leading-[1.45] text-foreground">
          <p>
            Interested in working together? Fill out this quick form about your project background,
            scope, and deliverables!
          </p>
          <p>
            I specialize in brand identity, visual systems, motion, and digital direction. I am also
            open to other projects, so feel free to leave details in the project description.
          </p>
        </div>

        <form
          className="mt-11 space-y-5 text-[16px]"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="block">
            <span>Name *</span>
            <input className="mt-2 h-10 w-full rounded-md bg-muted px-3 outline-none ring-primary/20 transition focus:ring-2" />
          </label>

          <label className="block">
            <span>Email *</span>
            <input type="email" className="mt-2 h-10 w-full rounded-md bg-muted px-3 outline-none ring-primary/20 transition focus:ring-2" />
          </label>

          <label className="block">
            <span>Project Description *</span>
            <textarea className="mt-2 min-h-28 w-full resize-y rounded-md bg-muted px-3 py-3 outline-none ring-primary/20 transition focus:ring-2" />
          </label>

          <fieldset>
            <legend>Services Required *</legend>
            <div className="mt-3 space-y-3">
              {services.map((service) => (
                <label key={service} className="flex items-center gap-3">
                  <input type="radio" name="service" className="h-4 w-4 accent-primary" />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <span>Budget</span>
            <select className="mt-2 h-10 w-full rounded-md bg-muted px-3 text-muted-foreground outline-none ring-primary/20 transition focus:ring-2">
              <option>Select...</option>
              <option>$500 - $1,000</option>
              <option>$1,000 - $3,000</option>
              <option>$3,000 - $5,000</option>
              <option>$5,000+</option>
            </select>
          </label>

          <label className="block">
            <span>Instagram Handle (if applicable)</span>
            <input placeholder="@" className="mt-2 h-10 w-full rounded-md bg-muted px-3 outline-none ring-primary/20 transition focus:ring-2" />
          </label>

          <label className="block">
            <span>Website (if applicable)</span>
            <input placeholder="http://" className="mt-2 h-10 w-full rounded-md bg-muted px-3 outline-none ring-primary/20 transition focus:ring-2" />
          </label>

          <button className="h-11 w-full rounded-md bg-[#202020] text-[15px] font-medium uppercase tracking-wide text-white transition hover:bg-black">
            Submit
          </button>
        </form>
      </div>
    </MatLayout>
  );
}
