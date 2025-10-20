import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Clock, MapPin, Percent } from 'lucide-react';

export default function ClientSpecialOffers() {
  const { t } = useLanguage();

  const offers = [
    {
      id: '1',
      title: '30% de réduction - Hôtel Fouta Djallon',
      description: 'Profitez d\'une réduction exceptionnelle sur votre prochain séjour',
      discount: 30,
      city: 'Labé',
      validUntil: '2025-11-30',
      isAI: true,
      color: 'primary'
    },
    {
      id: '2',
      title: 'Offre Week-end - Résidence Loos',
      description: '2 nuits pour le prix d\'une sur les îles de Loos',
      discount: 50,
      city: 'Îles de Loos',
      validUntil: '2025-11-15',
      isAI: false,
      color: 'secondary'
    },
    {
      id: '3',
      title: 'Suggestion IA - Motel Badiar',
      description: 'Meilleur moment pour réserver selon votre historique',
      discount: 20,
      city: 'Koundara',
      validUntil: '2025-12-01',
      isAI: true,
      color: 'accent'
    }
  ];

  return (
    <div className="min-h-screen pb-20 gradient-primary">
      <div className="pt-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-black text-foreground mb-2">
            {t('specialOffers')}
          </h1>
          <p className="text-muted-foreground mb-6">
            Offres personnalisées pour vous par notre IA
          </p>

          <div className="space-y-4">
            {offers.map((offer) => (
              <Card key={offer.id} className="p-4 md:p-6 shadow-medium hover:shadow-strong transition-smooth overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px]" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {offer.isAI && (
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            <Sparkles className="h-3 w-3 mr-1" />
                            IA
                          </Badge>
                        )}
                        <Badge variant="outline" className="gap-1">
                          <Percent className="h-3 w-3" />
                          -{offer.discount}%
                        </Badge>
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{offer.title}</h3>
                      <p className="text-sm text-muted-foreground">{offer.description}</p>
                    </div>
                    
                    <div className="text-right shrink-0 ml-4">
                      <div className={`text-3xl font-black text-${offer.color}`}>
                        -{offer.discount}%
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{offer.city}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Valable jusqu'au {offer.validUntil}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Réserver maintenant
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-6 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Passez à Premium</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Débloquez des offres exclusives et économisez jusqu'à 40% sur vos réservations
                </p>
                <Button variant="outline" className="bg-card hover:bg-card/90">
                  {t('upgradeToPremium')}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <ClientBottomNav />
    </div>
  );
}