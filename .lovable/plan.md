Presentation-only content and layout updates across the homepage, header, `/trainings`, and `/agentic-ai-masterclass`. Each change is verified in the preview (light + dark, desktop + mobile) before finishing.

## 1) Homepage hero text (`src/components/home/ScrollZoomHero.tsx`)
- Remove the line `Offensive AI & Agentic Systems`.
- Move `Cihan Özhan` down into that lower line slot, keeping its current (non-brand) `text-ink-900` color unchanged. Result: a single-name headline sitting where the two-line stack used to be.

## 2) About copy (`src/lib/home-data.ts`)
Replace the three `ABOUT_PARAGRAPHS` with the new wording:
1. "20+ yıldır yazılım, siber güvenlik ve yapay zeka alanlarında çalışan; Offensive AI Security, agentic AI ve otonom sistemler üzerine uzmanlaşmış araştırmacı, mühendis ve girişimciyim."
2. "Yapay zekanın güvenliği ve saldırı yüzeyi üzerine araştırmalar yürütüyor; kamu kurumlarından üniversitelere, savunma sanayiinden global teknoloji şirketlerine kadar yüzlerce kuruma eğitim, danışmanlık ve teknik liderlik sağlıyorum."
3. "İstanbul ve New York arasında; üretim ortamında çalışan agentic AI sistemleri tasarlıyor, güvenliğini sağlıyor ve ölçeklenebilir AI platformları geliştiriyorum."

The tagline ("Yapay zekayı güvenli, otonom ve üretime hazır hale getiriyorum.") stays as-is since no replacement was provided.

## 3) TeachingMap "Sahadan sahaya" (`src/components/home/TeachingMap.tsx` + `home-data.ts`)
- Center-align the chip row and the text inside each chip (`justify-center`, `text-center`).
- In `TEACHING_ORGS`, split `"Microsoft / BilgeAdam"` into two separate entries: `"Microsoft"` and `"BilgeAdam"`.

## 4) Stats on the homepage (`src/components/home/StatCallouts.tsx`)
Currently shows only the first 4 metrics. Show all metrics including the three requested (`250+ Kurumsal Eğitim / Proje / Danışmanlık`, `20+ Yıl Sektör Tecrübesi`, `16+ Yıl Eğitmenlik Tecrübesi`), and fix alignment so the grid stays even (responsive columns that divide the 7 items cleanly, consistent tile heights/dividers).

## 5) Logo links on every "Eğitim verdiği bazı kurumlar" strip
- Add optional `url` to the `Institution` interface in `src/lib/landing-data.ts` and fill each entry's URL (Cumhurbaşkanlığı, Aselsan, Siemens, Yemeksepeti, Turkcell, N11, TUSAŞ, İş Bankası, Akbank, Garanti BBVA, Türk Telekom).
- Update `src/components/site/LogoTile.tsx` to wrap the tile in an external `<a target="_blank" rel="noopener noreferrer">` when `org.url` exists (fallback to the current div otherwise). This covers `LogoMarquee`, `Organizations`, and the Hero grid at once.

## 6) Featured "Öne çıkan çalışmalar" (`src/components/home/Featured.tsx`)
- Cap each column to 6 items (currently 7).
- Give each card title a reserved 2-line height (`line-clamp-2` + `min-h` for two lines) so every card is the same height regardless of title length.

## 7) Header (`src/components/site/SiteHeader.tsx`)
- Rename the header CTA button from `Masterclass` to `AI Masterclasses`, pointing to `/trainings` (internal Link) instead of the masterclass route. Update the mobile menu button the same way.
- Remove the `Eğitimler` nav link from `HOME_LINKS`.

## 8) Trainings page — active vs past (`src/routes/trainings.tsx`)
- Split the program cards into two groups: **Aktif** and **Geçmiş**.
- Agentic AI Masterclass is the only active card, keeping the special highlighted styling (brand border + `brand-soft` background).
- Change its `FLAGSHIP` tag label to `ONLINE & LIVE CLASS`.
- Replace the circular arrow affordance with a wider rectangular button reading `Eğitime Başvur` (links to the masterclass application).
- The other three programs render as past cards (neutral styling, no apply button).

## 9) Masterclass page (`src/components/landing/Hero.tsx`)
- Remove the "Eğitim verdiği bazı kurumlar" logo grid that sits below the promo video block (keep the separate `Organizations` marquee section elsewhere on the page).
- Align the promo video to the right within its column (`ml-auto`) now that the logo block is gone.

## 10) FAQ answer (`src/lib/landing-data.ts`)
Replace the answer for "Eğitim ücreti nedir, taksit seçenekleri var mı?" with:
"Taksit imkanı mevcuttur. Standart eğitim ücreti 40.000 TL'dir; erken kayıt döneminde ücret 35.000 TL'dir. Öğrenciler için fiyat 30.000 TL'dir."

## 11) New pricing section (new `src/components/landing/Pricing.tsx`, inserted in `src/routes/agentic-ai-masterclass.tsx` between `Faq` and `FinalCta`)
- Eyebrow: `FİYAT`; big heading: `Erken Kayıtta Avantajlı Fiyat`.
- Two blocks:
  - **Erken Kayıt** — `40.000 TL` shown struck-through, `35.000 TL` highlighted below.
  - **Öğrenci Kayıt** — `30.000 TL`.
- Styled consistently with existing card/section design tokens.

## 12) Mobile hero polish (`src/components/home/ScrollZoomHero.tsx`)
Adjust framing so the network image and the headline read as one composition on mobile (tune image `object-position`/scale and vertical spacing at small breakpoints) to preserve the premium look, keeping the scroll-zoom intact.

## Verification
Headless screenshots: homepage hero (desktop + mobile, light + dark), About copy, centered TeachingMap, full stats row, logo strips (link behavior), Featured equal-height cards, header CTA, `/trainings` active/past split, masterclass page (video right-aligned, removed logo grid), FAQ, and the new pricing section.

### Technical notes
- `Institution.url` is optional so tiles without a URL still render.
- Trainings grouping uses the existing `featured` flag (active = featured) to avoid new data plumbing; the three non-featured entries become "Geçmiş".
- No backend/business-logic changes — all edits are frontend/presentation.
