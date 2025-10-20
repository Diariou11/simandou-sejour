import { HostBottomNav } from '@/components/HostBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, Building, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function HostProfile() {
  const { t } = useLanguage();

  const handleSave = () => {
    toast.success('Profil mis à jour avec succès');
  };

  return (
    <div className="min-h-screen pb-20 gradient-secondary">
      <div className="pt-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">{t('profile')}</h1>

          <Card className="p-6 mb-6 text-center">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <User className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Hôtel Sily National</h2>
            <p className="text-muted-foreground">Hôtelier Premium</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg text-foreground mb-4">Informations</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                  <Building className="h-4 w-4" /> Nom de l'établissement
                </Label>
                <Input id="name" defaultValue="Hôtel Sily National" />
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                  <Mail className="h-4 w-4" /> Email
                </Label>
                <Input id="email" type="email" defaultValue="contact@hotelsily.com" />
              </div>

              <div>
                <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4" /> Téléphone
                </Label>
                <Input id="phone" defaultValue="+224 620 00 00 00" />
              </div>

              <div>
                <Label htmlFor="location" className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4" /> Adresse
                </Label>
                <Input id="location" defaultValue="Conakry, Guinée" />
              </div>

              <Button onClick={handleSave} className="w-full bg-primary hover:bg-primary/90">
                {t('save')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <HostBottomNav />
    </div>
  );
}