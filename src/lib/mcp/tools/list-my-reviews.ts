import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_my_reviews",
  title: "Mes avis",
  description: "Lister les avis publiés par l'utilisateur connecté sur les hébergements.",
  inputSchema: {
    limit: z.number().optional().describe("Nombre maximum d'avis (défaut 20)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Non authentifié" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("reviews")
      .select("id, accommodation_id, title, comment, rating, verified_stay, host_response, created_at")
      .eq("user_id", ctx.getUserId())
      .order("created_at", { ascending: false })
      .limit(Math.max(1, Math.min(limit ?? 20, 100)));
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data ?? [], null, 2) }],
      structuredContent: { reviews: data ?? [] },
    };
  },
});
