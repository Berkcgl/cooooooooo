import { Check, X } from "lucide-react";
import { NOT_FOR } from "@/lib/landing-data";

const SECURITY_PERSONAS = [
  {
    title: "Güvenlik Mühendisleri",
    body: "Yapay zeka sistemlerine yönelik saldırı yüzeylerini anlamak ve red team/blue team pratikleri geliştirmek isteyenler.",
  },
  {
    title: "AI/ML Mühendisleri",
    body: "Geliştirdikleri modelleri ve sistemleri üretime almadan önce güvenlik açısından değerlendirmek isteyenler.",
  },
  {
    title: "Kurumsal Ekipler",
    body: "Yapay zeka güvenliği farkındalığını ve pratik yetkinliğini organizasyon genelinde yaygınlaştırmak isteyen şirketler ve kamu kurumları.",
  },
];

const DEPLOYMENT_PERSONAS = [
  {
    title: "ML/AI Mühendisleri",
    body: "Geliştirdikleri modelleri laboratuvardan üretime taşımak isteyen mühendisler.",
  },
  {
    title: "DevOps/MLOps Ekipleri",
    body: "Model serving, ölçekleme ve altyapı optimizasyonu konusunda derinleşmek isteyen ekipler.",
  },
  {
    title: "Kurumsal Teknoloji Ekipleri",
    body: "Yapay zeka sistemlerini güvenli ve verimli şekilde production'a almak isteyen organizasyonlar.",
  },
];

export function WhoForVariant({ variant }: { variant: "security" | "deployment" }) {
  const personas = variant === "security" ? SECURITY_PERSONAS : DEPLOYMENT_PERSONAS;

  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Kimler İçin</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">Bu program kimler için?</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {personas.map((p) => (
            <article
              key={p.title}
              className="card-hover rounded-2xl border border-border bg-card p-7"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-7">
          <h3 className="text-base font-bold text-ink-900">Bu program kimler için uygun değil?</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {NOT_FOR.map((n) => (
              <li key={n} className="flex gap-3 text-sm text-ink-700">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive">
                  <X className="h-3 w-3" />
                </span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
