import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PACKAGE || "playwright");
const base = (process.env.QA_BASE_URL || "http://127.0.0.1:4179").replace(/\/$/, "");
const output = path.resolve(process.env.QA_OUTPUT_DIR || "tmp/work-gallery-qa");
const widths = (process.env.QA_WIDTHS || "390,768,1440").split(",").map(Number);
const motionModes = (process.env.QA_MOTION_MODES || "reduce,no-preference").split(",");
const checkEmptySearch = process.env.QA_EMPTY_SEARCH !== "0";

assert(
  widths.every((width) => Number.isInteger(width) && width > 0),
  "Invalid QA_WIDTHS",
);
assert(
  motionModes.every((mode) => ["reduce", "no-preference"].includes(mode)),
  "Invalid QA_MOTION_MODES",
);

const selectors = {
  root: ".work-gallery",
  cards: "article[data-work-kind]",
  brand: "article[data-work-kind='brand']",
  personal: "article[data-work-kind='personal']",
  image: "[data-project-media]",
};

const expectedSlugs = [
  "nike-no-second-take",
  "polo-ralph-lauren-the-long-match",
  "levis-wear-is-the-record",
  "muji-household-weather",
  "prada-the-quiet-error",
  "zara-the-air-between",
  "uniqlo-comfort-measured",
  "hm-second-sun",
  "afterimage",
  "night-index",
  "public-memory",
  "soft-machine",
  "memory-type",
  "79w",
  "tactile-forecast",
  "tessera-live",
  "field-notes-37",
  "horalis",
  "signal-noise",
  "tidehold",
  "last-letter",
  "backmatter",
  "chroma-tempo",
  "offsort",
  "seamframe",
  "two-shores",
  "selv-00",
  "coldkiln",
];

async function assertNoPageOverflow(page, label) {
  assert.equal(
    await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
    false,
    `${label}: horizontal page overflow`,
  );
}

async function auditCardGeometry(page) {
  return page.locator(selectors.cards).evaluateAll((cards) =>
    cards.map((card) => {
      const title = card.querySelector("h2, h3");
      const media = card.querySelector("[data-project-media]");
      const titleRect = title?.getBoundingClientRect();
      const mediaRect = media?.getBoundingClientRect();
      const overlaps =
        titleRect && mediaRect
          ? titleRect.left < mediaRect.right - 1 &&
            titleRect.right > mediaRect.left + 1 &&
            titleRect.top < mediaRect.bottom - 1 &&
            titleRect.bottom > mediaRect.top + 1
          : null;
      return {
        title: title?.textContent?.trim(),
        missingTitleOrImage: !titleRect || !mediaRect,
        overlaps,
        titleOverflow: title ? title.scrollWidth > title.clientWidth + 1 : true,
        titleHeight: titleRect?.height,
      };
    }),
  );
}

async function decodeVisibleCovers(page) {
  await page.locator(selectors.cards).evaluateAll(async (cards) => {
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= innerHeight) continue;
      const image = card.querySelector(".work-gallery__image-link > [data-project-media] img");
      if (!image)
        throw new Error(`Missing visible cover: ${card.getAttribute("data-work-project")}`);
      await image.decode();
      if (!image.complete || image.naturalWidth === 0) {
        throw new Error(`Undecoded visible cover: ${card.getAttribute("data-work-project")}`);
      }
    }
  });
}

async function screenshotCardRow(page, card, filename) {
  await card.evaluate((element) =>
    window.scrollTo({
      top: Math.max(0, window.scrollY + element.getBoundingClientRect().top - 96),
      behavior: "instant",
    }),
  );
  await decodeVisibleCovers(page);
  await page.mouse.move(0, 0);
  await page.screenshot({ path: path.join(output, filename) });
}

