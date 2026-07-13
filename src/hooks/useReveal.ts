import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type RevealOptions = {
  /** CSS selector for children to stagger. If omitted, the element itself animates. */
  selector?: string;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
  once?: boolean;
};

/**
 * useReveal — scroll-triggered enter animation (transform/opacity only).
 * Respects prefers-reduced-motion by leaving content in its final state.
 * Returns a ref to attach to the container element.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const {
      selector,
      y = 28,
      x = 0,
      scale = 1,
      duration = 0.8,
      stagger = 0.1,
      delay = 0,
      start = "top 85%",
      once = true,
    } = options;

    const targets = selector
      ? Array.from(el.querySelectorAll(selector))
      : [el];
    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y, x, scale });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        stagger,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          once,
        },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
