import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Handles scroll behavior on client-side navigation:
 * - Route change without hash → scroll to top.
 * - Route change with hash (or hash change) → scroll to the target element.
 * Retries briefly so lazy-mounted sections have time to render.
 */
export function ScrollManager() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (hash) {
      const id = hash.replace(/^#/, "");
      let tries = 0;
      const tick = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        if (tries++ < 20) window.setTimeout(tick, 50);
      };
      tick();
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
