import { useEffect, useState } from "react";

/**
 * ScrollReadout — subtle fixed monospace HUD in the corner showing live scroll
 * progress and cursor coordinates. Desktop only; hidden on touch / small
 * screens and for reduced-motion users (it updates on every move/scroll).
 */
export function ScrollReadout() {
  const [enabled, setEnabled] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });

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
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-6 right-6 z-40 hidden select-none font-mono text-[11px] leading-relaxed text-ink-500 md:block"
    >
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        <span>SCROLL {scroll.toFixed(0).padStart(3, "0")}%</span>
      </div>
      <div className="mt-1 text-ink-300">
        X:{pos.x.toString().padStart(4, "0")} Y:{pos.y.toString().padStart(4, "0")}
      </div>
    </div>
  );
}
