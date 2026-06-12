import { Link, type LinkProps } from "@tanstack/react-router";
import { useRef, useState, type ReactNode, type PointerEvent as RPE } from "react";
import face1 from "@/assets/face1.png";
import face2 from "@/assets/face2.png";

const navLinks: { to: LinkProps["to"]; label: string }[] = [
  { to: "/work", label: "📁 Work" },
  { to: "/", label: "👨🏻‍💻 About Me" },
  { to: "/services", label: "💡 Services" },
];

const certificationBadges: { label: string; kind?: "group" }[] = [
  { label: "Google Skillshop / Google Ads", kind: "group" },
  { label: "Google Ads Search Certification" },
  { label: "Google Ads Display Certification" },
  { label: "Google Ads Video Certification" },
  { label: "Google Ads Apps Certification" },
  { label: "Google Ads Creative Certification" },
  { label: "Google Ads - Measurement Certification" },
  { label: "AI-Powered Performance Ads Certification" },
  { label: "AI-Powered Shopping Ads Certification" },
  { label: "Grow Offline Sales Certification" },
  { label: "Google Marketing Platform", kind: "group" },
  { label: "Campaign Manager 360 Certification" },
  { label: "Display & Video 360 Certification" },
  { label: "Search Ads 360 Certification" },
  { label: "Analytics / SEO / Ads", kind: "group" },
  { label: "Google Analytics Certification" },
  { label: "HubSpot SEO Certification" },
  { label: "Microsoft Advertising Search Certification" },
  { label: "LinkedIn Advertising Fundamentals" },
  { label: "AI / IBM / Anthropic", kind: "group" },
  { label: "Artificial Intelligence Fundamentals — IBM SkillsBuild" },
  { label: "Team Essentials for Designing AI Solutions — IBM SkillsBuild" },
  { label: "Claude 101 — Anthropic Education" },
  { label: "Claude Code 101 — Anthropic Education" },
  { label: "AI Fluency for Small Businesses — PayPal + Anthropic" },
];

type MatLayoutProps = {
  children: ReactNode;
  surface?: "mat" | "plain";
  contentClassName?: string;
};

export function MatLayout({ children, surface = "mat", contentClassName = "" }: MatLayoutProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ x: 0, y: 0, ox: 0, oy: 0, moved: false });

  const onDown = (e: RPE<HTMLDivElement>) => {
    const t = e.target as HTMLElement;
    if (t.closest("a, button, input, textarea, select, label, .polaroid, [data-no-pan]")) return;
    drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y, moved: false };
    setDragging(true);
    wrapRef.current?.setPointerCapture(e.pointerId);
  };

  const onMove = (e: RPE<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) drag.current.moved = true;
    const max = 220;
    setOffset({
      x: Math.max(-max, Math.min(max, drag.current.ox + dx)),
      y: Math.max(-max, Math.min(max, drag.current.oy + dy)),
    });
  };

  const onUp = (e: RPE<HTMLDivElement>) => {
    setDragging(false);
    wrapRef.current?.releasePointerCapture(e.pointerId);
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const topNav = (
    <nav className="pointer-events-none absolute inset-x-0 top-0 z-40 flex h-11 items-center justify-between bg-background px-4 text-[18px] font-normal text-foreground">
      {navLinks.map((l) => (
        <Link
          key={l.label}
          to={l.to}
          data-no-pan
          className="pointer-events-auto transition-all duration-200 hover:opacity-70"
          activeProps={{ className: "underline underline-offset-4" }}
          activeOptions={{ exact: true }}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[398px_minmax(0,1fr)]">
        <aside className="flex flex-col gap-8 px-8 py-10 lg:px-10">
          <Link to="/" className="group relative block h-28 w-28" aria-label="Go home">
            <img
              src={face1}
              alt="Isaac avatar"
              width={120}
              height={120}
              className="absolute inset-0 h-full w-full object-contain transition duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-rotate-6 group-hover:scale-105 group-hover:opacity-0"
            />
            <img
              src={face2}
              alt=""
              aria-hidden
              width={120}
              height={120}
              className="absolute inset-0 h-full w-full rotate-6 scale-95 object-contain opacity-0 transition duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:rotate-0 group-hover:scale-110 group-hover:opacity-100"
            />
          </Link>

          <p className="max-w-[260px] text-[15px] leading-relaxed text-sidebar-fg">
            Hey there! I'm Isaac. I create web and app designs, visual artwork,
            and expressive digital experiences with a creative point of view.
          </p>

          <div className="mt-auto space-y-4 text-[14px]">
            <Link to="/book" className="block w-fit font-semibold tracking-[0.18em] text-primary story-link">
              BOOK A PROJECT ↗
            </Link>

            <div className="space-y-1.5">
              <Link to="/work" className="block story-link w-fit">📁 Projects ↗</Link>
              <a href="#" className="block story-link w-fit">📁 Fliers ↗</a>
            </div>

            <div className="space-y-1 pt-2 text-muted-foreground">
              <a
                href="https://www.instagram.com/lsaac_toast?igsh=MjN5NjM1MmZkenNp"
                target="_blank"
                rel="noreferrer"
                className="block transition-colors hover:text-foreground"
              >
                Instagram
              </a>
              <a href="#" className="block transition-colors hover:text-foreground">Newsletter</a>
              <a href="#" className="block transition-colors hover:text-foreground">Web Store</a>
            </div>

            <div className="space-y-2 pt-6">
              <p className="text-xs text-muted-foreground">2026 © Isaac Sohn</p>
              <div
                className="flex max-w-full gap-1.5 overflow-x-auto whitespace-nowrap pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Certifications"
              >
                {certificationBadges.map((badge) => (
                  <span
                    key={badge.label}
                    title={badge.label}
                    className={
                      badge.kind === "group"
                        ? "shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-primary"
                        : "shrink-0 rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[10px] leading-none text-muted-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                    }
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {surface === "plain" ? (
          <div className="relative min-h-screen overflow-y-auto border-l border-black/70 bg-background">
            {topNav}
            <main className={`px-3 pb-12 pt-16 md:px-3 ${contentClassName}`}>
              {children}
            </main>
          </div>
        ) : (
          <div
            ref={wrapRef}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            className="relative min-h-screen overflow-hidden touch-none"
            style={{ cursor: dragging ? "grabbing" : "grab" }}
          >
            <div
              className="absolute inset-0 bg-cutting-mat"
              style={{
                left: "-220px",
                right: "-220px",
                top: "-220px",
                bottom: "-220px",
                transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
                transition: dragging ? "none" : "transform 600ms cubic-bezier(.2,.8,.2,1)",
                boxShadow: "inset 0 0 200px rgba(0,0,0,0.35)",
              }}
            >
              <div
                className="absolute overflow-visible"
                style={{
                  left: "220px",
                  right: "220px",
                  top: "264px",
                  bottom: "220px",
                }}
              >
                {children}
              </div>
            </div>

            {topNav}

            {(offset.x !== 0 || offset.y !== 0) && (
              <button
                data-no-pan
                onClick={reset}
                className="absolute bottom-4 right-4 z-40 rounded-full bg-black/40 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm transition hover:bg-black/60"
              >
                Recenter
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
