import { Link, type LinkProps } from "@tanstack/react-router";
import { useRef, useState, type ReactNode, type PointerEvent as RPE } from "react";
import face1 from "@/assets/face1.png";
import face2 from "@/assets/face2.png";
import medal01 from "@/assets/medals/medal-01.png";
import medal02 from "@/assets/medals/medal-02.png";
import medal03 from "@/assets/medals/medal-03.png";
import medal04 from "@/assets/medals/medal-04.png";
import medal05 from "@/assets/medals/medal-05.png";
import medal06 from "@/assets/medals/medal-06.png";
import medal07 from "@/assets/medals/medal-07.png";
import medal08 from "@/assets/medals/medal-08.png";
import medal09 from "@/assets/medals/medal-09.png";
import medal10 from "@/assets/medals/medal-10.png";
import medal11 from "@/assets/medals/medal-11.png";
import medal12 from "@/assets/medals/medal-12.png";
import medal13 from "@/assets/medals/medal-13.png";
import medal14 from "@/assets/medals/medal-14.png";
import medal15 from "@/assets/medals/medal-15.png";
import medal16 from "@/assets/medals/medal-16.png";
import medal17 from "@/assets/medals/medal-17.png";
import medal18 from "@/assets/medals/medal-18.png";
import medal19 from "@/assets/medals/medal-19.png";
import medal20 from "@/assets/medals/medal-20.png";
import medal21 from "@/assets/medals/medal-21.png";

const navLinks: { to: LinkProps["to"]; label: string }[] = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/model", label: "Model" },
  { to: "/writer", label: "Book" },
  { to: "/services", label: "Services" },
];

const certificationMedals: { label: string; image: string }[] = [
  { label: "Google - Google Ads Search Certification", image: medal01 },
  { label: "Google - Google Ads Display Certification", image: medal02 },
  { label: "Google - Google Ads Video Certification", image: medal03 },
  { label: "Google - Google Ads Apps Certification", image: medal04 },
  { label: "Google - Google Ads Creative Certification", image: medal05 },
  { label: "Google - Google Ads Measurement Certification", image: medal06 },
  { label: "Google - AI-Powered Performance Ads Certification", image: medal07 },
  { label: "Google - AI-Powered Shopping Ads Certification", image: medal08 },
  { label: "Google - Grow Offline Sales Certification", image: medal09 },
  { label: "Google Marketing Platform - Campaign Manager 360 Certification", image: medal10 },
  { label: "Google Marketing Platform - Display & Video 360 Certification", image: medal11 },
  { label: "Google Marketing Platform - Search Ads 360 Certification", image: medal12 },
  { label: "Google Analytics - Google Analytics Certification", image: medal13 },
  { label: "HubSpot - SEO Certification", image: medal14 },
  { label: "Microsoft Advertising - Search Certification", image: medal15 },
  { label: "LinkedIn - Advertising Fundamentals", image: medal16 },
  { label: "IBM SkillsBuild - Artificial Intelligence Fundamentals", image: medal17 },
  { label: "IBM SkillsBuild - Team Essentials for Designing AI Solutions", image: medal18 },
  { label: "Anthropic Education - Claude 101", image: medal19 },
  { label: "Anthropic Education - Claude Code 101", image: medal20 },
  { label: "PayPal + Anthropic - AI Fluency for Small Businesses", image: medal21 },
];

type MatLayoutProps = {
  children: ReactNode;
  surface?: "mat" | "plain";
  contentClassName?: string;
  compactMobile?: boolean;
  immersive?: boolean;
  desktopSidebar?: "sticky" | "flow";
};

