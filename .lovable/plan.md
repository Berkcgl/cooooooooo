
# cihanozhan.com — Polish & Content Pass

Eleven scoped fixes across the homepage, subpages, and Masterclass page. All frontend/presentation + content-data only. Each item below is applied and visually verified before moving on.

## 1. Hero neural-network visual (more presence)
`src/components/home/ScrollZoomHero.tsx` — the network image is currently `opacity-70` with an aggressive radial mask fading at 74%. Make it read clearly:
- Raise base opacity, soften the mask fade (extend the visible radius), and add a subtle brand-tinted glow behind it so nodes/lines read on near-black.
- Keep it behind the text (lower z, gradient scrim intact) so it never competes with the headline.
- Regenerate the hero asset as a brighter, higher-contrast abstract network (glowing nodes + brighter connecting lines, dark-optimized, premium/not busy) and replace `src/assets/hero-network.jpg`. Motion stays transform-only (existing GSAP scrub).

## 2. Bottom-right scroll indicator
- `src/components/site/ScrollReadout.tsx`: remove the mouse X/Y coordinate block entirely; keep only `SCROLL nnn%`.
- Reposition so it never collides with the Back-to-Top button (`fixed bottom-6 right-6`). Move the readout up/left (e.g. `bottom-24 right-6` or left side) so the two never overlap; verify at scrolled state where both are visible.

## 3. Reuse the professional photo (About + Experience)
The Masterclass page already uses the real portrait (`src/assets/cihan-ozhan.svg`, via `Instructor.tsx`). Reuse it:
- `src/components/home/About.tsx`: add a portrait to the left column (replacing/【augmenting the tagline block), cropped `object-cover`, rounded, subtle border + soft brand glow — consistent with dark/corporate look.
- `src/routes/experience.tsx`: add the same portrait in the summary section header area.
- Styling: subtle border/ring only, no heavy effects.

## 4. Map section → simple event list
`src/components/home/TeachingMap.tsx`: remove the SVG map, pins, arcs, and `useMapReveal` map-specific bits. Replace with a clean list/grid of location cards where **event name is the title** and **place/org is the description** (plus year). Keep the numbered `SectionHeading`. Drop the now-unused map markup; `TEACHING_LOCATIONS` data reused (may drop x/y usage).

## 5. Institution logos normalized (every logo)
Applied to **both** the homepage marquee (`src/components/home/LogoMarquee.tsx`) and the Masterclass strip (see #10):
- Uniform bounding box: fixed tile height, `max-h-8` (~32–40px) logo, `w-auto`, `object-contain`, consistent padding.
- Every logo on a consistent neutral **white/light card** container regardless of source background, so contrast is even (removes the `dark ? bg-ink-900` branching that made some disappear).
- Even scaling on desktop and mobile (consistent tile sizing + wrap/marquee behavior).

## 6. "Öne çıkan çalışmalar" — much more content + populated archives
Expand `src/lib/landing-data.ts` (and `home-data.ts` where relevant) with the full provided dataset, organized into logical categories:
- **Training programs** (LLM Engineering Bootcamp, ML Engineer, AI Security Engineer) → `TRAININGS`.
- **Courses** (full YouTube/Udemy list, 2010–2025) → new `COURSES` array with year + platform, sortable by year.
- **Books** (T-SQL 2013, Go draft 2018) → `PUBLICATIONS`.
- **Presentations** (full list) → `PRESENTATIONS`.
- **Events/Talks** (full org — date list) → `TALKS`.
- `src/components/home/Featured.tsx`: show **6–8 items per column** instead of 3 (add a Courses column or fold into Trainings; keep 3–4 balanced columns), each with a working "Tümünü gör" link.
- Subpages populated with the complete lists, grouped/ordered by year:
  - `src/routes/trainings.tsx`: programs + full Courses archive (by year).
  - `src/routes/speaking.tsx`: full Events/Talks list (by date).
  - `src/routes/publications.tsx`: Books + full Presentations archive (by year).
- Content is entered verbatim from the provided lists; links reuse existing known URLs where available, otherwise point to the relevant channel (no fabricated deep links).

## 7. Typography — distinctive display font
- Add a strong, corporate-appropriate display font (proposed **Space Grotesk** for headlines) via the existing Google Fonts `<link>` in `src/routes/__root.tsx`; keep **Inter** for body and **JetBrains Mono** for mono/labels.
- `src/styles.css`: add `--font-display` token and apply it to `.display-1`, `.display-2`, and section headings so headlines gain character while body stays clean/readable.

## 8. Header logo — larger (trim padding first)
- Inspect `main-website-logo.svg` viewBox; if it has excess surrounding whitespace, tighten the viewBox so the mark fills its box (re-upload trimmed asset).
- `src/components/site/SiteHeader.tsx`: increase logo from `h-9` to a noticeably larger size (e.g. `h-12` / `h-14` responsive), keeping header height balanced.

## 9. Footer logo — match header
- `src/components/site/SiteFooter.tsx`: switch the import from `cihan-ozhan-logo.svg` to the current `main-website-logo.svg` (same asset + dark-mode treatment as the header), sized consistently.

## 10. Masterclass hero right panel (video + logos)
`src/components/landing/Hero.tsx`:
- Apply the same neutral-card logo normalization from #5 (uniform white tiles, `max-h`, `object-contain`) so no logo disappears in dark mode or blows out in light mode.
- Tidy spacing/alignment of the video block and the logo grid (consistent gaps, aligned max-width, even grid) so it reads intentional, not cramped.
- Optionally reuse a shared `LogoStrip` component so #5 and #10 stay in sync.

## 11. Overall constraint
Every change stays corporate/professional — restrained motion, neutral surfaces, single brand accent, no playful/experimental elements. Serious offensive-AI-security brand tone throughout.

---

### Technical notes
- New/edited data lives in `src/lib/landing-data.ts` (+ small `home-data.ts` tweaks); type-safe arrays with `year`/`platform` for sorting.
- Consider a shared `src/components/site/LogoStrip.tsx` to unify logo rendering across LogoMarquee and Masterclass Hero.
- New display font token in `styles.css`; font loaded via `__root.tsx` head link (no `@import` of remote URLs in CSS).
- Regenerated hero asset via image gen, re-uploaded through the assets CLI; old asset replaced.
- All animations remain transform/opacity; `prefers-reduced-motion` respected; responsive verified on mobile + desktop.
- Verified with typecheck + a headless browser pass (dark and light) confirming each fix is visible.
