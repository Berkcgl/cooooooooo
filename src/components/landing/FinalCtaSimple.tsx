import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-dark.jpg";

const DEFAULT_APPLICATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeDXpFHBnZJpjyq6Jmk3Sd6ZY3-2dDz9kOlnUOQItvt-ffirg/viewform?usp=publish-editor";

interface FinalCtaSimpleProps {
  applyFormUrl?: string;
}

export function FinalCtaSimple({ applyFormUrl }: FinalCtaSimpleProps = {}) {
  const formUrl = applyFormUrl ?? DEFAULT_APPLICATION_FORM_URL;
  return (
    <section
      id="basvuru"
      className="relative isolate overflow-hidden bg-surface py-24 text-surface-foreground md:py-32"
    >
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/80 via-surface/60 to-surface/90" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-foreground/80">
            Son Adım
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl text-balance">
            Yeni dönem eğitim takvimi planlanıyor. İlgilendiğinizi bildirmek için bize ulaşın.
          </h2>
        </div>

        <div className="flex flex-col items-center rounded-3xl border border-white/15 bg-background p-8 text-center text-foreground shadow-2xl md:p-10">
          <h3 className="text-2xl font-bold text-ink-900">Başvuru Yap</h3>
          <p className="mt-3 max-w-sm text-sm text-ink-700">
            Başvuru formunu doldurun, ekibimiz uygunluk ve hedeflerinizi konuşmak için kısa süre
            içinde sizinle iletişime geçsin.
          </p>

          <Button asChild variant="brand" size="xl" className="mt-8 w-full">
            <a href={formUrl} target="_blank" rel="noopener noreferrer">
              Başvuru Formunu Aç
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </Button>

          <p className="mt-4 text-xs text-ink-500">Form yeni bir sekmede açılır.</p>
        </div>
      </div>
    </section>
  );
}
