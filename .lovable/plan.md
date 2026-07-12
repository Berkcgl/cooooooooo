# Hero, Institutions, Nav Logo & Form CTA Update

## 1. New institution logos (assets)
Upload the 8 uploaded SVGs as CDN assets via `lovable-assets`, writing `.asset.json` pointers into `src/assets/logos/`:
- **New (3):** `akbank-logo.svg`, `garanti-logo.svg`, `Turktelekom-logo.svg`
- **Revised (4):** `turkcell-logo.svg`, `tusas-logo.svg`, `yemeksepeti-logo.svg`, `isbankasi-logo.svg` (overwrite the existing pointers)
- Upload `main-website-logo.svg` for the nav (item 6).

Then in `src/lib/landing-data.ts`:
- Add imports for the new asset pointers and update revised ones.
- Wire `logo` URLs for **Akbank**, **Garanti Bankası**, **Türk Telekom** so all 11 institutions have real logos.
- Re-check the `dark` flag per logo. The uploaded İş Bankası, TUSAŞ and Türk Telekom variants render on light/color, so most tiles can stay on the normal light card; keep `dark: true` only for any logo that is white/would be invisible on a light tile.

## 2. Normalize logo sizing (item 4 & 5)
In `src/components/landing/Organizations.tsx`, standardize every logo image so file dimensions no longer cause size differences:
- Apply `object-contain` with a fixed `max-h-9` (~36px) and `max-w-[7rem]`, centered, with consistent tile padding.
- Keep equal tile size (`h-16 w-40`). This makes all logos visually balanced regardless of source dimensions. The 3 new logos inherit the same rules automatically.

## 3. Rename headings (item 3)
Change the heading text in **both** places from `Eğitim verdiği kurumlar` to `Eğitim verdiği bazı kurumlar` (exact Turkish, no translation):
- `src/components/landing/Hero.tsx` (the eyebrow above the institution block)
- `src/components/landing/Organizations.tsx` (section heading)

## 4. Hero: logo strip + wider video (items 1 & 2)
In `src/components/landing/Hero.tsx`:
- **Remove** the plain-text `TRUST` name list (Cumhurbaşkanlığı DDO, Microsoft / BilgeAdam, Cisco Academy).
- Replace it with a compact **logo strip** rendered from `INSTITUTIONS`, using the same tile/`object-contain` styling as the Organizations section (a wrapping row of small logo tiles, not the animated marquee). Heading stays `Eğitim verdiği bazı kurumlar`.
- **Video box:** change the right-side container from `aspect-square` to a landscape ratio (`aspect-video`), so it reads as a wider rectangular player. Keep the "Cihan'dan 60 sn" play button + modal behavior intact.
- Place the logo strip below the video block on the right column (or spanning the section) so it sits comfortably in the freed horizontal space.

## 5. Nav logo swap (item 6)
In `src/components/landing/Nav.tsx`, point the existing `<img>` at the new `main-website-logo` asset. Keep the `#top` link, `h-9 w-auto` sizing, alignment, and position unchanged — swap the asset source only. (Footer keeps its current logo unless you want that swapped too.)

## 6. Replace application form with external CTA button (item 7)
In `src/components/landing/FinalCta.tsx`:
- Remove the entire form (fields, validation, `supabase.from("applications").insert`, submitted state, `Field` component) and its Supabase import.
- Replace the right-hand form card with a clean card containing a single prominent button ("Başvuru Yap" / "Hemen Başvur") that links to an **external URL opening in a new tab** (`target="_blank" rel="noopener noreferrer"`). Use `href="/#"` as a placeholder until the real link is provided.
- Keep the left column copy ("Yeni dönem kontenjanı sınırlı…") and the three info cards (Başlangıç, Son Başvuru, Eğitim Günleri) unchanged.
- The `#basvuru` section id and the header/nav "Başvuru Yap" anchors continue to scroll here.

## Technical notes
- The `applications` table, `/auth`, `/admin` routes and `applications.functions.ts` become unused after removing the form. I will leave the backend/table in place (non-breaking) unless you want them removed too — say the word and I'll delete the admin/auth routes and the table in a follow-up.
- All logos referenced by CDN URL via `.asset.json` pointers; no binaries committed to the repo.
- Accessibility preserved: every logo keeps a descriptive `alt`; the CTA button keeps clear label text.
