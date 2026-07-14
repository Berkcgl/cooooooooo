import logo from "@/assets/cihan-ozhan-logo.svg";

const SOCIALS = [
  { label: "Udemy", url: "https://udemy.com/user/cihanozhan" },
  { label: "YouTube", url: "https://www.youtube.com/cihanozhan" },
  { label: "LinkedIn", url: "https://linkedin.com/in/cihanozhan" },
  { label: "GitHub", url: "https://github.com/cihanozhan" },
  { label: "Medium", url: "https://medium.com/@cihanozhan" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="flex items-center">
          <img src={logo} alt="Cihan Özhan" className="h-9 w-auto" />
        </div>


        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Sosyal medya">
          {SOCIALS.map((s) => (
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

        <p className="text-xs text-ink-500">
          © {new Date().getFullYear()} Cihan Özhan · Agentic AI Masterclass
        </p>
      </div>
    </footer>
  );
}
