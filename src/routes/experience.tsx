import { createFileRoute } from "@tanstack/react-router";
import { Ticker } from "@/components/site/Ticker";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { BackToTop } from "@/components/landing/BackToTop";
import { ABOUT_PARAGRAPHS, EXPERTISE } from "@/lib/home-data";
import { INSTRUCTOR_TIMELINE } from "@/lib/landing-data";
import portrait from "@/assets/cihan-ozhan.webp";

const TITLE = "Deneyim & Yetkinlikler | Cihan Özhan";
const DESC =
  "20+ yıllık yazılım, güvenlik ve yapay zeka deneyimi — teknik yetkinlikler, uzmanlık alanları ve kariyer özeti.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <Ticker />
      <SiteHeader />
      <main>
        <PageHero index="04" kicker="Deneyim & Yetkinlikler" title="I work on offensive AI security." />

        {/* Narrative */}
        <section className="py-16 md:py-24">
          <div className="container-page grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
            <div>
              <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-secondary">
                <img
                  src={portrait}
                  alt="Cihan Özhan portresi"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brand/20" />
              </div>
              <div className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                01 / Özet
              </div>
            </div>
            <div className="max-w-3xl space-y-6">
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-2xl font-semibold leading-snug tracking-tight text-ink-900 text-balance md:text-3xl"
                      : "lead"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>


        {/* Timeline */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="container-page grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
            <div className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
              02 / Öne çıkanlar
            </div>
            <ol className="max-w-3xl border-t border-border">
              {INSTRUCTOR_TIMELINE.map((t) => (
                <li
                  key={t.period}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-border py-5 md:gap-10"
                >
                  <span className="font-mono text-xs uppercase tracking-wide text-brand">
                    [{t.period}]
                  </span>
                  <span className="text-base font-medium text-ink-900 md:text-lg">{t.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Expertise */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="container-page grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
            <div className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
              03 / Teknik yetkinlikler
            </div>
            <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
              {EXPERTISE.map((g) => (
                <div key={g.category} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
                    {g.category}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-sm font-medium text-ink-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
