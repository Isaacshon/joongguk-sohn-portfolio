import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PACKAGE || "playwright");
const base = process.env.QA_BASE_URL || "http://127.0.0.1:4179";
const output = path.resolve("tmp/portfolio-refresh-qa");
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, channel: "chrome" });
const results = [];
let activePage;
try {
  for (const width of (process.env.QA_WIDTHS || "320,390,1440").split(",").map(Number)) {
    const page = await browser.newPage({
      viewport: { width, height: 960 },
      reducedMotion: "reduce",
    });
    activePage = page;
    page.setDefaultTimeout(10000);
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(base, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Trigger cross animation", exact: true }).waitFor();
    await page.getByRole("link", { name: "About Me", exact: true }).waitFor();
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
      false,
      "Home overflow",
    );
    assert.equal(await page.locator(".portfolio-home").count(), 0);
    await page.screenshot({ path: path.join(output, `restored-home-${width}.png`) });
    await page.goto(base + "/work", { waitUntil: "networkidle" });
    await page.locator(".work-studio__display").waitFor();
    assert.equal(await page.getByRole("button", { name: "Index", exact: true }).count(), 0);
    await page.screenshot({ path: path.join(output, `restored-work-${width}.png`) });
    for (const slug of ["hm-second-sun", "zara-the-air-between", "uniqlo-comfort-measured"]) {
      await page.goto(base + "/poster-studies/" + slug, { waitUntil: "networkidle" });
      const rail = page.locator(".brand-pavilion__hero-rail");
      await rail.locator(".brand-mark").waitFor();
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
        false,
        slug + " overflow",
      );
      await page.screenshot({ path: path.join(output, `brand-opening-${slug}-${width}.png`) });
    }
    await page.goto(base + "/poster-studies/nike-no-second-take#attempt", {
      waitUntil: "networkidle",
    });
    const attempt = page.getByRole("group", { name: "Explore the basketball attempt" });
    await attempt.getByRole("button", { name: /Load/ }).click();
    assert.equal(
      await attempt.getByRole("button", { name: /Load/ }).getAttribute("aria-pressed"),
      "true",
    );
    await page.locator('[data-project-media="nike-no-second-take:editorialC"]').first().waitFor();
    await attempt.getByRole("button", { name: /Go again/ }).click();
    assert.equal(
      await attempt.getByRole("button", { name: /Go again/ }).getAttribute("aria-pressed"),
      "true",
    );
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
      false,
      "Nike overflow",
    );
    await attempt.screenshot({ path: path.join(output, `nike-control-${width}.png`) });
    await page.goto(base + "/poster-studies/polo-ralph-lauren-the-long-match", {
      waitUntil: "networkidle",
    });
    const wardrobe = page.getByRole("group", { name: "Explore Polo wardrobe icons" });
    await wardrobe.getByRole("button", { name: "Polo shirts", exact: true }).click();
    assert.equal(
      await wardrobe
        .getByRole("button", { name: "Polo shirts", exact: true })
        .getAttribute("aria-pressed"),
      "true",
    );
    await wardrobe.getByRole("button", { name: "Saddle leather", exact: true }).click();
    assert.equal(
      await wardrobe
        .getByRole("button", { name: "Saddle leather", exact: true })
        .getAttribute("aria-pressed"),
      "true",
    );
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
      false,
      "Polo overflow",
    );
    await wardrobe.screenshot({ path: path.join(output, `polo-control-${width}.png`) });
    await page.locator('[data-gallery-open="tactile"]').first().click();
    const dialog = page.getByRole("dialog");
    await dialog.waitFor();
    assert.equal(
      await dialog.getByRole("group", { name: "Choose a photograph" }).getByRole("button").count(),
      20,
    );
    await dialog.getByRole("button", { name: "Next photograph", exact: true }).click();
    await page.keyboard.press("Escape");
    await dialog.waitFor({ state: "hidden" });
    assert.equal(
      await page.getByRole("complementary", { name: "Primary design reference" }).count(),
      1,
    );
    await page.goto(base + "/poster-studies/muji-household-weather#use", {
      waitUntil: "networkidle",
    });
    const condition = page.getByRole("group", { name: "Choose a daily condition" });
    await condition.getByRole("button", { name: /Fold & prepare/ }).click();
    assert.equal(await page.locator("#muji-use-prepare").isVisible(), true);
    assert.equal(await page.locator("#muji-use-air").isVisible(), false);
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
      false,
      "Muji overflow",
    );
    await condition
      .locator("..")
      .screenshot({ path: path.join(output, `muji-control-${width}.png`) });
    await page.goto(base + "/poster-studies/levis-wear-is-the-record#construction", {
      waitUntil: "networkidle",
    });
    const denim = page.getByRole("group", { name: "Inspect the denim record" });
    await denim.getByRole("button", { name: /Repair/ }).click();
    assert.equal(
      await denim.getByRole("button", { name: /Repair/ }).getAttribute("aria-pressed"),
      "true",
    );
    assert.ok(
      await page
        .locator('#levis-record-frame [data-project-media="levis-wear-is-the-record:editorialB"]')
        .count(),
    );
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
      false,
      "Levis overflow",
    );
    await page
      .locator("#levis-record-frame")
      .screenshot({ path: path.join(output, `levis-control-${width}.png`) });
    if (width === 1440) {
      for (const slug of ["tactile-forecast", "public-memory", "horalis"]) {
        await page.goto(base + "/poster-studies/" + slug, { waitUntil: "networkidle" });
        const bounds = await page.evaluate(() => {
          const title = document
            .querySelector(".personal-world__title-group h1")
            .getBoundingClientRect();
          const picture = document
            .querySelector(".personal-world__opening-visual")
            .getBoundingClientRect();
          return {
            overlap:
              Math.min(title.right, picture.right) - Math.max(title.left, picture.left) > 1 &&
              Math.min(title.bottom, picture.bottom) - Math.max(title.top, picture.top) > 1,
            overflow: document.documentElement.scrollWidth > innerWidth + 1,
          };
        });
        assert.equal(bounds.overflow, false, slug + " overflow");
        assert.equal(bounds.overlap, false, slug + " title-image collision");
        await page
          .locator(".personal-world__opening")
          .screenshot({ path: path.join(output, `opening-${slug}.png`) });
      }
      await page.goto(base + "/poster-studies/chroma-tempo#chroma-tempo-signature-title", {
        waitUntil: "networkidle",
      });
      await page.getByRole("button", { name: /Next beat/ }).click();
      assert.equal(await page.getByRole("button", { name: /Play score/ }).count(), 0);
      await page.emulateMedia({ reducedMotion: "no-preference" });
      await page.getByRole("button", { name: /Play score/ }).click();
      assert.equal(await page.locator('[data-score-running="true"]').count(), 1);
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.locator('[data-score-running="false"]').waitFor();
      assert.equal(await page.getByRole("button", { name: /Play score|Pause score/ }).count(), 0);
    }
    results.push({
      width,
      originalHomeRestored: true,
      originalWorkRestored: true,
      nikeSelector: true,
      poloSelector: true,
      poloGallery: 20,
      errors,
    });
    assert.equal(errors.length, 0, errors.join("\n"));
    await page.close();
  }
  console.log(JSON.stringify(results, null, 2));
} catch (error) {
  if (activePage && !activePage.isClosed()) {
    await activePage.screenshot({ path: path.join(output, "failure.png") });
    console.log(
      await activePage.evaluate(() =>
        [
          ...document.querySelectorAll(
            '[class*="attemptCounter"], [class*="attemptDetail"], [class*="attemptSelector"]',
          ),
        ].map((el) => ({
          class: el.className,
          rect: el.getBoundingClientRect().toJSON(),
          position: getComputedStyle(el).position,
          transform: getComputedStyle(el).transform,
        })),
      ),
    );
  }
  throw error;
} finally {
  await browser.close();
}
