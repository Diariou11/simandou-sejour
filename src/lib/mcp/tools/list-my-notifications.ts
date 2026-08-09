import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_my_notifications",
  title: "Mes notifications",
  description: "Lister les notifications de l'utilisateur connecté, les plus récentes d'abord.",
  inputSchema: {
    unreadOnly: z.boolean().optional().describe("Ne renvoyer que les notifications non lues."),
    limit: z.number().optional().describe("Nombre maximum de notifications (défaut 20)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ unreadOnly, limit }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Non authentifié" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    let query = supabase
      .from("notifications")
      .select("id, title, message, type, link, read, created_at")
      .eq("user_id", ctx.getUserId())
      .order("created_at", { ascending: false })
      .limit(Math.max(1, Math.min(limit ?? 20, 100)));
    if (unreadOnly) query = query.eq("read", false);
    const { data, error } = await query;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data ?? [], null, 2) }],
      structuredContent: { notifications: data ?? [] },
    };
  },
});
