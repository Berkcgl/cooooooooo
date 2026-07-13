# Site polish: hero image, logos, hero theme, org section, scroll HUD, Otorite, portrait

Presentation-only fixes across the site. Each is verified in the preview before moving on.

## 1) Homepage hero: use the uploaded network image
Replace the AI-generated `hero-network.jpg` with the newly uploaded glowing blue network-globe image.
- Create a CDN asset pointer from the upload via `lovable-assets` (e.g. `src/assets/hero-network-globe.jpg.asset.json`).
- Point `src/components/home/ScrollZoomHero.tsx` at the new pointer. Adjust the framing/mask so the wide globe reads well behind the centered headline (the image is a wide crop of the top of a glowing sphere, not a square), keeping the scroll-zoom camera push intact.

## 2) Homepage hero: keep it dark even in light theme
The network image is built for a dark backdrop; on the light theme it washes out and text loses contrast.
- In `ScrollZoomHero.tsx`, scope the hero `<section>` to always render dark tokens (add the `dark` class + explicit dark background) so the visual, brand glow, and white headline read correctly regardless of active theme.
- Keep the bottom fade resolving to the section's own (dark) background and ensure a clean transition into the next (light) `About` section. Only the hero is pinned dark.

## 3) Bigger logos in every "Eğitim verdiği bazı kurumlar" strip
`src/components/site/LogoTile.tsx` is the shared tile for the homepage `LogoMarquee`, Masterclass `Organizations`, and the Hero grid — editing it fixes all at once.
- Reduce internal padding (`px-5` → `px-2`) and raise the logo cap (`max-h-8` → `max-h-10`) so each mark fills ~80% of the tile. Keep the white card, border, and fixed bounding box so alignment stays uniform.

## 4) "Sahadan sahaya" → compact Organizations / Brands list
`TeachingMap` currently renders event+org+year cards, duplicating event info shown elsewhere.
- Replace the card grid in `src/components/home/TeachingMap.tsx` with a compact, corporate layout showing only organization/brand names (no events, no years).
- Add a `TEACHING_ORGS` string array in `src/lib/home-data.ts` with the full provided list (Cyber Anatolian Communities, Microsoft / BilgeAdam, Beykoz University, AISecLab, İstinye University, Bahçeşehir University, Maltepe University, Haliç University, ML Career Hole (Devmulti Group), AISecLab.org, Digital Transformation Office – Presidency of Türkiye, Google Developer Student Clubs, Marmara University, Türkiye Youth NGOs Platform, Boğaziçi University, Yıldız Technical University, Karadeniz Technical University, Istanbul Data Lab, BilgincIT Academy, Cisco Networking Academy, Istanbul Medeniyet University, Üsküdar University, Iğdır University, BGA Security, Devnot Summit, Lycée Saint-Joseph, Teknopark İstanbul, Lycée Saint Benoît d'İstanbul).
- Render as a tight, wrapping grid of small bordered name tiles/pills, keeping the existing `SectionHeading`.

## 5) Restore scroll-percentage HUD on the Masterclass page
The bottom-right `SCROLL %` readout only mounts on the homepage.
- Add `<ScrollReadout />` to `src/routes/agentic-ai-masterclass.tsx` (same placement as `src/routes/index.tsx`).

## 6) Otorite section: fewer cards + "Tamamını incele" button
In `src/components/landing/Talks.tsx` (heading "Otorite"), each tab lists the full arrays.
- Cap each tab (Konuşmalar / Sunumlar / Yayınlar) to ~6 via `.slice(0, 6)`.
- Add a "Tamamını incele" button under the list linking to existing subpages: Konuşmalar & Sunumlar → `/speaking`, Yayınlar → `/publications`, using TanStack `Link`.

## 7) Remove the white gradient on Cihan Özhan's portrait
In `src/components/landing/Instructor.tsx`, the portrait overlay uses `bg-gradient-to-t from-ink-900/70` with `text-brand-foreground` text — in dark theme `ink-900` resolves near-white, so a white gradient sits under white text and the name is unreadable.
- Remove that gradient caption overlay so the portrait shows cleanly (name/role already appear in the adjacent heading/body).

## Verification
Headless screenshots in both light and dark themes of: homepage hero (new image), both logo strips, the compact Organizations grid, the Masterclass Otorite section + scroll HUD, and the Instructor portrait — confirming each change is visibly applied and the look stays corporate/professional.
