import { METRICS } from "@/lib/landing-data";

export function Metrics() {
  return (
    <section aria-label="Sosyal kanıt metrikleri" className="border-y border-border bg-secondary/40">
      <div className="container-page py-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-7">
          {METRICS.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
                {m.value}
              </div>
              <div className="mx-auto mt-1.5 max-w-[14ch] text-xs font-medium leading-snug text-ink-500">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
