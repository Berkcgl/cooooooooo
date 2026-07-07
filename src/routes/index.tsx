import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/landing/Nav";
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
import { Footer } from "@/components/landing/Footer";
import { BackToTop } from "@/components/landing/BackToTop";

const TITLE = "Agentic AI Uzmanlık Programı | Cihan Özhan";
const DESC =
  "Sıfırdan başlayarak gerçek projeler üzerinde çalışın. 36+ saatlik uygulamalı eğitimle agentic AI sistemlerini kurmayı, ölçeklemeyi ve işinizde kullanmayı öğrenin.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
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
      <Footer />
      <Toaster position="top-center" richColors />
    </>
  );
}
