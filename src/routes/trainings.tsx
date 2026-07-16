import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, Building2 } from "lucide-react";
import { Ticker } from "@/components/site/Ticker";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { BackToTop } from "@/components/landing/BackToTop";
import { TrainingCalendar } from "@/components/trainings/TrainingCalendar";
import { TRAININGS, type Training } from "@/lib/home-data";
import { COURSES, YOUTUBE_CHANNEL, type TabItem } from "@/lib/landing-data";

const TITLE = "Eğitimler & Programlar | Cihan Özhan";
const DESC =
  "Agentic AI Masterclass'tan LLM Engineering ve AI Security Engineer programlarına — canlı, uygulamalı eğitimler ve 30+ kurs / video serisi arşivi.";

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

function groupByYear(items: TabItem[]): [number, TabItem[]][] {
  const map = new Map<number, TabItem[]>();
  for (const it of items) {
    const y = it.year ?? 0;
    if (!map.has(y)) map.set(y, []);
    map.get(y)!.push(it);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}

/** Featured card layout — reused for Aktif and Pasif with different accent tones. */
function FeaturedTrainingCard({
  t,
  tone,
}: {
  t: Training;
  tone: "active" | "passive";
}) {
  const isActive = tone === "active";
  const containerCls = isActive
    ? "relative overflow-hidden rounded-2xl border border-brand/40 bg-brand-soft/50 p-6 md:p-8"
    : "relative overflow-hidden rounded-2xl border border-amber-300/50 bg-amber-50/40 p-6 md:p-8 dark:bg-amber-500/5";
  const accentBarCls = isActive
    ? "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand/70 via-brand to-brand/70"
    : "absolute inset-x-0 top-0 h-1 bg-amber-300/60";
  const badgeCls = isActive
    ? "inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-brand"
    : "inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-amber-800 dark:bg-amber-500/10 dark:text-amber-200";
  const badgeIcon = isActive ? (
    <Star className="h-3 w-3 fill-current" />
  ) : (
    <Building2 className="h-3 w-3" />
  );
  const badgeText = isActive ? "Online & Canlı Ders" : "Kurumsal Program";
  const ctaCls = isActive
    ? "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
    : "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-7 py-4 text-sm font-semibold text-amber-950 transition-colors hover:bg-amber-400/90";

  const content = (
    <>
      <span className={accentBarCls} aria-hidden="true" />
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">{t.title}</h2>
            <span className={badgeCls}>
              {badgeIcon}
              {badgeText}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-700">{t.body}</p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-ink-500">
            {t.meta}
          </p>
        </div>
        <Link to={t.url} className={ctaCls}>
          Eğitime Başvur
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );

  return <div className={containerCls}>{content}</div>;
}

function TrainingsPage() {
  const grouped = groupByYear(COURSES);
  const activeTrainings = TRAININGS.filter((t) => t.status === "active");
  const passiveTrainings = TRAININGS.filter((t) => t.status === "passive");
  const pastTrainings = TRAININGS.filter((t) => t.status === "past" || (!t.status && !t.featured));

  return (
    <>
      <Ticker />
      <SiteHeader />
      <main>
        <PageHero
          index="01"
          kicker="Eğitimler & Programlar"
          title="Canlı ve uygulamalı eğitim programları"
          description="Amiral gemisi Agentic AI Masterclass ve diğer bootcamp / programlar, ardından 30+ kurs ve video serisinden oluşan tam arşiv."
        />

        <TrainingCalendar />

        <section className="py-16 md:py-24">
          <div className="container-page space-y-12">
            {/* 01 Aktif */}
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
                <span>01</span>
                <span className="h-px w-8 bg-brand/40" />
                <span className="text-ink-500">Aktif</span>
              </div>
              <div className="mt-6 space-y-4">
                {activeTrainings.map((t) => (
                  <FeaturedTrainingCard key={t.title} t={t} tone="active" />
                ))}
              </div>
            </div>

            {/* 02 Pasif */}
            {passiveTrainings.length > 0 && (
              <div>
                <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                  <span>02</span>
                  <span className="h-px w-8 bg-amber-500/40" />
                  <span className="text-ink-500">Pasif</span>
                </div>
                <div className="mt-6 space-y-4">
                  {passiveTrainings.map((t) => (
                    <FeaturedTrainingCard key={t.title} t={t} tone="passive" />
                  ))}
                </div>
              </div>
            )}

            {/* 03 Geçmiş */}
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
                <span>03</span>
                <span className="h-px w-8 bg-brand/40" />
                <span className="text-ink-500">Geçmiş</span>
              </div>
              <div className="mt-6 space-y-4">
                {pastTrainings.map((t, i) => {
                  const inner = (
                    <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
                      <span className="font-mono text-sm text-ink-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="text-xl font-bold text-ink-900">{t.title}</h2>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-700">
                          {t.body}
                        </p>
                        <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-ink-500">
                          {t.meta}
                        </p>
                      </div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-secondary text-ink-500 transition-all group-hover:border-brand/40 group-hover:text-brand">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  );

                  const cls =
                    "card-hover group block rounded-2xl border border-border bg-card p-6 md:p-8";

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
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
                  <span>04</span>
                  <span className="h-px w-8 bg-brand/40" />
                  <span className="text-ink-500">Arşiv</span>
                </div>
                <h2 className="display-2 mt-4 text-ink-900 text-balance">
                  Kurslar & video serileri
                </h2>
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

            <div className="mt-12 space-y-12">
              {grouped.map(([year, items]) => (
                <div key={year} className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-12">
                  <div className="font-mono text-2xl font-bold tracking-tight text-brand">
                    {year}
                  </div>
                  <ol className="border-t border-border">
                    {items.map((c) => (
                      <li key={`${c.title}-${c.meta}`} className="border-b border-border">
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group grid grid-cols-[1fr_auto] items-center gap-5 py-4 md:gap-8"
                        >
                          <span>
                            <span className="block text-base font-semibold text-ink-900 transition-colors group-hover:text-brand">
                              {c.title}
                            </span>
                            <span className="mt-1 block font-mono text-[11px] uppercase tracking-wide text-ink-500">
                              {c.meta}
                            </span>
                          </span>
                          <ArrowUpRight className="h-5 w-5 text-ink-300 transition-all group-hover:-translate-y-0.5 group-hover:text-brand" />
                        </a>
                      </li>
                    ))}
                  </ol>
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
