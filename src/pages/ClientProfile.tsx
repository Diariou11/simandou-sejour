import { Header } from '@/components/Header';
import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { User, Mail, Phone, MapPin, Bell, Globe, Moon, Sparkles, LogOut } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import gradientBg2 from '@/assets/gradient-bg-2.jpg';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import profileMamadou from '@/assets/profile-mamadou.jpg';
import { useTheme } from '@/components/ThemeProvider';

export default function ClientProfile() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    toast({
      title: "Modifications enregistrées",
      description: "Vos paramètres ont été mis à jour avec succès.",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Déconnexion réussie",
      description: "À bientôt sur Simandou Séjour !",
    });
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img src={gradientBg2} alt="" className="w-full h-full object-cover opacity-20 fixed" />
        </div>
        
        <div className="relative z-10 pt-20 px-4">
          <div className="container mx-auto max-w-4xl py-6">
            <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">
              {t('profile')}
            </h1>
            
            <div className="space-y-4">
              {/* Avatar Section */}
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-20 w-20 rounded-full overflow-hidden">
                    <img src={profileMamadou} alt="Mamadou Diaouné" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Mamadou Diaouné</h2>
                    <p className="text-sm text-muted-foreground">Membre depuis Mars 2024</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4" />
                      {t('fullName')}
                    </Label>
                    <Input id="name" defaultValue="Mamadou Diaouné" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                      <Mail className="h-4 w-4" />
                      {t('email')}
                    </Label>
                    <Input id="email" type="email" defaultValue="mamadou.diallo@email.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                      <Phone className="h-4 w-4" />
                      Téléphone
                    </Label>
                    <Input id="phone" defaultValue="+224 664 040 080" />
                  </div>
                  
                  <div>
                    <Label htmlFor="address" className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4" />
                      Adresse
                    </Label>
                    <Input id="address" defaultValue="Conakry, Kaloum, Guinée" />
                  </div>
                  
                  <div>
                    <Label htmlFor="about" className="mb-2 block">À propos</Label>
                    <Textarea 
                      id="about" 
                      placeholder="Parlez-nous de vous..." 
                      defaultValue="Voyageur passionné à la découverte de la Guinée"
                      rows={3}
                    />
                  </div>
                </div>
              </Card>
              
              {/* Preferences */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Préférences</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Notifications</p>
                        <p className="text-sm text-muted-foreground">Recevoir les alertes et promotions</p>
                      </div>
                    </div>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Moon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Mode sombre</p>
                        <p className="text-sm text-muted-foreground">Activer le thème sombre</p>
                      </div>
                    </div>
                    <Switch 
                      checked={theme === 'dark'} 
                      onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Langue</p>
                        <p className="text-sm text-muted-foreground">Français</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* AI Tip */}
              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    ✨ <strong>IA :</strong> Nous adaptons automatiquement l'interface selon vos préférences (langue, thème, alertes).
                  </p>
                </div>
              </Card>
              
              {/* Actions */}
              <div className="flex flex-col gap-3">
                <Button onClick={handleSave} className="w-full bg-primary hover:bg-primary/90">
                  Enregistrer les modifications
                </Button>
                <Button onClick={handleLogout} variant="outline" className="w-full gap-2">
                  <LogOut className="h-4 w-4" />
                  {t('logout')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ClientBottomNav />
    </div>
  );
}