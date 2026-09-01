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

const stageSequences = {
  "work-index": ["scan", "enter", "compare", "open"],
  hm: ["thread", "remake", "handoff", "return"],
  zara: ["arrival", "look", "detail", "finale"],
  uniqlo: ["rest", "walk", "commute", "layer"],
  prada: ["observe", "reframe", "ritual", "return"],
  muji: ["subtract", "organise", "use", "rest"],
  levis: ["new", "worn", "repaired", "passed-on"],
  polo: ["morning", "field", "city", "clubhouse"],
  nike: ["attempt", "contact", "recovery", "again"],
  "press-archive": ["collect", "register", "misalign", "publish"],
  "sensory-editorial": ["sense", "sample", "translate", "release"],
  "public-signal": ["notice", "route", "gather", "broadcast"],
  "product-ritual": ["need", "make", "use", "return"],
  "evidence-infrastructure": ["source", "index", "connect", "verify"],
} as const satisfies Record<MotionProfile, readonly [string, string, string, string]>;

function includesAny(value: string, terms: readonly string[]) {
  return terms.some((term) => value.includes(term));
}

export function resolveMotionStage(profile: MotionProfile, target: HTMLElement, index: number) {
  const hint = `${target.id} ${target.dataset.motionRole ?? ""}`.toLowerCase();

  switch (profile) {
    case "nike":
      if (includesAny(hint, ["attempt", "opening", "launch"])) return "attempt";
      if (hint.includes("contact")) return "contact";
      if (hint.includes("recovery")) return "recovery";
      if (includesAny(hint, ["again", "next", "return"])) return "again";
      break;
    case "polo":
      if (includesAny(hint, ["morning", "opening", "introduction"])) return "morning";
      if (includesAny(hint, ["field", "stable"])) return "field";
      if (hint.includes("city")) return "city";
      if (includesAny(hint, ["club", "evening", "closing"])) return "clubhouse";
      break;
    case "levis":
      if (includesAny(hint, ["new", "opening", "introduction", "origin"])) return "new";
      if (hint.includes("wear")) return "worn";
      if (hint.includes("repair")) return "repaired";
      if (includesAny(hint, ["pass", "handoff", "closing"])) return "passed-on";
      break;
    case "muji":
      if (includesAny(hint, ["object", "subtract", "opening"])) return "subtract";
      if (includesAny(hint, ["organise", "room"])) return "organise";
      if (hint.includes("use")) return "use";
      if (includesAny(hint, ["rest", "together", "closing"])) return "rest";
      break;
    case "zara":
      if (includesAny(hint, ["arrival", "atmosphere", "opening"])) return "arrival";
      if (includesAny(hint, ["look", "silhouette"])) return "look";
      if (includesAny(hint, ["detail", "material", "edit"])) return "detail";
      if (includesAny(hint, ["finale", "stillness", "window", "closing"])) return "finale";
      break;
    case "uniqlo":
      if (includesAny(hint, ["rest", "everyday-need", "opening"])) return "rest";
      if (includesAny(hint, ["walk", "lifewear"])) return "walk";
      if (includesAny(hint, ["commute", "useful-standard", "engineer"])) return "commute";
      if (includesAny(hint, ["layer", "everyday-again", "closing"])) return "layer";
      break;
    case "prada":
      if (includesAny(hint, ["observe", "observation", "opening"])) return "observe";
      if (includesAny(hint, ["reframe", "contradiction", "recontextualization"])) {
        return "reframe";
      }
      if (includesAny(hint, ["ritual", "object", "method", "culture"])) return "ritual";
      if (includesAny(hint, ["return", "quiet-error", "closing"])) return "return";
      break;
  }

  return stageSequences[profile][index % stageSequences[profile].length];
}

type AttributeSnapshot = {
  name: string;
  value: string | null;
};

export type MotionCompareGroup = {
  element: HTMLElement;
  media: HTMLElement[];
  attributes: AttributeSnapshot[];
  scrubStyle: string;
};

const interactiveSelector = "a, button, input, select, textarea, [contenteditable='true']";

