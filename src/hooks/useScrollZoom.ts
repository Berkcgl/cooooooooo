import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollZoomOptions = {
  /** Selector for the element to scale (relative to the returned ref). */
  target: string;
  from?: number;
  to?: number;
};

/**
 * useScrollZoom — scrubbed camera-push. Scales `target` continuously as the
 * container scrolls through the viewport (scrubbed to scrollbar, not timed).
 * Disabled on prefers-reduced-motion (element stays at rest scale).
 * Uses transform only.
 */
export function useScrollZoom<T extends HTMLElement = HTMLDivElement>(
  options: ScrollZoomOptions,
) {
  const ref = useRef<T>(null);
  const { target, from = 1, to = 1.6 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        target,
        { scale: from },
        {
          scale: to,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
      // Subtle fade of the copy as we push in.
      gsap.to("[data-hero-fade]", {
        opacity: 0,
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
