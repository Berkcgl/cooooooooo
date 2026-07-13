import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Ticker } from "@/components/site/Ticker";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { BackToTop } from "@/components/landing/BackToTop";
import { TALKS, INSTRUCTOR_PROJECTS } from "@/lib/landing-data";

const TITLE = "Konuşmalar & Etkinlikler | Cihan Özhan";
const DESC =
  "Üniversitelerden kamu kurumlarına ve global etkinliklere — Offensive AI ve agentic sistemler üzerine konuşmalar ve eğitim etkinlikleri.";

export const Route = createFileRoute("/speaking")({
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
  component: SpeakingPage,
});

function SpeakingPage() {
  return (
    <>
      <Ticker />
      <SiteHeader />
      <main>
        <PageHero
          index="02"
          kicker="Konuşmalar & Etkinlikler"
          title="Sahnede ve kürsüde"
          description="Konuşmalar, seminerler ve topluluk etkinlikleri."
        />

        <section className="py-16 md:py-24">
          <div className="container-page">
            <ol className="border-t border-border">
              {TALKS.map((t, i) => (
                <li key={t.title} className="border-b border-border">
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 md:gap-8 md:py-8"
                  >
                    <span className="font-mono text-sm text-ink-500">
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    <span>
                      <span className="block text-lg font-semibold text-ink-900 transition-colors group-hover:text-brand md:text-xl">
                        {t.title}
                      </span>
                      <span className="mt-1 block font-mono text-[11px] uppercase tracking-wide text-ink-500">
                        {t.meta}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-300 transition-all group-hover:-translate-y-0.5 group-hover:text-brand" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="container-page">
            <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
              <span>03</span>
              <span className="h-px w-8 bg-brand/40" />
              <span className="text-ink-500">Kurumsal</span>
            </div>
            <h2 className="display-2 mt-4 text-ink-900 text-balance">
              Gerçek dünya AI projelerinden
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {INSTRUCTOR_PROJECTS.map((p) => (
                <article key={p.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-sm font-bold text-ink-900">{p.org}</h3>
                  <p className="mt-2 text-sm text-ink-700">{p.title}</p>
                  <p className="mt-3 text-xs text-ink-500">{p.outcome}</p>
                </article>
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
