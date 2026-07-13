import type { Institution } from "@/lib/landing-data";

/**
 * LogoTile — a single institution logo on a consistent neutral white card.
 * Every logo shares the same bounding box, max height and padding so the
 * strip reads evenly regardless of each source logo's aspect ratio or its
 * original background (holds up in both light and dark themes).
 *
 * When `org.url` is set the tile becomes an external link to that site.
 */
export function LogoTile({ org, className = "" }: { org: Institution; className?: string }) {
  const base = `grid h-16 w-36 shrink-0 place-items-center rounded-xl border border-black/5 bg-white px-2 shadow-sm ${className}`;

  const inner = org.logo ? (
    <img
      src={org.logo}
      alt={`${org.name} logosu`}
      className="max-h-10 w-auto max-w-full object-contain"
      loading="lazy"
    />
  ) : (
    <span aria-label={`${org.name} logosu`} className="h-6 w-20 rounded bg-ink-300/40" />
  );

  if (org.url) {
    return (
      <a
        href={org.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${org.name} web sitesi`}
        className={`${base} transition-shadow hover:shadow-md`}
      >
        {inner}
      </a>
    );
  }

  return <div className={base}>{inner}</div>;
}
