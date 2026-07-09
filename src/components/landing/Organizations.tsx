import { INSTITUTIONS } from "@/lib/landing-data";

export function Organizations() {
  // Duplicate the list for a seamless marquee loop.
  const items = [...INSTITUTIONS, ...INSTITUTIONS];
  return (
    <section className="border-y border-border bg-secondary/40 py-16">
      <div className="container-page">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-500">
          Eğitim verdiği kurumlar
        </p>

      </div>
      <div className="group relative mt-8 overflow-hidden" aria-label="Eğitim verilen kurumlar">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-6 group-hover:[animation-play-state:paused]">
          {items.map((org, i) => (
            <div
              key={`${org.name}-${i}`}
              className={`grid h-16 w-40 shrink-0 place-items-center rounded-xl border border-border px-4 ${
                org.dark ? "bg-ink-900" : "bg-card"
              }`}
            >
              {org.logo ? (
                <img
                  src={org.logo}
                  alt={`${org.name} logosu`}
                  className="max-h-8 w-auto max-w-[7rem] object-contain"
                  loading="lazy"
                />
              ) : (
                // Placeholder until client-provided logo files are uploaded.
                <span
                  aria-label={`${org.name} logosu`}
                  className="h-6 w-24 rounded bg-ink-300/40"
                />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
