import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Ticker } from "@/components/site/Ticker";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { BackToTop } from "@/components/landing/BackToTop";
import { PRESENTATIONS, PUBLICATIONS, type TabItem } from "@/lib/landing-data";

const TITLE = "Yayınlar & Sunumlar | Cihan Özhan";
const DESC =
  "Kitaplar, teknik makaleler ve sunumlar — AI Security, MLaaS, otonom sistemler ve daha fazlası üzerine yayın arşivi.";

export const Route = createFileRoute("/publications")({
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
  component: PublicationsPage,
});

function ArchiveList({ items }: { items: TabItem[] }) {
  return (
    <ol className="border-t border-border">
      {items.map((t, i) => (
        <li key={t.title} className="border-b border-border">
          <a
            href={t.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 md:gap-8 md:py-7"
          >
            <span className="font-mono text-sm text-ink-500">[{String(i + 1).padStart(2, "0")}]</span>
            <span>
              <span className="block text-base font-semibold text-ink-900 transition-colors group-hover:text-brand md:text-lg">
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
  );
}

function PublicationsPage() {
  return (
    <>
      <Ticker />
      <SiteHeader />
      <main>
        <PageHero
          index="03"
          kicker="Yayınlar & Sunumlar"
          title="Yazı, kitap ve sunum arşivi"
          description="Kitaplardan teknik makalelere ve konferans sunumlarına."
        />

        <section className="py-16 md:py-24">
          <div className="container-page">
            <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
              <span>01</span>
              <span className="h-px w-8 bg-brand/40" />
              <span className="text-ink-500">Kitaplar & Makaleler</span>
            </div>
            <div className="mt-8">
              <ArchiveList items={PUBLICATIONS} />
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="container-page">
            <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
              <span>02</span>
              <span className="h-px w-8 bg-brand/40" />
              <span className="text-ink-500">Sunumlar</span>
            </div>
            <div className="mt-8">
              <ArchiveList items={PRESENTATIONS} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
