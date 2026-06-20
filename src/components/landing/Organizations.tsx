import { ORGANIZATIONS } from "@/lib/landing-data";

export function Organizations() {
  // Duplicate the list for a seamless marquee loop.
  const items = [...ORGANIZATIONS, ...ORGANIZATIONS];
  return (
    <section className="border-y border-border bg-secondary/40 py-16">
      <div className="container-page">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-500">
          Eğitim ve danışmanlık verdiği kurumlardan bazıları
        </p>
      </div>
      <div
        className="group relative mt-8 overflow-hidden"
        aria-label="Eğitim verilen kurumlar"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-3 group-hover:[animation-play-state:paused]">
          {items.map((org, i) => (
            <span
              key={`${org}-${i}`}
              className="whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-ink-700"
            >
              {org}
            </span>
          ))}
        </div>
      </div>
      <div className="container-page">
        <p className="mt-6 text-center text-[11px] text-ink-500">
          * Logo ve kurum adı kullanım hakları yayın öncesi teyit edilmelidir (özellikle kamu
          kurumları).
        </p>
      </div>
    </section>
  );
}
