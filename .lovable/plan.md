# Plan: WhyNow cleanup, free videos, KVKK page & cookie banner

Four frontend-only changes. No backend, no changes to unrelated copy.

## 1. "NEDEN ŞİMDİ" — remove the percentage/stat numbers

In `src/components/landing/WhyNow.tsx`, stop rendering the big `c.stat` number
(`%75`, `%40`, `1M+`) and its styling. Keep each card's title + body and the
grid layout. Add a small neutral top accent (a short brand-colored rule) so the
cards don't look empty where the number was.

`src/lib/landing-data.ts`: leave the `WHY_NOW` array as-is (just stop consuming
`.stat`) to avoid touching data other components might reference — the `stat`
field simply goes unused.

## 2. "Ücretsiz eğitimlerle başlayın" — replace with the 6 new videos

In `src/lib/landing-data.ts`, replace the `FREE_VIDEOS` array with the six
provided YouTube videos (stored as `watch?v=` URLs so the existing
`youtubeThumb()` thumbnail logic keeps working). Real fetched titles, upload
dates and source:

| Title | Meta | URL |
|---|---|---|
| Prompt Mühendisliği Yol Haritası | 2025 · YouTube | watch?v=OyBpfOKgpwo |
| Python Mühendisliği Yol Haritası | 2025 · YouTube | watch?v=NfduR0QV-Gk |
| Yapay Zeka Mühendisliği Yol Haritası | 2025 · YouTube | watch?v=O3W_QkjI2yw |
| Python Programlama Eğitimi (Hızlandırılmış) | 2025 · YouTube | watch?v=w9QLH4pQd7o |
| Uygulamalı Derin Öğrenme (Applied Deep Learning) | 2025 · YouTube | watch?v=Fqa2A-TSI80 |
| Python ile Fonksiyon/Metot Kullanımı | 2021 · YouTube | watch?v=SbI5UGf8DMw |

`src/components/landing/FreeLibrary.tsx` needs no structural change — it already
renders thumbnail cards in a responsive `sm:grid-cols-2 lg:grid-cols-3` grid
(matches the site's card design and gives the requested consistent sizing).
This replaces the raw `<iframe>` embeds with themed, click-to-YouTube cards that
fit the existing layout. If you specifically want inline playable iframes
instead of thumbnail cards, say so and I'll switch the card to a 16:9 iframe.

## 3. New page: "Gizlilik Politikası" at `/gizlilik-politikasi`

Create `src/routes/gizlilik-politikasi.tsx` (TanStack file route → URL
`/gizlilik-politikasi`), following the existing route pattern:

- `head()` with page-specific `title` / `description` / `og:*` meta.
- Reuse site chrome: `Ticker`, `SiteHeader`, `SiteFooter` (same as other pages),
  wrapped in `<main>` with the site's `container-page` width and prose spacing.
- Render the full KVKK text provided (aydınlatma metni + açık rıza metni) as
  proper JSX headings/paragraphs/lists using existing typography tokens
  (`display-2`, `text-ink-900/700`, etc.). No `dangerouslySetInnerHTML`.
- Add a top page heading "Gizlilik Politikası (KVKK)".

Add the sitemap entry in `src/routes/sitemap[.]xml.ts` for the new slug.

## 4. Footer link to the privacy page

In `src/components/site/SiteFooter.tsx` (the footer used on every current page),
add a "Gizlilik Politikası" `<Link to="/gizlilik-politikasi">` alongside the
copyright line, styled like the existing footer links. (`landing/Footer.tsx`
is unused, so it's left alone.)

## 5. Session-only cookie consent banner (all pages)

New `src/components/site/CookieConsent.tsx`, mounted once globally in
`src/routes/__root.tsx`'s `RootComponent` so it appears on every route
including the masterclass page.

**Behavior**
- Session-only React state (module-level flag or `sessionState`) — no
  localStorage, no real cookie logic. Once "Kabul Et" or "Reddet" is clicked,
  hide for the rest of the session.
- Appears ~600ms after mount with a calm fade + slight slide-up
  (reuse `animate-fade-in` / existing motion tokens, no bounce).

**Layout / position**
- Desktop: compact fixed rectangle in the **bottom-left** corner (to stay clear
  of the bottom-right `BackToTop` button + `ScrollReadout`). Alternatively keep
  it bottom-right and push `BackToTop`/`ScrollReadout` up while visible — I'll go
  with bottom-left as the simpler, non-overlapping option unless you prefer the
  push-up approach.
- Mobile: full-width bar anchored to the bottom edge.
- `z-index` below nothing critical but above page content; doesn't block the
  page (not a modal overlay).

**Content**
- Headline: "Çerez Tercihleri"
- One sentence: site uses cookies to improve experience and analyze traffic,
  with "Gizlilik Politikası" linking to `/gizlilik-politikasi`.
- Primary "Kabul Et" button (`variant="brand"`) + secondary "Reddet" button
  (`variant="brandOutline"`), matching existing CTA styles.
- Optional single small shield/cookie lucide icon, nothing more.

**Design**
- Uses `bg-card`, `border-border`, rounded corners, `shadow-lg` — same elevation
  language as other floating UI. All colors via theme tokens (works in
  light/dark). Visually quiet.

## Technical notes
- All work is in `src/routes/`, `src/components/`, and `src/lib/landing-data.ts`.
- New route file created before any `<Link to="/gizlilik-politikasi">` is added,
  so the type-safe router/build stays green.
- Verify light + dark rendering and mobile/desktop banner behavior with a
  headless screenshot pass.
