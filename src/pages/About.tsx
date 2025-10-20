import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Users, Globe, Award } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Sparkles, title: 'Innovation', desc: 'Première plateforme digitale d\'hospitalité en Guinée' },
    { icon: Users, title: 'Communauté', desc: 'Connecter voyageurs et hôteliers guinéens' },
    { icon: Globe, title: 'Accessibilité', desc: 'Rendre le tourisme accessible à tous' },
    { icon: Award, title: 'Excellence', desc: 'Service de qualité premium' }
  ];

  return (
    <div className="min-h-screen gradient-primary">
      <Header />
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4 text-center">
            {t('about')} Simandou Séjour
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            La première plateforme digitale d'hospitalité en Guinée
          </p>

          <Card className="p-6 md:p-8 shadow-strong mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Notre Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Simandou Séjour révolutionne le secteur de l'hospitalité en Guinée en combinant 
              technologie avancée et service personnalisé. Notre plateforme propulsée par 
              intelligence artificielle facilite la découverte et la réservation d'hébergements 
              à travers tout le pays.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Que vous soyez voyageur à la recherche du séjour parfait ou hôtelier souhaitant 
              optimiser votre activité, Simandou Séjour est votre partenaire de confiance.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="p-6 shadow-medium hover:shadow-strong transition-smooth">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </Card>
              );
            })}
          </div>

          <Card className="p-6 md:p-8 shadow-strong bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Notre Impact</h2>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-black text-primary mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Hébergements</p>
              </div>
              <div>
                <p className="text-4xl font-black text-secondary mb-2">10K+</p>
                <p className="text-sm text-muted-foreground">Voyageurs</p>
              </div>
              <div>
                <p className="text-4xl font-black text-accent mb-2">8</p>
                <p className="text-sm text-muted-foreground">Régions</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}