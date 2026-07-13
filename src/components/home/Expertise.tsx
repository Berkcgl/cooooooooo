import { EXPERTISE } from "@/lib/home-data";
import { useReveal } from "@/hooks/useReveal";

export function Expertise() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-exp-group]", y: 30, stagger: 0.12 });

  return (
    <section id="uzmanlik" className="border-t border-border bg-secondary/30 py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Uzmanlık</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">Teknik yetkinlikler</h2>
        </div>

        <div ref={ref} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE.map((g) => (
            <div
              key={g.category}
              data-exp-group
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
                {g.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-sm font-medium text-ink-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
