import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "create_review",
  title: "Publier un avis",
  description: "Publier un avis (titre, commentaire, note sur 5) sur un hébergement au nom de l'utilisateur connecté.",
  inputSchema: {
    accommodationId: z.string().describe("Identifiant de l'hébergement, ex. \"1\"."),
    title: z.string().describe("Titre court de l'avis."),
    comment: z.string().describe("Contenu de l'avis."),
    rating: z.number().describe("Note de 1 à 5."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ accommodationId, title, comment, rating }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Non authentifié" }], isError: true };
    }
    const note = Math.round(rating);
    if (note < 1 || note > 5) {
      return { content: [{ type: "text", text: "La note doit être comprise entre 1 et 5." }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("reviews")
      .insert({
        user_id: ctx.getUserId(),
        accommodation_id: accommodationId,
        title: title.trim(),
        comment: comment.trim(),
        rating: note,
      })
      .select("id, accommodation_id, title, rating, created_at");
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data?.[0] ?? null, null, 2) }],
      structuredContent: { review: data?.[0] ?? null },
    };
  },
});