export function MatLayout({
  children,
  surface = "mat",
  contentClassName = "",
  compactMobile = false,
  immersive = false,
  desktopSidebar = "sticky",
}: MatLayoutProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [medalTooltip, setMedalTooltip] = useState<{ label: string; x: number; y: number } | null>(
    null,
  );
  const drag = useRef({
    pointerId: -1,
    pointerType: "mouse",
    x: 0,
    y: 0,
    ox: 0,
    oy: 0,
    moved: false,
    intent: "idle" as "idle" | "pending" | "pan" | "scroll",
  });

  const showMedalTooltip = (label: string, e: RPE<HTMLImageElement>) => {
    setMedalTooltip({
      label,
      x: Math.max(120, Math.min(window.innerWidth - 120, e.clientX)),
      y: e.clientY,
    });
  };

  const onDown = (e: RPE<HTMLDivElement>) => {
    if (
      !e.isPrimary ||
      drag.current.pointerId !== -1 ||
      e.pointerType === "touch" ||
      (e.pointerType === "mouse" && e.button !== 0)
    ) {
      return;
    }

    const target = e.target as HTMLElement;
    if (target.closest("a, button, input, textarea, select, label, .polaroid, [data-no-pan]"))
      return;

    drag.current = {
      pointerId: e.pointerId,
      pointerType: e.pointerType,
      x: e.clientX,
      y: e.clientY,
      ox: offset.x,
      oy: offset.y,
      moved: false,
      intent: "pan",
    };
    setDragging(true);
    wrapRef.current?.setPointerCapture(e.pointerId);
  };

  const onMove = (e: RPE<HTMLDivElement>) => {
    if (e.pointerId !== drag.current.pointerId || drag.current.intent === "scroll") return;

    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;

    if (drag.current.intent === "pending") {
      if (Math.hypot(dx, dy) < 9) return;

      if (Math.abs(dy) > Math.abs(dx) * 1.15) {
        drag.current.intent = "scroll";
        setDragging(false);
        if (wrapRef.current?.hasPointerCapture(e.pointerId)) {
          wrapRef.current.releasePointerCapture(e.pointerId);
        }
        drag.current.pointerId = -1;
        drag.current.intent = "idle";
        return;
      }

      drag.current.intent = "pan";
      setDragging(true);
    }

    if (drag.current.intent !== "pan") return;
    if (Math.abs(dx) + Math.abs(dy) > 3) drag.current.moved = true;

    const max = 220;
    setOffset({
      x: Math.max(-max, Math.min(max, drag.current.ox + dx)),
      y:
        drag.current.pointerType === "touch"
          ? drag.current.oy
          : Math.max(-max, Math.min(max, drag.current.oy + dy)),
    });
  };

  const onUp = (e: RPE<HTMLDivElement>) => {
    if (e.pointerId !== drag.current.pointerId) return;

    setDragging(false);
    if (wrapRef.current?.hasPointerCapture(e.pointerId)) {
      wrapRef.current.releasePointerCapture(e.pointerId);
    }
    drag.current.pointerId = -1;
    drag.current.intent = "idle";
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const topNav = (
    <nav
      className="pointer-events-auto absolute inset-x-0 top-0 z-40 flex h-11 items-center justify-start gap-5 overflow-x-auto whitespace-nowrap border-b border-black/10 bg-white px-4 text-[12px] font-normal text-[#171717] [scrollbar-width:none] sm:gap-7 sm:text-[13px] [&::-webkit-scrollbar]:hidden"
      aria-label="Primary navigation"
    >
      <Link
        to="/"
        data-no-pan
        className="mr-auto font-semibold tracking-tight"
        aria-label="Isaac Sohn — home"
      >
        Isaac Sohn
      </Link>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          data-no-pan
          className="pointer-events-auto transition-all duration-200 hover:opacity-70"
          activeProps={{ className: "underline underline-offset-4" }}
          activeOptions={{ exact: true }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <div
        className={`grid min-h-screen w-full ${
          immersive
            ? "grid-cols-1"
            : "grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[398px_minmax(0,1fr)]"
        }`}
      >
        <aside
          className={
            immersive
              ? "hidden"
              : `grid items-center px-4 lg:flex lg:flex-col lg:items-stretch lg:gap-8 lg:px-10 lg:py-10 ${
                  desktopSidebar === "sticky"
                    ? "lg:sticky lg:top-0 lg:z-30 lg:h-dvh lg:max-h-dvh lg:self-start lg:overflow-y-auto lg:overscroll-contain lg:bg-background lg:shadow-[14px_0_32px_-30px_rgba(0,0,0,0.38)]"
                    : ""
                } ${
                  compactMobile
                    ? "grid-cols-[56px_minmax(0,1fr)] gap-3 py-3"
                    : "grid-cols-[88px_minmax(0,1fr)] gap-5 py-5"
                }`
          }
        >
          <Link
            to="/"
            className={`group relative block lg:h-36 lg:w-36 ${
              compactMobile ? "h-14 w-14" : "h-[88px] w-[88px]"
            }`}
            aria-label="Go home"
          >
            <img
              src={face1}
              alt="Isaac avatar"
              width={144}
              height={144}
              className="absolute inset-0 h-full w-full object-contain transition duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-rotate-6 group-hover:scale-105 group-hover:opacity-0"
            />
            <img
              src={face2}
              alt=""
              aria-hidden
              width={144}
              height={144}
              className="absolute inset-0 h-full w-full rotate-6 scale-95 object-contain opacity-0 transition duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:rotate-0 group-hover:scale-110 group-hover:opacity-100"
            />
          </Link>

          {compactMobile && (
            <p className="text-[13px] font-medium leading-relaxed text-sidebar-fg lg:hidden">
              Isaac Sohn
              <span className="block font-normal text-muted-foreground">
                Writer · Model · Actor
              </span>
            </p>
          )}

          <p
            className={`max-w-[260px] text-[15px] leading-relaxed text-sidebar-fg ${
              compactMobile ? "hidden lg:block" : ""
            }`}
          >
            Hey there! I'm Isaac. I shape brand systems, digital experiences, visual artwork, and
            stories—and occasionally step in front of the camera.
          </p>

          <div
            className={`col-span-2 flex-wrap items-center gap-x-5 gap-y-2 border-t border-black/10 pt-3 text-[12px] lg:hidden ${
              compactMobile ? "hidden" : "flex"
            }`}
          >
            <Link to="/book" className="font-semibold text-primary story-link">
              Book a project &rarr;
            </Link>
            <Link to="/writer" className="font-semibold text-primary story-link">
              Books &amp; writing &rarr;
            </Link>
            <a
              href="https://www.instagram.com/lsaac_toast?igsh=MjN5NjM1MmZkenNp"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          </div>

          <div className="mt-auto hidden space-y-4 text-[14px] lg:block">
            <Link
              to="/book"
              className="block w-fit font-semibold tracking-[0.18em] text-primary story-link"
            >
              BOOK A PROJECT &rarr;
            </Link>

            <div className="space-y-1.5">
              <Link to="/work" className="block w-fit story-link">
                Projects &rarr;
              </Link>
              <Link to="/fliers" className="block w-fit story-link">
                Fliers &rarr;
              </Link>
              <Link to="/interactive" className="block w-fit story-link">
                Interactive &rarr;
              </Link>
              <Link to="/social-management" className="block w-fit story-link">
                Social Management &rarr;
              </Link>
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
              <a href="#" className="block transition-colors hover:text-foreground">
                Newsletter
              </a>
              <Link to="/writer" className="block transition-colors hover:text-foreground">
                Books &amp; writing &rarr;
              </Link>
            </div>

            <div className="space-y-2 pt-6">
              <p className="text-xs text-muted-foreground">2026 &copy; Isaac Sohn</p>
              <div
                className="flex w-full max-w-[318px] flex-nowrap items-end justify-between opacity-80 transition-opacity hover:opacity-100"
                aria-label="Certifications"
              >
                {certificationMedals.map((medal) => (
                  <img
                    key={medal.label}
                    src={medal.image}
                    alt={medal.label}
                    loading="lazy"
                    onPointerEnter={(e) => showMedalTooltip(medal.label, e)}
                    onPointerMove={(e) => showMedalTooltip(medal.label, e)}
                    onPointerLeave={() => setMedalTooltip(null)}
                    className="h-6 w-3 object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-1 hover:scale-[1.4]"
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>

        {surface === "plain" ? (
          <div
            className={`relative min-h-screen bg-background ${
              immersive ? "overflow-x-clip" : "overflow-y-auto"
            } ${immersive ? "" : "border-l border-black/70"}`}
          >
            {topNav}
            <main className={`px-3 pb-12 pt-16 md:px-3 ${contentClassName}`}>{children}</main>
          </div>
        ) : (
          <div
            ref={wrapRef}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            onLostPointerCapture={onUp}
            className="relative min-h-screen overflow-hidden [touch-action:pan-y_pinch-zoom]"
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

      {medalTooltip && (
        <div
          className="pointer-events-none fixed z-50 max-w-[240px] rounded-md border border-black/10 bg-[#fbfaf6]/95 px-2.5 py-1.5 text-center text-[11px] font-medium leading-tight text-foreground shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm"
          style={{
            left: medalTooltip.x,
            top: medalTooltip.y,
            transform: "translate(-50%, calc(-100% - 12px))",
          }}
        >
          {medalTooltip.label}
        </div>
      )}
    </div>
  );
}
