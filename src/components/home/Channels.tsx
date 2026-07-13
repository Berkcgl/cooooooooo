import { ArrowUpRight } from "lucide-react";
import { CHANNELS } from "@/lib/home-data";
import { useReveal } from "@/hooks/useReveal";

export function Channels() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-channel]", y: 20, scale: 0.96, stagger: 0.06 });

  return (
    <section id="kanallar" className="py-24 md:py-28">
      <div className="container-page text-center">
        <span className="eyebrow justify-center">Kanallar</span>
        <h2 className="display-2 mt-4 text-ink-900 text-balance">
          İçeriklerimi takip edin
        </h2>

        <div ref={ref} className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              data-channel
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-ink-900"
            >
              {c.label}
              <ArrowUpRight className="h-4 w-4 text-ink-300 transition-colors group-hover:text-brand" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
