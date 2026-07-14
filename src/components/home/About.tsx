import { ABOUT_PARAGRAPHS, PERSON } from "@/lib/home-data";
import { useReveal } from "@/hooks/useReveal";
import portrait from "@/assets/cihan-ozhan.svg";

export function About() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-about-line]", y: 24, stagger: 0.15 });

  return (
    <section id="hakkinda" className="border-t border-border py-24 md:py-32">
      <div ref={ref} className="container-page grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:gap-16">
        <div>
          <div
            data-about-line
            className="relative mb-8 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-secondary shadow-[0_0_0_1px_var(--color-border)]"
          >
            <img
              src={portrait}
              alt="Cihan Özhan portresi"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brand/20" />
          </div>

          <div
            data-about-line
            className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand"
          >
            <span>01</span>
            <span className="h-px w-8 bg-brand/40" />
            <span className="text-ink-500">Hakkında</span>
          </div>
          <p data-about-line className="mt-6 font-mono text-sm leading-relaxed text-ink-500">
            {PERSON.tagline}
          </p>
        </div>

        <div className="max-w-3xl space-y-6">
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <p
              key={i}
              data-about-line
              className={
                i === 0
                  ? "text-2xl font-semibold leading-snug tracking-tight text-ink-900 text-balance md:text-3xl"
                  : "lead"
              }
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
