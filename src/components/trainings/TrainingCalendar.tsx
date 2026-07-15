import { Link } from "@tanstack/react-router";

export type CalendarEvent = {
  title: string;
  /** ISO date (YYYY-MM-DD) — inclusive start. */
  startDate: string;
  /** ISO date (YYYY-MM-DD) — inclusive end. */
  endDate: string;
  /** Internal path (starts with "/") or full URL. */
  url: string;
};

/**
 * Editable list of scheduled training events. Any event whose date range
 * intersects the rolling 3-month window (current month + next two months)
 * will render on the calendar. Events outside the window are hidden.
 */
export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    title: "Agentic AI Masterclass",
    startDate: "2026-09-15",
    endDate: "2026-10-10",
    url: "/agentic-ai-masterclass",
  },
];

// ---------- date helpers (local time, no timezone gymnastics) ----------

function parseISO(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function endOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

function addMonths(d: Date, n: number): Date {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}

function daysBetween(a: Date, b: Date): number {
  // inclusive count of whole days from a to b
  const MS = 24 * 60 * 60 * 1000;
  return Math.round((b.getTime() - a.getTime()) / MS) + 1;
}

function dayIndex(target: Date, windowStart: Date): number {
  const MS = 24 * 60 * 60 * 1000;
  return Math.round((target.getTime() - windowStart.getTime()) / MS);
}

const monthFmt = new Intl.DateTimeFormat("tr-TR", { month: "long", year: "numeric" });
const dayMonthFmt = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long" });
const dayMonthYearFmt = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatRange(start: Date, end: Date): string {
  if (start.getTime() === end.getTime()) return dayMonthYearFmt.format(start);
  if (start.getFullYear() === end.getFullYear()) {
    return `${dayMonthFmt.format(start)} – ${dayMonthYearFmt.format(end)}`;
  }
  return `${dayMonthYearFmt.format(start)} – ${dayMonthYearFmt.format(end)}`;
}

// ---------- lane packing ----------

type Placed = {
  event: CalendarEvent;
  /** Original (unclamped) start/end for label display. */
  labelStart: Date;
  labelEnd: Date;
  /** Zero-based day index in the window. */
  startCol: number;
  span: number;
  lane: number;
};

function packLanes(events: (Omit<Placed, "lane"> & { lane?: number })[]): Placed[] {
  const sorted = [...events].sort((a, b) => a.startCol - b.startCol);
  const laneEnds: number[] = []; // last used column per lane
  const out: Placed[] = [];
  for (const e of sorted) {
    let lane = laneEnds.findIndex((end) => end < e.startCol);
    if (lane === -1) {
      lane = laneEnds.length;
      laneEnds.push(0);
    }
    laneEnds[lane] = e.startCol + e.span - 1;
    out.push({ ...e, lane });
  }
  return out;
}

// ---------- component ----------

export function TrainingCalendar() {
  const now = new Date();
  const windowStart = startOfMonth(now);
  const windowEnd = endOfMonth(addMonths(windowStart, 2));
  const totalDays = daysBetween(windowStart, windowEnd);

  const months = [0, 1, 2].map((offset) => {
    const first = addMonths(windowStart, offset);
    const last = endOfMonth(first);
    return {
      label: monthFmt.format(first),
      span: daysBetween(first, last),
    };
  });

  const preplaced = CALENDAR_EVENTS.flatMap((event) => {
    const s = parseISO(event.startDate);
    const e = parseISO(event.endDate);
    if (e < windowStart || s > windowEnd) return [];
    const clampedStart = s < windowStart ? windowStart : s;
    const clampedEnd = e > windowEnd ? windowEnd : e;
    return [
      {
        event,
        labelStart: s,
        labelEnd: e,
        startCol: dayIndex(clampedStart, windowStart),
        span: daysBetween(clampedStart, clampedEnd),
      },
    ];
  });

  if (preplaced.length === 0) return null;

  const placed = packLanes(preplaced);
  const laneCount = Math.max(...placed.map((p) => p.lane)) + 1;
  const LANE_HEIGHT = 68; // px per event lane

  return (
    <section className="py-12 md:py-16">
      <div className="container-page">
        <div className="rounded-2xl border border-border bg-card p-5 md:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-bold text-ink-900 md:text-2xl">
              Yaklaşan Eğitim Takvimi
            </h2>
            <span className="text-xs font-medium uppercase tracking-wider text-ink-500">
              3 Aylık Görünüm
            </span>
          </div>

          {/* Month header */}
          <div
            className="mt-6 grid overflow-hidden rounded-lg border border-border"
            style={{ gridTemplateColumns: `repeat(${totalDays}, minmax(0, 1fr))` }}
          >
            {months.map((m, i) => (
              <div
                key={m.label}
                className={`px-3 py-2 text-center text-sm font-semibold text-ink-900 ${
                  i > 0 ? "border-l border-border" : ""
                } bg-secondary/40`}
                style={{ gridColumn: `span ${m.span}` }}
              >
                {m.label}
              </div>
            ))}
          </div>

          {/* Calendar body */}
          <div
            className="relative mt-3 overflow-hidden rounded-lg border border-border bg-secondary/20"
            style={{ height: laneCount * LANE_HEIGHT + 16 }}
          >
            {/* Week separators every 7 days */}
            <div
              className="pointer-events-none absolute inset-0 grid"
              style={{ gridTemplateColumns: `repeat(${totalDays}, minmax(0, 1fr))` }}
              aria-hidden="true"
            >
              {Array.from({ length: totalDays }).map((_, i) => (
                <div
                  key={i}
                  className={i > 0 && i % 7 === 0 ? "border-l border-border/60" : ""}
                />
              ))}
            </div>

            {/* Month dividers */}
            <div
              className="pointer-events-none absolute inset-0 grid"
              style={{ gridTemplateColumns: `repeat(${totalDays}, minmax(0, 1fr))` }}
              aria-hidden="true"
            >
              {months.slice(0, -1).map((m, i) => {
                const col =
                  months.slice(0, i + 1).reduce((acc, x) => acc + x.span, 0) + 1;
                return (
                  <div
                    key={`sep-${i}`}
                    className="border-l-2 border-border"
                    style={{ gridColumn: `${col} / span 1` }}
                  />
                );
              })}
            </div>

            {/* Event cards */}
            <div
              className="relative grid p-2"
              style={{
                gridTemplateColumns: `repeat(${totalDays}, minmax(0, 1fr))`,
                gridAutoRows: `${LANE_HEIGHT}px`,
              }}
            >
              {placed.map((p) => {
                const cardClass =
                  "group flex h-[52px] flex-col justify-center overflow-hidden rounded-lg border border-brand/40 bg-brand px-3 py-1.5 text-brand-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-brand hover:shadow-lg";
                const title = (
                  <>
                    <span className="truncate text-sm font-semibold leading-tight">
                      {p.event.title}
                    </span>
                    <span className="truncate text-[11px] font-medium leading-tight opacity-90">
                      {formatRange(p.labelStart, p.labelEnd)}
                    </span>
                  </>
                );
                const style = {
                  gridColumn: `${p.startCol + 1} / span ${p.span}`,
                  gridRow: p.lane + 1,
                };
                if (p.event.url.startsWith("/")) {
                  return (
                    <Link
                      key={p.event.title + p.event.startDate}
                      to={p.event.url}
                      className={cardClass}
                      style={style}
                    >
                      {title}
                    </Link>
                  );
                }
                return (
                  <a
                    key={p.event.title + p.event.startDate}
                    href={p.event.url}
                    className={cardClass}
                    style={style}
                  >
                    {title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
