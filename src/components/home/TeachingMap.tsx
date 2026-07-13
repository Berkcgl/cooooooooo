import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useMapReveal } from "@/hooks/useMapReveal";
import { TEACHING_LOCATIONS } from "@/lib/home-data";

export function TeachingMap() {
  const ref = useMapReveal<HTMLDivElement>();
  const [active, setActive] = useState<string | null>(null);

  const hubs = TEACHING_LOCATIONS.filter((l) => l.hub);

  return (
    <section id="harita" className="border-t border-border py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="04"
          kicker="Nerede öğretti / konuştu"
          ghost="MAP"
          title="Sahadan sahaya, kürsüden kürsüye"
          description="Üniversitelerden kamu kurumlarına ve global etkinliklere — verilen eğitim ve konuşmalardan bir seçki."
        />

        <div ref={ref} className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Stylized map (desktop) */}
          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-secondary/30 lg:block">
            {/* dot-grid backdrop */}
            <svg className="absolute inset-0 h-full w-full text-ink-300/40" aria-hidden="true">
              <defs>
                <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            {/* connecting arcs between hubs */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {hubs.map((h) =>
                TEACHING_LOCATIONS.filter((l) => !l.hub && Math.abs(l.x - h.x) < 25).map((l) => (
                  <line
                    key={`${h.id}-${l.id}`}
                    x1={h.x}
                    y1={h.y}
                    x2={l.x}
                    y2={l.y}
                    stroke="var(--color-brand)"
                    strokeWidth="0.15"
                    strokeOpacity={active === l.id || active === h.id ? 0.6 : 0.18}
                  />
                )),
              )}
            </svg>

            {/* pins */}
            {TEACHING_LOCATIONS.map((l) => (
              <button
                key={l.id}
                data-pin
                type="button"
                onMouseEnter={() => setActive(l.id)}
                onMouseLeave={() => setActive(null)}
                aria-label={`${l.org} — ${l.event}`}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${l.x}%`, top: `${l.y}%` }}
              >
                <span className="relative grid place-items-center">
                  {(l.hub || active === l.id) && (
                    <span className="absolute h-6 w-6 animate-ping rounded-full bg-brand/40" />
                  )}
                  <span
                    className={`relative rounded-full ring-2 ring-background transition-all ${
                      l.hub ? "h-3.5 w-3.5 bg-brand" : "h-2.5 w-2.5 bg-brand/80"
                    } ${active === l.id ? "scale-125" : ""}`}
                  />
                </span>
                {l.label && (
                  <span className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-ink-700">
                    {l.label}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Cards — list beside the map (desktop) / full list (mobile) */}
          <div className="flex flex-col gap-3">
            {TEACHING_LOCATIONS.filter((l) => !l.hub).map((l) => (
              <article
                key={l.id}
                data-pin-card
                onMouseEnter={() => setActive(l.id)}
                onMouseLeave={() => setActive(null)}
                className={`card-hover rounded-xl border bg-card p-4 ${
                  active === l.id ? "border-brand/50" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-ink-900">{l.org}</h3>
                    <p className="mt-0.5 text-sm text-ink-700">{l.event}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 font-mono text-[11px] font-medium text-ink-500">
                    {l.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
