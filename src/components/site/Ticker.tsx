import { PERSON } from "@/lib/home-data";
import { LAST_UPDATED } from "@/lib/landing-data";

const ITEMS = [
  "OFFENSIVE AI SECURITY",
  PERSON.location.toUpperCase(),
  "SAFEBOX · AISECLAB · RUNBIT",
  "AGENTIC SYSTEMS",
  `SON GÜNCELLEME ${LAST_UPDATED.toUpperCase()}`,
  "RESEARCHER · DEVELOPER · EDUCATOR",
];

/**
 * Ticker — thin terminal/monospace status strip fixed at the very top.
 * Marquee scroll via the shared `marquee` keyframe; pauses on hover.
 */
export function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-8 overflow-hidden border-b border-border bg-background/90 backdrop-blur-md">
      <div className="group flex h-full items-center">
        <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-6 whitespace-nowrap pr-6 group-hover:[animation-play-state:paused]">
          {row.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 font-mono text-[10.5px] font-medium tracking-[0.12em] text-ink-500"
            >
              {item}
              <span className="text-brand">·</span>
            </span>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-6 whitespace-nowrap pr-6 group-hover:[animation-play-state:paused]"
        >
          {row.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 font-mono text-[10.5px] font-medium tracking-[0.12em] text-ink-500"
            >
              {item}
              <span className="text-brand">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
