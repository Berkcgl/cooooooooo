import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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

// ---------- date helpers ----------

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
  const MS = 24 * 60 * 60 * 1000;
  return Math.round((b.getTime() - a.getTime()) / MS) + 1;
}

function dayIndex(target: Date, windowStart: Date): number {
  const MS = 24 * 60 * 60 * 1000;
  return Math.round((target.getTime() - windowStart.getTime()) / MS);
}

const monthFmt = new Intl.DateTimeFormat("tr-TR", { month: "long", year: "numeric" });
const dayMonthYearFmt = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

// ---------- lane packing ----------

type Placed = {
  event: CalendarEvent;
  labelStart: Date;
  labelEnd: Date;
  startCol: number;
  span: number;
  lane: number;
};

function packLanes(events: (Omit<Placed, "lane"> & { lane?: number })[]): Placed[] {
  const sorted = [...events].sort((a, b) => a.startCol - b.startCol);
  const laneEnds: number[] = [];
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

const MIN_LANES = 4;
const LANE_HEIGHT = 20;

function EventCard({ p, totalDays }: { p: Placed; totalDays: number }) {
  const cardClass =
    "group flex h-[52px] flex-col justify-center overflow-hidden rounded-lg border border-brand/40 bg-brand px-3 py-1.5 text-brand-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-brand hover:shadow-lg";
  const title = <span className="truncate text-sm font-semibold leading-tight">{p.event.title}</span>;
  const style = {
    gridColumn: `${p.startCol + 1} / span ${p.span}`,
    gridRow: p.lane + 1,
  };
  void totalDays;
  if (p.event.url.startsWith("/")) {
    return (
      <Link
        to={p.event.url}
        className={cardClass}
        style={style}
        aria-label={`${p.event.title} — ${dayMonthYearFmt.format(p.labelStart)}`}
      >
        {title}
      </Link>
    );
  }
  return (
    <a
      href={p.event.url}
      className={cardClass}
      style={style}
      aria-label={`${p.event.title} — ${dayMonthYearFmt.format(p.labelStart)}`}
    >
      {title}
    </a>
  );
}

function CalendarBody({
  windowStart,
  windowEnd,
  totalDays,
  months,
  placed,
  showMonthHeader,
}: {
  windowStart: Date;
  windowEnd: Date;
  totalDays: number;
  months: { label: string; span: number }[];
  placed: Placed[];
  showMonthHeader: boolean;
}) {
  void windowStart;
  void windowEnd;
  const laneCount = placed.length > 0 ? Math.max(...placed.map((p) => p.lane)) + 1 : 0;
  const displayLanes = Math.max(laneCount, MIN_LANES);

  return (
    <>
      {showMonthHeader && (
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
      )}

      <div className="relative mt-3 aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-secondary/20">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="relative w-full" style={{ minHeight: "100%", height: displayLanes * LANE_HEIGHT + 16 }}>
            <div
              className="pointer-events-none absolute inset-0 grid"
              style={{ gridTemplateColumns: `repeat(${totalDays}, minmax(0, 1fr))` }}
              aria-hidden="true"
            >
              {Array.from({ length: totalDays }).map((_, i) => (
                <div key={i} className={i > 0 && i % 7 === 0 ? "border-l border-border/60" : ""} />
              ))}
            </div>

            <div
              className="pointer-events-none absolute inset-0 grid"
              style={{ gridTemplateColumns: `repeat(${totalDays}, minmax(0, 1fr))` }}
              aria-hidden="true"
            >
              {months.slice(0, -1).map((m, i) => {
                const col = months.slice(0, i + 1).reduce((acc, x) => acc + x.span, 0) + 1;
                return (
                  <div
                    key={`sep-${i}`}
                    className="border-l-2 border-border"
                    style={{ gridColumn: `${col} / span 1` }}
                  />
                );
              })}
            </div>

            <div
              className="relative grid p-2"
              style={{
                gridTemplateColumns: `repeat(${totalDays}, minmax(0, 1fr))`,
                gridAutoRows: `${LANE_HEIGHT}px`,
              }}
            >
              {placed.map((p) => (
                <EventCard key={p.event.title + p.event.startDate} p={p} totalDays={totalDays} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function placeEventsInWindow(windowStart: Date, windowEnd: Date): Placed[] {
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
  return packLanes(preplaced);
}

export function TrainingCalendar() {
  const isMobile = useIsMobile();
  const now = new Date();
  const rollingStart = startOfMonth(now);

  // Mobile: single-month view with next/prev chevrons (bounded to the 3-month rolling window).
  const [monthOffset, setMonthOffset] = useState(0);

  // Show the section as long as any event falls in the rolling 3-month window.
  const rollingEnd = endOfMonth(addMonths(rollingStart, 2));
  const anyEvent = CALENDAR_EVENTS.some((e) => {
    const s = parseISO(e.startDate);
    const en = parseISO(e.endDate);
    return !(en < rollingStart || s > rollingEnd);
  });
  if (!anyEvent) return null;

  let windowStart: Date;
  let windowEnd: Date;
  let months: { label: string; span: number }[];
  let showMonthHeader: boolean;

  if (isMobile) {
    const first = addMonths(rollingStart, monthOffset);
    windowStart = first;
    windowEnd = endOfMonth(first);
    months = [{ label: monthFmt.format(first), span: daysBetween(first, windowEnd) }];
    showMonthHeader = false; // month label rendered in the chevron nav below
  } else {
    windowStart = rollingStart;
    windowEnd = rollingEnd;
    months = [0, 1, 2].map((offset) => {
      const first = addMonths(rollingStart, offset);
      const last = endOfMonth(first);
      return {
        label: monthFmt.format(first),
        span: daysBetween(first, last),
      };
    });
    showMonthHeader = true;
  }

  const totalDays = daysBetween(windowStart, windowEnd);
  const placed = placeEventsInWindow(windowStart, windowEnd);

  return (
    <section className="py-12 md:py-16">
      <div className="container-page">
        <div className="rounded-2xl border border-border bg-card p-5 md:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-bold text-ink-900 md:text-2xl">Yaklaşan Eğitim Takvimi</h2>
            <span className="text-xs font-medium uppercase tracking-wider text-ink-500">
              {isMobile ? "Aylık Görünüm" : "3 Aylık Görünüm"}
            </span>
          </div>

          {isMobile && (
            <div className="mt-5 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setMonthOffset((v) => Math.max(0, v - 1))}
                disabled={monthOffset === 0}
                aria-label="Önceki ay"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/40 text-ink-700 transition disabled:cursor-not-allowed disabled:opacity-40 hover:enabled:border-brand/40 hover:enabled:text-brand"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-base font-semibold capitalize text-ink-900">{months[0].label}</span>
              <button
                type="button"
                onClick={() => setMonthOffset((v) => Math.min(2, v + 1))}
                disabled={monthOffset === 2}
                aria-label="Sonraki ay"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/40 text-ink-700 transition disabled:cursor-not-allowed disabled:opacity-40 hover:enabled:border-brand/40 hover:enabled:text-brand"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          <CalendarBody
            windowStart={windowStart}
            windowEnd={windowEnd}
            totalDays={totalDays}
            months={months}
            placed={placed}
            showMonthHeader={showMonthHeader}
          />
        </div>
      </div>
    </section>
  );
}
