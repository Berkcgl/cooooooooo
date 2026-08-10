import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { APPLY_ANCHOR, CURRICULUM_ANCHOR } from "@/lib/landing-data";
import defaultHeroImg from "@/assets/hero-agentic.jpg";

interface HeroCompactProps {
  title: string;
  subtitle: string;
  typeTag: string;
  kicker?: string;
  showImage?: boolean;
  /** Poster shown before the popup opens (SEO friendly: only the image loads initially). */
  heroImage?: string;
  /** Embed URL (YouTube/Vimeo) or direct video file URL played inside the popup. */
  promoVideoUrl?: string;
}

export function HeroCompact({
  title,
  subtitle,
  typeTag,
  kicker = "EKİPLERE ÖZEL",
  showImage = true,
  heroImage,
  promoVideoUrl,
}: HeroCompactProps) {
  const [videoOpen, setVideoOpen] = useState(false);

  if (!showImage) {
    return (
      <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="container-page mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">{kicker}</span>
          <h1 className="display-1 mt-5 text-ink-900 text-balance">{title}</h1>
          <span className="mt-5 inline-flex items-center rounded-full border border-brand/30 bg-brand-soft/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            {typeTag}
          </span>
          <p className="lead mt-6 mx-auto max-w-2xl text-pretty">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="brand" size="xl">
              <a href={APPLY_ANCHOR}>Başvuru Yap</a>
            </Button>
            <Button asChild variant="brandOutline" size="xl">
              <a href={CURRICULUM_ANCHOR}>Müfredatı İncele</a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const isFileVideo = !!promoVideoUrl && /\.(mp4|webm|ogg|mov)(\?|$)/i.test(promoVideoUrl);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow">{kicker}</span>
          <h1 className="display-1 mt-5 text-ink-900 text-balance">{title}</h1>
          <p className="lead mt-6 max-w-xl text-pretty">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="brand" size="xl">
              <a href={APPLY_ANCHOR}>Başvuru Yap</a>
            </Button>
            <Button asChild variant="brandOutline" size="xl">
              <a href={CURRICULUM_ANCHOR}>Müfredatı İncele</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-video w-full max-w-lg overflow-visible rounded-3xl border border-border bg-secondary/40 p-3 lg:mr-0 lg:ml-auto">
            <span className="pointer-events-none absolute right-6 -top-8 md:-top-10 text-sm font-semibold uppercase tracking-wider text-brand">
              {typeTag}
            </span>
            <img
              src={heroImage ?? defaultHeroImg}
              alt={`${title} — eğitim görseli`}
              width={1920}
              height={1080}
              loading="eager"
              className="h-full w-full rounded-2xl object-cover"
            />
            <button
              type="button"
              aria-label="Tanıtım videosunu oynat"
              onClick={() => setVideoOpen(true)}
              className="group absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-border bg-background/90 py-2 pl-2 pr-5 shadow-lg backdrop-blur transition-transform hover:-translate-y-0.5 hover:-translate-x-1/2"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-brand-foreground">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold text-ink-900">Tanıtım videosu</span>
                <span className="block text-xs text-ink-500">İzlemek için tıklayın</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl overflow-hidden p-0">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle>Tanıtım Videosu</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full bg-ink-900">
            {promoVideoUrl ? (
              isFileVideo ? (
                <video src={promoVideoUrl} controls autoPlay className="h-full w-full" />
              ) : (
                <iframe
                  src={promoVideoUrl}
                  title={`${title} tanıtım videosu`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              )
            ) : (
              <div className="grid h-full w-full place-items-center px-6 text-center">
                <div>
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand text-brand-foreground">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                  <p className="mt-4 text-sm font-medium text-brand-foreground">
                    Tanıtım videosu çok yakında.
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
