import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  accommodation_id: string;
  user_id: string;
  rating: number;
  title: string;
  comment: string;
  created_at: string;
  verified_stay: boolean;
  helpful_count: number;
  host_response?: string;
  host_response_date?: string;
  profiles: {
    full_name: string;
    avatar_url?: string;
  };
}

export const useReviews = (accommodationId?: string) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (accommodationId) {
      fetchReviews();
    }
  }, [accommodationId]);

  const fetchReviews = async () => {
    setLoading(true);
    let query = supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (accommodationId) {
      query = query.eq('accommodation_id', accommodationId);
    }

    const { data, error } = await query;

    if (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible de charger les avis',
        variant: 'destructive',
      });
    } else if (data) {
      const reviewsWithProfiles = await Promise.all(
        data.map(async (review) => {
          const { data: profile } = await supabase
            .from('profiles')
            .select('full_name, avatar_url')
            .eq('user_id', review.user_id)
            .single();
          
          return {
            ...review,
            profiles: profile || { full_name: 'Utilisateur', avatar_url: undefined },
          };
        })
      );
      setReviews(reviewsWithProfiles as Review[]);
    }
    setLoading(false);
  };

  const createReview = async (review: {
    accommodation_id: string;
    rating: number;
    title: string;
    comment: string;
  }) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast({
        title: 'Non connecté',
        description: 'Vous devez être connecté pour laisser un avis',
        variant: 'destructive',
      });
      return false;
    }

    const { error } = await supabase.from('reviews').insert({
      ...review,
      user_id: user.id,
    });

    if (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible de publier l\'avis',
        variant: 'destructive',
      });
      return false;
    }

    toast({
      title: 'Avis publié',
      description: 'Merci pour votre retour !',
    });
    
    fetchReviews();
    return true;
  };

  const markHelpful = async (reviewId: string) => {
    const review = reviews.find((r) => r.id === reviewId);
    if (!review) return;

    const { error } = await supabase
      .from('reviews')
      .update({ helpful_count: review.helpful_count + 1 })
      .eq('id', reviewId);

    if (!error) {
      setReviews((prev) =>
        prev.map((r) =>
          r.id === reviewId ? { ...r, helpful_count: r.helpful_count + 1 } : r
        )
      );
    }
  };

  return { reviews, loading, createReview, markHelpful, fetchReviews };
};
