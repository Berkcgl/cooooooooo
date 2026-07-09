import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { APPLY_ANCHOR } from "@/lib/landing-data";
import logo from "@/assets/cihan-ozhan-logo.svg.asset.json";

const NAV_LINKS = [
  { href: "#neden", label: "Neden Şimdi" },
  { href: "#mufredat", label: "Müfredat" },
  { href: "#egitmen", label: "Eğitmen" },
  { href: "#icerikler", label: "İçerikler" },
  { href: "#sss", label: "SSS" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Ana menü">
        <a href="#top" className="flex items-center" aria-label="Cihan Özhan — ana sayfa">
          <img src={logo.url} alt="Cihan Özhan" className="h-9 w-auto" />
        </a>


        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-secondary hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="brand" size="lg" className="hidden sm:inline-flex">
            <a href={APPLY_ANCHOR}>Başvuru Yap</a>
          </Button>
          <button
            type="button"
            aria-label="Menüyü aç"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          >
            <span className="sr-only">Menü</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-ink-900" />
              <span className="block h-0.5 w-5 bg-ink-900" />
              <span className="block h-0.5 w-5 bg-ink-900" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-ink-700 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="brand" size="lg" className="mt-2">
              <a href={APPLY_ANCHOR} onClick={() => setOpen(false)}>
                Başvuru Yap
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
