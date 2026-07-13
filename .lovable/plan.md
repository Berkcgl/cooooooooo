## Goal

Three focused, presentation-only changes: (1) stop the "Ö"/"A" from being clipped in the big display titles, (2) replace the top ticker strip text, and (3) replace placeholder links in the archive pages with the real matching links from cihanozhan.com.

---

### 1. Clipped display titles ("Cihan Özhan", "Agentic AI Masterclass")

The titles use `display-1` (`line-height: 1.02`) and the hero markup wraps each line in `<span class="block overflow-hidden">` for the reveal animation. The very tight line-height plus `overflow-hidden` crops the top of tall glyphs (the umlaut on "Ö", the apex of "A").

- In `src/styles.css`, add a small amount of headroom to the line-clipping wrappers without disturbing the reveal animation — apply a tiny top padding + matching negative top margin to the `overflow-hidden` line wrappers in the hero (via a scoped utility class, e.g. `.hero-line-mask { padding-top: 0.12em; margin-top: -0.12em; }`), and relax `line-height` on the hero title only to ~`1.1`.
- Apply that class to the `<span className="block overflow-hidden">` wrappers in `src/components/home/ScrollZoomHero.tsx` (Cihan Özhan) and `src/components/landing/Hero.tsx` (Agentic AI Masterclass). This keeps the GSAP `yPercent` reveal intact while giving glyphs room at the top.

### 2. Ticker text swap

In `src/components/site/Ticker.tsx`, replace the current `ITEMS` array (Offensive AI Security, location, Safebox·AISecLab·Runbit, etc.) with the requested keyword list, uppercased for the mono strip:

```
Artificial Intelligence (AI) · Machine Learning (ML) · Deep Learning (DL) ·
Neural Networks (NN) · Artificial Neural Networks (ANN) · Generative AI (GenAI) ·
Large Language Models (LLM) · Agentic AI · AI as a Service (AIaaS) ·
AI Security · Offensive AI
```

The existing marquee duplication/animation stays unchanged.

### 3. Real deep-links from cihanozhan.com

I fetched cihanozhan.com and matched each archive item to its real link. Update `url` fields in `src/lib/landing-data.ts` (and `src/lib/home-data.ts` for trainings). Items with no real target on the source site keep their current fallback.

**Trainings (`home-data.ts` → `TRAININGS`):**
- LLM Engineering Bootcamp → `https://cihanozhan.com/llms`
- Machine Learning Engineer → `https://aiseclab.org/courses/machine-learning-engineer/`
- AI Security Engineer → `https://aiseclab.org/courses/ai-security-engineer/`

**Courses (`landing-data.ts` → `COURSES`)** — replace `YOUTUBE_CHANNEL`/profile placeholders with the real playlist/course URLs for: Mobile Application Security, Engineering Roadmaps, Algorithmic Trading with AI, Self-Learning AI (RL), Numeric Programming with NumPy, AI Safety, Applied ML Model Deployment (MLaaS), TensorFlow Ecosystem, DB Programming w/ SQL Server (2021), Web Programming w/ Flask, AI Starter Guide, Software Dev Starter Guide, Python (2020), RESTful API Basics, PostgreSQL, SQLite, C#, SQL Server (2017), Go Standard Library, RESTful API w/ Go, Go Language (2016), Oracle PL/SQL, Oracle SQL Developer.

**Talks/Events (`landing-data.ts` → `TALKS`)** — replace the `https://www.cihanozhan.com/` placeholders with the real event links: Cyber Anatolian (LinkedIn), Microsoft/BilgeAdam (LinkedIn), Beykoz (LinkedIn), Haliç (Instagram), ML Career Hole (Kommunity), OWASP ML Top 10 (YouTube), Deep Learning defense app (YouTube), Cumhurbaşkanlığı (aiseclab portfolio), Defense Industry (YouTube), Marmara (Biletino), National Security (Twitter), Yıldız (Medium), Karadeniz (Medium), Istanbul Data Lab (Medium), BilgincIT (Medium), Cisco (netacad), Medeniyet (Medium), Üsküdar (LinkedIn), Iğdır (LinkedIn), Offensive AI 2021 (YouTube), AI Getting Started (YouTube), BGA Security, Industrial AI (YouTube), Data Security Fundamentals (YouTube), AI+CyberSec+Autonomous (YouTube), Devnot Summit, Industry 4.0 (YouTube), Digital Transformation MBA (YouTube), Teknopark İstanbul. Items with only `cihanozhan.com/#` on source (İstinye, Bahçeşehir, Maltepe, Lycée Saint-Joseph, Lycée Saint Benoît) keep the current fallback.

**Presentations (`landing-data.ts` → `PRESENTATIONS`)** — replace `SLIDESHARE_PROFILE` placeholders with the real slide URLs for: Today's Implementation Realities (slideserve), AI Security v1 EN/TR (slideshare), AI Getting Started (slideserve), Industry 4.0 (slideserve), SQLite (slideserve), Python (slideshare), React.js, Angular, OWASP (slideserve), Key Data Security (slideserve), Go (slideshare), Decentralized App Dev (slideshare), RESTful API (slideserve). Rust has no real link on source → keep fallback.

**Publications** already point to real book/article URLs — no change.

---

### Notes
- All changes are frontend/data only — no backend or business-logic changes.
- Verification: headless screenshot of the hero titles (light + dark) to confirm glyphs aren't clipped, and a quick check that ticker + a few updated links render.
- Any item I couldn't source a real link for keeps its existing URL; share those and I'll drop them in one by one.
