import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Sparkles, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import logoSimandou from '@/assets/logo-simandou.svg';

export default function ClientLogin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Connexion réussie !",
      description: "Bienvenue sur Simandou Séjour"
    });
    
    setTimeout(() => navigate('/client-home'), 1500);
  };

  return (
    <div className="min-h-screen pb-16 gradient-secondary">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="p-6 md:p-8 shadow-strong animate-scale-in">
            <div className="text-center mb-6">
              <img src={logoSimandou} alt="Simandou Séjour" className="h-16 mx-auto mb-4" />
              <h1 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                Connexion Client
              </h1>
              <p className="text-sm text-muted-foreground">
                Votre porte d'entrée vers des séjours inoubliables en Guinée
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Adresse e-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Votre mot de passe"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                  </button>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 p-3 rounded-md">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    <span className="font-bold text-foreground">💡 IA :</span> Nous détectons automatiquement les tentatives de connexion inhabituelles pour protéger votre compte.
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-bold">
                Connexion
              </Button>

              <Link to="/client-signup" className="block">
                <Button type="button" variant="secondary" className="w-full h-12 text-base font-bold">
                  Inscription
                </Button>
              </Link>
            </form>

            <footer className="mt-8 pt-6 border-t text-center space-y-2">
              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <Link to="/privacy" className="hover:text-primary">Politique de confidentialité</Link>
                <Link to="/terms" className="hover:text-primary">Conditions d'utilisation</Link>
                <Link to="/contact" className="hover:text-primary">Contact</Link>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>support@simandousejour.com</p>
                <p>+224 664 040 080</p>
              </div>
            </footer>
          </Card>
        </div>
      </div>
    </div>
  );
}
