import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MatLayout } from "@/components/MatLayout";
import { submitProjectInquiry } from "@/lib/api/project-inquiry.functions";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Project — Isaac Sohn" },
      {
        name: "description",
        content: "Start a project inquiry with Isaac Sohn.",
      },
      { property: "og:title", content: "Book a Project — Isaac Sohn" },
      {
        property: "og:description",
        content: "Project inquiry form for creative direction and design work.",
      },
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
] as const;

function Book() {
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitState === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmitState("sending");

    const result = await submitProjectInquiry({
      data: {
        submissionId: crypto.randomUUID(),
        companyWebsite: String(formData.get("companyWebsite") ?? ""),
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        description: String(formData.get("description") ?? ""),
        service: String(formData.get("service") ?? "") as (typeof services)[number],
        budget: String(formData.get("budget") ?? "") as
          | ""
          | "$500 - $1,000"
          | "$1,000 - $3,000"
          | "$3,000 - $5,000"
          | "$5,000+",
        instagram: String(formData.get("instagram") ?? ""),
        website: String(formData.get("website") ?? ""),
      },
    }).catch(() => ({ ok: false as const, reason: "send_failed" as const }));

    if (result.ok) {
      form.reset();
      setSubmitState("sent");
      return;
    }

    setSubmitState("error");
  };

  return (
    <MatLayout surface="plain" contentClassName="pt-20">
      <div className="max-w-none">
        <h1 className="font-serif text-[clamp(3rem,6vw,5.25rem)] font-semibold leading-none tracking-[-0.02em] text-foreground">
          Let's work together!
        </h1>

        <div className="mt-7 max-w-5xl space-y-8 text-[clamp(1.15rem,2vw,2rem)] leading-[1.45] text-foreground">
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
          className="relative mt-11 max-w-4xl space-y-5 text-[16px]"
          onSubmit={handleSubmit}
          aria-busy={submitState === "sending"}
        >
          <div
            className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
            inert
          >
            <label>
              Company website
              <input name="companyWebsite" tabIndex={-1} autoComplete="off" defaultValue="" />
            </label>
          </div>

          <label className="block">
            <span>Name *</span>
            <input
              name="name"
              required
              minLength={1}
              maxLength={100}
              autoComplete="name"
              className="mt-2 h-11 w-full rounded-md bg-muted px-3 outline-none transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            />
          </label>

          <label className="block">
            <span>Email *</span>
            <input
              type="email"
              name="email"
              required
              maxLength={254}
              autoComplete="email"
              className="mt-2 h-11 w-full rounded-md bg-muted px-3 outline-none transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            />
          </label>

          <label className="block">
            <span>Project Description *</span>
            <textarea
              name="description"
              required
              minLength={20}
              maxLength={5000}
              className="mt-2 min-h-28 w-full resize-y rounded-md bg-muted px-3 py-3 outline-none transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            />
          </label>

          <fieldset>
            <legend>Services Required *</legend>
            <div className="mt-3 space-y-3">
              {services.map((service) => (
                <label key={service} className="flex min-h-11 items-center gap-3 py-2">
                  <input
                    type="radio"
                    name="service"
                    value={service}
                    required
                    className="h-5 w-5 accent-primary outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <span>Budget</span>
            <select
              name="budget"
              defaultValue=""
              className="mt-2 h-11 w-full rounded-md bg-muted px-3 text-muted-foreground outline-none transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <option value="">Select...</option>
              <option value="$500 - $1,000">$500 - $1,000</option>
              <option value="$1,000 - $3,000">$1,000 - $3,000</option>
              <option value="$3,000 - $5,000">$3,000 - $5,000</option>
              <option value="$5,000+">$5,000+</option>
            </select>
          </label>

          <label className="block">
            <span>Instagram Handle (if applicable)</span>
            <input
              placeholder="@"
              name="instagram"
              maxLength={100}
              autoComplete="off"
              className="mt-2 h-11 w-full rounded-md bg-muted px-3 outline-none transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            />
          </label>

          <label className="block">
            <span>Website (if applicable)</span>
            <input
              type="url"
              name="website"
              placeholder="https://"
              maxLength={2048}
              autoComplete="url"
              className="mt-2 h-11 w-full rounded-md bg-muted px-3 outline-none transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            />
          </label>

          <button
            type="submit"
            disabled={submitState === "sending"}
            className="h-11 w-full rounded-md bg-[#202020] text-[15px] font-medium uppercase tracking-wide text-white outline-none transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60"
          >
            {submitState === "sending" ? "Sending..." : "Submit"}
          </button>

          <div className="min-h-6 text-[14px] leading-relaxed" role="status" aria-live="polite">
            {submitState === "sent" && (
              <p className="text-[#17613b]">
                Thank you — your project inquiry has been sent. I’ll reply by email.
              </p>
            )}
            {submitState === "error" && (
              <p className="text-[#a12a22]">
                The inquiry could not be sent. Please try again, or message me on{" "}
                <a
                  href="https://www.instagram.com/lsaac_toast/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  Instagram
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </div>
    </MatLayout>
  );
}
