import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { accommodations } from "../catalog";

export default defineTool({
  name: "get_accommodation",
  title: "Détail d'un hébergement",
  description: "Obtenir la fiche détaillée d'un hébergement de Simandou Séjour à partir de son identifiant.",
  inputSchema: { id: z.string().describe("Identifiant de l'hébergement, ex. \"1\".") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const item = accommodations.find((a) => a.id === id);
    if (!item) {
      return { content: [{ type: "text", text: `Aucun hébergement avec l'identifiant ${id}.` }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(item, null, 2) }],
      structuredContent: { accommodation: item },
    };
  },
});
