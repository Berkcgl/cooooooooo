import { ArrowUpRight } from "lucide-react";
import { VENTURES } from "@/lib/home-data";
import { useReveal } from "@/hooks/useReveal";

export function Ventures() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-venture]", y: 36, stagger: 0.12 });

  return (
    <section id="girisimler" className="border-t border-border bg-secondary/30 py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Girişimler</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">
            Kurduğum şirketler
          </h2>
        </div>

        <div ref={ref} className="mt-12 grid gap-5 md:grid-cols-3">
          {VENTURES.map((v) => (
            <a
              key={v.name}
              data-venture
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {v.role}
                </span>
                <ArrowUpRight className="h-5 w-5 text-ink-300 transition-colors group-hover:text-brand" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-ink-900">{v.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{v.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
