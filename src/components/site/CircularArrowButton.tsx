import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface BaseProps {
  children?: ReactNode;
  /** Internal route (uses Link). */
  to?: string;
  /** External / anchor href (uses <a>). */
  href?: string;
  external?: boolean;
  className?: string;
  /** Compact = icon-only circle; default = label + circle. */
  compact?: boolean;
}

const circle =
  "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/40 bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground group-hover:border-brand";

/**
 * CircularArrowButton — the single, consistent CTA affordance used site-wide.
 * A label paired with a circular arrow that fills with the accent on hover.
 */
export function CircularArrowButton({
  children,
  to,
  href,
  external,
  className = "",
  compact = false,
}: BaseProps) {
  const content = (
    <span className={`group inline-flex items-center gap-3 ${className}`}>
      {!compact && children && (
        <span className="text-sm font-semibold tracking-tight text-ink-900 transition-colors group-hover:text-brand">
          {children}
        </span>
      )}
      <span className={circle}>
        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
      </span>
    </span>
  );

  if (to) {
    return (
      <Link to={to} aria-label={typeof children === "string" ? children : undefined}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      aria-label={typeof children === "string" ? children : undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
