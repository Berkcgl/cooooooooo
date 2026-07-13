import { METRICS } from "@/lib/landing-data";
import { useCountUp } from "@/hooks/useCountUp";

/** Parses "300.000+" -> { num, suffix, usesGrouping }. */
function parseMetric(value: string) {
  const suffixMatch = value.match(/[^\d.,]+$/);
  const suffix = suffixMatch ? suffixMatch[0] : "";
  const digits = value.replace(/[^\d]/g, "");
  const num = Number(digits) || 0;
  const usesGrouping = /\d[.,]\d{3}/.test(value);
  return { num, suffix, usesGrouping };
}

function StatTile({ value, label, index }: { value: string; label: string; index: number }) {
  const { num, suffix, usesGrouping } = parseMetric(value);
  const { ref, display } = useCountUp(num, {
    format: (n) =>
      (usesGrouping ? Math.round(n).toLocaleString("tr-TR") : String(Math.round(n))) + suffix,
  });

  return (
    <div className="group relative border-b border-border py-8 md:border-b-0 md:border-l md:py-0 md:pl-8">
      <span className="font-mono text-xs text-ink-500">{String(index + 1).padStart(2, "0")}</span>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="mt-2 text-5xl font-extrabold tracking-tight text-ink-900 md:text-6xl"
      >
        {display}
      </div>
      <div className="mt-2 max-w-[18ch] text-sm font-medium leading-snug text-ink-500">{label}</div>
    </div>
  );
}

export function StatCallouts() {
  // Curated, high-impact subset — the full list stays on the metrics strip.
  const featured = METRICS.slice(0, 4);
  return (
    <section aria-label="Öne çıkan sayılar" className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-0 sm:grid-cols-2 md:grid-cols-4">
          {featured.map((m, i) => (
            <StatTile key={m.label} value={m.value} label={m.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
