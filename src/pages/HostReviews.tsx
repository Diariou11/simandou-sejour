import { HostBottomNav } from '@/components/HostBottomNav';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, TrendingUp, MessageSquare } from 'lucide-react';

export default function HostReviews() {
  const { t } = useLanguage();

  const reviews = [
    { id: '1', guest: 'Jean Camara', rating: 5, comment: 'Excellent service !', date: '2025-10-15', property: 'Hôtel Sily' },
    { id: '2', guest: 'Marie Diallo', rating: 4, comment: 'Très bien', date: '2025-10-12', property: 'Hôtel Sily' }
  ];

  return (
    <div className="min-h-screen pb-20 gradient-primary">
      <div className="pt-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">{t('reviews')}</h1>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card className="p-4 text-center">
              <div className="text-3xl font-black text-primary mb-1">4.8</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />)}
              </div>
              <p className="text-sm text-muted-foreground">Note moyenne</p>
            </Card>
            
            <Card className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">+12%</div>
              <p className="text-sm text-muted-foreground">Ce mois</p>
            </Card>

            <Card className="p-4 text-center">
              <MessageSquare className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">156</div>
              <p className="text-sm text-muted-foreground">Total avis</p>
            </Card>
          </div>

          <div className="space-y-4">
            {reviews.map(review => (
              <Card key={review.id} className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-foreground">{review.guest}</h3>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className={`h-4 w-4 ${i <= review.rating ? 'fill-secondary text-secondary' : 'text-muted-foreground'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-3">{review.comment}</p>
                <Button size="sm" variant="outline">Répondre</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <HostBottomNav />
    </div>
  );
}