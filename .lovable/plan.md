
# Landing Page Update — Agentic AI Masterclass

Scope: mostly frontend copy + presentation changes across existing landing components and `src/lib/landing-data.ts`. Two items depend on files you'll upload later (institution logos, intro video) — I'll build the UI now with clean placeholders that swap in instantly once assets arrive.

## Hero Section (`Hero.tsx`)
- Eyebrow text: "Agentic AI · Uzmanlık Programı" → **"KONTENJAN SINIRLIDIR"**.
- Headline: replace "Yapay zekayı izleyen değil, kuran taraf olun." with **"Agentic AI Masterclass"**, where **"Masterclass"** is rendered in the brand blue (`text-brand`) to stand out from "Agentic AI".
- Video button ("Cihan'dan 60 sn"): clicking now opens a **pop-up modal** (shadcn `Dialog`) with a responsive video player instead of doing nothing / navigating. Since the intro video will be uploaded later, the modal will contain a `<video controls>` element pointed at a placeholder source; once you upload the video I'll drop in its URL. No inline autoplay, no navigation.

## Institutions / Social Proof (new — replaces current `Organizations` marquee content)
- New horizontal **logo-only marquee strip** for: Cumhurbaşkanlığı, Aselsan, Siemens, Yemeksepeti, Turkcell, N11, TUSAŞ (TEI), İş Bankası, Akbank, Garanti Bankası, Türk Telekom.
- You chose to provide the logo files. The strip will be wired to render `<img>` logos from an `INSTITUTIONS` data array (name + logo path). Until you upload logos, each slot shows a neutral grayscale placeholder box sized like a logo (no extra descriptive text, logos only). When you send the files I'll upload them via the assets CLI and fill in the paths — no further layout work needed.
- Keeps the seamless auto-scroll marquee with edge fades; hover-to-pause retained.

## Stats Section (`landing-data.ts` → `METRICS`)
Update to exactly:
- **300.000+ Öğrenci**
- **7.000+ Saat Üretilmiş İçerik**
- **250+ Etkinlik, Seminer ve Konferans**
- **10+ Udemy Best Seller Eğitim**
- **250+ Kurumsal Eğitim / Proje / Danışmanlık**
(plus existing "20+ Yıl Sektör Tecrübesi" / "16+ Yıl Eğitmenlik" kept as-is unless you want them dropped.)

## General UI
- **Back-to-top button**: new fixed button, bottom-right, appears after scrolling down, smooth-scrolls to top. Accessible (aria-label "En başa dön", keyboard focusable). Added once in `index.tsx`.
- **Curriculum accordion** (`Curriculum.tsx`): switch from single/collapsible with one open item to **all items expanded by default** (multiple-type accordion, all values open).
- **Instructor** (`Instructor.tsx`): "Offensive AI Security · Araştırmacı & Geliştirici" → "…· **Girişimci & Geliştirici**".
- **Training video thumbnails** (`FreeLibrary.tsx`): add cover thumbnail images to each video card. For YouTube `watch?v=` links I'll derive the real YouTube thumbnail automatically; for playlist links without a single video id I'll use a branded gradient cover with the play icon (current look) so no card is blank.

## FAQ / SSS (`landing-data.ts` → `FAQ`, `Faq.tsx`)
Overall refresh with these specifics:
- Prerequisites answer → **"Temel seviye Python programlama dili bilgisi gerekiyor."**
- Format question → **"Eğitim formatı nedir?"**, answer → **"Online ve canlı gerçekleşir."**
- Pricing answer → taksit imkânı var; standart ücret **40.000 TL**, erken kayıt (ilk 30 öğrenci) **35.000 TL**.
- **Remove** the refund policy (iade) and certificate (sertifika) items entirely.
- Remaining items reworded for clarity/consistency.

## Digital Presence (`DigitalPresence.tsx`)
- Heading "İçerikleri 150.000+ kişi takip ediyor" → **"300.000+ Öğrenci"**.

## Registration Form (`FinalCta.tsx`)
- Replace the "Kalan Kontenjan" stat card with **"EĞİTİM GÜNLERİ: Salı-Perşembe-Cumartesi 20.00 - 23.00"**.
- Delete the line **"Son 30 günde 380+ kişi ön kayıt oluşturdu."**

## Footer (`Footer.tsx`)
- "Agentic AI Uzmanlık Programı" → **"Agentic AI Masterclass"**.

## Technical Notes
- New files: a `VideoModal`/dialog usage in `Hero.tsx` (using existing `@/components/ui/dialog`), a `BackToTop.tsx` component, and refactor of `Organizations.tsx` into an institutions logo strip.
- Data changes centralized in `landing-data.ts` (METRICS, FAQ, new INSTITUTIONS array, remove preRegistrations/seatsLeft usage in CTA).
- No backend changes. Accessibility (WCAG AA contrast, alt text, keyboard nav) preserved.
- After you upload the **logo files** and **intro video**, I'll add them as assets and wire the paths in a quick follow-up.
