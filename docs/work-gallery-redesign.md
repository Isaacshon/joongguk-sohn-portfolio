# Work gallery — 5 September 2026

## Scope

The user authorized a new art direction for `/work` only. The original home,
navigation, layout shell, services page, project routes and project-detail
experiences are preserved. The work index retains 8 brand studies, 20 personal
projects and 6 client/digital projects; no project was removed.

## Direction

A photographic portfolio with compact captions and varied editorial spreads.
The section is an index into the projects, not a second case-study page:
short labels replace repeated manifestos, images retain their native composition,
and brand marks sit outside photographs. The mobile layout preserves image ratios
and uses narrower portrait frames instead of forcing every image into one crop.

Reference sites inspected for their information architecture (not copied assets):

- [PORTO ROCHA](https://www.portorocha.com/): concise project labels and a distinction between work and updates.
- [Order](https://order.design/): visual work browsing paired with a practical index.
- [Pentagram Work](https://www.pentagram.com/work): clear selected-work and archive hierarchy.

Existing photographs were curated for this section. A separate visual reviewer
checked all 28 covers. Horalis uses its product-detail photograph rather than an
image with inconsistent dial numerals; Tactile Forecast uses its material-study
photograph. Work-local alt text corrects several existing asset descriptions.
Original media files and project-detail data are not altered.

## Interaction and accessibility

- Local sticky section navigation and a searchable 34-project index.
- Accessible dialog with Escape, focus containment and focus return.
- Each photographic card has a manual second-image preview. The cover remains
  visible until the second image loads and decodes; failed loads retain the cover.
- Alternate images use containment where aspect ratios differ; no automatic
  slideshows, timers or continuously running decorative animation.
- Modest entrance and hover transitions; reduced-motion settings suppress them.
- Existing responsive AVIF/WebP sources and lazy loading are reused. No new runtime
  dependency was added.

## Verification

- `scripts/qa-work-gallery.mjs`: 320, 390, 768 and 1440 CSS-pixel widths, each with
  normal and reduced motion. Checked 8/20 card counts, 34 unique index links, title
  collision/overflow, anchor order, search/empty recovery, Escape and focus return.
- At 1440/reduced motion, all 28 covers and 28 alternate images successfully
  decoded; each preview was switched back to its cover.
- `scripts/qa-portfolio-refresh.mjs`: 1440 regression covering the unchanged home,
  brand openings, Nike/Polo/MUJI/Levi's controls, Polo's 20-image gallery, personal
  opening geometry and Chroma Tempo's reduced-motion behavior. Passed.
- Scoped ESLint checks passed. Desktop, tablet, mobile, index-search and middle/end
  gallery screenshots were inspected. No title/image collisions or page overflow
  were detected in the tested Work layouts.
- Production build passed with a 2304 MB Node heap limit after stopping the
  development server. Builds and browser tests were run sequentially.

The unrelated existing services-page edit and all user assets remain untouched.
