import { APPLY_ANCHOR } from "@/lib/landing-data";
import { Button } from "@/components/ui/button";

/**
 * Pricing — early-registration advantage block for the masterclass.
 * Two tiers: early registration (list price struck through) and student price.
 */
export function Pricing() {
  return (
    <section id="fiyat" className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">FİYAT</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">
            Erken Kayıtta Avantajlı Fiyat
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {/* Erken Kayıt */}
          <div className="flex flex-col items-center rounded-3xl border border-brand/40 bg-brand-soft/50 p-8 text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-brand">
              Erken Kayıt
            </span>
            <div className="mt-6 text-lg font-medium text-ink-500 line-through">40.000 TL</div>
            <div className="mt-1 text-4xl font-extrabold tracking-tight text-ink-900 md:text-5xl">
              35.000 TL
            </div>
            <p className="mt-4 text-sm text-ink-700">Erken kayıt döneminde geçerli fiyat.</p>
          </div>

          {/* Öğrenci Kayıt */}
          <div className="flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center">
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-ink-700">
              Öğrenci Kayıt
            </span>
            <div className="mt-6 text-lg font-medium text-transparent select-none">—</div>
            <div className="mt-1 text-4xl font-extrabold tracking-tight text-ink-900 md:text-5xl">
              30.000 TL
            </div>
            <p className="mt-4 text-sm text-ink-700">Öğrenciler için özel fiyat.</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="brand" size="xl">
            <a href={APPLY_ANCHOR}>Başvuru Yap</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
