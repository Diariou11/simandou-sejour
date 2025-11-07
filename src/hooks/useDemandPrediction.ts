import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Prediction {
  date: string;
  predictedOccupancy: number;
  confidence: number;
}

interface PredictionResult {
  predictions: Prediction[];
  trend: string;
  insights: string[];
  recommendations: string[];
  highDemandPeriods: Array<{ start: string; end: string; reason: string }>;
}

export const useDemandPrediction = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const predictDemand = async (
    accommodationId: string,
    historicalData: any[],
    period: string
  ): Promise<PredictionResult | null> => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('demand-prediction', {
        body: { accommodationId, historicalData, period }
      });

      if (error) throw error;

      return data;
    } catch (error: any) {
      console.error('Error predicting demand:', error);
      toast({
        title: 'Erreur',
        description: error.message || 'Impossible de prédire la demande',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { predictDemand, loading };
};
