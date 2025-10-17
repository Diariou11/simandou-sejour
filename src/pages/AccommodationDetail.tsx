import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockAccommodations } from '@/data/mockData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, MapPin, Sparkles, Wifi, UtensilsCrossed, Car, Shield } from 'lucide-react';

export default function AccommodationDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const accommodation = mockAccommodations.find(a => a.id === id);

  if (!accommodation) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-24 px-4 text-center">
          <h1 className="text-2xl font-bold">Hébergement non trouvé</h1>
        </div>
      </div>
    );
  }

  const amenityIcons: Record<string, any> = {
    'WiFi': <Wifi className="h-5 w-5" />,
    'Restaurant': <UtensilsCrossed className="h-5 w-5" />,
    'Parking': <Car className="h-5 w-5" />,
    'Sécurité 24h/24': <Shield className="h-5 w-5" />,
  };

  const formattedPrice = new Intl.NumberFormat('fr-GN').format(accommodation.price);
  const formattedAiPrice = accommodation.aiPriceSuggestion 
    ? new Intl.NumberFormat('fr-GN').format(accommodation.aiPriceSuggestion)
    : null;

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Image */}
          <div className="relative h-96 bg-muted rounded-2xl overflow-hidden mb-8 shadow-strong">
            <div className="absolute inset-0 gradient-hero opacity-30" />
            {accommodation.sponsored && (
              <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                {t('sponsored')}
              </Badge>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl font-black text-foreground mb-2">
                  {accommodation.name}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{accommodation.city}, {accommodation.region}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="font-semibold">{accommodation.rating}</span>
                    <span>({accommodation.reviews} avis)</span>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {accommodation.description}
                </p>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Équipements</h2>
                <div className="grid grid-cols-2 gap-4">
                  {accommodation.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="text-primary">
                        {amenityIcons[amenity] || <Sparkles className="h-5 w-5" />}
                      </div>
                      <span className="text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {accommodation.aiPriceSuggestion && (
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">
                        {t('aiSuggested')}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Basé sur la demande locale et les tendances du marché, notre IA suggère un prix optimal de <span className="font-bold text-primary">{formattedAiPrice} GNF</span> par nuit.
                      </p>
                      <Badge className="bg-primary/10 text-primary">
                        Économisez {new Intl.NumberFormat('fr-GN').format(accommodation.price - accommodation.aiPriceSuggestion)} GNF
                      </Badge>
                    </div>
                  </div>
                </Card>
              )}
            </div>

            {/* Booking Card */}
            <div>
              <Card className="p-6 sticky top-24 shadow-strong">
                <div className="mb-6">
                  <p className="text-3xl font-black text-primary">
                    {formattedPrice} <span className="text-sm font-normal text-muted-foreground">GNF</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{t('perNight')}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-semibold text-foreground block mb-2">
                      {t('checkIn')}
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground block mb-2">
                      {t('checkOut')}
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <Link to={`/booking/${accommodation.id}`}>
                  <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 shadow-medium">
                    {t('bookNow')}
                  </Button>
                </Link>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  🛡️ Paiement sécurisé par IA
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
