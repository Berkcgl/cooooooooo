import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useCountUp — animates a number from 0 to `target` when it scrolls into view.
 * `format` lets the caller re-apply suffixes/prefixes (e.g. "300.000+").
 * Respects prefers-reduced-motion (jumps straight to the formatted target).
 */
export function useCountUp(
  target: number,
  { duration = 1.6, format }: { duration?: number; format?: (n: number) => string } = {},
) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState<string>(
    format ? format(0) : "0",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const render = (n: number) =>
      setDisplay(format ? format(n) : String(Math.round(n)));

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      render(target);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration,
        ease: "power2.out",
        onUpdate: () => render(obj.val),
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return { ref, display };
}
