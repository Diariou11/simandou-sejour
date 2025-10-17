import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { SponsoredCarousel } from '@/components/SponsoredCarousel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Calendar, MapPin, BarChart3, DollarSign, TrendingUp } from 'lucide-react';

export default function Landing() {
  const { t } = useLanguage();

  const travelerFeatures = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: t('aiRecommendations'),
      description: "L'IA analyse vos préférences pour vous proposer les meilleures options"
    },
    {
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      title: t('simpleBooking'),
      description: "Réservez en quelques clics avec paiement sécurisé"
    },
    {
      icon: <MapPin className="h-8 w-8 text-accent" />,
      title: t('autoItineraries'),
      description: "Des itinéraires personnalisés créés automatiquement pour vous"
    }
  ];

  const hostFeatures = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: t('centralBooking'),
      description: "Gérez toutes vos réservations depuis un seul tableau de bord"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-secondary" />,
      title: t('dynamicPricing'),
      description: "L'IA optimise vos tarifs selon la demande locale"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: t('predictiveDashboard'),
      description: "Anticipez la demande et maximisez vos revenus"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 gradient-primary">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-6 animate-slide-up">
            Simandou Séjour
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-slide-up">
            {t('slogan')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto animate-slide-up">
            <Link to="/search">
              <Button 
                size="lg" 
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90 shadow-medium"
              >
                {t('forTravelers')}
              </Button>
            </Link>
            
            <Link to="/host-dashboard">
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full h-14 text-lg shadow-medium"
              >
                {t('forHosts')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Traveler Features */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground">
            Pour les Voyageurs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {travelerFeatures.map((feature, idx) => (
              <Card 
                key={idx} 
                className="p-6 text-center shadow-medium hover:shadow-strong transition-smooth hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4 animate-float">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsored Carousel */}
      <SponsoredCarousel />

      {/* Host Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground">
            Pour les Hôteliers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {hostFeatures.map((feature, idx) => (
              <Card 
                key={idx} 
                className="p-6 text-center shadow-medium hover:shadow-strong transition-smooth hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4 animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 gradient-secondary">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-primary-foreground">
            Prêt à commencer ?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Rejoignez la première plateforme digitale d'hospitalité en Guinée
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 shadow-medium">
                {t('exploreOffers')}
              </Button>
            </Link>
            
            <Link to="/host-dashboard">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-card text-primary-foreground hover:bg-card/10 shadow-medium">
                {t('manageProperty')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
