import { ArrowUpRight } from "lucide-react";
import { TALKS } from "@/lib/landing-data";
import { useReveal } from "@/hooks/useReveal";

const VIEW_MORE_URL = "https://www.cihanozhan.com/";

export function Speaking() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-talk]", y: 24, stagger: 0.08 });

  return (
    <section id="konusmalar" className="py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="eyebrow">Konuşmalar &amp; Etkinlikler</span>
            <h2 className="display-2 mt-4 text-ink-900 text-balance">
              Öne çıkan konuşmalar
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

        <div ref={ref} className="mt-10 divide-y divide-border border-y border-border">
          {TALKS.map((t) => (
            <a
              key={t.title}
              data-talk
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-5 transition-colors hover:bg-secondary/40"
            >
              <div>
                <div className="text-base font-semibold text-ink-900">{t.title}</div>
                <div className="mt-0.5 text-xs text-ink-500">{t.meta}</div>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-300 transition-colors group-hover:text-brand" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
