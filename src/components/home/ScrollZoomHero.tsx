import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CircularArrowButton } from "@/components/site/CircularArrowButton";
import { useScrollZoom } from "@/hooks/useScrollZoom";
import { PERSON, MASTERCLASS_ROUTE } from "@/lib/home-data";
import heroNetwork from "@/assets/hero-network-globe.jpg.asset.json";

export function ScrollZoomHero() {
  const zoomRef = useScrollZoom<HTMLDivElement>({
    target: "[data-hero-visual]",
    from: 1,
    to: 1.75,
  });
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = introRef.current;
    if (!el || typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-eyebrow]", { opacity: 0, y: 16, duration: 0.6 })
        .from("[data-hero-line]", { opacity: 0, yPercent: 110, duration: 0.9, stagger: 0.12 }, "-=0.2")
        .from("[data-hero-tag]", { opacity: 0, y: 20, duration: 0.7 }, "-=0.4")
        .from("[data-hero-cta]", { opacity: 0, y: 18, duration: 0.6 }, "-=0.4");
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={zoomRef} id="top" className="dark relative h-[130vh] bg-background md:h-[160vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-background">
        {/* Soft brand-tinted glow behind the network */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl"
        />
        {/* Scroll-scrubbed camera push — wide glowing network globe anchored to the bottom */}
        <img
          data-hero-visual
          src={heroNetwork.url}
          alt="Soyut yapay zeka sinir ağı görselleştirmesi"
          width={2000}
          height={1125}
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full origin-bottom object-cover object-center opacity-90 will-change-transform md:inset-x-0 md:bottom-0 md:top-auto md:h-auto md:object-bottom"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/40 to-background" />


        <div ref={introRef} data-hero-fade className="container-page max-w-4xl text-center">
          <span
            data-hero-eyebrow
            className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {PERSON.location}
          </span>

          <h1 className="display-1 mt-6 text-ink-900 text-balance">
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                {PERSON.name}
              </span>
            </span>
          </h1>

          <p data-hero-tag className="lead mx-auto mt-7 max-w-2xl text-pretty text-ink-700">
            {PERSON.title}
          </p>

          <div data-hero-cta className="mt-10 flex items-center justify-center">
            <CircularArrowButton to={MASTERCLASS_ROUTE}>
              Agentic AI Masterclass
            </CircularArrowButton>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
          Kaydır ↓
        </div>
      </div>
    </section>
  );
}
