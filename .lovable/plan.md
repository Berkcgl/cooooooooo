# cihanozhan.com — Unified Redesign

Confirmed direction: **dark-first** theme, **abstract AI/network** scroll-zoom hero, **4 subpages** (talks + events merged). No content rewriting — existing copy in `home-data.ts` / `landing-data.ts` is reorganized and restyled only. Link-index sections trimmed to label + link where purely navigational.

## 1. Sitemap

```text
/                        Homepage — curated, cinematic
/agentic-ai-masterclass  Existing course page (all sections/copy kept, inherits shared shell + tokens)
/trainings               Full course list — Masterclass as flagship card → its own page; + free video series
/speaking                Full talks + events history (TALKS)
/publications            Presentations archive + writing/books (PRESENTATIONS + PUBLICATIONS)
/experience              Skills + timeline + narrative bio — calm editorial style (EXPERTISE, INSTRUCTOR_TIMELINE, ABOUT)
```

Shared **SiteHeader** (persistent across all routes) + **SiteFooter**. Header nav: About · Ventures · Trainings · Speaking · Publications · Experience · Contact, plus the sun/moon theme toggle and the flagship-course CTA. On the homepage, About/Ventures/Contact are in-page anchors; Trainings/Speaking/Publications/Experience route to subpages.

## 2. Homepage section-by-section

Each borrows a reference pattern (labeled →):

1. **Ticker bar** → terminal/monospace marquee: thin top strip, monospace status items separated by `·` (location, role, "son güncelleme"). Pauses on hover, respects reduced-motion.
2. **Hero — scroll-zoom** → award globe/hero zoom: abstract AI/network SVG/canvas visual, GSAP ScrollTrigger `scrub` scales it on scroll (camera push). Identity statement (`PERSON.name` + title) + tagline + one circular arrow CTA. Giant duplicated title as background typography. Corner live scroll-position + cursor-coordinate readout (desktop only).
3. **About** → minimal editorial: portrait-adjacent one-line identity claim, then `ABOUT_PARAGRAPHS` as steady staggered line reveals. Calm, high-trust.
4. **Ventures** → stat-driven feature cards: Safebox / AISecLab / Runbit as numbered cards with hover lift + circular arrow links (`VENTURES`).
5. **Map — scroll-reveal pins** → map-with-cards: stylized custom SVG map (Turkey + New York), pins appear on scroll each with a card (institution, event, year) sourced only from existing copy — İstanbul/New York (`PERSON.location`), Boğaziçi, Google DSC, AI Safety Summit, Cyber Anatolian, Cumhurbaşkanlığı DDO, and corporate `INSTITUTIONS`. Mobile: becomes a scrollable list of location cards (no scroll-hijack).
6. **Stat callouts** → big-number benefit tiles: `METRICS` as oversized count-up figures (300.000+ öğrenci, 20+ yıl, etc.), reusing `useCountUp`.
7. **Trusted-by marquee** → horizontal logo marquee: `INSTITUTIONS` logos scrolling, existing `marquee` keyframe.
8. **Featured band** → curated (not full lists): a handful of standout trainings + talks + publications with a "view all →" link into each subpage.
9. **Flagship course** → feature card: prominent Agentic AI Masterclass block linking to `/agentic-ai-masterclass`.
10. **Contact CTA** → cinematic closing: headline reveal + parallax, `CONTACT` email + channels, one circular arrow CTA.

Section titles use numbered labels (01/02/03…) with a giant duplicated background title, per the portfolio-structure reference. One **circular arrow button** component is reused for every CTA site-wide.

## 3. Light/dark token approach

Both themes share layout, spacing, motion, radius — only color tokens flip. Accent blue `#0A66FF` stays in both (used more sparingly in light). Implemented in `styles.css`: keep `:root` = light, add a `.dark { … }` block (the `dark` custom-variant already exists). Theme applied by toggling `.dark` on `<html>` via a React `ThemeProvider` (in-memory `useState`, no localStorage), default **dark**.

| Token | Dark (default) | Light |
| --- | --- | --- |
| `--background` | near-black `oklch(0.16 0.01 264)` | paper `oklch(0.985 0.003 250)` |
| `--foreground` | off-white `oklch(0.97 0.01 250)` | ink `oklch(0.21 0.012 257)` |
| `--card` | `oklch(0.20 0.015 264)` | `oklch(1 0 0)` |
| `--border` | `oklch(0.30 0.015 264)` | `oklch(0.922 0.004 257)` |
| `--muted-foreground` | `oklch(0.68 0.01 260)` | `oklch(0.5 0.012 257)` |
| `--brand` (accent) | `oklch(0.62 0.20 263)` | `oklch(0.582 0.224 263.5)` |
| `--surface` (cinematic) | deeper `oklch(0.13 0.02 264)` | `oklch(0.21 0.024 264)` |
| `--ink-900…100` | remapped light-on-dark ramp | current ramp |

Corner scroll-indicator + links use `--brand` in both. Terminal ticker leans into the dark aesthetic (monospace, subtle brand accent).

## Technical notes

- **Motion**: existing GSAP + ScrollTrigger + Lenis (`SmoothScrollProvider`). New `useScrollZoom` (scrubbed scale) and `useMapReveal` (staggered pin/card) hooks alongside existing `useReveal`/`useCountUp`. Only `transform`/`opacity` animated. Guards: `prefers-reduced-motion` disables scrubbing/pinning; mobile (`<768px`) drops pinning, cursor readout, and map scroll-trigger (list fallback).
- **Theme**: `ThemeProvider` context + `ThemeToggle` (sun/moon) in `SiteHeader`; wraps app in `__root.tsx`. SSR-safe (default class on `<html>`, no storage read at init).
- **Monospace**: add JetBrains Mono via `<link>` in `__root.tsx` head + `--font-mono` token for ticker/meta labels.
- **Hero visual**: generate one premium abstract neural-network/node-graph asset (dark-optimized) via image gen, uploaded as a Lovable asset.
- **New files**: `ThemeProvider`/`ThemeToggle`, `hooks/useScrollZoom.ts`, `hooks/useMapReveal.ts`, `components/home/Ticker.tsx`, `ScrollZoomHero.tsx`, `TeachingMap.tsx`, `StatCallouts.tsx`, `LogoMarquee.tsx`, `Featured.tsx`, `CircularArrowButton.tsx`, `ScrollReadout.tsx`, and subpage routes `trainings.tsx`, `speaking.tsx`, `publications.tsx`, `experience.tsx`. Extend `home-data.ts` with a `TEACHING_LOCATIONS` array derived from existing copy (no new facts).
- **Edited**: `styles.css` (dark tokens, mono font), `__root.tsx` (ThemeProvider + fonts), `index.tsx` (new homepage composition), `SiteHeader.tsx` (nav + toggle), `agentic-ai-masterclass.tsx` (inherits shared shell/tokens), `sitemap[.]xml.ts` (new routes).
- **Masterclass page**: copy and section order untouched; only wrapped in shared header/footer and re-themed via tokens.

Reply to confirm and I'll build it, or tell me what to adjust.