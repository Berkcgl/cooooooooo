import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { VENTURES } from "@/lib/home-data";
import { useReveal } from "@/hooks/useReveal";

export function Ventures() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-venture]", y: 36, stagger: 0.12 });

  return (
    <section id="girisimler" className="border-t border-border bg-secondary/30 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading index="02" kicker="Girişimler" ghost="LAB" title="Kurduğum şirketler" />

        <div ref={ref} className="mt-14 grid gap-5 md:grid-cols-3">
          {VENTURES.map((v, i) => (
            <a
              key={v.name}
              data-venture
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium text-ink-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-brand/40 bg-brand/10 text-brand transition-all group-hover:bg-brand group-hover:text-brand-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-ink-900">{v.name}</h3>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand">
                {v.role}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{v.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
