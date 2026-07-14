# Plan: Hero badge, curriculum overhaul, social link fixes

Frontend-only, scoped to the masterclass landing page and shared data.

## 1. Hero video badge — "Genel Katılım - Kurumsal"

In `src/components/landing/Hero.tsx`, add a small floating text label
overlapping the top edge of the video preview card, near the top-right corner.

- Placement: absolutely positioned on the video wrapper, `top-0` translated up
  so it overlaps the border (roughly `-translate-y-1/2`), `right-4`.
- Style: `text-xs font-medium text-brand` (site brand accent; matches the
  requested "light blue / accent blue" tone using the existing theme token,
  which keeps light/dark consistent — no hard-coded `text-blue-400`).
- No background, border, or icon — plain text only.

## 2. Curriculum — 5 modules, "36+ Saat", no clock/duration UI

**Data (`src/lib/landing-data.ts`):**
- Set `COURSE.modules = 5`. Leave `hours = "36+"`.
- Replace the `MODULES` array with the 5 new modules (NLP, LLMs, Agentic AI,
  AI Production, AI Security), including all the sub-bullets provided. Nested
  bullets (e.g. NLTK sub-items under NLP) are rendered as indented children
  under their parent bullet. `duration` field is dropped from the type.
- Remove `duration` from the `Module` interface.

**Component (`src/components/landing/Curriculum.tsx`):**
- Remove the `Clock` icon import and the `<Clock /> {m.duration}` block inside
  each accordion panel.
- Render nested sub-bullets using a second-level `<ul>` under the parent
  `<li>` so hierarchy (e.g. NLTK → Tokenization/Stemming/…) reads clearly.
- Section heading already reads `{COURSE.modules} Modül, {COURSE.hours} Saat İçerik`
  → automatically becomes "5 Modül, 36+ Saat İçerik" once data is updated.

Module titles/outcomes (verbatim from request):

```text
01 Natural Language Processing (NLP)
02 Large Language Models (LLMs)
03 Agentic AI (LLMs) ve Agentic Design Patterns
04 AI Production
05 AI Security
```

with the exact sub-bullets (and NLTK nested list under NLP) supplied by the user.

## 3. Social links (`src/lib/home-data.ts`)

- Twitter entry: label `"Twitter"` → `"Twitter (X)"`, url →
  `https://x.com/autonomousec`.
- Vimeo entry: url → `https://vimeo.com/livetrainer`. Label stays `"Vimeo"`.
- Remove the `// TODO: doğrula` comments on both since URLs are now confirmed.

## Verification

- Typecheck (`Module` interface no longer has `duration`, so any leftover
  reference would fail the build).
- Headless screenshot pass: hero badge position on desktop + mobile, curriculum
  accordion with nested bullets and no clock row, footer/channel entries
  showing "Twitter (X)".

## Files touched

- `src/components/landing/Hero.tsx` — add floating badge.
- `src/lib/landing-data.ts` — `COURSE.modules`, `MODULES[]`, `Module` type.
- `src/components/landing/Curriculum.tsx` — drop Clock/duration, render nested bullets.
- `src/lib/home-data.ts` — Twitter label/url, Vimeo url.
