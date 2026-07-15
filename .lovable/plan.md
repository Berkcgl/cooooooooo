
## 1. Per-training application form URLs

Currently every training page uses a single hardcoded Google Form URL in `FinalCtaSimple.tsx`. Make it per-page.

- Add `applyFormUrl: string` to `TrainingPageContent` in `src/lib/trainings-content.ts` and set it for all 6 configs:
  - `ai-red-teaming-masterclass` → `https://forms.gle/mW3BLoqTJPYvfZm66`
  - `llm-security-agentic-ai-security` → `https://forms.gle/JPgYTeSnrgMrkavi7`
  - `ai-ml-security` → `https://forms.gle/rrS2fhGZWCASJbuA6`
  - `machine-learning-deployment` → `https://forms.gle/eRq57FPJJZhmjDyN9`
  - `llm-deployment` → `https://forms.gle/4gejKhPf8gChDtoM9`
  - `ai-security-in-defense` → `https://forms.gle/Uf7sc6YU51e1at1w5`
- `FinalCtaSimple` accepts `applyFormUrl` prop; `TrainingLanding` forwards `content.applyFormUrl`. The main `/agentic-ai-masterclass` page keeps its current form URL (unchanged).

## 2. Remove hero image for Kurumsal pages

`HeroCompact` currently renders a right-column image (`hero-agentic.jpg`) with a floating `typeTag` label.

- Add a `showImage?: boolean` prop (default `true`) to `HeroCompact`.
- When `false`: drop the image column, switch container from a 2-column grid to a single centered column, and render `typeTag` as an inline eyebrow-style chip above/below the title so it stays visible.
- `TrainingLanding` passes `showImage={false}` for every "Kurumsal" page (all 6 passive trainings). The primary `/agentic-ai-masterclass` page is unaffected.

## 3. Split flat curricula into modules

Four pages currently use `curriculumMode: "flat"` (`llm-security-agentic-ai-security`, `ai-ml-security`, `machine-learning-deployment`, `llm-deployment`) which renders a single unnumbered list. Convert each into `curriculumMode: "modules"` where every top-level `<li>` becomes its own numbered `Module`:

- Plain-string bullet → `{ number: "NN", title: bullet, outcomes: [] }` (empty outcomes render as a title-only accordion item with no bullets underneath).
- Nested bullet (`{ text, children }`) → `{ number: "NN", title: text, outcomes: children }`.

This is a data-shape transformation only; no changes needed to `CurriculumFlex.tsx` since it already supports `modules` mode. Where `outcomes` is empty, `CurriculumFlex` will render the accordion header with no body content — small tweak inside `CurriculumFlex` to skip rendering the `<ul>` when `outcomes.length === 0` so the accordion collapses cleanly.

The AI Red Teaming Masterclass and AI Security in Defense pages already use `modules` and are unchanged.

## 4. Softer yellow for Pasif cards

In `src/routes/trainings.tsx` inside `FeaturedTrainingCard`, retune the `passive` tone so the palette matches the softness of the active (blue/brand) card:

- Border: `border-amber-300/50` (was `amber-500/40`)
- Background: `bg-amber-50/40 dark:bg-amber-500/5` — drop the multi-stop gradient
- Accent top bar: single soft `bg-amber-300/60` (no gradient)
- Badge: `bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-200`
- CTA button: `bg-amber-400 hover:bg-amber-400/90 text-amber-950` (softer than the current saturated `amber-500`)

Only visual tokens change; layout, sizing, copy and behavior stay identical.

## 5. Calendar 16:9 height on desktop and mobile

`TrainingCalendar` currently grows in height as event cards stack. Constrain the events-grid area (not the header/toolbar) to a `aspect-[16/9]` box on both desktop (3-month row) and mobile (single month):

- Wrap the month-columns container in a `relative aspect-[16/9]` div.
- Inner scroll area becomes `absolute inset-0 overflow-y-auto` so extra events scroll inside the fixed-ratio box.
- Existing 3-columns-desktop / 1-column-mobile logic and navigation chevrons stay.

I'll verify the ratio renders sensibly at the current widths and adjust to `aspect-[16/7]` only if 16:9 is visually too tall.

## Files to change

- `src/lib/trainings-content.ts` — add `applyFormUrl`, convert 4 flat configs to module configs.
- `src/components/landing/FinalCtaSimple.tsx` — accept `applyFormUrl` prop.
- `src/components/landing/TrainingLanding.tsx` — forward `applyFormUrl` and pass `showImage={false}` to hero.
- `src/components/landing/HeroCompact.tsx` — support image-less layout.
- `src/components/landing/CurriculumFlex.tsx` — hide outcomes list when empty.
- `src/routes/trainings.tsx` — soften passive card palette.
- `src/components/trainings/TrainingCalendar.tsx` — fix events area to 16:9 with internal scroll.
