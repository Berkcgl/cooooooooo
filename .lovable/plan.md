# Update Pass — Logos, Photo, Content & Form Backend

## 1. Name logo everywhere (`logo_name.svg`)

- Upload `logo_name.svg` as a CDN asset (`lovable-assets`).
- **Nav** (`Nav.tsx`): replace the "CÖ" blue square + "Cihan Özhan" text with the name-logo image (kept in the `#top` link, sized to nav height).
- **Footer** (`Footer.tsx`): replace the "CÖ" square + text with the same logo.

## 2. Instructor photo (`co.svg`)

- Upload `co.svg` as a CDN asset.
- **Instructor** (`Instructor.tsx`): replace the "CÖ" initials placeholder block with the real photo (object-cover, keeps the name/role overlay).
- Delete the caption: **"Foto placeholder — yayın öncesi gerçek görselle değiştirin."**

## 3. Institution section headings → "Eğitim verdiği kurumlar"

- **Hero** (`Hero.tsx`): "Eğitim verdiği kurumlardan bazıları" → **"Eğitim verdiği kurumlar"**.
- **Organizations** (`Organizations.tsx`): "Eğitim ve danışmanlık verdiği kurumlardan bazıları" → **"Eğitim verdiği kurumlar"**.

## 4. Institution logos (real images, no text wordmarks)

Upload the 8 provided logos as CDN assets and wire them into the `INSTITUTIONS` array (`landing-data.ts`):

- Cumhurbaşkanlığı → `tc-cumhurbaskanligi-logo.png`
- Aselsan → `aselsan-logo-mavi.svg`
- Siemens → `siemens-logo.png`
- Yemeksepeti → `Yemeksepeti_New_2021.svg`
- Turkcell → `TURKCELL_YATAY_ERKEK_LOGO.webp`
- N11 → `N11_Logo_2025.svg`
- TUSAŞ (TEI) → `tusaşlogo.svg`
- İş Bankası → `isbankDlogo.png`

Notes:

- **İş Bankası logo is white**, so it would be invisible on the light logo tile. Its tile will get a dark background so the white logo shows; the other tiles stay as-is.
- **Akbank, Garanti Bankası, Türk Telekom**: no files yet → keep them in the list with the existing neutral placeholder box; they swap in instantly when you upload the files.
- The marquee already renders `<img>` logos, so no layout changes are needed beyond filling in the paths.
- Sizes should be same, it sholdn't be bigger or smaller compared to eachother.

## 5. Real testimonials (name + quote only)

Replace the 4 placeholder testimonials in `TESTIMONIALS` (`landing-data.ts`) with:

- **Mahmut** — "İçimdeki başlama arzunu ne yapmam gerektiğini samimi bir dille anlatan eğitici. Kendisine teşekkür ederim."
- **Büşra** — "Çok başarılı ve güzel bir kurs, emeğiniz için çok teşekkürler."
- **M. Şükrü** — "Ufuk açıcı bir kurs."
- **Yusuf** — "Çok faydalı bilgiler veriliyor. Teşekkür ederim."

`Testimonials.tsx`: remove the `role` line and the initials avatar circle (no photos/titles), keep just the quote + name. Delete the footnote *" Yorumlar placeholder. İsim/foto/alıntı kullanımı için yazılı onay alınmalıdır."**

## 6. Remove remaining placeholder texts

- **DigitalPresence** (`DigitalPresence.tsx`): delete "Takipçi sayıları son güncelleme: … canlı çekilmelidir." (and the now-unused `LAST_UPDATED` import).
- **WhyNow** (`landing-data.ts` + `WhyNow.tsx`): drop the three "Kaynak placeholder …" source lines — remove the `source` display from the card so no empty source note remains.

## 7. Format text

- `landing-data.ts` `COURSE.format`: "Online / Canlı + Kayıt erişimi (kendi hızınızda tekrar)" → **"Online / Canlı"**.

## 8. See & store form applications (Lovable Cloud)

Enable **Lovable Cloud** and wire the application form to persist submissions:

- Create an `applications` table (name, phone, email, kvkk_consent, created_at) with RLS: allow public **insert** (anyone can apply), and **no public read**.
- `FinalCta.tsx`: on submit, insert the row into `applications` (replacing the current "no backend" success-only behavior); keep the existing validation and success UI.
- Add a **protected `/admin` page** (email/password login) that lists submissions so you can see who applied. Reads run through an authenticated, role-checked server function.
- You'll also be able to view/export rows directly from the Cloud → Database view.
- Optional (say the word): email you a notification on each new application.

## Technical notes

- Large embedded-image SVGs (`co.svg`, `logo_name.svg`) and other logos are uploaded via the assets CLI and referenced by CDN URL — no big binaries committed.
- Accessibility preserved: every logo/photo gets descriptive `alt` text; contrast maintained (white İş Bankası logo on a dark tile).
- No changes to curriculum, metrics, FAQ, or other sections beyond those listed.