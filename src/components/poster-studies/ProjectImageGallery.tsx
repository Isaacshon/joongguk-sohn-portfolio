import * as Dialog from "@radix-ui/react-dialog";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";

import { ProjectPicture } from "@/components/poster-studies/ProjectPicture";
import {
  getDesignProjectMediaAsset,
  type DesignProjectMediaSlot,
} from "@/lib/design-project-media";
import type { DesignProject } from "@/lib/design-projects";

import "@/project-image-gallery.css";

type GalleryContextValue = {
  open: (slot: DesignProjectMediaSlot | undefined, trigger: HTMLButtonElement) => void;
  count: number;
  projectTitle: string;
};

type GalleryFrame = {
  slot: DesignProjectMediaSlot;
  label: string;
  title: string;
  caption: string;
};

const GalleryContext = createContext<GalleryContextValue | null>(null);

/** The viewer is mounted only on request; it never preloads eight full-size frames. */
export function ProjectImageGallery({
  project,
  spec,
  children,
}: {
  project: DesignProject;
  spec: { beats: readonly GalleryFrame[] };
  children: ReactNode;
}) {
  const frames = useMemo(
    () => spec.beats.filter((beat) => getDesignProjectMediaAsset(project.slug, beat.slot)),
    [project.slug, spec.beats],
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [loadedSlot, setLoadedSlot] = useState<DesignProjectMediaSlot | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const thumbRailRef = useRef<HTMLDivElement | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const activeFrame = activeIndex === null ? undefined : frames[activeIndex];
  const activeAsset = activeFrame
    ? getDesignProjectMediaAsset(project.slug, activeFrame.slot)
    : undefined;
  const loading = !!activeFrame && loadedSlot !== activeFrame.slot;

  const moveTo = (index: number) => {
    if (!frames.length) return;
    const nextIndex = (index + frames.length) % frames.length;
    if (nextIndex !== activeIndex) setLoadedSlot(null);
    setActiveIndex(nextIndex);
    setZoomed(false);
  };

  const context = {
    open: (slot: DesignProjectMediaSlot | undefined, trigger: HTMLButtonElement) => {
      if (!frames.length) return;
      triggerRef.current = trigger;
      moveTo(
        Math.max(
          0,
          frames.findIndex((frame) => frame.slot === slot),
        ),
      );
    },
    count: frames.length,
    projectTitle: project.title,
  };

  useEffect(() => {
    if (activeIndex === null) return;
    stageRef.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const rail = thumbRailRef.current;
    const selected = rail?.querySelector<HTMLElement>("[aria-current='true']");
    if (rail && selected) {
      rail.scrollTo({
        left: selected.offsetLeft - rail.clientWidth / 2 + selected.clientWidth / 2,
        behavior: "instant",
      });
    }
  }, [activeIndex, zoomed]);

  const finishSwipe = (event: PointerEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || zoomed || activeIndex === null) return;
    const horizontal = event.clientX - start.x;
    const vertical = event.clientY - start.y;
    if (Math.abs(horizontal) > 56 && Math.abs(horizontal) > Math.abs(vertical) * 1.5) {
      moveTo(activeIndex + (horizontal < 0 ? 1 : -1));
    }
  };

  return (
    <GalleryContext.Provider value={context}>
      {children}
      <Dialog.Root
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) {
            setActiveIndex(null);
            setZoomed(false);
          }
        }}
      >
        {activeFrame && activeIndex !== null ? (
          <Dialog.Portal>
            <Dialog.Overlay className="project-viewer__backdrop" />
            <Dialog.Content
              className="project-viewer"
              data-project-gallery={project.slug}
              onCloseAutoFocus={(event) => {
                event.preventDefault();
                triggerRef.current?.focus({ preventScroll: true });
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                  event.preventDefault();
                  moveTo(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
                } else if (event.key === "Home" || event.key === "End") {
                  event.preventDefault();
                  moveTo(event.key === "Home" ? 0 : frames.length - 1);
                }
              }}
            >
              <header className="project-viewer__header">
                <Dialog.Title>{project.title}</Dialog.Title>
                <span
                  className="project-viewer__count"
                  aria-label={`Photograph ${activeIndex + 1} of ${frames.length}`}
                >
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(frames.length).padStart(2, "0")}
                </span>
                <Dialog.Close className="project-viewer__close" aria-label="Close image viewer">
                  Close <span aria-hidden="true">×</span>
                </Dialog.Close>
              </header>

              <div
                ref={stageRef}
                className="project-viewer__stage"
                data-zoomed={zoomed}
                data-loading={loading}
                aria-busy={loading}
                onLoadCapture={(event) => {
                  const image = event.target as HTMLImageElement;
                  if (image.closest(".project-viewer__image")) {
                    void image
                      .decode()
                      .catch(() => undefined)
                      .then(() => {
                        if (image.isConnected) setLoadedSlot(activeFrame.slot);
                      });
                  }
                }}
                onErrorCapture={(event) => {
                  if ((event.target as HTMLElement).closest(".project-viewer__image")) {
                    setLoadedSlot(activeFrame.slot);
                  }
                }}
                onPointerDown={(event) => {
                  if (event.pointerType === "touch" && !zoomed) {
                    touchStart.current = { x: event.clientX, y: event.clientY };
                    event.currentTarget.setPointerCapture(event.pointerId);
                  }
                }}
                onPointerUp={finishSwipe}
                onPointerCancel={() => {
                  touchStart.current = null;
                }}
              >
                {loading && activeAsset ? (
                  <>
                    <img
                      className="project-viewer__preview"
                      src={activeAsset.src.replace("-3200.webp", "-960.webp")}
                      alt=""
                      aria-hidden="true"
                    />
                    <span className="project-viewer__loading" role="status">
                      Loading photograph…
                    </span>
                  </>
                ) : null}
                <ProjectPicture
                  key={activeFrame.slot}
                  projectSlug={project.slug}
                  slot={activeFrame.slot}
                  className="project-viewer__image"
                  fit="contain"
                  priority
                  sizes={zoomed ? "200vw" : "100vw"}
                  style={{ "--viewer-zoom": zoomed ? 2 : 1 } as CSSProperties}
                  fallback={
                    <p className="project-viewer__unavailable">
                      This photograph could not load. Choose another frame.
                    </p>
                  }
                />
              </div>

              <div className="project-viewer__information">
                <div className="project-viewer__caption" aria-live="polite" aria-atomic="true">
                  <span>{activeFrame.label}</span>
                  <h2>{activeFrame.title}</h2>
                  <Dialog.Description>{activeFrame.caption}</Dialog.Description>
                </div>
                <div className="project-viewer__controls">
                  <button
                    type="button"
                    onClick={() => moveTo(activeIndex - 1)}
                    aria-label="Previous photograph"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="project-viewer__zoom"
                    aria-pressed={zoomed}
                    onClick={() => setZoomed(!zoomed)}
                  >
                    {zoomed ? "Fit image" : "See detail"}
                  </button>
                  <button
                    type="button"
                    onClick={() => moveTo(activeIndex + 1)}
                    aria-label="Next photograph"
                  >
                    →
                  </button>
                </div>
              </div>

              <div
                ref={thumbRailRef}
                className="project-viewer__thumbnails"
                role="group"
                aria-label="Choose a photograph"
              >
                {frames.map((frame, index) => {
                  const asset = getDesignProjectMediaAsset(project.slug, frame.slot)!;
                  return (
                    <button
                      key={frame.slot}
                      type="button"
                      aria-label={`Photograph ${index + 1}: ${frame.title}`}
                      aria-current={index === activeIndex ? "true" : undefined}
                      onClick={() => moveTo(index)}
                    >
                      <img
                        src={asset.src.replace("-3200.webp", "-960.webp")}
                        alt=""
                        width={asset.width}
                        height={asset.height}
                        loading="lazy"
                      />
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </button>
                  );
                })}
              </div>
              <p className="project-viewer__hint">Swipe or use ← → to explore. Escape to return.</p>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </Dialog.Root>
    </GalleryContext.Provider>
  );
}

export function ProjectGalleryTrigger({
  slot,
  overlay = false,
  label,
}: {
  slot?: DesignProjectMediaSlot;
  overlay?: boolean;
  label?: string;
}) {
  const gallery = useContext(GalleryContext);
  if (!gallery?.count) return null;

  return (
    <button
      type="button"
      className={overlay ? "personal-world__inspect" : "personal-world__view-images"}
      data-gallery-open={slot ?? "all"}
      aria-haspopup="dialog"
      aria-label={
        overlay
          ? `Inspect photograph: ${label ?? gallery.projectTitle}`
          : `View all ${gallery.count} ${gallery.projectTitle} photographs`
      }
      onClick={(event) => gallery.open(slot, event.currentTarget)}
    >
      {overlay ? (
        <span>
          Inspect <span aria-hidden="true">↗</span>
        </span>
      ) : (
        <>
          View photographs <span>{String(gallery.count).padStart(2, "0")}</span>
          <span aria-hidden="true">↗</span>
        </>
      )}
    </button>
  );
}