async function checkPreview(page, card, label, reducedMotion) {
  const button = card.getByRole("button", { name: /^Next image — / });
  await button.waitFor();
  await button.scrollIntoViewIfNeeded();
  await card
    .locator(".work-gallery__image-link > [data-project-media] img")
    .evaluate((image) => image.decode());
  assert.equal(await card.getAttribute("data-frame"), "1", `${label}: first frame is the cover`);
  assert.equal(
    await button.getAttribute("aria-pressed"),
    "false",
    `${label}: initial preview state`,
  );
  // The frame attribute is the public visual-state contract. A transition to the
  // alternate must never expose an incomplete/broken image. The final selector
  // is deliberately independent of the route's internal component names.
  await card.evaluate((element) => {
    element.__qaFrameAudit = [];
    element.__qaFrameObserver = new MutationObserver(() => {
      if (element.getAttribute("data-frame") !== "2") return;
      const images = Array.from(element.querySelectorAll("[data-project-media] img"));
      element.__qaFrameAudit.push({
        imageCount: images.length,
        loadedCount: images.filter((image) => image.complete && image.naturalWidth > 0).length,
      });
    });
    element.__qaFrameObserver.observe(element, {
      attributes: true,
      attributeFilter: ["data-frame"],
    });
  });
  await button.click();
  await page.waitForFunction(
    (element) => element.getAttribute("data-frame") === "2",
    await card.elementHandle(),
  );
  assert.equal(await button.getAttribute("aria-pressed"), "true", `${label}: preview selected`);
  const decodeAudit = await card.evaluate((element) => {
    element.__qaFrameObserver?.disconnect();
    return element.__qaFrameAudit;
  });
  assert(decodeAudit.length > 0, `${label}: observed alternate-frame transition`);
  assert(
    decodeAudit.every(
      (sample) => sample.loadedCount === sample.imageCount && sample.imageCount > 0,
    ),
    `${label}: image shown before loading completed`,
  );
  if (reducedMotion) {
    await page.waitForTimeout(250);
    assert.equal(
      await card.getAttribute("data-frame"),
      "2",
      `${label}: reduced motion keeps manual selection`,
    );
    const running = await card.evaluate(
      (element) =>
        element
          .getAnimations({ subtree: true })
          .filter((animation) => animation.playState === "running").length,
    );
    assert.equal(running, 0, `${label}: animation still running under reduced motion`);
  }
  await button.click();
  await page.waitForFunction(
    (element) => element.getAttribute("data-frame") === "1",
    await card.elementHandle(),
  );
  assert.equal(await button.getAttribute("aria-pressed"), "false", `${label}: cover restored`);
}

