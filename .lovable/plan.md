# Update institution logos ("Eğitim verdiği kurumlar")

Replace the 10 non-Aselsan logos with your new uniform (108×48, white-background) SVGs. Aselsan is left untouched as requested.

Both places that render this strip — the homepage `LogoMarquee` and the Masterclass page `Organizations` — read from a single list (`INSTITUTIONS` in `src/lib/landing-data.ts`), so updating that one source fixes every occurrence at once.

## Logo mapping
- 1.svg → İş Bankası
- 2.svg → Yemeksepeti
- 3.svg → Turkcell
- 4.svg → Garanti Bankası
- 5.svg → TUSAŞ (TEI)
- 6.svg → Türk Telekom
- 7.svg → Akbank
- 8.svg → Cumhurbaşkanlığı
- 9.svg → Siemens
- 10.svg → n11

## Steps
1. Create 10 new CDN asset pointers from the uploaded SVGs via `lovable-assets`, writing each to `src/assets/logos/<brand>.svg.asset.json` (overwriting the existing pointers for the brands that already had one).
2. Update `src/lib/landing-data.ts`:
   - Point every non-Aselsan import to the `.svg.asset.json` pointer. Three brands currently import PNGs (`cumhurbaskanligi.png`, `siemens.png`) or a mixed source — switch these to the new `.svg` pointers.
   - Remove now-unused old pointer files (`cumhurbaskanligi.png.asset.json`, `siemens.png.asset.json`, `isbankasi.png.asset.json`, `turkcell.webp.asset.json`) and delete their CDN objects.
   - Since every new logo has a baked-in white background, drop the `dark: true` flags (Turkcell, İş Bankası, Garanti) so all tiles render consistently.
3. Verify with a headless screenshot of both the homepage strip and the Masterclass `Organizations` strip that all 11 logos (10 new + Aselsan) read cleanly and at uniform size in both light and dark themes.

## Technical notes
- `LogoTile` (homepage) already places every logo on a neutral white card, so the new white-background SVGs fit without change.
- `Organizations.tsx` (Masterclass) uses the `dark` flag to pick a dark tile; removing the flag makes all logos sit on the standard white/card tile — appropriate now that the marks carry their own white background.
- These SVGs embed their artwork as masked base64 PNGs (no external `<use>` refs), so they render correctly as `<img src>`.
- No layout/animation changes; only data + asset pointers change.
