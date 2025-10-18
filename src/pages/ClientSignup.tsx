import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Sparkles, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ClientSignup() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordStrength, setPasswordStrength] = useState('');

  const analyzePassword = (pwd: string) => {
    if (pwd.length === 0) {
      setPasswordStrength('');
      return;
    }
    if (pwd.length < 8) {
      setPasswordStrength('Mot de passe trop court. Minimum 8 caractères requis.');
      return;
    }
    const hasNumber = /\d/.test(pwd);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);

    if (!hasNumber || !hasSpecial) {
      setPasswordStrength('💡 IA : Ajoutez un chiffre et un caractère spécial pour plus de sécurité.');
    } else if (!hasUpper || !hasLower) {
      setPasswordStrength('💡 IA : Utilisez des majuscules et minuscules pour renforcer la sécurité.');
    } else {
      setPasswordStrength('✨ Excellent ! Votre mot de passe est sécurisé.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Inscription réussie !",
      description: "Vous allez être redirigé vers la localisation"
    });
    
    setTimeout(() => navigate('/client-location'), 1500);
  };

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="p-6 md:p-8 shadow-strong animate-scale-in">
            <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6 text-center">
              Inscription Client
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">Nom complet</Label>
                <Input
                  id="fullName"
                  placeholder="Votre nom et prénom"
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
                  placeholder="email@exemple.com ou +224 XX XXX XXXX"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimum 8 caractères"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({...formData, password: e.target.value});
                      analyzePassword(e.target.value);
                    }}
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
                <p className="text-xs text-muted-foreground mt-1">Minimum 8 caractères alphanumériques</p>
                {passwordStrength && (
                  <div className={`text-xs mt-2 p-2 rounded-md ${
                    passwordStrength.includes('Excellent') ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                  }`}>
                    {passwordStrength}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirmation mot de passe</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirmez votre mot de passe"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirm ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                  </button>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 p-4 rounded-md">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold text-foreground">💡 IA :</span> Pour renforcer votre sécurité, nous analysons automatiquement la robustesse de votre mot de passe et vous suggérons des améliorations si nécessaire.
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-bold">
                Continuer
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Déjà inscrit ?{' '}
                <Link to="/client-login" className="text-primary font-bold hover:underline">
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
