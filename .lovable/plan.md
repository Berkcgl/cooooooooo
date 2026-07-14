## Problem

Images you uploaded (logos, portrait, hero globe, main logo) are stored as `.asset.json` pointer files that reference Lovable's CDN at `/__l5e/assets-v1/...`. Images I generated (e.g. `hero-agentic.jpg`, `cta-dark.jpg`) are real files in `src/assets/`.

When you push to GitHub and deploy on Vercel:
- Real image files work fine (bundled by Vite).
- `.asset.json` pointers still point at `/__l5e/assets-v1/...`, which only exists on Lovable's infrastructure → 404 on Vercel.

## Fix

Convert every uploaded `.asset.json` pointer into a real file committed to the repo, then switch imports to standard Vite asset imports.

### Files to materialize

From CDN → into `src/assets/`:
- `cihan-ozhan-logo.svg`
- `cihan-ozhan.svg`
- `main-website-logo.svg`
- `hero-network-globe.jpg`

Into `src/assets/logos/`:
- `akbank.svg`, `aselsan.svg`, `cumhurbaskanligi.svg`, `garanti.svg`, `isbankasi.svg`, `n11.svg`, `siemens.svg`, `turkcell.svg`, `turktelekom.svg`, `tusas.svg`, `yemeksepeti.svg`

### Steps

1. For each `.asset.json`, `curl` the `url` from the pointer (prefixed with the preview origin) and save the raw bytes to the matching filename in the same directory.
2. Delete the `.asset.json` pointer files.
3. Update every import across the codebase:
   - `@/assets/foo.svg.asset.json` → `@/assets/foo.svg`
   - Replace `import x from "….asset.json"; …src={x.url}` with `import x from "….svg"; …src={x}`
   - Affected files include `src/lib/landing-data.ts`, `src/components/landing/Footer.tsx`, `src/components/landing/Instructor.tsx`, `src/components/landing/Nav.tsx`, `src/components/site/SiteHeader.tsx`, `src/components/site/SiteFooter.tsx`, and any other file grep finds.
4. Run the build to confirm no unresolved imports and preview still renders.

### Result

After this, the repo contains real SVG/JPG files. Vercel (or any host) serves them from the standard Vite build output — no more 404s. Newly generated images (which land as real files) already work; this only fixes the uploaded ones.

### Note on file size

`cihan-ozhan.svg` is ~1 MB and `cumhurbaskanligi.svg` ~138 KB. They'll be committed to git as-is. If you prefer, I can convert the large portrait SVG to an optimized JPG/WebP in the same pass — let me know.
