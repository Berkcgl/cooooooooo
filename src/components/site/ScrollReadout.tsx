import { useEffect, useState } from "react";

/**
 * ScrollReadout — subtle fixed monospace HUD showing live scroll progress.
 * Positioned above the back-to-top button so the two never overlap.
 * Desktop only; hidden on touch / small screens and for reduced-motion users.
 */
export function ScrollReadout() {
  const [enabled, setEnabled] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px) and (pointer: fine)").matches;
    if (prefersReduced || !isDesktop) return;
    setEnabled(true);

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(h > 0 ? Math.min(100, Math.max(0, (window.scrollY / h) * 100)) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-24 right-6 z-40 hidden select-none items-center gap-2 font-mono text-[11px] leading-none text-ink-500 md:flex"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      <span>SCROLL {scroll.toFixed(0).padStart(3, "0")}%</span>
    </div>
  );
}
