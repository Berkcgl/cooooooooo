import { useState, type FormEvent } from "react";
import { CalendarDays, Hourglass, Users, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { COURSE } from "@/lib/landing-data";
import ctaBg from "@/assets/cta-dark.jpg";

const TR_PHONE = /^[0-9\s()+-]{7,20}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function FinalCta() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const kvkk = data.get("kvkk") === "on";

    const next: Record<string, string> = {};
    if (name.length < 2 || name.length > 100) next.name = "Lütfen ad soyadınızı girin.";
    if (!TR_PHONE.test(phone)) next.phone = "Geçerli bir telefon numarası girin.";
    if (!EMAIL.test(email) || email.length > 255) next.email = "Geçerli bir e-posta girin.";
    if (!kvkk) next.kvkk = "Devam etmek için KVKK onayı gereklidir.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error("Lütfen formdaki alanları kontrol edin.");
      return;
    }

    // No backend wired — surface success. Connect to Lovable Cloud or email to persist.
    setSubmitted(true);
    toast.success("Başvurunuz alındı! En kısa sürede sizinle iletişime geçeceğiz.");
    form.reset();
  }

  return (
    <section
      id="basvuru"
      className="relative isolate overflow-hidden bg-surface py-24 text-surface-foreground md:py-32"
    >
      {/* Intentional single dark "contrast moment" — NOT a switch to dark mode. */}
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/80 via-surface/60 to-surface/90" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-foreground/80">
            Son Adım
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl text-balance">
            Yeni dönem kontenjanı sınırlı. Yerinizi şimdi ayırtın.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <CalendarDays className="h-5 w-5 text-brand-foreground/80" />
              <div className="mt-3 text-xs uppercase tracking-wide text-brand-foreground/60">
                Başlangıç
              </div>
              <div className="mt-1 text-sm font-semibold">{COURSE.cohortStart}</div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <Hourglass className="h-5 w-5 text-brand-foreground/80" />
              <div className="mt-3 text-xs uppercase tracking-wide text-brand-foreground/60">
                Son Başvuru
              </div>
              <div className="mt-1 text-sm font-semibold">{COURSE.applicationDeadline}</div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <Users className="h-5 w-5 text-brand-foreground/80" />
              <div className="mt-3 text-xs uppercase tracking-wide text-brand-foreground/60">
                Kalan Kontenjan
              </div>
              <div className="mt-1 text-sm font-semibold">
                {COURSE.seatsLeft} / {COURSE.seatsTotal}
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-brand-foreground/70">
            Son 30 günde {COURSE.preRegistrations}+ kişi ön kayıt oluşturdu.
          </p>
        </div>

        <div className="rounded-3xl border border-white/15 bg-background p-6 text-foreground shadow-2xl md:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-brand" />
              <h3 className="mt-4 text-xl font-bold text-ink-900">Başvurunuz alındı</h3>
              <p className="mt-2 max-w-xs text-sm text-ink-700">
                Ekibimiz uygunluk ve hedeflerinizi konuşmak için kısa süre içinde sizinle iletişime
                geçecek.
              </p>
              <Button
                variant="brandOutline"
                size="lg"
                className="mt-6"
                onClick={() => setSubmitted(false)}
              >
                Yeni başvuru
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-ink-900">Başvuru Yap</h3>
                <p className="mt-1 text-sm text-ink-500">
                  Formu doldurun, sizi arayalım. Kontenjan sınırlıdır.
                </p>
              </div>

              <Field label="Ad Soyad" name="name" type="text" error={errors.name} autoComplete="name" />
              <Field
                label="Telefon"
                name="phone"
                type="tel"
                error={errors.phone}
                autoComplete="tel"
                placeholder="+90 5xx xxx xx xx"
              />
              <Field
                label="E-posta"
                name="email"
                type="email"
                error={errors.email}
                autoComplete="email"
              />

              <div>
                <label className="flex items-start gap-3 text-sm text-ink-700">
                  <input
                    type="checkbox"
                    name="kvkk"
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-input accent-[oklch(0.582_0.224_263.5)]"
                  />
                  <span>
                    Kişisel verilerimin{" "}
                    <a href="#" className="font-medium text-brand underline underline-offset-2">
                      KVKK Aydınlatma Metni
                    </a>{" "}
                    kapsamında işlenmesine ve benimle iletişime geçilmesine onay veriyorum.
                  </span>
                </label>
                {errors.kvkk && <p className="mt-1.5 text-xs text-destructive">{errors.kvkk}</p>}
              </div>

              <Button type="submit" variant="brand" size="xl" className="w-full">
                Başvuruyu Gönder
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  error,
  ...rest
}: {
  label: string;
  name: string;
  type: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        className={`h-11 w-full rounded-lg border bg-background px-3.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:ring-2 focus:ring-brand/40 ${
          error ? "border-destructive" : "border-input focus:border-brand"
        }`}
        {...rest}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
