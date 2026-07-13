import { Link } from "@tanstack/react-router";
import { CHANNELS } from "@/lib/home-data";
import logo from "@/assets/main-website-logo.svg.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <Link to="/" className="flex items-center" aria-label="Cihan Özhan — ana sayfa">
          <img src={logo.url} alt="Cihan Özhan" className="h-11 w-auto dark:brightness-0 dark:invert" />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Kanallar">
          {CHANNELS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink-700 transition-colors hover:text-brand"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-2 md:items-end">
          <Link
            to="/gizlilik-politikasi"
            className="text-sm font-medium text-ink-700 transition-colors hover:text-brand"
          >
            Gizlilik Politikası
          </Link>
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Cihan Özhan
          </p>
        </div>
      </div>
    </footer>
  );
}
