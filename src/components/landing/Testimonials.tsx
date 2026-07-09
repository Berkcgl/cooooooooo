import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/landing-data";

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Katılımcı Yorumları</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">Öğrencilerin gözünden</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="card-hover flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <Quote className="h-7 w-7 text-brand/40" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-900">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-ink-900">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

