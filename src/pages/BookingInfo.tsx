import { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, Mail, Phone, CreditCard, Smartphone } from 'lucide-react';
import { toast } from 'sonner';

export default function BookingInfo() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleSubmit = (paymentMethod: string) => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }
    navigate(`/booking-confirmation/${id}`, { 
      state: { ...bookingData, ...formData, paymentMethod } 
    });
  };

  return (
    <div className="min-h-screen gradient-secondary">
      <Header />
      <div className="pt-24 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
            ← {t('back')}
          </Button>

          <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">
            Vos informations
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="p-6 shadow-medium mb-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Informations personnelles</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4" /> {t('fullName')}
                    </Label>
                    <Input 
                      id="fullName" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Jean Camara"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                      <Mail className="h-4 w-4" /> {t('email')}
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jean@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                      <Phone className="h-4 w-4" /> {t('phone')}
                    </Label>
                    <Input 
                      id="phone" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+224 620 00 00 00"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-medium">
                <h2 className="text-xl font-bold text-foreground mb-4">{t('paymentMethod')}</h2>
                <div className="space-y-3">
                  <Card className="p-4 hover:shadow-medium transition-smooth cursor-pointer group" onClick={() => handleSubmit('Mobile Money')}>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground">Mobile Money</h3>
                        <p className="text-sm text-muted-foreground">Orange, MTN, Moov</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-medium transition-smooth cursor-pointer group" onClick={() => handleSubmit('Carte bancaire')}>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20">
                        <CreditCard className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground">Carte bancaire</h3>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-6 shadow-strong sticky top-24">
                <h3 className="font-bold text-lg text-foreground mb-4">Récapitulatif</h3>
                {bookingData && (
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Dates</p>
                      <p className="font-semibold text-foreground">
                        {bookingData.checkIn?.toLocaleDateString()} - {bookingData.checkOut?.toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Voyageurs</p>
                      <p className="font-semibold text-foreground">{bookingData.guests} personne(s)</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Chambres</p>
                      <p className="font-semibold text-foreground">{bookingData.rooms} chambre(s)</p>
                    </div>
                    <div className="border-t border-border pt-3">
                      <p className="text-lg font-bold text-foreground">{t('total')}</p>
                      <p className="text-2xl font-black text-primary">
                        {new Intl.NumberFormat('fr-GN').format(bookingData.totalPrice)} GNF
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}