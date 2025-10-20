import { useState } from 'react';
import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ClientReviews() {
  const { t } = useLanguage();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    if (rating === 0) {
      toast.error('Veuillez sélectionner une note');
      return;
    }
    toast.success('Merci pour votre avis ! 🌟');
    setRating(0);
    setReview('');
  };

  const previousReviews = [
    {
      id: '1',
      accommodation: 'Hôtel Sily National',
      rating: 5,
      comment: 'Excellent service et emplacement parfait !',
      date: '2025-09-15'
    },
    {
      id: '2',
      accommodation: 'Résidence Nimba',
      rating: 4,
      comment: 'Très bien, personnel accueillant',
      date: '2025-08-20'
    }
  ];

  return (
    <div className="min-h-screen pb-20 gradient-secondary">
      <div className="pt-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">
            {t('reviews')}
          </h1>

          <Card className="p-4 md:p-6 mb-6 shadow-medium">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Laissez votre avis
            </h2>
            
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-3 text-foreground">
                Votre note
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(star)}
                    className="transition-smooth hover:scale-110"
                  >
                    <Star
                      className={`h-8 w-8 md:h-10 md:w-10 ${
                        star <= (hoveredRating || rating)
                          ? 'fill-secondary text-secondary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-foreground">
                Votre commentaire
              </label>
              <Textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Partagez votre expérience..."
                rows={4}
                className="resize-none"
              />
            </div>

            <Button 
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-primary/90"
            >
              <Send className="h-4 w-4 mr-2" />
              Publier mon avis
            </Button>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">
              Vos avis précédents
            </h2>
            
            {previousReviews.map((review) => (
              <Card key={review.id} className="p-4 md:p-6 shadow-medium">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-foreground">{review.accommodation}</h3>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating
                            ? 'fill-secondary text-secondary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-foreground">{review.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <ClientBottomNav />
    </div>
  );
}