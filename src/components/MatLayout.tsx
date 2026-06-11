import { Link, type LinkProps } from "@tanstack/react-router";
import { useRef, useState, type ReactNode, type PointerEvent as RPE } from "react";
import avatar from "@/assets/avatar.png";

const navLinks: { to: LinkProps["to"]; label: string }[] = [
  { to: "/work", label: "📁 Work" },
  { to: "/", label: "👨🏻‍💻 About Me" },
  { to: "/services", label: "💡 Services" },
];

export function MatLayout({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ x: 0, y: 0, ox: 0, oy: 0, moved: false });

  const onDown = (e: RPE<HTMLDivElement>) => {
    // Ignore drags initiated on interactive children (polaroids, links, buttons)
    const t = e.target as HTMLElement;
    if (t.closest("a, button, .polaroid, [data-no-pan]")) return;
    drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y, moved: false };
    setDragging(true);
    wrapRef.current?.setPointerCapture(e.pointerId);
  };
  const onMove = (e: RPE<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) drag.current.moved = true;
    // Clamp pan range
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

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]">
        <aside className="flex flex-col gap-8 px-8 py-10">
          <Link to="/">
            <img
              src={avatar}
              alt="Isaac avatar"
              width={120}
              height={120}
              className="h-28 w-28 transition-transform duration-300 hover:rotate-6 hover:scale-110"
            />
          </Link>
          <p className="max-w-[240px] text-[15px] leading-relaxed text-sidebar-fg">
            Hey there! I'm Isaac, a multi-disciplinary creative specialized in
            brand design, visual identity, and creative direction.
          </p>

          <div className="mt-auto space-y-4 text-[14px]">
            <a href="#" className="block font-semibold tracking-[0.18em] text-primary story-link w-fit">
              BOOK A PROJECT ↗
            </a>
            <div className="space-y-1.5">
              <Link to="/work" className="block story-link w-fit">📁 Projects ↗</Link>
              <a href="#" className="block story-link w-fit">📁 Fliers ↗</a>
            </div>
            <div className="space-y-1 pt-2 text-muted-foreground">
              <a href="#" className="block transition-colors hover:text-foreground">Instagram</a>
              <a href="#" className="block transition-colors hover:text-foreground">TikTok</a>
              <a href="#" className="block transition-colors hover:text-foreground">Newsletter</a>
              <a href="#" className="block transition-colors hover:text-foreground">Web Store</a>
            </div>
            <p className="pt-6 text-xs text-muted-foreground">2026 © Isaac Sohn</p>
          </div>
        </aside>

        <div
          ref={wrapRef}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          className="relative m-4 min-h-[calc(100vh-2rem)] overflow-hidden rounded-md md:min-h-[calc(100vh-3rem)] lg:m-6 touch-none"
          style={{ cursor: dragging ? "grabbing" : "grab" }}
        >
          {/* Pannable board: oversized so you can drag in any direction */}
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
                top: "296px",
                bottom: "272px",
              }}
            >
              {children}
            </div>
          </div>

          {/* Top nav stays fixed above the panning board */}
          <nav className="pointer-events-none absolute inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 text-[15px] font-medium text-white/95">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                data-no-pan
                className="pointer-events-auto transition-all duration-200 hover:scale-110 hover:opacity-80"
                activeProps={{ className: "underline underline-offset-4" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Recenter helper */}
          {(offset.x !== 0 || offset.y !== 0) && (
            <button
              data-no-pan
              onClick={reset}
              className="absolute bottom-4 right-4 z-40 rounded-full bg-black/40 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm transition hover:bg-black/60"
            >
              ⟲ Recenter
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
