## Overview

Add a new "Pasif" section to `/trainings` with 6 upcoming trainings, build 6 new detail pages based on the `/agentic-ai-masterclass` template, add participation-type tags on training cards, and make the rolling calendar mobile-friendly.

## 1. Trainings data — `src/lib/home-data.ts`

Extend `Training` type with `status: "active" | "passive" | "past"` and add per-training `meta` including participation type. Update all existing entries; add 6 new entries with `status: "passive"`, each linking to its own internal route:

```text
Agentic AI Masterclass   → status: active   · meta: "Flagship · Genel Katılım / Kurumsal · 36+ saat · Canlı"
AI Red Teaming Masterclass → status: passive · "Genel Katılım / Kurumsal · 36+ saat · 2 gün" → /ai-red-teaming-masterclass
LLM Security & Agentic AI Security → passive · "Kurumsal · 2 gün" → /llm-security-agentic-ai-security
AI / ML Security → passive · "Kurumsal · 2 gün" → /ai-ml-security
Machine Learning Deployment → passive · "Kurumsal · 2 gün" → /machine-learning-deployment
LLM Deployment → passive · "Kurumsal · 2 gün" → /llm-deployment
Savunma Sanayiinde Yapay Zeka Güvenliği → passive · "Kurumsal · 3 gün" → /ai-security-in-defense
LLM Engineering Bootcamp / ML Engineer / AI Security Engineer → status: past (existing)
```

## 2. `/trainings` route — `src/routes/trainings.tsx`

Split into three groups (`active`, `passive`, `past`) and render sections numbered `01 Aktif`, `02 Pasif`, `03 Geçmiş`. The "Pasif" section reuses the exact Aktif card layout (title, description, meta tags, "Eğitime Başvur" CTA) but swaps the accent styling from brand-teal to a muted gold→amber gradient — a new `.card-passive` class (defined in `src/styles.css`) uses `border-amber-500/40`, `bg-gradient-to-br from-amber-50/60 to-yellow-50/30` (light theme), and a thin `bg-gradient-to-r from-yellow-600/70 via-amber-500/70 to-yellow-500/70` accent bar. Star badge label becomes "Kurumsal Program" for passive cards. Add the participation type tag inline in the meta row for all cards (Aktif + Pasif).

## 3. Shared landing page factory — new `src/components/landing/*`

Rather than duplicating six near-identical route files, extract the current landing sections into config-driven components:

- New `src/lib/trainings/` folder with one file per training (`ai-red-teaming.ts`, `llm-security.ts`, `ai-ml-security.ts`, `ml-deployment.ts`, `llm-deployment.ts`, `ai-security-defense.ts`) exporting a `TrainingPageContent` object: `{ title, subtitle, typeTag, curriculumMode: "modules" | "flat", modules/items, footnote?, whoForVariant: "security" | "deployment", faq }`.
- New `src/components/landing/` variants:
  - `HeroCompact.tsx` — hero WITHOUT the video thumbnail block; centers text column on lg (no 2-col split) or shows hero image without the play-button overlay. Uses "EKİPLERE ÖZEL" kicker and per-page `typeTag` in place of "Genel Katılım - Kurumsal".
  - `WhoForVariant.tsx` — takes a `variant` prop, renders the 3 security or 3 deployment personas listed in Task 3e; `NOT_FOR` list unchanged.
  - `CurriculumFlex.tsx` — renders either `MODULES`-style numbered accordion (mode "modules") or a single flowing accordion of items (mode "flat"), with optional italic footnote below.
  - `PricingSimple.tsx` — replaces price table with centered card "Fiyat bilgisi için başvur." + `Başvuru Yap` button pointing to `#basvuru`.
  - `FinalCtaSimple.tsx` — "Son Adım" eyebrow, single line "Yeni dönem eğitim takvimi planlanıyor. İlgilendiğinizi bildirmek için bize ulaşın.", right-side card unchanged with `Başvuru Formunu Aç` → `https://docs.google.com/forms/d/e/1FAIpQLSeDXpFHBnZJpjyq6Jmk3Sd6ZY3-2dDz9kOlnUOQItvt-ffirg/viewform?usp=publish-editor` (target="_blank").
  - `FaqCustom.tsx` — accepts an array of `{q,a}` (each page defines its own 4 questions incl. the fixed "Eğitim ücreti nedir?" → "Eğitim ücreti ve diğer tüm detayları için başvurun.").
- The existing `Metrics`, `WhyNow`, `Instructor` (+ institution strip), `Testimonials`, and `Footer/BackToTop` are reused unchanged.

Six new route files (`src/routes/ai-red-teaming-masterclass.tsx`, `.../llm-security-agentic-ai-security.tsx`, `.../ai-ml-security.tsx`, `.../machine-learning-deployment.tsx`, `.../llm-deployment.tsx`, `.../ai-security-in-defense.tsx`) each import the shared content object and render:

```text
Ticker → SiteHeader → ScrollReadout
main:
  HeroCompact (title, subtitle, kicker="EKİPLERE ÖZEL", typeTag)
  Metrics
  WhyNow
  WhoForVariant (variant)
  Outcomes  (kept from template)
  CurriculumFlex (mode, items, footnote?)
  Instructor (+ INSTITUTIONS strip w/ "Eğitim, proje ve danışmanlık yaptığı bazı kurumlar")
  Testimonials
  FaqCustom (per-page 4 Q&A)
  PricingSimple
  FinalCtaSimple
SiteFooter → BackToTop
```

Each route sets its own `head()` with a title/description derived from the training name.

Curriculum content per page comes verbatim from Task 3g in the request (module structures preserved: Page 1 = 15 numbered modules with nested bullets; Page 6 = 7 numbered modules; Pages 2/3/4/5 = flat item lists with nested detail groups).

## 4. Mobile calendar — `src/components/trainings/TrainingCalendar.tsx`

Add a `useIsMobile()` branch. On mobile:

- Render one month at a time from the same rolling 3-month window (`windowStart` + `monthOffset`, default 0).
- Header shows a single month label centered between chevron-left / chevron-right buttons (lucide `ChevronLeft`, `ChevronRight`).
- `ChevronLeft` disabled at `monthOffset === 0` (current month), `ChevronRight` disabled at `monthOffset === 2`.
- Reuse the existing lane-packing and event-card rendering, scoping `totalDays`/`windowStart` to the visible month's start and its `daysBetween(first, last)` days; events partially outside the visible month are clipped by the same clamping used today.
- Desktop layout unchanged.

## 5. Also (small copy touch-up)

Keep the previous label "Eğitim, proje ve danışmanlık yaptığı bazı kurumlar" on the shared Instructor institution strip so it appears on both existing and new pages.

## Files touched

- `src/lib/home-data.ts` — Training type + 6 new entries + status field
- `src/lib/trainings/*.ts` — 6 new content configs
- `src/routes/trainings.tsx` — 3 groups + tag-row update
- `src/routes/ai-red-teaming-masterclass.tsx`, `llm-security-agentic-ai-security.tsx`, `ai-ml-security.tsx`, `machine-learning-deployment.tsx`, `llm-deployment.tsx`, `ai-security-in-defense.tsx` — new
- `src/components/landing/HeroCompact.tsx`, `WhoForVariant.tsx`, `CurriculumFlex.tsx`, `PricingSimple.tsx`, `FinalCtaSimple.tsx`, `FaqCustom.tsx` — new
- `src/components/trainings/TrainingCalendar.tsx` — mobile single-month view + chevrons
- `src/styles.css` — passive card accent utility (if needed beyond Tailwind classes)

No changes to backend, auth, or existing masterclass page content.
