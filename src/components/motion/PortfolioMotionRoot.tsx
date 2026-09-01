import { LazyMotion, MotionConfig, m, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import "./portfolio-motion.css";

const loadMotionFeatures = () => import("./motion-features").then((module) => module.default);
const motionPreferenceKey = "isaac-portfolio-motion";

export type MotionPreference = "auto" | "full" | "reduced";
export type MotionProfile =
  | "work-index"
  | "hm"
  | "zara"
  | "uniqlo"
  | "prada"
  | "muji"
  | "levis"
  | "polo"
  | "nike"
  | "press-archive"
  | "sensory-editorial"
  | "public-signal"
  | "product-ritual"
  | "evidence-infrastructure";

type DataAttributes = Record<`data-${string}`, string | number | boolean | undefined>;

type PortfolioMotionRootProps = {
  as?: "article" | "div";
  className: string;
  children: ReactNode;
  style?: CSSProperties;
  profile: MotionProfile;
  projectId: string;
  projectLabel: string;
  sceneSelector: string;
  attributes?: DataAttributes;
};

const preferences: MotionPreference[] = ["auto", "full", "reduced"];

function nextPreference(current: MotionPreference) {
  return preferences[(preferences.indexOf(current) + 1) % preferences.length];
}

function pointerDepth(profile: MotionProfile) {
  switch (profile) {
    case "nike":
      return 6;
    case "polo":
      return 4;
    case "hm":
    case "levis":
    case "public-signal":
      return 3;
    case "prada":
    case "zara":
    case "sensory-editorial":
      return 2.5;
    case "muji":
    case "uniqlo":
      return 1.25;
    default:
      return 2;
  }
}

function sceneBeat(profile: MotionProfile, target: HTMLElement, index: number) {
  const chapter = target.id.toLowerCase();

  switch (profile) {
    case "hm":
      return ["thread", "remake", "handoff", "return"][index % 4];
    case "zara":
      return index % 2 === 0 ? "cut" : "air";
    case "uniqlo":
      return ["rest", "walk", "layer", "work"][index % 4];
    case "prada":
      return index % 2 === 0 ? "reframe" : "hold";
    case "muji":
      return ["subtract", "organise", "settle"][index % 3];
    case "levis":
      return ["wear", "repair", "record"][index % 3];
    case "polo":
      return chapter.includes("field")
        ? "field"
        : chapter.includes("stable")
          ? "stable"
          : chapter.includes("city")
            ? "city"
            : chapter.includes("evening")
              ? "evening"
              : "morning";
    case "nike":
      return chapter.includes("recovery")
        ? "recovery"
        : chapter.includes("contact")
          ? "contact"
          : chapter.includes("next")
            ? "return"
            : "launch";
    default:
      return target.dataset.motionRole ?? `chapter-${(index % 4) + 1}`;
  }
}

export function PortfolioMotionRoot({
  as = "article",
  className,
  children,
  style,
  profile,
  projectId,
  projectLabel,
  sceneSelector,
  attributes,
}: PortfolioMotionRootProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [preference, setPreference] = useState<MotionPreference>("auto");
  const [preferenceReady, setPreferenceReady] = useState(false);
  const [systemReducedMotion, setSystemReducedMotion] = useState(false);
  const effectiveReducedMotion =
    preferenceReady && (preference === "reduced" || (preference === "auto" && systemReducedMotion));
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: profile === "nike" ? 260 : 140,
    damping: profile === "nike" ? 34 : 30,
    mass: 0.22,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateSystemPreference = () => setSystemReducedMotion(mediaQuery.matches);

    updateSystemPreference();
    mediaQuery.addEventListener("change", updateSystemPreference);

    return () => mediaQuery.removeEventListener("change", updateSystemPreference);
  }, []);

  useEffect(() => {
    try {
      const storedPreference = window.localStorage.getItem(motionPreferenceKey);
      if (storedPreference && preferences.includes(storedPreference as MotionPreference)) {
        setPreference(storedPreference as MotionPreference);
      }
    } catch {
      // Storage can be unavailable in hardened or private browsing contexts.
    }
    setPreferenceReady(true);
  }, []);

  useEffect(() => {
    if (!preferenceReady) return;

    document.documentElement.dataset.motionPreference = preference;
    document.documentElement.dataset.motionEffective = effectiveReducedMotion ? "reduced" : "full";

    try {
      window.localStorage.setItem(motionPreferenceKey, preference);
    } catch {
      // The preference still works for the current visit when storage is blocked.
    }

    return () => {
      delete document.documentElement.dataset.motionPreference;
      delete document.documentElement.dataset.motionEffective;
    };
  }, [effectiveReducedMotion, preference, preferenceReady]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealTargets = Array.from(
      new Set(root.querySelectorAll<HTMLElement>(sceneSelector)),
    ).filter((target) => target !== root);
    const chapters = Array.from(root.querySelectorAll<HTMLElement>("section[id], header[id]"));
    const chapterSet = new Set(chapters);
    const visibleChapters = new Set<HTMLElement>();
    const allObserved = Array.from(new Set([...revealTargets, ...chapters]));
    let activeChapter = "";
    let firstFrame = 0;
    let secondFrame = 0;

    revealTargets.forEach((target, index) => {
      target.dataset.motionReveal = "";
      target.dataset.motionBeat = sceneBeat(profile, target, index);
      target.style.setProperty("--motion-order", String(index % 4));
      target.classList.remove("is-motion-visible");
    });

    root.querySelectorAll<HTMLElement>("figure, .work-studio__media").forEach((media) => {
      media.dataset.motionMedia = "";
    });

    const updateChapter = () => {
      if (!visibleChapters.size) return;

      const readingLine = window.innerHeight * 0.28;
      const candidate = Array.from(visibleChapters).sort((left, right) => {
        const leftRect = left.getBoundingClientRect();
        const rightRect = right.getBoundingClientRect();
        const leftDistance = Math.abs(leftRect.top - readingLine);
        const rightDistance = Math.abs(rightRect.top - readingLine);
        return leftDistance - rightDistance;
      })[0];
      const chapterId = candidate?.id;

      if (!chapterId || chapterId === activeChapter) return;
      activeChapter = chapterId;
      root.dataset.motionChapter = chapterId;

      const chapterLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
      chapterLinks.forEach((link) => {
        const current = link.getAttribute("href") === `#${chapterId}`;
        if (current) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });

      const activeLink = chapterLinks.find((link) => link.getAttribute("href") === `#${chapterId}`);
      const rail = activeLink?.parentElement;

      if (activeLink && rail && rail.scrollWidth > rail.clientWidth + 8) {
        const left = activeLink.offsetLeft - (rail.clientWidth - activeLink.clientWidth) / 2;
        rail.scrollTo({
          left: Math.max(0, left),
          behavior: effectiveReducedMotion ? "auto" : "smooth",
        });
      }
    };

    if (effectiveReducedMotion) {
      revealTargets.forEach((target) => target.classList.add("is-motion-visible"));
      root.dataset.motionReady = "true";
    }

    if (typeof IntersectionObserver === "undefined") {
      revealTargets.forEach((target) => target.classList.add("is-motion-visible"));
      root.dataset.motionReady = "true";
      const firstChapter = chapters[0];
      if (firstChapter?.id) {
        root.dataset.motionChapter = firstChapter.id;
        root
          .querySelector<HTMLAnchorElement>(`a[href="#${firstChapter.id}"]`)
          ?.setAttribute("aria-current", "location");
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting && target.hasAttribute("data-motion-reveal")) {
            target.classList.add("is-motion-visible");
            if (!chapterSet.has(target)) observer.unobserve(target);
          }

          if (chapterSet.has(target)) {
            if (entry.isIntersecting) visibleChapters.add(target);
            else visibleChapters.delete(target);
          }
        });
        updateChapter();
      },
      { threshold: [0, 0.08, 0.24, 0.5], rootMargin: "0px 0px -12% 0px" },
    );

    if (effectiveReducedMotion) {
      chapters.forEach((target) => observer.observe(target));
    } else {
      firstFrame = window.requestAnimationFrame(() => {
        root.dataset.motionReady = "true";
        secondFrame = window.requestAnimationFrame(() => {
          allObserved.forEach((target) => observer.observe(target));
        });
      });
    }

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      revealTargets.forEach((target) => {
        target.style.removeProperty("--motion-order");
        delete target.dataset.motionBeat;
      });
    };
  }, [effectiveReducedMotion, profile, projectId, sceneSelector]);

  useEffect(() => {
    const root = rootRef.current;
    const rawHash = window.location.hash.slice(1);
    if (!root || !rawHash) return;

    let chapterId = rawHash;
    try {
      chapterId = decodeURIComponent(rawHash);
    } catch {
      // A malformed hash should keep the browser's default navigation behaviour.
    }

    const chapter = document.getElementById(chapterId);
    if (!chapter || !root.contains(chapter)) return;

    let cancelledByVisitor = false;
    let alignmentFrame = 0;
    const timers: number[] = [];
    const cancelAlignment = () => {
      cancelledByVisitor = true;
    };
    const alignChapter = () => {
      if (cancelledByVisitor || window.location.hash.slice(1) !== rawHash) return;
      window.cancelAnimationFrame(alignmentFrame);
      alignmentFrame = window.requestAnimationFrame(() => {
        chapter.scrollIntoView({ block: "start", behavior: "auto" });
      });
    };
    const alignAfterImage = (event: Event) => {
      if (event.target instanceof HTMLImageElement) alignChapter();
    };

    root.addEventListener("load", alignAfterImage, true);
    window.addEventListener("wheel", cancelAlignment, { passive: true });
    window.addEventListener("touchstart", cancelAlignment, { passive: true });
    window.addEventListener("pointerdown", cancelAlignment, { passive: true });
    window.addEventListener("keydown", cancelAlignment);

    alignChapter();
    timers.push(window.setTimeout(alignChapter, 180));
    timers.push(window.setTimeout(alignChapter, 720));
    timers.push(window.setTimeout(alignChapter, 1600));
    timers.push(window.setTimeout(cancelAlignment, 2400));
    document.fonts?.ready.then(alignChapter).catch(() => undefined);

    return () => {
      cancelledByVisitor = true;
      root.removeEventListener("load", alignAfterImage, true);
      window.removeEventListener("wheel", cancelAlignment);
      window.removeEventListener("touchstart", cancelAlignment);
      window.removeEventListener("pointerdown", cancelAlignment);
      window.removeEventListener("keydown", cancelAlignment);
      window.cancelAnimationFrame(alignmentFrame);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [projectId]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || effectiveReducedMotion) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const depth = pointerDepth(profile);
    let activeMedia: HTMLElement | null = null;
    let pointerFrame = 0;
    let pointerClientX = 0;
    let pointerClientY = 0;

    const resetMedia = (media: HTMLElement | null) => {
      if (!media) return;
      media.dataset.motionHover = "false";
      media.style.setProperty("--motion-pointer-x", "0px");
      media.style.setProperty("--motion-pointer-y", "0px");
    };

    const commitPointer = () => {
      pointerFrame = 0;
      if (!activeMedia) return;
      const rect = activeMedia.getBoundingClientRect();
      const nextX = ((pointerClientX - rect.left) / Math.max(rect.width, 1) - 0.5) * depth * 2;
      const nextY = ((pointerClientY - rect.top) / Math.max(rect.height, 1) - 0.5) * depth * 2;
      activeMedia.dataset.motionHover = "true";
      activeMedia.style.setProperty("--motion-pointer-x", `${nextX.toFixed(2)}px`);
      activeMedia.style.setProperty("--motion-pointer-y", `${nextY.toFixed(2)}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      const eventTarget = event.target instanceof Element ? event.target : null;
      const media = eventTarget?.closest<HTMLElement>("[data-motion-media]") ?? null;
      if (!media || !root.contains(media)) {
        resetMedia(activeMedia);
        activeMedia = null;
        return;
      }

      if (activeMedia !== media) {
        resetMedia(activeMedia);
        activeMedia = media;
      }

      pointerClientX = event.clientX;
      pointerClientY = event.clientY;

      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(commitPointer);
    };

    const onPointerLeave = () => {
      resetMedia(activeMedia);
      activeMedia = null;
    };

    root.addEventListener("pointermove", onPointerMove, { passive: true });
    root.addEventListener("pointerleave", onPointerLeave);

    return () => {
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onPointerLeave);
      window.cancelAnimationFrame(pointerFrame);
      resetMedia(activeMedia);
    };
  }, [effectiveReducedMotion, profile, projectId]);

  const changePreference = () => {
    setPreference((current) => nextPreference(current));
  };
  const effectiveLabel = effectiveReducedMotion ? "Reduced" : "Full";
  const rootAttributes = {
    ...attributes,
    "data-motion-root": "",
    "data-motion-profile": profile,
    "data-motion-project": projectId,
    "data-motion-effective": effectiveReducedMotion ? "reduced" : "full",
  } satisfies DataAttributes;
  const motionChrome = (
    <>
      <m.div
        className="portfolio-motion__progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <button
        type="button"
        className="portfolio-motion__preference"
        data-mode={preference}
        onClick={changePreference}
        aria-label={`Motion setting: ${preference}. ${effectiveLabel} motion is active. Activate to select the next setting.`}
        title={`Motion: ${preference} (${effectiveLabel})`}
      >
        <span className="portfolio-motion__preference-mark" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>Motion</span>
        <strong>{preference}</strong>
        <small>{preference === "auto" ? `System ${effectiveLabel}` : effectiveLabel}</small>
      </button>
      <span className="portfolio-motion__sr-only" aria-live="polite">
        {projectLabel}: {effectiveLabel} motion active.
      </span>
    </>
  );
  const rootChildren = (
    <>
      {motionChrome}
      {children}
    </>
  );

  return (
    <MotionConfig
      reducedMotion={
        preferenceReady
          ? preference === "auto"
            ? "user"
            : effectiveReducedMotion
              ? "always"
              : "never"
          : "never"
      }
    >
      <LazyMotion features={loadMotionFeatures} strict>
        {as === "div" ? (
          <div
            ref={(node) => {
              rootRef.current = node;
            }}
            className={className}
            style={style}
            {...rootAttributes}
          >
            {rootChildren}
          </div>
        ) : (
          <article
            ref={(node) => {
              rootRef.current = node;
            }}
            className={className}
            style={style}
            {...rootAttributes}
          >
            {rootChildren}
          </article>
        )}
      </LazyMotion>
    </MotionConfig>
  );
}
