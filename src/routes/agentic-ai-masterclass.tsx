import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Ticker } from "@/components/site/Ticker";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/landing/Hero";
import { Metrics } from "@/components/landing/Metrics";
import { WhyNow } from "@/components/landing/WhyNow";
import { WhoFor } from "@/components/landing/WhoFor";
import { Outcomes } from "@/components/landing/Outcomes";
import { Curriculum } from "@/components/landing/Curriculum";
import { Instructor } from "@/components/landing/Instructor";
import { Organizations } from "@/components/landing/Organizations";
import { DigitalPresence } from "@/components/landing/DigitalPresence";
import { FreeLibrary } from "@/components/landing/FreeLibrary";
import { Talks } from "@/components/landing/Talks";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { BackToTop } from "@/components/landing/BackToTop";

const TITLE = "Agentic AI Masterclass | Cihan Özhan";
const DESC =
  "Sıfırdan başlayarak gerçek projeler üzerinde çalışın. 36+ saatlik uygulamalı eğitimle agentic AI sistemlerini kurmayı, ölçeklemeyi ve işinizde kullanmayı öğrenin.";

export const Route = createFileRoute("/agentic-ai-masterclass")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Masterclass,
});

function Masterclass() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Metrics />
        <WhyNow />
        <WhoFor />
        <Outcomes />
        <Curriculum />
        <Instructor />
        <Organizations />
        <DigitalPresence />
        <FreeLibrary />
        <Talks />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <BackToTop />
      <Toaster position="top-center" richColors />
    </>
  );
}
