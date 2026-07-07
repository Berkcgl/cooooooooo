import { PlayCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FREE_VIDEOS, YOUTUBE_CHANNEL } from "@/lib/landing-data";

/** Derive a YouTube thumbnail URL from a watch?v= link; null for playlists/other. */
function youtubeThumb(url: string): string | null {
  const match = url.match(/[?&]v=([\w-]{11})/);
  return match ? `https://i.ytimg.com/vi/${match[1]}/hqdefault.jpg` : null;
}


export function FreeLibrary() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Ücretsiz Kütüphane</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">
            Ücretsiz eğitimlerle başlayın
          </h2>
          <p className="lead mt-4">
            Önce ücretsiz içeriklerle anlatım tarzımı tanıyın. Aşağıdakiler YouTube kanalında
            yayında olan gerçek serilerden.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FREE_VIDEOS.map((v) => (
            <a
              key={v.title}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative grid aspect-video place-items-center bg-gradient-to-br from-ink-900 to-brand/80">
                <PlayCircle className="h-12 w-12 text-brand-foreground/90 transition-transform group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold leading-snug text-ink-900">{v.title}</h3>
                <p className="mt-1 text-xs text-ink-500">{v.meta}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="brandOutline" size="xl">
            <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer">
              Tüm Videoları Gör
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
