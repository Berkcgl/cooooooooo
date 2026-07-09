import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { LogOut, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { getApplications, type ApplicationRow } from "@/lib/applications.functions";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Başvurular | Yönetim" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const fetchApplications = useServerFn(getApplications);
  const [rows, setRows] = useState<ApplicationRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchApplications()
      .then((data) => setRows(data))
      .catch((e) => setError(e instanceof Error ? e.message : "Başvurular yüklenemedi."))
      .finally(() => setLoading(false));
  }, [fetchApplications]);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <main className="min-h-screen bg-secondary/40 py-12">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-ink-900">Başvurular</h1>
            <p className="mt-1 text-sm text-ink-500">
              {loading ? "Yükleniyor…" : `Toplam ${rows.length} başvuru`}
            </p>
          </div>
          <Button variant="brandOutline" size="lg" onClick={signOut}>
            <LogOut className="h-4 w-4" />
            Çıkış Yap
          </Button>
        </div>

        {error ? (
          <div className="mt-8 rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
            {error}
          </div>
        ) : loading ? (
          <div className="mt-8 rounded-2xl border border-border bg-card p-10 text-center text-sm text-ink-500">
            Yükleniyor…
          </div>
        ) : rows.length === 0 ? (
          <div className="mt-8 flex flex-col items-center rounded-2xl border border-border bg-card p-12 text-center">
            <Inbox className="h-10 w-10 text-ink-300" />
            <p className="mt-4 text-sm text-ink-500">Henüz başvuru yok.</p>
          </div>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-border bg-secondary/50 text-xs uppercase tracking-wide text-ink-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Ad Soyad</th>
                  <th className="px-5 py-3 font-semibold">Telefon</th>
                  <th className="px-5 py-3 font-semibold">E-posta</th>
                  <th className="px-5 py-3 font-semibold">Tarih</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((r) => (
                  <tr key={r.id} className="hover:bg-secondary/40">
                    <td className="px-5 py-3 font-medium text-ink-900">{r.name}</td>
                    <td className="px-5 py-3 text-ink-700">
                      <a href={`tel:${r.phone}`} className="hover:text-brand">
                        {r.phone}
                      </a>
                    </td>
                    <td className="px-5 py-3 text-ink-700">
                      <a href={`mailto:${r.email}`} className="hover:text-brand">
                        {r.email}
                      </a>
                    </td>
                    <td className="px-5 py-3 text-ink-500">
                      {new Date(r.created_at).toLocaleString("tr-TR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
