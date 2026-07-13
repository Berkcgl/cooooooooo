import { createFileRoute } from "@tanstack/react-router";
import { Ticker } from "@/components/site/Ticker";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ScrollReadout } from "@/components/site/ScrollReadout";
import { ScrollZoomHero } from "@/components/home/ScrollZoomHero";
import { About } from "@/components/home/About";
import { Ventures } from "@/components/home/Ventures";
import { TeachingMap } from "@/components/home/TeachingMap";
import { StatCallouts } from "@/components/home/StatCallouts";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { Featured } from "@/components/home/Featured";
import { FlagshipCourse } from "@/components/home/FlagshipCourse";
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
      <Ticker />
      <SiteHeader />
      <ScrollReadout />
      <main>
        <ScrollZoomHero />
        <About />
        <Ventures />
        <TeachingMap />
        <StatCallouts />
        <LogoMarquee />
        <Featured />
        <FlagshipCourse />
        <ContactCta />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
