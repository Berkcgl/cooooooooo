import { useState, type FormEvent, useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Yönetici Girişi | Cihan Özhan" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin" });
    });
  }, [navigate]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    if (!email || password.length < 6) {
      toast.error("Geçerli bir e-posta ve en az 6 karakterlik parola girin.");
      return;
    }

    setLoading(true);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      setLoading(false);
      if (error) {
        toast.error(error.message);
        return;
      }
      toast.success("Hesap oluşturuldu. Giriş yapabilirsiniz.");
      setMode("signin");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error("Giriş başarısız. Bilgilerinizi kontrol edin.");
      return;
    }
    navigate({ to: "/admin" });
  }

  return (
    <main className="grid min-h-screen place-items-center bg-secondary/40 px-4">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-background p-8 shadow-xl">
        <h1 className="text-xl font-bold text-ink-900">
          {mode === "signin" ? "Yönetici Girişi" : "Yönetici Hesabı Oluştur"}
        </h1>
        <p className="mt-1 text-sm text-ink-500">
          Başvuruları görüntülemek için giriş yapın.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-900">
              E-posta
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-ink-900">
              Parola
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              className="h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </div>
          <Button type="submit" variant="brand" size="xl" className="w-full" disabled={loading}>
            {loading ? "Lütfen bekleyin…" : mode === "signin" ? "Giriş Yap" : "Hesap Oluştur"}
          </Button>
        </form>

        <button
          type="button"
          onClick={() => setMode((m) => (m === "signin" ? "signup" : "signin"))}
          className="mt-4 w-full text-center text-sm font-medium text-brand hover:underline"
        >
          {mode === "signin"
            ? "Hesabınız yok mu? Oluşturun"
            : "Zaten hesabınız var mı? Giriş yapın"}
        </button>
      </div>
    </main>
  );
}
