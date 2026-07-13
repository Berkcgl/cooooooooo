import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Two-digit section index, e.g. "02". */
  index: string;
  /** Small monospace eyebrow label. */
  kicker: string;
  /** Main heading. */
  title: ReactNode;
  /** Giant duplicated word rendered behind as background typography. */
  ghost?: string;
  description?: ReactNode;
  className?: string;
}

/**
 * SectionHeading — numbered portfolio-style heading with an oversized ghost
 * word running behind the content as background typography.
 */
export function SectionHeading({
  index,
  kicker,
  title,
  ghost,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`relative ${className}`}>
      {ghost && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -left-2 -z-10 select-none font-mono text-[18vw] font-bold leading-none text-ink-900/[0.035] md:text-[10rem]"
        >
          {ghost}
        </span>
      )}
      <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
        <span>{index}</span>
        <span className="h-px w-8 bg-brand/40" />
        <span className="text-ink-500">{kicker}</span>
      </div>
      <h2 className="display-2 mt-5 max-w-3xl text-ink-900 text-balance">{title}</h2>
      {description && <p className="lead mt-5 max-w-2xl">{description}</p>}
    </div>
  );
}