await mkdir(output, { recursive: true });
// One Chrome process; pages close between scenarios to keep memory bounded.
const browser = await chromium.launch({ headless: true, channel: "chrome" });
const results = [];
let activePage;
try {
  for (const width of widths) {
    for (const reducedMotion of motionModes) {
      const page = await browser.newPage({ viewport: { width, height: 960 }, reducedMotion });
      activePage = page;
      page.setDefaultTimeout(15000);
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      const suffix = `${width}-${reducedMotion}`;
      try {
        await page.goto(`${base}/work`, { waitUntil: "networkidle" });
        await page.locator(selectors.root).waitFor();
        await page.evaluate(() => document.fonts.ready.then(() => undefined));
        await page
          .getByRole("navigation", { name: "Primary navigation", exact: true })
          .getByRole("link", { name: "About Me", exact: true })
          .waitFor();
        assert.equal(await page.locator(selectors.brand).count(), 8);
        assert.equal(await page.locator(selectors.personal).count(), 20);
        await assertNoPageOverflow(page, `Work ${suffix}`);

        const detailHrefs = await page
          .locator(`${selectors.cards} a[href*='/poster-studies/']`)
          .evaluateAll((links) => links.map((link) => new URL(link.href).pathname));
        assert.deepEqual(
          [...new Set(detailHrefs)].sort(),
          expectedSlugs.map((slug) => `/poster-studies/${slug}`).sort(),
          "All 28 distinct project routes retained",
        );
        const geometry = await auditCardGeometry(page);
        assert(
          geometry.every(
            (card) =>
              !card.missingTitleOrImage &&
              !card.overlaps &&
              !card.titleOverflow &&
              card.titleHeight > 0,
          ),
          `Title/image collision or clipped title: ${JSON.stringify(geometry.filter((card) => card.missingTitleOrImage || card.overlaps || card.titleOverflow))}`,
        );
        assert.equal(await page.locator("#brand-projects").count(), 1);
        assert.equal(await page.locator("#personal-projects").count(), 1);
        const order = await page.evaluate(() =>
          Boolean(
            document
              .querySelector("#brand-projects")
              .compareDocumentPosition(document.querySelector("#personal-projects")) &
            Node.DOCUMENT_POSITION_FOLLOWING,
          ),
        );
        assert(order, "Brand section must precede personal section");
        await decodeVisibleCovers(page);
        await page.screenshot({ path: path.join(output, `work-opening-${suffix}.png`) });

        const fullPreviewAudit = width === 1440 && reducedMotion === "reduce";
        if (fullPreviewAudit) {
          // Traverse lazily loaded cards serially. This checks every cover and
          // every alternate without creating concurrent pages or browsers.
          const cards = page.locator(selectors.cards);
          for (let index = 0; index < (await cards.count()); index += 1) {
            const card = cards.nth(index);
            const slug = await card.getAttribute("data-work-project");
            await checkPreview(page, card, `${slug} ${suffix}`, true);
            await assertNoPageOverflow(page, `${slug} ${suffix}`);
          }
          await screenshotCardRow(
            page,
            page.locator(`${selectors.brand}[data-work-project='muji-household-weather']`),
            `work-brand-muji-${suffix}.png`,
          );
          await screenshotCardRow(
            page,
            page.locator(selectors.personal).last(),
            `work-personal-final-row-${suffix}.png`,
          );
        } else {
          await checkPreview(
            page,
            page.locator(selectors.brand).first(),
            `Brand ${suffix}`,
            reducedMotion === "reduce",
          );
          await checkPreview(
            page,
            page.locator(selectors.personal).first(),
            `Personal ${suffix}`,
            reducedMotion === "reduce",
          );
        }
        await page
          .locator("#personal-projects")
          .evaluate((section) => section.scrollIntoView({ block: "start", behavior: "instant" }));
        await decodeVisibleCovers(page);
        await page.screenshot({ path: path.join(output, `work-personal-${suffix}.png`) });

        const openIndex = page.getByRole("button", { name: "Project index", exact: true });
        await openIndex.click();
        const dialog = page.getByRole("dialog");
        await dialog.waitFor();
        const search = dialog.getByLabel("Find a project", { exact: true });
        await search.waitFor();
        assert.equal(await dialog.locator("a[href]").count(), 34, "Index retains all 34 projects");
        const allIndexHrefs = await dialog
          .locator("a[href]")
          .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
        assert.equal(new Set(allIndexHrefs).size, 34, "Index project links must be unique");
        assert(
          allIndexHrefs.every((href) => href && href !== "#"),
          "Index has a placeholder link",
        );
        await search.fill("PRADA");
        await page.waitForFunction(
          () => document.querySelector('[role="dialog"]')?.querySelectorAll("a[href]").length === 1,
        );
        assert.equal(await dialog.getByRole("link", { name: /PRADA/i }).count(), 1);
        await page.screenshot({ path: path.join(output, `work-index-search-${suffix}.png`) });
        await assertNoPageOverflow(page, `Index dialog ${suffix}`);
        if (checkEmptySearch) {
          await search.fill("__qa_no_matching_project__");
          await page.waitForFunction(
            () =>
              document.querySelector('[role="dialog"]')?.querySelectorAll("a[href]").length === 0,
          );
          await dialog.getByText(/^No projects match/).waitFor();
          await page.screenshot({ path: path.join(output, `work-index-empty-${suffix}.png`) });
          await dialog.getByRole("button", { name: "Show all projects", exact: true }).click();
          assert.equal(await search.inputValue(), "", "Empty-state recovery clears search");
        } else {
          await search.fill("");
        }
        await page.waitForFunction(
          () =>
            document.querySelector('[role="dialog"]')?.querySelectorAll("a[href]").length === 34,
        );
        await page.keyboard.press("Escape");
        await dialog.waitFor({ state: "hidden" });
        assert.equal(
          await openIndex.evaluate((button) => document.activeElement === button),
          true,
          "Escape restores index-button focus",
        );

        if (reducedMotion === motionModes[0]) {
          await page.goto(base, { waitUntil: "networkidle" });
          await page.getByRole("link", { name: "About Me", exact: true }).waitFor();
          await page
            .getByRole("button", { name: "Trigger cross animation", exact: true })
            .waitFor();
          assert.equal(
            await page.locator(".portfolio-home").count(),
            0,
            "Home must not be redesigned",
          );
          await assertNoPageOverflow(page, `Unchanged home ${width}`);
        }
        assert.equal(errors.length, 0, errors.join("\n"));
        results.push({
          width,
          reducedMotion,
          brandCards: 8,
          personalCards: 20,
          indexProjects: 34,
          preview: true,
          previewCardsChecked: fullPreviewAudit ? 28 : 2,
          allCoverAndAlternateFramesDecoded: fullPreviewAudit,
          emptySearch: checkEmptySearch,
          focusRestore: true,
          titleCollisions: 0,
          errors,
        });
      } catch (error) {
        if (!page.isClosed()) {
          await page
            .screenshot({ path: path.join(output, `failure-${suffix}.png`) })
            .catch(() => {});
        }
        throw error;
      } finally {
        if (!page.isClosed()) await page.close();
      }
    }
  }
  console.log(JSON.stringify(results, null, 2));
} catch (error) {
  if (activePage && !activePage.isClosed()) {
    await activePage.screenshot({ path: path.join(output, "failure.png") }).catch(() => {});
  }
  throw error;
} finally {
  await browser.close();
}
