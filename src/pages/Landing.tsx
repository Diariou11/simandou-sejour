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
      <section className="pt-24 pb-12 md:pb-16 px-4 gradient-primary">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4 md:mb-6 animate-slide-up">
            Simandou Séjour
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 md:mb-8 animate-slide-up px-2">
            {t('slogan')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto animate-slide-up">
            <Link to="/search" className="w-full">
              <Button 
                size="lg" 
                className="w-full h-12 md:h-14 text-base md:text-lg bg-primary hover:bg-primary/90 shadow-medium"
              >
                {t('forTravelers')}
              </Button>
            </Link>
            
            <Link to="/host-dashboard" className="w-full">
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full h-12 md:h-14 text-base md:text-lg shadow-medium"
              >
                {t('forHosts')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Traveler Features */}
      <section className="py-12 md:py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 text-foreground">
            Pour les Voyageurs
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {travelerFeatures.map((feature, idx) => (
              <Card 
                key={idx} 
                className="p-4 md:p-6 text-center shadow-medium hover:shadow-strong transition-smooth hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 md:mb-4 animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
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
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 text-foreground">
            Pour les Hôteliers
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {hostFeatures.map((feature, idx) => (
              <Card 
                key={idx} 
                className="p-4 md:p-6 text-center shadow-medium hover:shadow-strong transition-smooth hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 md:mb-4 animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 gradient-secondary">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-primary-foreground px-2">
            Prêt à commencer ?
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/90 mb-6 md:mb-8 px-4">
            Rejoignez la première plateforme digitale d'hospitalité en Guinée
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link to="/search" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-card text-foreground hover:bg-card/90 shadow-medium">
                {t('exploreOffers')}
              </Button>
            </Link>
            
            <Link to="/host-dashboard" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-card text-primary-foreground hover:bg-card/10 shadow-medium">
                {t('manageProperty')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
