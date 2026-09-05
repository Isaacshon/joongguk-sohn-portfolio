# Portfolio refresh — 2026-09-05

## Delivered

- Portfolio-first home with five selectable projects, a second-frame control, and direct case-study links. The original interactive desk is preserved at `/about`.
- Work gallery and compact index, eight brand projects first, twenty personal projects next, and existing applied client work retained. Mobile brand rail has both native swipe and visible navigation buttons.
- One source anchor for each of the 28 design projects. Brand anchors are official brand publications; studio references guide presentation rather than inventing brand values. Public notes only show observed source principles. Proposed directions remain internal in `portfolio-reference-direction.md` and are not claims of completed features.
- H&M, ZARA, UNIQLO and PRADA opening/readability refinements, including visible marks, image-first hierarchy and scoped brand colors. Their layouts remain separate from MUJI, Levi's, Polo and Nike.
- New working controls: Nike attempt frames, Polo wardrobe icons, MUJI daily conditions, Levi's denim details, Afterimage plate registration, Memory Type glyph selection, and Chroma Tempo playback/manual beats.
- An accessible photograph viewer across the personal and brand case studies: keyboard navigation, touch swipe, thumbnails, fit/detail, focus restoration, and visible loading feedback. Polo retains a 20-frame chapter sequence; each personal project retains eight photographs.
- Long introductory rationale is disclosed under project notes; project-specific openings and existing visual systems are retained rather than replaced with one card template.

## Reference inspection

Chrome was used to inspect Pinterest discovery results, Pentagram's work index, COLLINS' San Francisco Symphony case study/gallery, Studio Dumbar's DEMO page, PORTO ROCHA's QUILO page, and Prada Group's FW26 Simple Stories publication. No source artwork was copied into the project. Existing project images were retained.

## Validation

- Work review at 390, 768 and 1440px: 28 design cards, 28 index rows, selection and mobile rail controls, no horizontal page overflow.
- Twenty personal project routes at 390 and 1440px: eight unique images each, no broken loaded images or horizontal page overflow.
- Four legacy brand routes at 320, 390 and 1440px: opening/body readability, no loaded image failures, no overflowing headings.
- Final serial regression at 320, 390 and 1440px: home frame switching and image decode, H&M/ZARA/UNIQLO header marks, Nike/Polo/MUJI/Levi's controls, Polo 20-image viewer, Escape/keyboard navigation and source notes. No page errors.
- Specific Tactile Forecast, Public Memory and Horalis title/image collision checks at 1440px.
- Chroma Tempo switches between manual reduced-motion mode and user-started playback, including a live operating-system preference change.
- Cross-review removed stale concept captions from the brand gallery, removed public unimplemented planning prose, and renamed the home alternate scene control to accurately describe its action.
- Targeted ESLint passes. Repository-wide TypeScript checking still reports two pre-existing errors outside the changed files: the unreachable `text` mark branch in `BrandMark.tsx` and a timer type in `sidequest.tsx`. This is not a claim of a clean repository-wide type check.

`scripts/qa-portfolio-refresh.mjs` runs serially against `QA_BASE_URL` (defaults to port 4179). Set `PLAYWRIGHT_PACKAGE` to an installed Playwright package and optionally `QA_WIDTHS`. Browser processes close on success and failure. Screenshots are local QA outputs under `tmp/portfolio-refresh-qa`, not production assets.

## Scope boundaries

No new image generation, copied campaign photography, account changes, paid dependencies, or analytics changes in this refresh. Fictional/unofficial brand-project notices remain. Unrelated local edits to `src/routes/services.tsx` are preserved separately.
