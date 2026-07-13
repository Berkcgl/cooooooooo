import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import { TRAININGS, type Training } from "@/lib/home-data";
import { useReveal } from "@/hooks/useReveal";

function TrainingCard({ t }: { t: Training }) {
  const inner = (
    <>
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${
            t.featured ? "text-brand" : "text-ink-500"
          }`}
        >
          {t.featured && <Star className="h-3.5 w-3.5 fill-current" />}
          {t.meta}
        </span>
        <ArrowUpRight className="h-5 w-5 text-ink-300 transition-colors group-hover:text-brand" />
      </div>
      <h3 className={`mt-4 font-bold text-ink-900 ${t.featured ? "text-3xl" : "text-xl"}`}>
        {t.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">{t.body}</p>
    </>
  );

  const className = `card-hover group flex h-full flex-col rounded-2xl border p-7 ${
    t.featured
      ? "border-brand/40 bg-brand-soft/60 md:col-span-2"
      : "border-border bg-card"
  }`;

  if (t.internal) {
    return (
      <Link data-training to={t.url} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <a data-training href={t.url} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  );
}

export function Trainings() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-training]", y: 36, stagger: 0.1 });

  return (
    <section id="egitimler" className="py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Eğitimler &amp; Programlar</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">
            Canlı ve uygulamalı eğitim programları
          </h2>
        </div>

        <div ref={ref} className="mt-12 grid gap-5 md:grid-cols-2">
          {TRAININGS.map((t) => (
            <TrainingCard key={t.title} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
