## Changes

### 1. Ticker — add 3 new terms
In `src/components/site/Ticker.tsx`, append to the `ITEMS` array:
- `"AI AUDIT"`
- `"AI RED TEAMING"`
- `"MISSION-CRITICAL AI"`

(Uppercased to match the existing style.)

### 2. TeachingMap — convert chips to links, restructure list
Change `TEACHING_ORGS` in `src/lib/home-data.ts` from `string[]` to an array of `{ name: string; url: string }` objects.

**Remove** these 4 entries (no valid source):
- İstinye University
- Bahçeşehir University
- Maltepe University
- Lycée Saint-Joseph

**Replace** the single `"AISecLab.org"` entry with 3 entries:
- `AISecLab.org (OWASP ML Top 10)` → `https://web.archive.org/web/20250512103701/https://www.youtube.com/watch?v=QBMHvsgjSxA`
- `AISecLab.org (Cyber Security & Deep Learning)` → `https://web.archive.org/web/20250512103701/https://www.youtube.com/watch?v=k7atzVZDJFk`
- `AISecLab.org (Defense Industry AI)` → `https://web.archive.org/web/20250512103701/https://www.youtube.com/watch?v=fvuqcD0rXUU`

**Add URLs** to all remaining entries per the mapping in the request (Cyber Anatolian Communities, Microsoft, BilgeAdam, Beykoz University, AISecLab AI Safety Summit organizer, Haliç University, ML Career Hole, Digital Transformation Office, Google Developer Student Clubs, Marmara University, Türkiye Youth NGOs Platform, Boğaziçi, YTÜ, KTÜ, Istanbul Data Lab, BilgincIT Academy, Cisco Networking Academy, Istanbul Medeniyet, Üsküdar, Iğdır, BGA Security, Devnot Summit, Teknopark İstanbul, Lycée Saint Benoît).

Update `src/components/home/TeachingMap.tsx`: render each item as an `<a>` with the same chip classes as today, `href={org.url}`, `target="_blank"`, `rel="noopener noreferrer"`. Keep the existing hover styling, grid layout, and reveal animation untouched.

No other files or styles change.