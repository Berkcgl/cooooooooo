import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, MASTERCLASS_ROUTE } from "@/lib/home-data";
import ctaBg from "@/assets/cta-dark.jpg";

export function ContactCta() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cta-bg]",
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
      gsap.from("[data-cta-reveal]", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="iletisim"
      className="relative isolate overflow-hidden bg-surface py-28 text-surface-foreground md:py-36"
    >
      <img
        data-cta-bg
        src={ctaBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 -z-10 h-[130%] w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/85 via-surface/65 to-surface/90" />

      <div className="container-page max-w-3xl text-center">
        <span data-cta-reveal className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-foreground/80">
          İletişim
        </span>
        <h2 data-cta-reveal className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-balance">
          Birlikte çalışalım
        </h2>
        <p data-cta-reveal className="mx-auto mt-5 max-w-xl text-lg text-brand-foreground/80">
          Eğitim, proje, danışmanlık veya işbirliği için ulaşın.
        </p>

        <div data-cta-reveal className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="brand" size="xl">
            <a href={`mailto:${CONTACT.email}`}>
              <Mail className="h-5 w-5" />
              {CONTACT.email}
            </a>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-white/25 bg-white/5 text-surface-foreground hover:bg-white/10 hover:text-surface-foreground"
          >
            <Link to={MASTERCLASS_ROUTE}>
              Agentic AI Masterclass
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
