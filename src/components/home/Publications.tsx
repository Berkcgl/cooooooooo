import { ArrowUpRight } from "lucide-react";
import { PRESENTATIONS, PUBLICATIONS } from "@/lib/landing-data";
import { useReveal } from "@/hooks/useReveal";

const HIGHLIGHTS = [...PUBLICATIONS.slice(0, 2), ...PRESENTATIONS.slice(0, 2)];
const VIEW_MORE_URL = "https://www.slideshare.net/Cihanzhan";

export function Publications() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-pub]", y: 28, stagger: 0.08 });

  return (
    <section className="border-t border-border bg-secondary/30 py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="eyebrow">Yayınlar &amp; Sunumlar</span>
            <h2 className="display-2 mt-4 text-ink-900 text-balance">
              Kitaplar, makaleler ve sunumlar
            </h2>
          </div>
          <a
            href={VIEW_MORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="story-link text-sm font-semibold text-brand"
          >
            Tümünü gör
          </a>
        </div>

        <div ref={ref} className="mt-10 grid gap-4 md:grid-cols-2">
          {HIGHLIGHTS.map((p) => (
            <a
              key={p.title}
              data-pub
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div>
                <div className="text-base font-semibold text-ink-900">{p.title}</div>
                <div className="mt-1 text-xs text-ink-500">{p.meta}</div>
              </div>
              <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-ink-300 transition-colors group-hover:text-brand" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
