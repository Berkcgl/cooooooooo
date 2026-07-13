import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { TRAININGS } from "@/lib/home-data";
import { TALKS, PRESENTATIONS, PUBLICATIONS, COURSES } from "@/lib/landing-data";

interface Item {
  title: string;
  meta: string;
  url: string;
  internal?: boolean;
}

interface Column {
  label: string;
  to: string;
  items: Item[];
}

const trainingItems: Item[] = [
  ...TRAININGS.map((t) => ({ title: t.title, meta: t.meta, url: t.url, internal: t.internal })),
  ...COURSES.map((c) => ({ title: c.title, meta: c.meta, url: c.url })),
].slice(0, 7);

const COLUMNS: Column[] = [
  {
    label: "Eğitimler & Kurslar",
    to: "/trainings",
    items: trainingItems,
  },
  {
    label: "Konuşmalar",
    to: "/speaking",
    items: TALKS.slice(0, 7).map((t) => ({ title: t.title, meta: t.meta, url: t.url })),
  },
  {
    label: "Sunumlar & Yayınlar",
    to: "/publications",
    items: [...PUBLICATIONS, ...PRESENTATIONS]
      .slice(0, 7)
      .map((t) => ({ title: t.title, meta: t.meta, url: t.url })),
  },
];


export function Featured() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-feat-col]", y: 30, stagger: 0.12 });

  return (
    <section id="secki" className="border-t border-border bg-secondary/30 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="04"
          kicker="Seçki"
          ghost="WORK"
          title="Öne çıkan çalışmalar"
          description="Tüm arşiv alt sayfalarda — burada birkaç öne çıkan başlık."
        />

        <div ref={ref} className="mt-14 grid gap-8 md:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.label} data-feat-col>
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  {col.label}
                </h3>
                <Link
                  to={col.to}
                  className="inline-flex items-center gap-1 text-xs font-medium text-ink-500 transition-colors hover:text-brand"
                >
                  Tümünü gör
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <ul className="mt-5 space-y-3">
                {col.items.map((it) =>
                  it.internal ? (
                    <li key={it.title}>
                      <Link
                        to={it.url}
                        className="card-hover group block rounded-xl border border-border bg-card p-4"
                      >
                        <FeaturedRow title={it.title} meta={it.meta} />
                      </Link>
                    </li>
                  ) : (
                    <li key={it.title}>
                      <a
                        href={it.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-hover group block rounded-xl border border-border bg-card p-4"
                      >
                        <FeaturedRow title={it.title} meta={it.meta} />
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedRow({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-sm font-semibold leading-snug text-ink-900">{title}</p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink-500">{meta}</p>
      </div>
      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-brand" />
    </div>
  );
}
