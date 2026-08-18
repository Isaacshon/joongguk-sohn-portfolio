import { createFileRoute } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";

export const Route = createFileRoute("/social-management")({
  head: () => ({
    meta: [
      { title: "Social Management - Isaac Sohn" },
      {
        name: "description",
        content: "Instagram and website management work by Isaac Sohn.",
      },
      { property: "og:title", content: "Social Management - Isaac Sohn" },
      {
        property: "og:description",
        content: "Instagram and website management links for selected accounts.",
      },
    ],
  }),
  component: SocialManagement,
});

const accounts = [
  {
    name: "Hanbyul",
    type: "Instagram / Website Management",
    instagram:
      "https://www.instagram.com/hanbyul.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    website: "https://www.hanbyul.ca/",
    caseStudy: "/hanbyul-brand",
  },
  {
    name: "PassionFruits",
    type: "Instagram / Website Management",
    instagram: "https://www.instagram.com/passionfruits_ministry/",
    website: "https://passionfruits.ca/",
    caseStudy: undefined,
  },
];

function SocialManagement() {
  return (
    <MatLayout surface="plain" contentClassName="max-w-[1180px] pt-14">
      <section className="min-h-[calc(100vh-5rem)]">
        <header className="mb-8 border-b border-black/10 pb-6">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-primary">
            SOCIAL MANAGEMENT
          </p>
          <h1 className="mt-3 font-serif text-[clamp(52px,8vw,104px)] font-medium italic leading-none text-foreground">
            Social Management
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {accounts.map((account) => (
            <article
              key={account.name}
              className="rounded-md border border-black/10 bg-[#fbfaf6] p-5 shadow-[0_12px_34px_rgba(0,0,0,0.06)]"
            >
              <div className="flex min-h-[220px] flex-col justify-between">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {account.type}
                  </p>
                  <h2 className="mt-4 font-serif text-[clamp(44px,6vw,76px)] italic leading-none text-foreground">
                    {account.name}
                  </h2>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {account.instagram ? (
                    <a
                      href={account.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-black/15 px-4 py-2 text-[14px] font-medium transition hover:bg-foreground hover:text-background"
                    >
                      Instagram
                    </a>
                  ) : (
                    <span className="rounded-md border border-black/10 px-4 py-2 text-[14px] font-medium text-muted-foreground">
                      Instagram
                    </span>
                  )}

                  {account.website ? (
                    <a
                      href={account.website}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-black/15 px-4 py-2 text-[14px] font-medium transition hover:bg-foreground hover:text-background"
                    >
                      Website
                    </a>
                  ) : (
                    <span className="rounded-md border border-black/10 px-4 py-2 text-[14px] font-medium text-muted-foreground">
                      Website
                    </span>
                  )}

                  {account.caseStudy && (
                    <a
                      href={account.caseStudy}
                      className="rounded-md bg-foreground px-4 py-2 text-[14px] font-medium text-background transition hover:opacity-75"
                    >
                      View case study
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </MatLayout>
  );
}
