import { Header } from '@/components/Header';
import { HostBottomNav } from '@/components/HostBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, Building, Globe, Moon, Bell, Crown, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import gradientBg1 from '@/assets/gradient-bg-1.jpg';

export default function HostSettings() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [language, setLanguage] = useState('fr');

  const handleSave = () => {
    toast.success('Paramètres enregistrés avec succès');
  };

  const handleLogout = () => {
    toast.success('Déconnexion réussie');
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img src={gradientBg1} alt="" className="w-full h-full object-cover opacity-20 fixed" />
        </div>
        
        <div className="relative z-10 pt-20 px-4">
          <div className="container mx-auto max-w-4xl py-6">
            <div className="flex items-center gap-3 mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/host-dashboard')}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Retour
              </Button>
              <h1 className="text-2xl md:text-3xl font-black text-foreground">
                Paramètres
              </h1>
            </div>

            <div className="space-y-4">
              {/* Property Information */}
              <Card className="p-6">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Informations de l'hébergement
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="property-name">Nom de l'hébergement</Label>
                    <Input id="property-name" defaultValue="Hôtel Belle Vue" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="property-type">Type d'hébergement</Label>
                    <Select defaultValue="hotel">
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hotel">Hôtel</SelectItem>
                        <SelectItem value="motel">Motel</SelectItem>
                        <SelectItem value="residence">Résidence</SelectItem>
                        <SelectItem value="auberge">Auberge</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="property-address">Adresse</Label>
                    <Input id="property-address" defaultValue="Conakry, Kaloum, Guinée" className="mt-2" />
                  </div>
                </div>
              </Card>

              {/* Preferences */}
              <Card className="p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Préférences</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Langue</p>
                        <p className="text-sm text-muted-foreground">Choisissez votre langue</p>
                      </div>
                    </div>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
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
                      <Bell className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Notifications</p>
                        <p className="text-sm text-muted-foreground">Recevoir les alertes</p>
                      </div>
                    </div>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Crown className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Mode Premium</p>
                        <p className="text-sm text-muted-foreground">Fonctionnalités avancées</p>
                      </div>
                    </div>
                    <Switch checked={isPremium} onCheckedChange={setIsPremium} />
                  </div>
                </div>
              </Card>

              {/* AI Tip */}
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                <p className="text-sm text-foreground">
                  <span className="font-bold">✨ IA :</span> Le mode Premium vous donne accès à l'analyse prédictive, 
                  la tarification dynamique et des rapports détaillés.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <Button onClick={handleSave} className="w-full bg-primary hover:bg-primary/90">
                  Enregistrer les modifications
                </Button>
                <Button onClick={handleLogout} variant="outline" className="w-full gap-2">
                  <LogOut className="h-4 w-4" />
                  Se déconnecter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <HostBottomNav />
    </div>
  );
}