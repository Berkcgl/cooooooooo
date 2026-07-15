import { Toaster } from "@/components/ui/sonner";
import { Ticker } from "@/components/site/Ticker";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroCompact } from "@/components/landing/HeroCompact";
import { Metrics } from "@/components/landing/Metrics";
import { WhyNow } from "@/components/landing/WhyNow";
import { WhoForVariant } from "@/components/landing/WhoForVariant";
import { Outcomes } from "@/components/landing/Outcomes";
import { CurriculumFlex } from "@/components/landing/CurriculumFlex";
import { Instructor } from "@/components/landing/Instructor";
import { Organizations } from "@/components/landing/Organizations";
import { Testimonials } from "@/components/landing/Testimonials";
import { FaqCustom } from "@/components/landing/FaqCustom";
import { PricingSimple } from "@/components/landing/PricingSimple";
import { FinalCtaSimple } from "@/components/landing/FinalCtaSimple";
import { BackToTop } from "@/components/landing/BackToTop";
import { ScrollReadout } from "@/components/site/ScrollReadout";
import type { TrainingPageContent } from "@/lib/trainings-content";

/**
 * Shared page shell for the 6 "Pasif" training landing pages.
 * Mirrors the /agentic-ai-masterclass section order with the compact hero,
 * variant "who for", flexible curriculum, and simplified pricing/CTA.
 */
export function TrainingLanding({ content }: { content: TrainingPageContent }) {
  return (
    <>
      <Ticker />
      <SiteHeader />
      <ScrollReadout />
      <main>
        <HeroCompact
          title={content.title}
          subtitle={content.subtitle}
          typeTag={content.typeTag}
        />
        <Metrics />
        <WhyNow />
        <WhoForVariant variant={content.whoForVariant} />
        <Outcomes />
        <CurriculumFlex
          mode={content.curriculumMode}
          modules={content.modules}
          flatItems={content.flatItems}
          footnote={content.footnote}
        />
        <Instructor />
        <Organizations />
        <Testimonials />
        <FaqCustom items={content.faq} />
        <PricingSimple />
        <FinalCtaSimple />
      </main>
      <SiteFooter />
      <BackToTop />
      <Toaster position="top-center" richColors />
    </>
  );
}
