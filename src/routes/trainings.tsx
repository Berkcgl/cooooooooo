import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import { Ticker } from "@/components/site/Ticker";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { BackToTop } from "@/components/landing/BackToTop";
import { TRAININGS } from "@/lib/home-data";
import { FREE_VIDEOS, YOUTUBE_CHANNEL } from "@/lib/landing-data";

const TITLE = "Eğitimler & Programlar | Cihan Özhan";
const DESC =
  "Agentic AI Masterclass'tan LLM Engineering ve AI Security Engineer programlarına — canlı, uygulamalı eğitimler ve ücretsiz video serileri.";

export const Route = createFileRoute("/trainings")({
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
  component: TrainingsPage,
});

function TrainingsPage() {
  return (
    <>
      <Ticker />
      <SiteHeader />
      <main>
        <PageHero
          index="01"
          kicker="Eğitimler & Programlar"
          title="Canlı ve uygulamalı eğitim programları"
          description="Amiral gemisi Agentic AI Masterclass ve diğer bootcamp / programlar."
        />

        <section className="py-16 md:py-24">
          <div className="container-page space-y-4">
            {TRAININGS.map((t, i) => {
              const inner = (
                <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
                  <span className="font-mono text-sm text-ink-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2
                        className={`font-bold text-ink-900 ${t.featured ? "text-2xl md:text-3xl" : "text-xl"}`}
                      >
                        {t.title}
                      </h2>
                      {t.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-brand">
                          <Star className="h-3 w-3 fill-current" />
                          Flagship
                        </span>
                      )}
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-700">{t.body}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-ink-500">
                      {t.meta}
                    </p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/40 bg-brand/10 text-brand transition-all group-hover:bg-brand group-hover:text-brand-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              );

              const cls = `card-hover group block rounded-2xl border p-6 md:p-8 ${
                t.featured ? "border-brand/40 bg-brand-soft/50" : "border-border bg-card"
              }`;

              return t.internal ? (
                <Link key={t.title} to={t.url} className={cls}>
                  {inner}
                </Link>
              ) : (
                <a
                  key={t.title}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {inner}
                </a>
              );
            })}
          </div>
        </section>

        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
                  <span>02</span>
                  <span className="h-px w-8 bg-brand/40" />
                  <span className="text-ink-500">Ücretsiz</span>
                </div>
                <h2 className="display-2 mt-4 text-ink-900 text-balance">Ücretsiz video serileri</h2>
              </div>
              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-ink-700 transition-colors hover:text-brand"
              >
                YouTube kanalı
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FREE_VIDEOS.map((v) => (
                <a
                  key={v.title}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group flex flex-col justify-between rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="text-base font-semibold leading-snug text-ink-900">{v.title}</h3>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wide text-ink-500">
                      {v.meta}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-300 transition-colors group-hover:text-brand" />
                  </div>
                </a>
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
