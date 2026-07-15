import { INSTITUTIONS } from "@/lib/landing-data";
import { LogoTile } from "@/components/site/LogoTile";

/**
 * LogoMarquee — horizontally scrolling "trusted by" strip.
 * Every logo sits on a consistent neutral white tile (see LogoTile) so both
 * colored and white marks stay legible in either theme. Pauses on hover;
 * the marquee keyframe is transform-only.
 */
export function LogoMarquee() {
  const items = [...INSTITUTIONS, ...INSTITUTIONS];
  return (
    <section className="border-t border-border py-16" aria-label="Eğitim verilen kurumlar">
      <p className="container-page text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
        Eğitim, proje ve danışmanlık yaptığı bazı kurumlar
      </p>
      <div className="group relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center gap-5 group-hover:[animation-play-state:paused]">
          {items.map((org, i) => (
            <LogoTile key={`${org.name}-${i}`} org={org} />
          ))}
        </div>
      </div>
    </section>
  );
}
