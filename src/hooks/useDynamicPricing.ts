import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface PricingResult {
  optimizedPrice: number;
  priceChange: number;
  reasoning: string;
  demandForecast: string;
  recommendations: string[];
}

export const useDynamicPricing = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const calculateOptimalPrice = async (params: {
    accommodationId: string;
    basePrice: number;
    dates: { checkIn: string; checkOut: string };
    occupancyRate: number;
    seasonality: string;
    localEvents: any[];
  }): Promise<PricingResult | null> => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('dynamic-pricing', {
        body: params
      });

      if (error) throw error;

      return data;
    } catch (error: any) {
      console.error('Error calculating price:', error);
      toast({
        title: 'Erreur',
        description: error.message || 'Impossible de calculer le prix optimal',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { calculateOptimalPrice, loading };
};
