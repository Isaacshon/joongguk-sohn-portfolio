import {
  LazyMotion,
  MotionConfig,
  m,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import {
  clearCompareProgress,
  compareGroupForTarget,
  prepareCompareGroups,
  resolveMotionStage,
  restoreCompareGroups,
  setCompareProgress,
  type MotionCompareGroup,
  type MotionProfile,
} from "./portfolio-motion-engine";
import "./portfolio-motion.css";

export type { MotionProfile } from "./portfolio-motion-engine";

const loadMotionFeatures = () => import("./motion-features").then((module) => module.default);
const motionPreferenceKey = "isaac-portfolio-motion";

export type MotionPreference = "auto" | "full" | "reduced";

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

function chapterTargetsFor(root: HTMLElement) {
  const linkedTargets = Array.from(root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
    .map((link) => {
      const rawId = link.getAttribute("href")?.slice(1);
      if (!rawId) return null;

      let chapterId = rawId;
      try {
        chapterId = decodeURIComponent(rawId);
      } catch {
        // Keep the raw fragment when a third-party link contains malformed encoding.
      }

      const target = document.getElementById(chapterId);
      return target && root.contains(target) ? target : null;
    })
    .filter((target): target is HTMLElement => Boolean(target));

  if (linkedTargets.length) return Array.from(new Set(linkedTargets));

  return Array.from(root.querySelectorAll<HTMLElement>("section[id], header[id]"));
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
  const progressEngineRef = useRef<((scrollTop: number) => void) | null>(null);
  const [preference, setPreference] = useState<MotionPreference>("auto");
  const [preferenceReady, setPreferenceReady] = useState(false);
  const [systemReducedMotion, setSystemReducedMotion] = useState(false);
  const [interactionAnnouncement, setInteractionAnnouncement] = useState("");
  const effectiveReducedMotion =
    preferenceReady && (preference === "reduced" || (preference === "auto" && systemReducedMotion));
  const { scrollY, scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: profile === "nike" ? 260 : 140,
    damping: profile === "nike" ? 34 : 30,
    mass: 0.22,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    progressEngineRef.current?.(latest);
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
    const chapters = chapterTargetsFor(root);
    const chapterSet = new Set(chapters);
    const visibleChapters = new Set<HTMLElement>();
    const allObserved = Array.from(new Set([...revealTargets, ...chapters]));
    let activeChapter = "";
    let firstFrame = 0;
    let secondFrame = 0;

    revealTargets.forEach((target, index) => {
      const stage = resolveMotionStage(profile, target, index);
      target.dataset.motionReveal = "";
      target.dataset.motionBeat = stage;
      target.dataset.motionStage = stage;
      target.style.setProperty("--motion-order", String(index % 4));
      target.classList.remove("is-motion-visible");
    });

    root.querySelectorAll<HTMLElement>("figure, .work-studio__media").forEach((media) => {
      media.dataset.motionMedia = "";
      media.dataset.motionTactile = "";
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
        delete target.dataset.motionStage;
      });
    };
  }, [effectiveReducedMotion, profile, projectId, sceneSelector]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const chapters = chapterTargetsFor(root);
    const chapterLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const media = Array.from(root.querySelectorAll<HTMLElement>("[data-motion-media]"));
    const compareGroups = prepareCompareGroups(root, media);
    const linksByChapter = new Map<string, HTMLAnchorElement[]>();
    const chapterRails = new Set<HTMLElement>();
    const chapterTracks = new Set<HTMLElement>();
    const releaseTimers = new Set<number>();
    let chapterMetrics: Array<{
      element: HTMLElement;
      top: number;
      height: number;
      links: HTMLAnchorElement[];
      compare?: MotionCompareGroup;
    }> = [];
    let activeChapter: HTMLElement | null = null;
    let activeScrollCompare: MotionCompareGroup | undefined;
    let measureFrame = 0;
    let pointerFrame = 0;
    let pointerGroup: MotionCompareGroup | undefined;
    let pointerMedia: HTMLElement | null = null;
    let pointerClientX = 0;
    let resizeObserver: ResizeObserver | undefined;
    let lastLocalProgress = -1;

    chapters.forEach((chapter, index) => {
      const stage = chapter.dataset.motionStage ?? resolveMotionStage(profile, chapter, index);
      chapter.dataset.motionStage = stage;
      chapter.dataset.motionBeat = stage;
    });

    chapterLinks.forEach((link) => {
      const rawId = link.getAttribute("href")?.slice(1);
      if (!rawId) return;
      let chapterId = rawId;
      try {
        chapterId = decodeURIComponent(rawId);
      } catch {
        // Malformed hashes keep their normal browser behaviour.
      }
      const chapter = chapters.find((candidate) => candidate.id === chapterId);
      if (!chapter) return;

      const links = linksByChapter.get(chapterId) ?? [];
      links.push(link);
      linksByChapter.set(chapterId, links);
      link.dataset.motionChapterLink = "";
      link.dataset.motionStage = chapter.dataset.motionStage ?? "";
      const nav = link.closest<HTMLElement>("nav");
      const track = link.parentElement;
      if (nav) {
        nav.dataset.motionChapterRail = "";
        chapterRails.add(nav);
      }
      if (track) {
        track.dataset.motionChapterTrack = "";
        chapterTracks.add(track);
      }
    });

    const releaseMedia = (item: HTMLElement | null, force = false) => {
      if (!item || (!force && item.closest('[data-motion-compare][data-motion-locked="true"]'))) {
        return;
      }
      delete item.dataset.motionPressed;
      delete item.dataset.motionIntent;
      if (!item.closest('[data-motion-compare][data-motion-engaged="true"]')) {
        delete item.dataset.motionActive;
      }
    };

    const activateMedia = (item: HTMLElement, intent: "pointer" | "touch" | "keyboard") => {
      if (pointerMedia && pointerMedia !== item) releaseMedia(pointerMedia);
      pointerMedia = item;
      item.dataset.motionActive = "true";
      item.dataset.motionIntent = intent;
    };

    const announceComparison = (group: MotionCompareGroup, index: number) => {
      const stage = group.element.closest<HTMLElement>("[data-motion-stage]")?.dataset.motionStage;
      setInteractionAnnouncement(
        `${stage ? `${stage}. ` : ""}Media ${index + 1} of ${group.media.length} selected.`,
      );
    };

    const updateChapterProgress = (scrollTop: number) => {
      if (!chapterMetrics.length) return;

      const readingPosition = scrollTop + window.innerHeight * 0.28;
      let activeIndex = 0;
      for (let index = 0; index < chapterMetrics.length; index += 1) {
        if (chapterMetrics[index].top <= readingPosition) activeIndex = index;
        else break;
      }

      const metric = chapterMetrics[activeIndex];
      const next = chapterMetrics[activeIndex + 1];
      const span = Math.max(1, next ? next.top - metric.top : metric.height);
      const localProgress = Math.min(1, Math.max(0, (readingPosition - metric.top) / span));
      const visibleProgress = effectiveReducedMotion ? (localProgress > 0 ? 1 : 0) : localProgress;
      const railProgress = Math.min(
        1,
        (activeIndex + visibleProgress) / Math.max(chapterMetrics.length, 1),
      );
      const chapterChanged = activeChapter !== metric.element;
      const activeNavLink = metric.links.find((link) => link.closest("nav")) ?? metric.links[0];
      const track = activeNavLink?.parentElement;
      let railScrollLeft: number | undefined;

      if (chapterChanged && activeNavLink && track && track.scrollWidth > track.clientWidth + 8) {
        railScrollLeft = Math.max(
          0,
          activeNavLink.offsetLeft - (track.clientWidth - activeNavLink.clientWidth) / 2,
        );
      }

      if (chapterChanged) {
        if (activeChapter) {
          delete activeChapter.dataset.motionActive;
          activeChapter.style.removeProperty("--motion-beat-progress");
        }
        if (
          activeScrollCompare &&
          activeScrollCompare.element.dataset.motionIntent === "scroll" &&
          activeScrollCompare.element.dataset.motionLocked !== "true"
        ) {
          clearCompareProgress(activeScrollCompare);
        }

        activeChapter = metric.element;
        activeScrollCompare = metric.compare;
        activeChapter.dataset.motionActive = "true";
        root.dataset.motionChapter = activeChapter.id;
        root.dataset.motionStage = activeChapter.dataset.motionStage ?? "";
        root.dataset.motionBeat = activeChapter.dataset.motionBeat ?? "";

        chapterMetrics.forEach((candidate, index) => {
          const progressValue = index < activeIndex ? "1" : "0";
          candidate.links.forEach((link) => {
            link.style.setProperty("--motion-link-progress", progressValue);
            if (candidate.element === activeChapter) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
        chapterRails.forEach((rail) => {
          rail.dataset.motionStage = root.dataset.motionStage;
        });

        if (railScrollLeft !== undefined && track) {
          track.scrollTo({
            left: railScrollLeft,
            behavior: effectiveReducedMotion ? "auto" : "smooth",
          });
        }
      }

      if (Math.abs(visibleProgress - lastLocalProgress) > 0.002 || chapterChanged) {
        lastLocalProgress = visibleProgress;
        const localValue = visibleProgress.toFixed(4);
        const railValue = railProgress.toFixed(4);
        root.style.setProperty("--motion-chapter-progress", localValue);
        metric.element.style.setProperty("--motion-beat-progress", localValue);
        metric.links.forEach((link) => {
          link.style.setProperty("--motion-link-progress", localValue);
        });
        chapterRails.forEach((rail) => {
          rail.style.setProperty("--motion-rail-progress", railValue);
        });
      }

      if (
        !effectiveReducedMotion &&
        metric.compare &&
        metric.compare.element.dataset.motionLocked !== "true" &&
        !["pointer", "touch", "keyboard"].includes(
          metric.compare.element.dataset.motionIntent ?? "",
        )
      ) {
        setCompareProgress(metric.compare, localProgress, "scroll");
      }
    };

    const measureChapters = () => {
      measureFrame = 0;
      const pageTop = window.scrollY;
      chapterMetrics = chapters
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            element,
            top: rect.top + pageTop,
            height: Math.max(rect.height, 1),
            links: linksByChapter.get(element.id) ?? [],
            compare: compareGroups.find((group) => element.contains(group.element)),
          };
        })
        .sort((left, right) => left.top - right.top);
      updateChapterProgress(scrollY.get());
    };

    const scheduleMeasure = () => {
      if (!measureFrame) measureFrame = window.requestAnimationFrame(measureChapters);
    };

    const commitPointerScrub = () => {
      pointerFrame = 0;
      if (!pointerGroup) return;
      const rect = pointerGroup.element.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (pointerClientX - rect.left) / Math.max(rect.width, 1)),
      );
      setCompareProgress(pointerGroup, progress, "pointer");
    };

    const onPointerMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const item = target?.closest<HTMLElement>("[data-motion-media]") ?? null;
      if (item && root.contains(item)) activateMedia(item, "pointer");
      else if (pointerMedia) {
        releaseMedia(pointerMedia);
        pointerMedia = null;
      }

      const group = compareGroupForTarget(target, compareGroups);
      if (group !== pointerGroup) {
        if (pointerGroup && pointerGroup.element.dataset.motionLocked !== "true") {
          clearCompareProgress(pointerGroup);
        }
        pointerGroup = group;
      }
      if (!group || event.pointerType === "touch") return;
      pointerClientX = event.clientX;
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(commitPointerScrub);
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const item = target?.closest<HTMLElement>("[data-motion-media]") ?? null;
      if (!item || !root.contains(item)) return;

      const intent = event.pointerType === "mouse" ? "pointer" : "touch";
      activateMedia(item, intent);
      item.dataset.motionPressed = "true";
      const group = compareGroupForTarget(item, compareGroups);
      if (!group || event.pointerType === "mouse") return;

      const index = group.media.indexOf(item);
      const wasLocked = group.element.dataset.motionLocked === "true";
      const wasActive = Number(group.element.dataset.motionActiveIndex) === index;
      if (wasLocked && wasActive) {
        clearCompareProgress(group, true);
      } else {
        group.element.dataset.motionLocked = "true";
        const selected = setCompareProgress(
          group,
          (index + 0.5) / Math.max(group.media.length, 1),
          "touch",
        );
        announceComparison(group, selected);
      }
    };

    const onPointerRelease = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const item = target?.closest<HTMLElement>("[data-motion-media]") ?? pointerMedia;
      if (!item) return;
      delete item.dataset.motionPressed;
      if (
        event.pointerType !== "mouse" &&
        !item.closest('[data-motion-compare][data-motion-locked="true"]')
      ) {
        const timer = window.setTimeout(() => {
          releaseTimers.delete(timer);
          releaseMedia(item, true);
        }, 900);
        releaseTimers.add(timer);
      }
    };

    const onPointerLeave = () => {
      window.cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      releaseMedia(pointerMedia);
      pointerMedia = null;
      if (pointerGroup && pointerGroup.element.dataset.motionLocked !== "true") {
        clearCompareProgress(pointerGroup);
      }
      pointerGroup = undefined;
    };

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const group = compareGroupForTarget(target, compareGroups);
      const item =
        target?.closest<HTMLElement>("[data-motion-media]") ??
        target?.closest<HTMLElement>("a")?.querySelector<HTMLElement>("[data-motion-media]") ??
        group?.media[Number(group.element.dataset.motionActiveIndex) || 0];
      if (item) activateMedia(item, "keyboard");
      if (group) {
        const index = Math.max(0, group.media.indexOf(item ?? group.media[0]));
        setCompareProgress(group, (index + 0.5) / group.media.length, "keyboard");
      }
    };

    const onFocusOut = (event: FocusEvent) => {
      const next = event.relatedTarget instanceof Node ? event.relatedTarget : null;
      const target = event.target instanceof Element ? event.target : null;
      const group = compareGroupForTarget(target, compareGroups);
      if (group && next && group.element.contains(next)) return;
      if (group && group.element.dataset.motionLocked !== "true") clearCompareProgress(group);
      if (!next || !root.contains(next)) {
        releaseMedia(pointerMedia, true);
        pointerMedia = null;
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const group = compareGroupForTarget(target, compareGroups);
      if (group) {
        const current = Number(group.element.dataset.motionActiveIndex) || 0;
        let next = current;
        if (event.key === "ArrowRight") next = Math.min(group.media.length - 1, current + 1);
        else if (event.key === "ArrowLeft") next = Math.max(0, current - 1);
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = group.media.length - 1;
        else if (event.key === "Escape") {
          event.preventDefault();
          clearCompareProgress(group, true);
          return;
        } else if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          if (group.element.dataset.motionLocked === "true") {
            clearCompareProgress(group, true);
          } else {
            group.element.dataset.motionLocked = "true";
            const selected = setCompareProgress(
              group,
              (current + 0.5) / group.media.length,
              "keyboard",
            );
            announceComparison(group, selected);
          }
          return;
        } else {
          return;
        }

        event.preventDefault();
        const selected = setCompareProgress(group, (next + 0.5) / group.media.length, "keyboard");
        activateMedia(group.media[selected], "keyboard");
        announceComparison(group, selected);
        return;
      }

      const link = target?.closest<HTMLAnchorElement>("a[data-motion-chapter-link]");
      const nav = link?.closest<HTMLElement>("[data-motion-chapter-rail]");
      if (!link || !nav) return;
      const links = Array.from(
        nav.querySelectorAll<HTMLAnchorElement>("a[data-motion-chapter-link]"),
      );
      const current = links.indexOf(link);
      let next = current;
      if (event.key === "ArrowRight") next = (current + 1) % links.length;
      else if (event.key === "ArrowLeft") next = (current - 1 + links.length) % links.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = links.length - 1;
      else return;

      event.preventDefault();
      links[next]?.focus();
      links[next]?.click();
    };

    progressEngineRef.current = updateChapterProgress;
    root.addEventListener("load", scheduleMeasure, true);
    root.addEventListener("pointermove", onPointerMove, { passive: true });
    root.addEventListener("pointerdown", onPointerDown, { passive: true });
    root.addEventListener("pointerup", onPointerRelease, { passive: true });
    root.addEventListener("pointercancel", onPointerRelease, { passive: true });
    root.addEventListener("pointerleave", onPointerLeave);
    root.addEventListener("focusin", onFocusIn);
    root.addEventListener("focusout", onFocusOut);
    root.addEventListener("keydown", onKeyDown);
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(scheduleMeasure);
      chapters.forEach((chapter) => resizeObserver?.observe(chapter));
    } else {
      window.addEventListener("resize", scheduleMeasure, { passive: true });
    }
    scheduleMeasure();

    return () => {
      progressEngineRef.current = null;
      resizeObserver?.disconnect();
      root.removeEventListener("load", scheduleMeasure, true);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointerup", onPointerRelease);
      root.removeEventListener("pointercancel", onPointerRelease);
      root.removeEventListener("pointerleave", onPointerLeave);
      root.removeEventListener("focusin", onFocusIn);
      root.removeEventListener("focusout", onFocusOut);
      root.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", scheduleMeasure);
      window.cancelAnimationFrame(measureFrame);
      window.cancelAnimationFrame(pointerFrame);
      releaseTimers.forEach((timer) => window.clearTimeout(timer));
      restoreCompareGroups(compareGroups);
      root.style.removeProperty("--motion-chapter-progress");
      delete root.dataset.motionStage;
      delete root.dataset.motionBeat;
      chapters.forEach((chapter) => {
        chapter.style.removeProperty("--motion-beat-progress");
        delete chapter.dataset.motionActive;
      });
      media.forEach((item) => {
        delete item.dataset.motionTactile;
        delete item.dataset.motionActive;
        delete item.dataset.motionPressed;
        delete item.dataset.motionIntent;
      });
      chapterLinks.forEach((link) => {
        link.style.removeProperty("--motion-link-progress");
        delete link.dataset.motionChapterLink;
        delete link.dataset.motionStage;
      });
      chapterRails.forEach((rail) => {
        rail.style.removeProperty("--motion-rail-progress");
        delete rail.dataset.motionChapterRail;
        delete rail.dataset.motionStage;
      });
      chapterTracks.forEach((track) => delete track.dataset.motionChapterTrack);
    };
  }, [effectiveReducedMotion, profile, projectId, scrollY]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ledgers = Array.from(root.querySelectorAll<HTMLElement>(".brand-pavilion__value-ledger"));
    const snapshots = ledgers.flatMap((ledger) => {
      ledger.dataset.motionValueLedger = "";
      const cards = Array.from(
        ledger.querySelectorAll<HTMLElement>(":scope > .brand-pavilion__value"),
      );
      const cardSnapshots = cards.map((card) => ({
        card,
        tabindex: card.getAttribute("tabindex"),
        role: card.getAttribute("role"),
        pressed: card.getAttribute("aria-pressed"),
      }));

      cards.forEach((card, index) => {
        card.dataset.motionValueCard = "";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-pressed", index === 0 ? "true" : "false");
        if (index === 0) card.dataset.motionValueActive = "true";
      });
      ledger.dataset.motionValueIndex = cards.length ? "0" : "";

      return cardSnapshots;
    });

    const activateValue = (card: HTMLElement, announce = false) => {
      const ledger = card.closest<HTMLElement>("[data-motion-value-ledger]");
      if (!ledger) return;
      const cards = Array.from(
        ledger.querySelectorAll<HTMLElement>(":scope > [data-motion-value-card]"),
      );
      const activeIndex = cards.indexOf(card);
      cards.forEach((candidate) => {
        const active = candidate === card;
        candidate.setAttribute("aria-pressed", active ? "true" : "false");
        if (active) candidate.dataset.motionValueActive = "true";
        else delete candidate.dataset.motionValueActive;
      });
      ledger.dataset.motionValueIndex = String(activeIndex);

      if (ledger.scrollWidth > ledger.clientWidth + 8) {
        ledger.scrollTo({
          left: Math.max(0, card.offsetLeft - (ledger.clientWidth - card.clientWidth) / 2),
          behavior: effectiveReducedMotion ? "auto" : "smooth",
        });
      }

      if (announce) {
        const title = card.querySelector("h3")?.textContent?.trim();
        setInteractionAnnouncement(`${title ?? "Brand value"} selected.`);
      }
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const card = target?.closest<HTMLElement>("[data-motion-value-card]");
      if (card && root.contains(card)) activateValue(card, true);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const card = target?.closest<HTMLElement>("[data-motion-value-card]");
      if (!card || !root.contains(card)) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activateValue(card, true);
        return;
      }

      if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        return;
      }

      const ledger = card.closest<HTMLElement>("[data-motion-value-ledger]");
      const cards = ledger
        ? Array.from(ledger.querySelectorAll<HTMLElement>(":scope > [data-motion-value-card]"))
        : [];
      const current = cards.indexOf(card);
      let next = current;
      if (event.key === "Home") next = 0;
      else if (event.key === "End") next = cards.length - 1;
      else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        next = (current + 1) % cards.length;
      } else {
        next = (current - 1 + cards.length) % cards.length;
      }

      event.preventDefault();
      cards[next]?.focus();
      if (cards[next]) activateValue(cards[next], true);
    };

    root.addEventListener("click", onClick);
    root.addEventListener("keydown", onKeyDown);

    return () => {
      root.removeEventListener("click", onClick);
      root.removeEventListener("keydown", onKeyDown);
      ledgers.forEach((ledger) => {
        delete ledger.dataset.motionValueLedger;
        delete ledger.dataset.motionValueIndex;
      });
      snapshots.forEach(({ card, tabindex, role, pressed }) => {
        delete card.dataset.motionValueCard;
        delete card.dataset.motionValueActive;
        if (tabindex === null) card.removeAttribute("tabindex");
        else card.setAttribute("tabindex", tabindex);
        if (role === null) card.removeAttribute("role");
        else card.setAttribute("role", role);
        if (pressed === null) card.removeAttribute("aria-pressed");
        else card.setAttribute("aria-pressed", pressed);
      });
    };
  }, [effectiveReducedMotion, profile, projectId]);

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
      <span
        className="portfolio-motion__sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {interactionAnnouncement}
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
