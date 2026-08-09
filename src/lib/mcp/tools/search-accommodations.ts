import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { accommodations } from "../catalog";

export default defineTool({
  name: "search_accommodations",
  title: "Rechercher des hébergements",
  description:
    "Rechercher les hébergements du catalogue Simandou Séjour par ville, région, type ou prix maximum.",
  inputSchema: {
    query: z.string().optional().describe("Texte libre (nom, ville, région, équipement)."),
    city: z.string().optional().describe("Ville, ex. Conakry."),
    type: z
      .enum(["hotel", "motel", "auberge", "residence"])
      .optional()
      .describe("Type d'hébergement."),
    maxPrice: z.number().optional().describe("Prix maximum par nuit en GNF."),
    limit: z.number().optional().describe("Nombre maximum de résultats (défaut 10)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, city, type, maxPrice, limit }) => {
    const q = query?.trim().toLowerCase();
    const results = accommodations
      .filter((a) => (type ? a.type === type : true))
      .filter((a) => (city ? a.city.toLowerCase().includes(city.toLowerCase()) : true))
      .filter((a) => (typeof maxPrice === "number" ? a.price <= maxPrice : true))
      .filter((a) =>
        q
          ? [a.name, a.city, a.region, a.summary, ...a.amenities]
              .join(" ")
              .toLowerCase()
              .includes(q)
          : true,
      )
      .sort((a, b) => Number(b.sponsored) - Number(a.sponsored) || b.rating - a.rating)
      .slice(0, Math.max(1, Math.min(limit ?? 10, 50)));

    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { count: results.length, results },
    };
  },
});
