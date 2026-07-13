import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * CookieConsent — session-only cookie preferences banner shown on every page.
 * Desktop: compact floating rectangle in the bottom-left corner (clear of the
 * bottom-right BackToTop button + ScrollReadout). Mobile: full-width bottom bar.
 * Choice is remembered for the session only (module-level flag) — no storage.
 */
let dismissedThisSession = false;

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (dismissedThisSession) return;
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    dismissedThisSession = true;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Çerez Tercihleri"
      className="animate-fade-in fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card p-4 shadow-lg sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-sm sm:rounded-2xl sm:border sm:p-5"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
          <Cookie className="h-4 w-4" />
        </span>
        <div>
          <h2 className="text-sm font-bold text-ink-900">Çerez Tercihleri</h2>
          <p className="mt-1 text-xs leading-relaxed text-ink-700">
            Bu site deneyiminizi iyileştirmek ve trafiği analiz etmek için çerezler kullanır.
            Detaylar için{" "}
            <Link
              to="/gizlilik-politikasi"
              className="font-medium text-brand hover:underline"
            >
              Gizlilik Politikası
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Button variant="brand" size="sm" className="flex-1" onClick={dismiss}>
          Kabul Et
        </Button>
        <Button variant="brandOutline" size="sm" className="flex-1" onClick={dismiss}>
          Reddet
        </Button>
      </div>
    </div>
  );
}
