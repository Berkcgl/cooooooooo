import type { Institution } from "@/lib/landing-data";

/**
 * LogoTile — a single institution logo on a consistent neutral white card.
 * Every logo shares the same bounding box, max height and padding so the
 * strip reads evenly regardless of each source logo's aspect ratio or its
 * original background (holds up in both light and dark themes).
 */
export function LogoTile({ org, className = "" }: { org: Institution; className?: string }) {
  return (
    <div
      className={`grid h-16 w-36 shrink-0 place-items-center rounded-xl border border-black/5 bg-white px-5 shadow-sm ${className}`}
    >
      {org.logo ? (
        <img
          src={org.logo}
          alt={`${org.name} logosu`}
          className="max-h-8 w-auto max-w-full object-contain"
          loading="lazy"
        />
      ) : (
        <span aria-label={`${org.name} logosu`} className="h-6 w-20 rounded bg-ink-300/40" />
      )}
    </div>
  );
}
