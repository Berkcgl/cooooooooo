import { Button } from "@/components/ui/button";
import { APPLY_ANCHOR, CURRICULUM_ANCHOR } from "@/lib/landing-data";
import heroImg from "@/assets/hero-agentic.jpg";

interface HeroCompactProps {
  title: string;
  subtitle: string;
  typeTag: string;
  kicker?: string;
  showImage?: boolean;
}

export function HeroCompact({
  title,
  subtitle,
  typeTag,
  kicker = "EKİPLERE ÖZEL",
  showImage = true,
}: HeroCompactProps) {
  if (!showImage) {
    return (
      <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="container-page mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">{kicker}</span>
          <h1 className="display-1 mt-5 text-ink-900 text-balance">{title}</h1>
          <span className="mt-5 inline-flex items-center rounded-full border border-brand/30 bg-brand-soft/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            {typeTag}
          </span>
          <p className="lead mt-6 mx-auto max-w-2xl text-pretty">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="brand" size="xl">
              <a href={APPLY_ANCHOR}>Başvuru Yap</a>
            </Button>
            <Button asChild variant="brandOutline" size="xl">
              <a href={CURRICULUM_ANCHOR}>Müfredatı İncele</a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

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
