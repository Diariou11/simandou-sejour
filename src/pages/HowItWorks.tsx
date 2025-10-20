import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Search, Calendar, CreditCard, CheckCircle, Upload, BarChart, DollarSign, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const { t } = useLanguage();

  const travelerSteps = [
    { icon: Search, title: 'Recherchez', desc: 'Explorez des centaines d\'hébergements' },
    { icon: Calendar, title: 'Réservez', desc: 'Choisissez vos dates et chambres' },
    { icon: CreditCard, title: 'Payez', desc: 'Paiement sécurisé par Mobile Money ou carte' },
    { icon: CheckCircle, title: 'Profitez', desc: 'Recevez votre confirmation instantanément' }
  ];

  const hostSteps = [
    { icon: Upload, title: 'Inscrivez-vous', desc: 'Créez votre compte hôtelier' },
    { icon: Upload, title: 'Ajoutez', desc: 'Listez vos propriétés et services' },
    { icon: BarChart, title: 'Gérez', desc: 'Tableau de bord intelligent avec IA' },
    { icon: DollarSign, title: 'Gagnez', desc: 'Optimisez vos revenus automatiquement' }
  ];

  return (
    <div className="min-h-screen gradient-primary">
      <Header />
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4 text-center">
            {t('howItWorks')}
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Simple, rapide et sécurisé
          </p>

          {/* Pour les voyageurs */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Pour les Voyageurs
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {travelerSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <Card key={idx} className="p-6 text-center shadow-medium hover:shadow-strong transition-smooth relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Link to="/client-login">
                <Button className="bg-primary hover:bg-primary/90">
                  Commencer à explorer
                </Button>
              </Link>
            </div>
          </div>

          {/* Pour les hôteliers */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Pour les Hôteliers
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {hostSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <Card key={idx} className="p-6 text-center shadow-medium hover:shadow-strong transition-smooth relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 mt-4">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Link to="/host-login">
                <Button className="bg-secondary hover:bg-secondary/90">
                  Devenir hôtelier
                </Button>
              </Link>
            </div>
          </div>

          {/* Avantages IA */}
          <Card className="mt-16 p-6 md:p-8 shadow-strong bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-start gap-4">
              <TrendingUp className="h-12 w-12 text-primary shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Propulsé par IA</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre intelligence artificielle optimise chaque étape : recommandations personnalisées 
                  pour les voyageurs, pricing dynamique pour les hôteliers, et prédictions de demande 
                  pour maximiser les revenus. Simandou Séjour transforme l'hospitalité guinéenne.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}