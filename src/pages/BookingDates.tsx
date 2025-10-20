import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockAccommodations } from '@/data/mockData';
import { Calendar as CalendarIcon, Users, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BookingDates() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);

  const accommodation = mockAccommodations.find(a => a.id === id);
  if (!accommodation) return null;

  const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const totalPrice = accommodation.price * nights * rooms;

  const handleContinue = () => {
    navigate(`/booking-info/${id}`, { 
      state: { checkIn, checkOut, rooms, guests, totalPrice } 
    });
  };

  return (
    <div className="min-h-screen gradient-primary">
      <Header />
      <div className="pt-24 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Button variant="outline" onClick={() => navigate(-1)} className="mb-4">
              ← {t('back')}
            </Button>
            <h1 className="text-2xl md:text-3xl font-black text-foreground mb-2">
              {t('selectDates')}
            </h1>
            <p className="text-muted-foreground">{accommodation.name}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card className="p-6 shadow-medium">
                <div className="flex items-center gap-2 mb-4">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">Dates de séjour</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Arrivée</label>
                    <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} className="rounded-lg border" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Départ</label>
                    <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} className="rounded-lg border" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-medium">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">{t('guests')} & {t('rooms')}</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Chambres</label>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" onClick={() => setRooms(Math.max(1, rooms - 1))}>-</Button>
                      <span className="text-lg font-bold text-foreground w-8 text-center">{rooms}</span>
                      <Button variant="outline" size="sm" onClick={() => setRooms(rooms + 1)}>+</Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Voyageurs</label>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" onClick={() => setGuests(Math.max(1, guests - 1))}>-</Button>
                      <span className="text-lg font-bold text-foreground w-8 text-center">{guests}</span>
                      <Button variant="outline" size="sm" onClick={() => setGuests(guests + 1)}>+</Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Suggestion IA</p>
                    <p className="text-sm text-muted-foreground">
                      Les prix sont {accommodation.aiPriceSuggestion ? '15% plus bas' : 'stables'} cette semaine. 
                      Meilleur moment pour réserver !
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-6 shadow-strong sticky top-24">
                <h3 className="font-bold text-lg text-foreground mb-4">Récapitulatif</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{new Intl.NumberFormat('fr-GN').format(accommodation.price)} GNF × {nights} nuits × {rooms} chambre(s)</span>
                  </div>
                  {nights > 0 && (
                    <div className="flex justify-between">
                      <span className="text-foreground">Sous-total</span>
                      <span className="font-semibold text-foreground">{new Intl.NumberFormat('fr-GN').format(totalPrice)} GNF</span>
                    </div>
                  )}
                </div>
                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">{t('total')}</span>
                    <span className="text-2xl font-black text-primary">
                      {nights > 0 ? new Intl.NumberFormat('fr-GN').format(totalPrice) : '0'} GNF
                    </span>
                  </div>
                </div>
                <Button 
                  onClick={handleContinue} 
                  disabled={!checkIn || !checkOut || nights <= 0}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Continuer
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}