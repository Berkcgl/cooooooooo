import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { MetricsStrip } from "@/components/home/MetricsStrip";
import { About } from "@/components/home/About";
import { Ventures } from "@/components/home/Ventures";
import { Trainings } from "@/components/home/Trainings";
import { Expertise } from "@/components/home/Expertise";
import { Speaking } from "@/components/home/Speaking";
import { Publications } from "@/components/home/Publications";
import { Channels } from "@/components/home/Channels";
import { ContactCta } from "@/components/home/ContactCta";
import { BackToTop } from "@/components/landing/BackToTop";

const TITLE = "Cihan Özhan | Offensive AI Security · Researcher · Developer";
const DESC =
  "Cihan Özhan — Safebox, AISecLab ve Runbit kurucusu. Offensive AI Security araştırmacısı ve geliştiricisi. Agentic AI sistemleri, güvenlik ve canlı eğitim programları.";

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
  component: Home,
});

function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MetricsStrip />
        <About />
        <Ventures />
        <Trainings />
        <Expertise />
        <Speaking />
        <Publications />
        <Channels />
        <ContactCta />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
