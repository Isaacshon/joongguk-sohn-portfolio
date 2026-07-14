import { createFileRoute } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";

export const Route = createFileRoute("/social-management")({
  head: () => ({
    meta: [
      { title: "Social Management - Isaac Sohn" },
      {
        name: "description",
        content: "Instagram social management work for Hanbyul and PassionFruits by Isaac Sohn.",
      },
      { property: "og:title", content: "Social Management - Isaac Sohn" },
      {
        property: "og:description",
        content: "Instagram direction, content planning, and social management work.",
      },
    ],
  }),
  component: SocialManagement,
});

const accounts = [
  {
    name: "Hanbyul",
    label: "Instagram Management",
    description:
      "A social direction track focused on profile rhythm, visual consistency, content planning, and audience-facing presentation.",
    points: ["Feed direction", "Content calendar", "Story flow", "Visual tone"],
    tone: "from-[#151515] via-[#6f8f87] to-[#f7f4ed]",
  },
  {
    name: "PassionFruits",
    label: "Instagram Management",
    description:
      "Social management for ministry and conference communication, shaping post rhythm, campaign clarity, and event-facing visuals.",
    points: ["Campaign posts", "Conference updates", "Community messaging", "Visual system"],
    tone: "from-[#2c0d43] via-[#8d62ad] to-[#f0d672]",
  },
];

const responsibilities = [
  "Content planning",
  "Visual direction",
  "Feed rhythm",
  "Caption direction",
  "Campaign structure",
  "Instagram operations",
];

function SocialManagement() {
  return (
    <MatLayout surface="plain" contentClassName="max-w-[1500px] pt-14">
      <section className="grid min-h-[calc(100vh-5rem)] grid-cols-1 gap-5 lg:grid-cols-[minmax(260px,0.68fr)_minmax(0,1.32fr)]">
        <header className="flex flex-col justify-between border-r border-black/10 pr-5">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.18em] text-primary">
              SOCIAL MANAGEMENT
            </p>
            <h1 className="mt-4 max-w-[560px] font-serif text-[clamp(52px,8vw,118px)] font-medium italic leading-[0.9] text-foreground">
              Instagram direction as portfolio work
            </h1>
          </div>
          <p className="mt-8 max-w-[390px] text-[15px] leading-relaxed text-muted-foreground">
            Social accounts are treated as live design systems: visual rhythm, posting structure,
            messaging, and community-facing presentation.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
          {accounts.map((account) => (
            <article
              key={account.name}
              className="group relative min-h-[560px] overflow-hidden rounded-md border border-black/10 bg-[#fbfaf6] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${account.tone}`} />
              <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,.32)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:34px_34px]" />
              <div className="absolute inset-x-8 top-12 h-28 rounded-full bg-white/18 blur-3xl transition duration-700 group-hover:translate-y-4" />

              <div className="relative z-10 flex h-full min-h-[528px] flex-col text-white">
                <div className="flex items-center justify-between text-[13px] font-semibold tracking-[0.18em] text-white/76">
                  <span>{account.label}</span>
                  <span>IG</span>
                </div>

                <div className="my-auto">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.26em] text-white/60">
                    Account
                  </p>
                  <h2 className="mt-3 font-serif text-[clamp(58px,7vw,112px)] italic leading-none drop-shadow-[0_4px_18px_rgba(0,0,0,0.26)]">
                    {account.name}
                  </h2>
                  <p className="mt-5 max-w-[440px] text-[15px] leading-relaxed text-white/82">
                    {account.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {account.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-md border border-white/20 bg-white/12 px-3 py-2 text-[13px] font-medium text-white/86 backdrop-blur-sm"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-2 border-t border-black/10 pt-4 md:grid-cols-3 xl:grid-cols-6">
        {responsibilities.map((item) => (
          <div
            key={item}
            className="rounded-md border border-black/10 bg-white/55 px-3 py-4 text-[13px] font-medium text-foreground shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
          >
            {item}
          </div>
        ))}
      </section>
    </MatLayout>
  );
}
