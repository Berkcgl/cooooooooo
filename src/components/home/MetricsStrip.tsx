import { METRICS } from "@/lib/landing-data";
import { useCountUp } from "@/hooks/useCountUp";

/** Parses "300.000+" -> { num: 300000, suffix: "+", usesDot: true }. */
function parseMetric(value: string) {
  const suffixMatch = value.match(/[^\d.,]+$/);
  const suffix = suffixMatch ? suffixMatch[0] : "";
  const digits = value.replace(/[^\d]/g, "");
  const num = Number(digits) || 0;
  const usesGrouping = /\d[.,]\d{3}/.test(value);
  return { num, suffix, usesGrouping };
}

function MetricItem({ value, label }: { value: string; label: string }) {
  const { num, suffix, usesGrouping } = parseMetric(value);
  const { ref, display } = useCountUp(num, {
    format: (n) =>
      (usesGrouping
        ? Math.round(n).toLocaleString("tr-TR")
        : String(Math.round(n))) + suffix,
  });

  return (
    <div className="text-center">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl"
      >
        {display}
      </div>
      <div className="mx-auto mt-1.5 max-w-[14ch] text-xs font-medium leading-snug text-ink-500">
        {label}
      </div>
    </div>
  );
}

export function MetricsStrip() {
  return (
    <section aria-label="Öne çıkan sayılar" className="border-y border-border bg-secondary/40">
      <div className="container-page py-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-7">
          {METRICS.map((m) => (
            <MetricItem key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
