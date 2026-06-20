import { Bot, Workflow, Plug, Database, ShieldCheck, Rocket, type LucideIcon } from "lucide-react";
import { OUTCOMES } from "@/lib/landing-data";

const ICONS: Record<string, LucideIcon> = {
  Bot,
  Workflow,
  Plug,
  Database,
  ShieldCheck,
  Rocket,
};

export function Outcomes() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Kazanımlar</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">
            Eğitim sonunda neler yapabileceksiniz?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((o) => {
            const Icon = ICONS[o.icon] ?? Bot;
            return (
              <article
                key={o.title}
                className="card-hover rounded-2xl border border-border bg-card p-7"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-brand-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{o.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
