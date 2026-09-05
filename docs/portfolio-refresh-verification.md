# Portfolio refresh — 2026-09-05

## Scope correction requested by the user

The portfolio shell, original home, Work index, navigation and routing are restored exactly to `eda2c71`. The extra `/about` route and new portfolio-home stylesheet have been removed; the original desk remains at `/`. Only the project-detail improvements and their source/QA documentation remain from the refresh. The delivery notes below describe the prior iteration and are superseded for home, Work and navigation. `qa-portfolio-refresh.mjs` now checks the restored shell before exercising the retained project interactions.

Restoration validation: the five restored files match `eda2c71` with no content diff. The updated serial regression passes at 390 and 1440px for the original home and Work markers plus the retained brand controls, Polo's 20-image gallery and project source notes, with no page errors. The restored desktop desk and mobile Work were visually inspected. Project-detail implementation files were not changed by the restoration.

## Project-detail improvements retained after scope correction

- Original portfolio home, Work index and navigation are preserved at their original routes. The temporary portfolio-first home, gallery/index switch and extra About route have been withdrawn.
- One source anchor for each of the 28 design projects. Brand anchors are official brand publications; studio references guide presentation rather than inventing brand values. Public notes only show observed source principles. Proposed directions remain internal in `portfolio-reference-direction.md` and are not claims of completed features.
- H&M, ZARA, UNIQLO and PRADA opening/readability refinements, including visible marks, image-first hierarchy and scoped brand colors. Their layouts remain separate from MUJI, Levi's, Polo and Nike.
- New working controls: Nike attempt frames, Polo wardrobe icons, MUJI daily conditions, Levi's denim details, Afterimage plate registration, Memory Type glyph selection, and Chroma Tempo playback/manual beats.
- An accessible photograph viewer across the personal and brand case studies: keyboard navigation, touch swipe, thumbnails, fit/detail, focus restoration, and visible loading feedback. Polo retains a 20-frame chapter sequence; each personal project retains eight photographs.
- Long introductory rationale is disclosed under project notes; project-specific openings and existing visual systems are retained rather than replaced with one card template.

## Reference inspection

Chrome was used to inspect Pinterest discovery results, Pentagram's work index, COLLINS' San Francisco Symphony case study/gallery, Studio Dumbar's DEMO page, PORTO ROCHA's QUILO page, and Prada Group's FW26 Simple Stories publication. No source artwork was copied into the project. Existing project images were retained.

## Validation of the earlier iteration (before shell restoration)

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
