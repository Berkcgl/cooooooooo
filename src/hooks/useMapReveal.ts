import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useMapReveal — staggered reveal of map pins and their cards on scroll.
 * Pins ([data-pin]) pop in first, cards ([data-pin-card]) fade/slide after.
 * On prefers-reduced-motion everything stays visible at its final state.
 */
export function useMapReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const pins = gsap.utils.toArray<HTMLElement>("[data-pin]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-pin-card]");

      gsap.set(pins, { scale: 0, opacity: 0, transformOrigin: "center" });
      gsap.set(cards, { opacity: 0, y: 16 });

      gsap.to(pins, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: 0.14,
        scrollTrigger: { trigger: el, start: "top 70%", once: true },
      });
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.14,
        delay: 0.2,
        scrollTrigger: { trigger: el, start: "top 70%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
