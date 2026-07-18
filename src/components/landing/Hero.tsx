import { Button } from "@/components/ui/button";
import { APPLY_ANCHOR, CURRICULUM_ANCHOR, COURSE } from "@/lib/landing-data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="container-page mx-auto max-w-3xl text-center">
        <span className="eyebrow justify-center">KONTENJAN SINIRLIDIR</span>
        <h1 className="display-1 mt-5 text-ink-900 text-balance">
          Agentic AI <span className="text-brand">Masterclass</span>
        </h1>
        <span className="mt-5 inline-flex items-center rounded-full border border-brand/30 bg-brand-soft/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
          GENEL KATILIM · KURUMSAL · {COURSE.hours} SAAT
        </span>
        <p className="lead mx-auto mt-6 max-w-2xl text-pretty">
          Sıfırdan başlayarak gerçek projeler üzerinde çalışın. {COURSE.hours} saatlik uygulamalı
          eğitimle yapay zekayı işinizde ve kariyerinizde kullanmayı öğrenin.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="brand" size="xl">
            <a href={APPLY_ANCHOR}>Başvuru Yap</a>
          </Button>
          <Button asChild variant="brandOutline" size="xl">
            <a href={CURRICULUM_ANCHOR}>Müfredatı İncele</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
