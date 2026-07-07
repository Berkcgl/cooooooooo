import { ExternalLink } from "lucide-react";
import { PRESENCE, LAST_UPDATED } from "@/lib/landing-data";

export function DigitalPresence() {
  return (
    <section id="icerikler" className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Dijital Varlık</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">
            300.000+ Öğrenci
          </h2>
          <p className="lead mt-4">
            Tek bir kursla değil, yıllara yayılan bir içerik ekosistemiyle karşınızdayım.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PRESENCE.map((p) => (
            <a
              key={p.platform}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group flex flex-col justify-between rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-start justify-between">
                <span className="text-base font-bold text-ink-900">{p.platform}</span>
                <ExternalLink className="h-4 w-4 text-ink-300 transition-colors group-hover:text-brand" />
              </div>
              <div className="mt-6">
                <div className="text-sm font-semibold text-brand">{p.followers}</div>
                <div className="mt-1 text-xs text-ink-500">{p.handle}</div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink-500">
          Takipçi sayıları son güncelleme: {LAST_UPDATED}. İdeal olarak her platformun herkese açık
          API/oEmbed'i ile canlı çekilmelidir.
        </p>
      </div>
    </section>
  );
}
