import { SectionHeading } from "@/components/site/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { TEACHING_ORGS } from "@/lib/home-data";

/**
 * TeachingMap — a compact, corporate roster of the organizations and brands
 * Cihan has taught or spoken for. Names only; individual events live in other
 * sections, so this strip stays dense and scannable.
 */
export function TeachingMap() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-org-chip]", y: 16, stagger: 0.03 });

  return (
    <section id="harita" className="border-t border-border py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="03"
          kicker="Nerede öğretti / konuştu"
          ghost="MAP"
          title="Sahadan sahaya, kürsüden kürsüye"
          description="Üniversitelerden kamu kurumlarına ve global etkinliklere — eğitim ve konuşma verilen kurumlardan bir seçki."
        />

        <div ref={ref} className="mt-14 flex flex-wrap justify-center gap-2.5">
          {TEACHING_ORGS.map((org) => (
            <span
              key={org}
              data-org-chip
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-3.5 py-2 text-center text-sm font-medium text-ink-700 transition-colors hover:border-brand/40 hover:text-ink-900"
            >
              {org}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
