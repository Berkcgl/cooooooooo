import { Button } from "@/components/ui/button";
import { APPLY_ANCHOR, CURRICULUM_ANCHOR } from "@/lib/landing-data";
import heroImg from "@/assets/hero-agentic.jpg";

interface HeroCompactProps {
  title: string;
  subtitle: string;
  typeTag: string;
  kicker?: string;
}

export function HeroCompact({
  title,
  subtitle,
  typeTag,
  kicker = "EKİPLERE ÖZEL",
}: HeroCompactProps) {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow">{kicker}</span>
          <h1 className="display-1 mt-5 text-ink-900 text-balance">{title}</h1>
          <p className="lead mt-6 max-w-xl text-pretty">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="brand" size="xl">
              <a href={APPLY_ANCHOR}>Başvuru Yap</a>
            </Button>
            <Button asChild variant="brandOutline" size="xl">
              <a href={CURRICULUM_ANCHOR}>Müfredatı İncele</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-video w-full max-w-lg overflow-visible rounded-3xl border border-border bg-secondary/40 p-3 lg:mr-0 lg:ml-auto">
            <span className="pointer-events-none absolute right-6 -top-8 md:-top-10 text-sm font-semibold uppercase tracking-wider text-brand">
              {typeTag}
            </span>
            <img
              src={heroImg}
              alt={`${title} — eğitim görseli`}
              width={1024}
              height={1024}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
