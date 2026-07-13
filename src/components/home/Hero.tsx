import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { PERSON, MASTERCLASS_ROUTE } from "@/lib/home-data";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-eyebrow]", { opacity: 0, y: 16, duration: 0.6 })
        .from("[data-hero-line]", { opacity: 0, yPercent: 110, duration: 0.9, stagger: 0.12 }, "-=0.2")
        .from("[data-hero-lead]", { opacity: 0, y: 20, duration: 0.7 }, "-=0.4")
        .from("[data-hero-cta]", { opacity: 0, y: 18, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from("[data-hero-glow]", { opacity: 0, scale: 0.85, duration: 1.4 }, 0);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28"
    >
      {/* Ambient accent glow (transform/opacity only) */}
      <div
        data-hero-glow
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="container-page max-w-4xl text-center">
        <span data-hero-eyebrow className="eyebrow justify-center">
          {PERSON.location}
        </span>

        <h1 className="display-1 mt-6 text-ink-900 text-balance">
          <span className="block overflow-hidden">
            <span data-hero-line className="block">
              {PERSON.name}
            </span>
          </span>
          <span className="mt-2 block overflow-hidden">
            <span data-hero-line className="block text-brand">
              Offensive AI &amp; Agentic Systems
            </span>
          </span>
        </h1>

        <p data-hero-lead className="lead mx-auto mt-7 max-w-2xl text-pretty">
          {PERSON.title}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="brand" size="xl" data-hero-cta>
            <Link to={MASTERCLASS_ROUTE}>Agentic AI Masterclass</Link>
          </Button>
          <Button asChild variant="brandOutline" size="xl" data-hero-cta>
            <a href="#girisimler">Girişimleri Gör</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
