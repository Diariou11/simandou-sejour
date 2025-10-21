import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { SponsoredCarousel } from '@/components/SponsoredCarousel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Calendar, MapPin, BarChart3, DollarSign, TrendingUp } from 'lucide-react';
import heroBuilding from '@/assets/hero-building.jpg';
import gradientBg1 from '@/assets/gradient-bg-1.jpg';

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
      
      {/* Hero Section with Building Background */}
      <section className="relative pt-24 pb-12 md:pb-16 px-4 overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBuilding} 
            alt="Modern luxury hotel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/90 via-primary/80 to-accent/90"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4 md:mb-6 drop-shadow-lg animate-logo-pulse">
            Simandou Séjour
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/95 mb-8 md:mb-12 animate-slide-up px-2 drop-shadow-md">
            {t('slogan')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center animate-slide-up">
            <Link to="/client-login">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-8 md:px-12 h-14 md:h-16 text-base md:text-lg bg-primary hover:bg-primary/90 hover:scale-105 shadow-strong backdrop-blur-sm font-bold transition-all duration-300 animate-fade-in"
              >
                {t('forTravelers')}
              </Button>
            </Link>
            
            <Link to="/host-login">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-8 md:px-12 h-14 md:h-16 text-base md:text-lg bg-secondary hover:bg-secondary/90 hover:scale-105 shadow-strong backdrop-blur-sm font-bold transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '0.1s' }}
              >
                {t('forHosts')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Traveler Features */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={gradientBg1} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
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
      <section className="relative py-12 md:py-16 px-4 gradient-secondary overflow-hidden">
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
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={gradientBg1} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/70 to-secondary/80"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-3xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 text-white drop-shadow-lg px-2">
            Prêt à commencer ?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-8 md:mb-10 px-4 drop-shadow-md font-medium">
            Rejoignez la première plateforme digitale d'hospitalité en Guinée
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
            <Link to="/client-login" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 h-14 bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-strong font-bold transition-all duration-300">
                {t('exploreOffers')}
              </Button>
            </Link>
            
            <Link to="/host-login" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-14 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 hover:scale-105 shadow-strong font-bold transition-all duration-300">
                {t('manageProperty')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card/50 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-foreground mb-3">À propos</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">{t('about')}</Link></li>
                <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">{t('howItWorks')}</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">{t('contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth">{t('terms')}</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">{t('privacy')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/client-support" className="text-muted-foreground hover:text-primary transition-smooth">Centre d'aide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Suivez-nous</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
            © 2025 Simandou Séjour. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
