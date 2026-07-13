import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { CircularArrowButton } from "@/components/site/CircularArrowButton";
import { useReveal } from "@/hooks/useReveal";
import { TRAININGS, MASTERCLASS_ROUTE } from "@/lib/home-data";
import { COURSE } from "@/lib/landing-data";

export function FlagshipCourse() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-flag]", y: 30, stagger: 0.1 });
  const flagship = TRAININGS.find((t) => t.featured) ?? TRAININGS[0];

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div ref={ref} className="container-page">
        <div
          data-flag
          className="relative overflow-hidden rounded-3xl border border-brand/30 bg-brand-soft/50 p-8 md:p-14"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-10 select-none font-mono text-[9rem] font-bold leading-none text-brand/10 md:text-[14rem]"
          >
            AI
          </span>

          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            <Star className="h-3.5 w-3.5 fill-current" />
            Amiral gemisi program
          </span>

          <h2 className="display-2 mt-5 max-w-2xl text-ink-900 text-balance">{flagship.title}</h2>
          <p className="lead mt-5 max-w-2xl">{flagship.body}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wide text-ink-500">
            <span>{COURSE.hours} saat içerik</span>
            <span className="text-brand">·</span>
            <span>{COURSE.modules} modül</span>
            <span className="text-brand">·</span>
            <span>{COURSE.format}</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CircularArrowButton to={MASTERCLASS_ROUTE}>
              Programı incele
            </CircularArrowButton>
            <Link
              to="/trainings"
              className="text-sm font-medium text-ink-700 underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              Tüm eğitimler
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
