# Mobile Performance & Accessibility Fixes

No Turkish text will be changed. Only code, assets, and styles.

## 1. Image optimization

**`cihan-ozhan.svg` (981 KB)** — used in About, Instructor, experience page as a portrait. It's a real SVG (paths, not embedded raster), but overweight from metadata + high-precision paths.
- Run SVGO via `npx svgo` (installed transiently) with default + `removeDimensions`, `cleanupNumericValues` (precision 2), `mergePaths`, `removeMetadata`, `removeComments`, `removeEditorsNSData`.
- Target: <150 KB. If still huge, additionally rasterize to a 800×800 WebP portrait and swap the three imports to the WebP.

**`hero-network-globe.jpg` (1,089 KB)** — used in `ScrollZoomHero.tsx`.
- Add `vite-imagetools` plugin and generate AVIF + WebP + JPEG at 3 widths (768, 1280, 1920).
- Replace the current `<img src={heroNetwork}>` with a `<picture>` element using `srcset`/`sizes` (AVIF → WebP → JPEG fallback).
- Add explicit `width`/`height` attributes.

**All other `<img>` tags** — add explicit `width` and `height` to prevent CLS on:
- `main-website-logo.svg` in `SiteHeader.tsx` and `Nav.tsx`
- `cihan-ozhan-logo.svg` in `Footer.tsx`
- Institution logos in `LogoTile.tsx`
- Portrait imgs in About / Instructor / experience
- `hero-agentic.jpg`, `cta-dark.jpg` wherever used

## 2. Font loading

Currently `__root.tsx` loads Google Fonts CSS via a render-blocking `<link rel="stylesheet">` for Inter + JetBrains Mono + Space Grotesk with many weights.

- Replace with `@fontsource-variable/inter`, `@fontsource-variable/jetbrains-mono`, `@fontsource/space-grotesk` (installed via `bun add`).
- Import them in `src/styles.css` at the top (per Tailwind v4 rules — local package imports are allowed).
- Remove the Google Fonts `<link>` and `preconnect` entries from `__root.tsx`.
- CSS `@font-face` from `@fontsource-variable` already ships with `font-display: swap`.

This eliminates the ~1.2 s render-blocking Google Fonts request and cuts network payload.

## 3. JavaScript payload / code splitting

TanStack Start already has `autoCodeSplitting: true`. The remaining wins:

- Verify no route file **exports** its component function (would defeat auto-split). Grep `src/routes/*.tsx` and remove any `export` from component functions.
- Lazy-load heavy below-the-fold components on `/` and training landings via `React.lazy` + Suspense:
  - `ScrollZoomHero` (uses framer-motion + heavy hooks)
  - `TrainingCalendar`
  - `LogoMarquee`, `TeachingMap`
- Audit `package.json` for unused deps via `bunx knip` (report + prune obviously unused ones only — safe list only).
- Confirm Vite production build minifies (default esbuild min is on; verify `vite.config.ts` doesn't disable it — it doesn't).

## 4. Contrast fix on "Kabul Et"

The `brand` button uses `oklch(0.582 0.224 263.5)` with white text — WCAG contrast ≈ 4.3:1 (borderline fail on small text).

- Darken `--brand` in light theme from `oklch(0.582 0.224 263.5)` to `oklch(0.52 0.22 263.5)` (raises contrast to ~5.5:1 while remaining visually the same blue). Dark-theme value stays where it is (already high contrast on dark bg).

## Files to change

- `src/assets/cihan-ozhan.svg` — optimize in place
- `vite.config.ts` — add `vite-imagetools` via `vite.plugins`
- `src/components/home/ScrollZoomHero.tsx` — `<picture>` + srcset + width/height
- `src/components/home/About.tsx`, `src/components/landing/Instructor.tsx`, `src/routes/experience.tsx` — width/height on portrait
- `src/components/site/SiteHeader.tsx`, `src/components/landing/Nav.tsx`, `src/components/landing/Footer.tsx`, `src/components/site/LogoTile.tsx` — width/height on logos
- `src/routes/__root.tsx` — drop Google Fonts links
- `src/styles.css` — add `@fontsource*` imports at top
- `package.json` (via `bun add`) — add fontsource packages, `vite-imagetools`
- `src/components/home/{LogoMarquee,TeachingMap}.tsx` callsites, `src/routes/trainings.tsx`, training landing pages — wrap heavy sections in `React.lazy` + Suspense
- `src/styles.css` — darken `--brand` light-theme value

## Out of scope

- No Turkish text changes anywhere.
- No layout/design changes beyond width/height attributes and the tiny brand color shift.
