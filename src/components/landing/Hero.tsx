import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { APPLY_ANCHOR, CURRICULUM_ANCHOR, COURSE, INSTITUTIONS } from "@/lib/landing-data";
import heroImg from "@/assets/hero-agentic.jpg";

// Intro video — replace with the uploaded intro video URL once available.
const INTRO_VIDEO_SRC = "";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow">KONTENJAN SINIRLIDIR</span>
          <h1 className="display-1 mt-5 text-ink-900 text-balance">
            Agentic AI <span className="text-brand">Masterclass</span>
          </h1>
          <p className="lead mt-6 max-w-xl text-pretty">
            Sıfırdan başlayarak gerçek projeler üzerinde çalışın. {COURSE.hours} saatlik uygulamalı
            eğitimle yapay zekayı işinizde ve kariyerinizde kullanmayı öğrenin.
          </p>

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
          <div className="relative mx-auto aspect-video w-full max-w-lg rounded-3xl border border-border bg-secondary/40 p-4">
            <img
              src={heroImg}
              alt="Agentic AI sistem mimarisi: merkezi modeli araçlara bağlayan otonom agent ağı"
              width={1024}
              height={1024}
              className="h-full w-full rounded-2xl object-cover"
            />
            <button
              type="button"
              aria-label="Tanıtım videosunu oynat"
              onClick={() => setVideoOpen(true)}
              className="group absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-border bg-background/90 py-2 pl-2 pr-5 shadow-lg backdrop-blur transition-transform hover:-translate-y-0.5 hover:-translate-x-1/2"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-brand-foreground">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold text-ink-900">Cihan'dan 60 sn</span>
                <span className="block text-xs text-ink-500">Tanıtım videosu</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle>Tanıtım Videosu</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full bg-ink-900">
            {INTRO_VIDEO_SRC ? (
              <video
                src={INTRO_VIDEO_SRC}
                controls
                autoPlay
                className="h-full w-full"
              />
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
