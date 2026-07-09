import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export interface ApplicationRow {
  id: string;
  name: string;
  phone: string;
  email: string;
  kvkk_consent: boolean;
  created_at: string;
}

/** Admin-only: list all form applications, newest first. */
export const getApplications = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<ApplicationRow[]> => {
    const { supabase, userId } = context;

    const { data: isAdmin, error: roleError } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (roleError) throw new Error("Yetki doğrulanamadı.");
    if (!isAdmin) throw new Error("Bu sayfaya erişim yetkiniz yok.");

    const { data, error } = await supabase
      .from("applications")
      .select("id, name, phone, email, kvkk_consent, created_at")
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return (data ?? []) as ApplicationRow[];
  });
