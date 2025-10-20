import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, MapPin, Clock, QrCode } from 'lucide-react';

export default function ClientReservations() {
  const { t } = useLanguage();

  const reservations = [
    {
      id: '1',
      name: 'Hôtel Sily National',
      city: 'Conakry',
      checkIn: '2025-11-15',
      checkOut: '2025-11-18',
      status: 'confirmed',
      price: 1740000,
      image: '/placeholder.svg'
    },
    {
      id: '2',
      name: 'Résidence Nimba',
      city: "N'Zérékoré",
      checkIn: '2025-12-01',
      checkOut: '2025-12-05',
      status: 'pending',
      price: 1520000,
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen pb-20 gradient-primary">
      <div className="pt-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">
            {t('myReservations')}
          </h1>

          <div className="space-y-4">
            {reservations.map((reservation) => (
              <Card key={reservation.id} className="p-4 md:p-6 shadow-medium hover:shadow-strong transition-smooth">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-32 h-32 rounded-lg bg-muted overflow-hidden shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{reservation.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3" />
                          <span>{reservation.city}</span>
                        </div>
                      </div>
                      <Badge variant={reservation.status === 'confirmed' ? 'default' : 'secondary'}>
                        {t(reservation.status)}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{reservation.checkIn} - {reservation.checkOut}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span>3 nuits</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">{t('total')}</p>
                        <p className="text-xl font-bold text-primary">
                          {new Intl.NumberFormat('fr-GN').format(reservation.price)} GNF
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <QrCode className="h-4 w-4 mr-2" />
                          QR Code
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          {t('seeMore')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <ClientBottomNav />
    </div>
  );
}