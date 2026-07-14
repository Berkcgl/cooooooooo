import { ArrowUpRight } from "lucide-react";
import { INSTRUCTOR_PROJECTS, INSTRUCTOR_TIMELINE } from "@/lib/landing-data";
import portrait from "@/assets/cihan-ozhan.svg";

export function Instructor() {
  return (
    <section id="egitmen" className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-secondary">
            <img
              src={portrait}
              alt="Cihan Özhan portresi"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>


        <div>
          <span className="eyebrow">Eğitmen</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">
            20+ yıllık sahadan gelen bir uzmanla öğrenin
          </h2>
          <p className="lead mt-5">
            Cihan Özhan; Safebox, AISecLab ve Runbit'in kurucusu. Offensive AI Security alanında
            araştırmacı ve geliştirici olarak çalışıyor; kamu kurumlarından üniversitelere ve global
            teknoloji şirketlerine kadar yüzlerce kuruma eğitim verdi. Bu programda 16+ yıllık
            eğitmenlik tecrübesini doğrudan agentic AI'a taşıyor.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {INSTRUCTOR_TIMELINE.map((t) => (
              <div key={t.period} className="rounded-xl border border-border bg-card p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {t.period}
                </div>
                <div className="mt-1 text-sm font-medium text-ink-900">{t.text}</div>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-ink-500">
            Gerçek dünya AI projelerinden
          </h3>
          <div className="mt-4 space-y-3">
            {INSTRUCTOR_PROJECTS.map((p) => (
              <article
                key={p.title}
                className="card-hover flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <div className="text-sm font-bold text-ink-900">{p.org}</div>
                  <div className="text-sm text-ink-700">{p.title}</div>
                  <div className="mt-1 text-xs text-ink-500">{p.outcome}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
