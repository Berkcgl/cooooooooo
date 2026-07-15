import { APPLY_ANCHOR } from "@/lib/landing-data";
import { Button } from "@/components/ui/button";

export function PricingSimple() {
  return (
    <section id="fiyat" className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">FİYAT</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">
            Fiyat bilgisi için başvur
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-xl flex-col items-center rounded-3xl border border-brand/40 bg-brand-soft/40 p-10 text-center">
          <p className="text-base text-ink-700">
            Bu program kurumsal olarak planlanır. Ücret, format ve içerik detayları için
            başvuru formunu doldurun; ekibimiz sizinle iletişime geçsin.
          </p>
          <Button asChild variant="brand" size="xl" className="mt-8">
            <a href={APPLY_ANCHOR}>Başvuru Yap</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