function comparisonLabel(group: HTMLElement) {
  const section = group.closest<HTMLElement>("section[id]");
  const heading = section?.querySelector<HTMLElement>("h2, h3");
  const context = heading?.textContent?.trim().replace(/\s+/g, " ");

  return `${context ? `${context}. ` : ""}Media comparison. Use Left and Right arrow keys to compare.`;
}

export function prepareCompareGroups(root: HTMLElement, media: readonly HTMLElement[]) {
  const siblingsByParent = new Map<HTMLElement, HTMLElement[]>();

  media.forEach((item) => {
    const parent = item.parentElement;
    if (!parent || parent === root) return;
    const siblings = siblingsByParent.get(parent) ?? [];
    siblings.push(item);
    siblingsByParent.set(parent, siblings);
  });

  return Array.from(siblingsByParent.entries())
    .filter(([, items]) => items.length >= 2)
    .map(([element, items]) => {
      const trackedAttributes = [
        "data-motion-compare",
        "data-motion-counter",
        "data-motion-engaged",
        "data-motion-intent",
        "data-motion-active-index",
        "data-motion-locked",
        "tabindex",
        "role",
        "aria-label",
      ];
      const attributes = trackedAttributes.map((name) => ({
        name,
        value: element.getAttribute(name),
      }));
      const scrubStyle = element.style.getPropertyValue("--motion-scrub-position");

      element.dataset.motionCompare = "";
      element.dataset.motionCounter = `01 / ${String(items.length).padStart(2, "0")}`;
      element.style.setProperty("--motion-scrub-position", "0%");

      if (!element.matches(interactiveSelector) && !element.querySelector(interactiveSelector)) {
        if (!element.hasAttribute("tabindex")) element.tabIndex = 0;
        if (!element.hasAttribute("role")) element.setAttribute("role", "group");
        if (!element.hasAttribute("aria-label")) {
          element.setAttribute("aria-label", comparisonLabel(element));
        }
      }

      return { element, media: items, attributes, scrubStyle };
    });
}

export function compareGroupForTarget(
  target: Element | null,
  groups: readonly MotionCompareGroup[],
) {
  if (!target) return undefined;
  const element = target.closest<HTMLElement>("[data-motion-compare]");
  return groups.find((group) => group.element === element);
}

export function setCompareProgress(
  group: MotionCompareGroup,
  progress: number,
  intent: "scroll" | "pointer" | "touch" | "keyboard",
) {
  const bounded = Math.min(1, Math.max(0, progress));
  const index = Math.min(group.media.length - 1, Math.floor(bounded * group.media.length));

  group.element.dataset.motionEngaged = "true";
  group.element.dataset.motionIntent = intent;
  group.element.dataset.motionActiveIndex = String(index);
  group.element.dataset.motionCounter = `${String(index + 1).padStart(2, "0")} / ${String(
    group.media.length,
  ).padStart(2, "0")}`;
  group.element.style.setProperty("--motion-scrub-position", `${(bounded * 100).toFixed(2)}%`);
  group.media.forEach((item, itemIndex) => {
    if (itemIndex === index) item.dataset.motionActive = "true";
    else delete item.dataset.motionActive;
  });

  return index;
}

export function clearCompareProgress(group: MotionCompareGroup, unlock = false) {
  delete group.element.dataset.motionEngaged;
  delete group.element.dataset.motionIntent;
  delete group.element.dataset.motionActiveIndex;
  if (unlock) delete group.element.dataset.motionLocked;
  group.element.style.setProperty("--motion-scrub-position", "0%");
  group.media.forEach((item) => delete item.dataset.motionActive);
}

export function restoreCompareGroups(groups: readonly MotionCompareGroup[]) {
  groups.forEach((group) => {
    group.media.forEach((item) => delete item.dataset.motionActive);
    group.attributes.forEach(({ name, value }) => {
      if (value === null) group.element.removeAttribute(name);
      else group.element.setAttribute(name, value);
    });
    if (group.scrubStyle) {
      group.element.style.setProperty("--motion-scrub-position", group.scrubStyle);
    } else {
      group.element.style.removeProperty("--motion-scrub-position");
    }
  });
}
