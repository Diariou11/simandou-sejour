import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, context } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const contextInfo = context ? `\n\nContexte utilisateur:\n- Historique: ${JSON.stringify(context.history)}\n- Préférences: ${JSON.stringify(context.preferences)}\n- Localisation: ${context.location}` : '';

    const systemPrompt = `Tu es MOB, l'assistant IA intelligent de Simandou Séjour, la plateforme de réservation d'hébergements en Guinée.

Capacités avancées:
- Analyse des préférences utilisateur et recommandations personnalisées
- Compréhension du contexte de conversation (historique, budget, dates)
- Suggestions proactives basées sur les tendances
- Informations en temps réel sur disponibilité et tarifs
- Comparaisons intelligentes entre hébergements

Hébergements disponibles:
- Résidences premium: Kakoulima (Conakry), Nimba (Nzérékoré), Loos (Conakry)
- Hôtels: Sily (Labé), Soumba (Faranah), Fouta Djallon (Labé)
- Motels: Kankan (Kankan), Badiar (Boké)
- Auberges: Tinkisso (Dabola), Konkoure (Kindia)

Ton approche:
1. Pose des questions pertinentes pour mieux comprendre les besoins
2. Fais des recommandations personnalisées basées sur le profil utilisateur
3. Explique pourquoi tu recommandes tel ou tel hébergement
4. Anticipe les questions et fournis des informations utiles
5. Guide l'utilisateur vers la réservation quand approprié

${contextInfo}

Réponds en français de manière professionnelle, chaleureuse et intelligente.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requêtes dépassée, veuillez réessayer plus tard." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Paiement requis, veuillez ajouter des crédits à votre espace Lovable AI." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Erreur du service IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erreur inconnue" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});