import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockAccommodations } from '@/data/mockData';
import { useLanguage } from '@/contexts/LanguageContext';
import { CreditCard, Smartphone, Shield, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function Booking() {
  const { id } = useParams();
  const { t } = useLanguage();
  const accommodation = mockAccommodations.find(a => a.id === id);

  if (!accommodation) return null;

  const handleBooking = (method: string) => {
    toast.success(`Réservation confirmée via ${method} ! 🎉`, {
      description: "Vous recevrez un email de confirmation sous peu."
    });
  };

  const formattedPrice = new Intl.NumberFormat('fr-GN').format(accommodation.price);

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-black text-foreground mb-8 text-center">
            Finaliser votre réservation
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Summary */}
            <Card className="p-6 h-fit">
              <h2 className="text-xl font-bold mb-4 text-foreground">Récapitulatif</h2>
              
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Hébergement</p>
                  <p className="font-semibold text-foreground">{accommodation.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localisation</p>
                  <p className="font-semibold text-foreground">{accommodation.city}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Durée</p>
                  <p className="font-semibold text-foreground">2 nuits</p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-foreground">Total</span>
                  <span className="text-2xl font-black text-primary">
                    {new Intl.NumberFormat('fr-GN').format(accommodation.price * 2)} GNF
                  </span>
                </div>
              </div>
            </Card>

            {/* Payment Methods */}
            <div className="space-y-4">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Sécurité renforcée</h3>
                    <p className="text-sm text-muted-foreground">
                      Détection IA des transactions frauduleuses en temps réel
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-smooth cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">Mobile Money</h3>
                    <p className="text-sm text-muted-foreground">Orange Money, MTN, Moov</p>
                  </div>
                </div>
                <Button 
                  onClick={() => handleBooking('Mobile Money')}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Payer par Mobile Money
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-smooth cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-smooth">
                    <CreditCard className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">Carte bancaire</h3>
                    <p className="text-sm text-muted-foreground">Visa, Mastercard</p>
                  </div>
                </div>
                <Button 
                  onClick={() => handleBooking('Carte bancaire')}
                  variant="secondary"
                  className="w-full"
                >
                  Payer par carte
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
