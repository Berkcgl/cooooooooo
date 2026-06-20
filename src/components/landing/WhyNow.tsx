import { WHY_NOW } from "@/lib/landing-data";

export function WhyNow() {
  return (
    <section id="neden" className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Neden Şimdi</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">
            Neden şimdi yapay zeka öğrenmelisiniz?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {WHY_NOW.map((c) => (
            <article
              key={c.title}
              className="card-hover flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <div className="text-5xl font-extrabold tracking-tight text-brand">{c.stat}</div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{c.body}</p>
              <p className="mt-5 border-t border-border pt-4 text-[11px] leading-snug text-ink-500">
                {c.source}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
