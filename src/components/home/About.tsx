import { ABOUT_PARAGRAPHS } from "@/lib/home-data";
import { useReveal } from "@/hooks/useReveal";

export function About() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-about-line]", y: 24, stagger: 0.15 });

  return (
    <section id="hakkinda" className="py-24 md:py-32">
      <div ref={ref} className="container-page max-w-3xl">
        <span data-about-line className="eyebrow">
          Hakkında
        </span>
        <div className="mt-6 space-y-6">
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <p
              key={i}
              data-about-line
              className={
                i === 0
                  ? "text-2xl font-semibold leading-snug tracking-tight text-ink-900 text-balance md:text-3xl"
                  : "lead"
              }
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
