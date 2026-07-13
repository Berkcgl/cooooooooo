import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MASTERCLASS_ROUTE } from "@/lib/home-data";
import { APPLY_ANCHOR } from "@/lib/landing-data";
import logo from "@/assets/main-website-logo.svg.asset.json";

type NavLink = { label: string; to?: string; href?: string };

const HOME_LINKS: NavLink[] = [
  { label: "Hakkında", href: "/#hakkinda" },
  { label: "Girişimler", href: "/#girisimler" },
  { label: "Konuşmalar", to: "/speaking" },
  { label: "Yayınlar", to: "/publications" },
  { label: "Deneyim", to: "/experience" },
  { label: "İletişim", href: "/#iletisim" },
];

const MASTERCLASS_LINKS: NavLink[] = [
  { label: "Neden Şimdi", href: "#neden" },
  { label: "Müfredat", href: "#mufredat" },
  { label: "Eğitmen", href: "#egitmen" },
  { label: "İçerikler", href: "#icerikler" },
  { label: "SSS", href: "#sss" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onMasterclass = pathname.startsWith(MASTERCLASS_ROUTE);

  const links = onMasterclass ? MASTERCLASS_LINKS : HOME_LINKS;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (l: NavLink, onClick?: () => void, base = "") => {
    const cls = `rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-secondary hover:text-ink-900 ${base}`;
    return l.to ? (
      <Link key={l.label} to={l.to} onClick={onClick} className={cls}>
        {l.label}
      </Link>
    ) : (
      <a key={l.label} href={l.href} onClick={onClick} className={cls}>
        {l.label}
      </a>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-8 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Ana menü">
        <Link to="/" className="flex items-center" aria-label="Cihan Özhan — ana sayfa">
          <img src={logo.url} alt="Cihan Özhan" className="h-8 w-auto md:h-10 dark:brightness-0 dark:invert" />
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => renderLink(l))}
          {onMasterclass ? (
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-secondary hover:text-ink-900"
            >
              Ana Sayfa
            </Link>
          ) : null}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {onMasterclass ? (
            <Button asChild variant="brand" size="lg" className="hidden sm:inline-flex">
              <a href={APPLY_ANCHOR}>Başvuru Yap</a>
            </Button>
          ) : (
            <Button asChild variant="brand" size="lg" className="hidden sm:inline-flex">
              <Link to={MASTERCLASS_ROUTE}>Masterclass</Link>
            </Button>
          )}
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
            {links.map((l) => renderLink(l, () => setOpen(false), "px-2 py-3"))}
            {onMasterclass ? (
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-ink-700 hover:bg-secondary"
              >
                Ana Sayfa
              </Link>
            ) : (
              <Link
                to={MASTERCLASS_ROUTE}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-brand hover:bg-secondary"
              >
                Masterclass
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
