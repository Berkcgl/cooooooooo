## Cihan Özhan — Personal Homepage Rebuild

### Direction note
You chose **"match the masterclass exactly"** for theme, so this keeps the current light-dominant design system (accent blue `#0A66FF`, Inter, existing spacing/card/button tokens, the single dark CTA "contrast moment"). Motion — not a dark repaint — is what pushes it to Apple-grade. If you'd rather go fully dark, say so and I'll adapt the tokens; the layout/motion plan below is unchanged either way.

### Architecture
```
/                          → NEW animated personal homepage
/agentic-ai-masterclass    → current masterclass page (content unchanged, restyled to share header/footer)
```
- One shared design system + shared `SiteHeader` / `SiteFooter` so both pages feel like one site.
- Remove unused backend surface: delete `auth.tsx`, `_authenticated/route.tsx`, `_authenticated/admin.tsx`, `applications.functions.ts` (you don't need auth/admin). Supabase integration files stay but go unused.

### Motion system (shared)
- Add `gsap` (+ ScrollTrigger) and `lenis`.
- `SmoothScrollProvider` mounted in `__root.tsx`: Lenis inertial scroll driving `ScrollTrigger.update` via a single GSAP ticker (no double RAF loops).
- Guards: `prefers-reduced-motion` disables Lenis + all scrubbed/pinned effects (content renders in final state); on mobile (`< 768px`) pinning is skipped and reveals become short, cheap fade/translate.
- Only `transform`/`opacity` animated. Reveal helper `useReveal()` + counter helper `useCountUp()` as small reusable hooks.

### New homepage — section-by-section layout + animation
1. **Hero** — name, title ("Founder of Safebox, AISecLab & Runbit · Offensive AI Security · Researcher · Developer"), primary CTA.
   *Motion:* staggered word/line reveal of headline, subtle parallax on a background glow/shape, CTA fades up last; slight scroll-linked parallax as you leave.
2. **About / Bio** — short narrative (20+ yrs, researcher/developer/entrepreneur, İstanbul & New York).
   *Motion:* line-by-line text reveal pinned briefly so copy "assembles" as you scroll.
3. **Ventures** — Safebox, AISecLab, Runbit as distinct cards with outbound links.
   *Motion:* horizontal-drift/scale stagger as cards enter; hover lift (existing `card-hover`).
4. **Trainings & Courses** — card grid; **Agentic AI Masterclass featured as flagship** card linking to `/agentic-ai-masterclass`; others (LLM Engineering Bootcamp, ML Engineer, AI Security Engineer, …) as secondary cards.
   *Motion:* flagship card scales/spotlights on enter; grid staggers in.
5. **Expertise** — condensed scannable grid (languages, databases, architectures, AI/ML, security) grouped by category — not a bullet dump.
   *Motion:* category columns reveal in sequence; chips fade/stagger.
6. **Speaking & Events** — curated top talks (subset of existing `TALKS`) + "view more" link.
   *Motion:* list rows slide/fade in with stagger.
7. **Publications & Presentations** — curated highlights (subset of `PRESENTATIONS`/`PUBLICATIONS`) + "view more".
   *Motion:* same treatment as Speaking.
8. **Channels / Social** — Udemy, YouTube, LinkedIn, GitHub, Medium, Twitter, Vimeo as a clean icon/link row.
   *Motion:* icons pop-in with small stagger.
9. **Contact / CTA** — closing cinematic **dark** section (reuses the surface/CTA treatment) with contact info + strong CTA.
   *Motion:* background image parallax + headline reveal.

A thin **stats/metrics strip** (reusing verified numbers) sits under the hero with **count-up animation on enter**, mirroring the masterclass page's social proof.

### Shared header/footer
- `SiteHeader`: context-aware. On `/` it links to homepage sections + a "Masterclass" link to `/agentic-ai-masterclass`; on the masterclass route it shows that page's section anchors + "Ana Sayfa". Sticky, blur-on-scroll (as today), logo → `/`.
- `SiteFooter`: shared across both routes.
- Homepage "Trainings" flagship + header both deep-link to `/agentic-ai-masterclass`.

### Masterclass route
- Move current `index.tsx` composition into `src/routes/agentic-ai-masterclass.tsx` with its own `head()` (title/description/og). Content (curriculum, instructor, FAQ, testimonials, application CTA) unchanged; wrap in shared `SiteHeader`/`SiteFooter`. In-page `#anchor` nav stays (valid in-page scrolling on a long page).

### SEO / metadata
- Root `head()` updated away from "Lovable App" defaults to real Cihan Özhan homepage title/description + OG/Twitter.
- Each route (`/`, `/agentic-ai-masterclass`) gets distinct `head()` metadata. Single H1 per page, semantic sections, alt text, lazy images.

### Technical details
- **New deps:** `gsap`, `lenis`.
- **New files:** `src/lib/smooth-scroll.tsx` (Lenis+GSAP provider), `src/lib/motion.ts` / `src/hooks/useReveal.ts` + `useCountUp.ts`, `src/lib/home-data.ts` (bio, ventures, trainings, expertise, channels — reuse existing arrays where possible), `src/components/site/SiteHeader.tsx` + `SiteFooter.tsx`, `src/components/home/*` (Hero, About, Ventures, Trainings, Expertise, Speaking, Publications, Channels, ContactCta), `src/routes/agentic-ai-masterclass.tsx`.
- **Edited:** `src/routes/__root.tsx` (metadata + SmoothScrollProvider), `src/routes/index.tsx` (new homepage composition).
- **Deleted:** `src/routes/auth.tsx`, `src/routes/_authenticated/route.tsx`, `src/routes/_authenticated/admin.tsx`, `src/lib/applications.functions.ts`.
- SSR-safe: GSAP/Lenis and any `window`/`document` access run in `useEffect` (client-only), so build:dev prerender and SSR don't crash.
- Reuse existing `src/lib/landing-data.ts` for masterclass; add homepage-specific content in `home-data.ts`. Where bio/venture/training copy isn't in the repo yet, I'll draft concise premium copy from your provided structure and mark anything that needs your exact wording so you can tweak.

### Open items (won't block the build)
- Exact venture blurbs + outbound URLs for Safebox / AISecLab / Runbit, and the full trainings list with links — I'll seed sensible placeholders you can correct.
- Contact details (email/handles) for the final section.
