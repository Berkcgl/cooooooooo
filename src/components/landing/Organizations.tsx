import { INSTITUTIONS } from "@/lib/landing-data";
import { LogoTile } from "@/components/site/LogoTile";

export function Organizations() {
  // Duplicate the list for a seamless marquee loop.
  const items = [...INSTITUTIONS, ...INSTITUTIONS];
  return (
    <section className="border-y border-border bg-secondary/40 py-16">
      <div className="container-page">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-500">
          Eğitim verdiği bazı kurumlar
        </p>

      </div>
      <div className="group relative mt-8 overflow-hidden" aria-label="Eğitim verilen kurumlar">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-6 group-hover:[animation-play-state:paused]">
          {items.map((org, i) => (
            <LogoTile key={`${org.name}-${i}`} org={org} className="h-16 w-40" />
          ))}

        </div>
      </div>
    </section>
  );
}
