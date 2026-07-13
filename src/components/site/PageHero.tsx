import type { ReactNode } from "react";

interface PageHeroProps {
  index: string;
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
}

/**
 * PageHero — top-of-subpage header. Includes top padding to clear the fixed
 * ticker + header, plus the numbered portfolio kicker and a ghost word.
 */
export function PageHero({ index, kicker, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-36 pb-16 md:pt-44 md:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="container-page">
        <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
          <span>{index}</span>
          <span className="h-px w-8 bg-brand/40" />
          <span className="text-ink-500">{kicker}</span>
        </div>
        <h1 className="display-1 mt-6 max-w-4xl text-ink-900 text-balance">{title}</h1>
        {description && <p className="lead mt-6 max-w-2xl text-pretty">{description}</p>}
      </div>
    </section>
  );
}
