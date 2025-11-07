import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Recommendation {
  id: string;
  name: string;
  reason: string;
  score: number;
}

interface RecommendationsResult {
  recommendations: Recommendation[];
  insights: string;
}

export const useAIRecommendations = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const getRecommendations = async (
    userHistory: any[],
    currentAccommodation: any
  ): Promise<RecommendationsResult | null> => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-recommendations', {
        body: { userHistory, currentAccommodation }
      });

      if (error) throw error;

      return data;
    } catch (error: any) {
      console.error('Error getting recommendations:', error);
      toast({
        title: 'Erreur',
        description: error.message || 'Impossible d\'obtenir les recommandations',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { getRecommendations, loading };
};
