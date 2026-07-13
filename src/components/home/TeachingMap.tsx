import { SectionHeading } from "@/components/site/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { TEACHING_LOCATIONS } from "@/lib/home-data";

/**
 * TeachingMap — a clean, corporate list of where Cihan taught / spoke.
 * Each card shows the event as the title and the place/organization as the
 * description (plus year). Replaces the earlier stylized SVG map.
 */
export function TeachingMap() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-loc-card]", y: 24, stagger: 0.08 });

  return (
    <section id="harita" className="border-t border-border py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="03"
          kicker="Nerede öğretti / konuştu"
          ghost="MAP"
          title="Sahadan sahaya, kürsüden kürsüye"
          description="Üniversitelerden kamu kurumlarına ve global etkinliklere — verilen eğitim ve konuşmalardan bir seçki."
        />

        <div ref={ref} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEACHING_LOCATIONS.map((l) => (
            <article
              key={l.id}
              data-loc-card
              className="card-hover flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6"
            >
              <div>
                <h3 className="text-base font-bold leading-snug text-ink-900">{l.event}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{l.org}</p>
              </div>
              {l.year && l.year !== "—" && (
                <span className="mt-5 inline-flex w-fit rounded-full bg-secondary px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-ink-500">
                  {l.year}
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
