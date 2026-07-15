## Plan

### 1. Small content edits

- **`src/components/landing/FinalCta.tsx`** — set `APPLICATION_FORM_URL = "https://forms.gle/CyWJDGHqTjZt4Ze76"` (button already opens in a new tab).
- **`src/lib/home-data.ts`**
  - Replace first entry of `ABOUT_PARAGRAPHS` with the new "20+ yıldır… deeptech girişimcisiyim." text.
  - Append to `CHANNELS`: `{ label: "Web Arşivi", url: "http://web.archive.org/web/20250512103701/http://cihanozhan.com/" }` (footer already maps `CHANNELS` and opens in new tab with matching styling).
- **`src/components/home/ContactCta.tsx`** — replace the subline under "Birlikte çalışalım" with: `"Eğitim, proje, danışmanlık veya işbirliği için ulaşın."`
- **`src/components/home/TeachingMap.tsx`** — replace the `description` under "Sahadan sahaya, kürsüden kürsüye" with: `"Üniversitelerden kamu kurumlarına ve global etkinliklere — eğitim ve konuşma yaptığım kurumlardan bir seçki."`
- **`src/components/landing/Organizations.tsx`** — change the label text to `"Eğitim, proje ve danışmanlık yaptığı bazı kurumlar"`.
- **`src/routes/speaking.tsx`** — change `35+` to `250+` in the PageHero description.

### 2. Hero badge on `/agentic-ai-masterclass`

In `src/components/landing/Hero.tsx`, change the "Genel Katılım - Kurumsal" span:
- Bump size to match "KONTENJAN SINIRLIDIR" eyebrow (`text-sm font-semibold uppercase tracking-wider text-brand`).
- Move it further above the video card top edge (increase upward offset by ~1 line-height) so it visually sits one `<br>` above the image, not overlapping the frame.
- Implementation: swap classes to `absolute right-6 -top-8 md:-top-10 text-sm font-semibold uppercase tracking-wider text-brand` (keeps it separated from the card border line).

### 3. Add 7 new institution logos

The uploads are SVGs whose visible content is a raster image embedded as base64 inside `<image xlink:href="data:image/…">`. To match the existing pattern (real files under `src/assets/logos/` imported via Vite so Vercel serves them without 404), do the following per logo:

New files to create under `src/assets/logos/`:
- `roketsan.svg`, `ssb.svg`, `stm.svg`, `havelsan.svg`, `bitaksi.svg`, `fibabanka.svg`, `trendyol.svg`

Method: copy each `/mnt/user-uploads/<name>-logo.svg` directly to `src/assets/logos/<name>.svg` via `code--copy`. They are real SVG files (with base64 raster payloads inside) and will be bundled by Vite as normal assets — this is exactly the pattern used for the existing embedded-raster logos like `turktelekom.svg` / `cumhurbaskanligi.svg`.

Then in `src/lib/landing-data.ts`:
- Add 7 imports at the top with the other logo imports.
- Append 7 new entries to `INSTITUTIONS` with `name`, `logo`, and `url`:
  - Roketsan → https://www.roketsan.com.tr/tr
  - SSB → https://www.ssb.gov.tr/
  - STM → https://www.stm.com.tr/tr
  - Havelsan → https://www.havelsan.com/tr
  - BiTaksi → https://www.bitaksi.com/tr
  - Fibabanka → https://www.fibabanka.com.tr/
  - Trendyol → https://www.trendyol.com/

The existing marquee (`Organizations.tsx` + `LogoTile.tsx`) automatically picks them up.

### 4. New component: Rolling 3-month training calendar

**File:** `src/components/trainings/TrainingCalendar.tsx` (new)

**Data model** — exported config at top of the file:
```ts
export type CalendarEvent = { title: string; startDate: string; endDate: string; url: string };
export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    title: "Agentic AI Masterclass",
    startDate: "2026-09-15",
    endDate: "2026-10-10",
    url: "/agentic-ai-masterclass",
  },
];
```

**Behavior**
- `windowStart` = first day of `new Date()`'s month, `windowEnd` = last day of the month two months later — recomputed on each render (rolling 3-month window starting from current month).
- Filter `CALENDAR_EVENTS` to those whose `[startDate, endDate]` intersects the window; clamp each event's rendered range to the window edges.
- Render header row = 3 month labels (`{month} {year}` in Turkish locale, e.g. "Ekim 2026") each spanning its own days.
- Grid body = single row of days for the whole window (each day = one CSS grid column, `grid-template-columns: repeat(totalDays, minmax(0,1fr))`). No weekday header labels. Weeks are visually separated with subtle vertical divider lines every 7 days (grid background lines) so it still reads like a calendar without a day-header row.
- Events render as absolutely-positioned pill cards inside the grid, `grid-column: start / span duration`, stacked vertically when they overlap (simple lane assignment).
- Each card shows: title (bold), and the date range formatted in Turkish (`"15 Eylül – 10 Ekim 2026"`, or single-day `"15 Eylül 2026"`).
- Card is a `<Link to={url}>` for internal paths starting with `/`, otherwise `<a href={url}>`, same tab per spec. Hover: `hover:shadow-lg hover:-translate-y-0.5 transition` + border highlight.
- Theming uses existing tokens (`bg-card`, `border-border`, `text-ink-*`, `bg-brand-soft`, `text-brand`). Cards use `bg-brand text-brand-foreground` in both light and dark themes — the project's Tailwind theme already inverts these tokens per mode via `ThemeProvider`, so the component works in both without extra logic. Container: `rounded-2xl border border-border bg-card p-6 md:p-8`.
- Empty state: if no events fall in the window, render nothing (component returns `null`) — per spec, past/future events are handled elsewhere.

**Integration** — in `src/routes/trainings.tsx`, import and render `<TrainingCalendar />` inside `<main>` immediately after `<PageHero />` and before the `<section>` that lists Aktif trainings. Wrap it in a `section` with the same `container-page` spacing pattern.

### Verification

After edits: rely on the auto-run build. Spot-check the preview at `/trainings` (calendar visible with Agentic AI Masterclass bar spanning ~Sep 15 – Oct 10), `/agentic-ai-masterclass` (badge repositioned, CTA link updated, new logos in marquee), and the homepage (about paragraph, contact/teaching sublines, Web Arşivi in footer).

### Technical notes

- SVG files with embedded base64 rasters are treated as static asset files by Vite; importing them via `@/assets/logos/foo.svg` yields a URL string that works identically in dev and production. This avoids the previous `.asset.json` CDN 404 issue on Vercel.
- Date math uses plain `Date` objects and `Intl.DateTimeFormat("tr-TR", { month: "long" })` — no new dependency.
- Lane packing: sort filtered events by `startDate`, place each in the lowest lane whose last event ends before this one starts (O(n²), fine for a handful of events).
