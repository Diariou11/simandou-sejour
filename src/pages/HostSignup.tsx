import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function HostSignup() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    establishmentName: '',
    establishmentType: '',
    address: ''
  });

  const handleLocationClick = () => {
    setLocationEnabled(true);
    toast({
      title: "GPS activé",
      description: "Votre localisation a été enregistrée avec succès"
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!locationEnabled) {
      toast({
        title: "Erreur",
        description: "Veuillez activer votre localisation GPS",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Inscription réussie !",
      description: "Bienvenue dans l'espace hôtelier"
    });
    
    setTimeout(() => navigate('/host-login'), 1500);
  };

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="p-6 md:p-8 shadow-strong animate-scale-in">
            <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6 text-center">
              Inscription Responsable
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">Nom complet</Label>
                <Input
                  id="fullName"
                  placeholder="Entrez votre nom complet"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email ou téléphone</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Entrez votre email ou numéro de téléphone"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Minimum 8 caractères alphanumériques"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirmation mot de passe</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirmez votre mot de passe"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="establishmentName">Nom de l'établissement</Label>
                <Input
                  id="establishmentName"
                  placeholder="Entrez le nom de votre hôtel, villa, etc."
                  value={formData.establishmentName}
                  onChange={(e) => setFormData({...formData, establishmentName: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="establishmentType">Type d'hébergement</Label>
                <Select value={formData.establishmentType} onValueChange={(value) => setFormData({...formData, establishmentType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hotel">Hôtel</SelectItem>
                    <SelectItem value="residence">Résidence</SelectItem>
                    <SelectItem value="auberge">Auberge</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="motel">Motel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="address">Adresse complète</Label>
                <Input
                  id="address"
                  placeholder="Adresse postale complète de l'établissement"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  required
                />
              </div>

              <div className="bg-primary/5 border border-primary/20 p-4 rounded-md">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-foreground">📍 Localisation GPS obligatoire</p>
                    <p className="text-xs text-muted-foreground">
                      Veuillez activer votre localisation GPS pour situer précisément votre établissement en Guinée.
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={handleLocationClick}
                  variant={locationEnabled ? "secondary" : "default"}
                  className="w-full"
                  disabled={locationEnabled}
                >
                  {locationEnabled ? "✓ Localisation activée" : "Activer ma localisation"}
                </Button>
              </div>

              <div className="bg-primary/5 border border-primary/20 p-3 rounded-md">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    <span className="font-bold text-foreground">✨ IA :</span> Nous validons automatiquement la localisation GPS de votre établissement pour éviter les doublons et améliorer la visibilité de votre hôtel dans les recherches.
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-bold">
                Valider et créer mon compte
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Déjà inscrit ?{' '}
                <Link to="/host-login" className="text-primary font-bold hover:underline">
                  Se connecter
                </Link>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
