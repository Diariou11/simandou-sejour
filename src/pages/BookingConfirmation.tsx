import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Download, Share2, Calendar, MapPin } from 'lucide-react';

export default function BookingConfirmation() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;

  return (
    <div className="min-h-screen gradient-primary">
      <Header />
      <div className="pt-24 px-4 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 animate-slide-up">
            <div className="h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 animate-float">
              <CheckCircle2 className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-2">
              {t('bookingConfirmed')} !
            </h1>
            <p className="text-lg text-muted-foreground">
              Votre réservation a été confirmée avec succès
            </p>
          </div>

          <Card className="p-6 md:p-8 shadow-strong mb-6 text-left">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">N° de réservation</p>
                <p className="text-2xl font-black text-primary">SIM-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              </div>
              <div className="h-24 w-24 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-xs text-center text-muted-foreground">QR Code</div>
              </div>
            </div>

            {bookingData && (
              <div className="space-y-4 border-t border-border pt-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Dates de séjour</p>
                    <p className="text-sm text-muted-foreground">
                      {bookingData.checkIn?.toLocaleDateString()} - {bookingData.checkOut?.toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Informations</p>
                    <p className="text-sm text-muted-foreground">
                      {bookingData.rooms} chambre(s) • {bookingData.guests} voyageur(s)
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">{t('total')}</span>
                    <span className="text-2xl font-black text-primary">
                      {new Intl.NumberFormat('fr-GN').format(bookingData.totalPrice)} GNF
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Payé par {bookingData.paymentMethod}
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Télécharger
            </Button>
            <Button variant="outline" className="w-full">
              <Share2 className="h-4 w-4 mr-2" />
              Partager
            </Button>
          </div>

          <Button 
            onClick={() => navigate('/client-home')}
            className="w-full bg-primary hover:bg-primary/90"
          >
            Retour à l'accueil
          </Button>

          <Card className="mt-6 p-4 bg-primary/5 border-primary/20 text-left">
            <p className="text-sm text-muted-foreground">
              ✉️ Un email de confirmation a été envoyé à {bookingData?.email || 'votre adresse'}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}