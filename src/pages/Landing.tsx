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
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-slide-up">
            <Link to="/client-login">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-6 h-11 text-sm sm:text-base bg-primary hover:bg-primary/90 hover:scale-110 hover:-translate-y-2 hover:shadow-strong shadow-medium backdrop-blur-sm font-bold transition-all duration-500 animate-fade-in"
              >
                Je cherche un hébergement
              </Button>
            </Link>
            
            <Link to="/host-login">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-6 h-11 text-sm sm:text-base bg-secondary hover:bg-secondary/90 hover:scale-110 hover:-translate-y-2 hover:shadow-strong shadow-medium backdrop-blur-sm font-bold transition-all duration-500 animate-fade-in"
                style={{ animationDelay: '0.1s' }}
              >
                Je propose un hébergement
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-2 md:mb-3 text-foreground">
            Pour les Clients
          </h2>
          <p className="text-sm text-center text-muted-foreground mb-8 md:mb-12 animate-fade-in italic">
            Citoyens locaux • Diaspora • Professionnels en déplacement • Touristes
          </p>
          
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-2 md:mb-3 text-foreground dark:text-white">
            Pour les Responsables d'Hébergement
          </h2>
          <p className="text-sm text-center text-muted-foreground dark:text-white/80 mb-8 md:mb-12 animate-fade-in italic font-medium">
            Hôtels • Motels • Résidences • Auberges
          </p>
          
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

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2 animate-fade-in">150+</div>
              <div className="text-sm text-muted-foreground">Hébergements</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-black text-secondary mb-2 animate-fade-in">5,200+</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-black text-accent mb-2 animate-fade-in">12</div>
              <div className="text-sm text-muted-foreground">Villes couvertes</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2 animate-fade-in">98%</div>
              <div className="text-sm text-muted-foreground">Taux satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Clients */}
      <section className="py-12 md:py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-12 text-foreground">
            Comment ça marche pour les clients ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center relative overflow-hidden animate-slide-up" style={{ animationDelay: '0s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Recherchez</h3>
                <p className="text-sm text-muted-foreground">Utilisez notre moteur de recherche intelligent pour trouver l'hébergement idéal selon vos critères</p>
              </div>
            </Card>
            
            <Card className="p-6 text-center relative overflow-hidden animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Comparez</h3>
                <p className="text-sm text-muted-foreground">Notre IA vous aide à comparer les prix et équipements pour faire le meilleur choix</p>
              </div>
            </Card>
            
            <Card className="p-6 text-center relative overflow-hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Réservez</h3>
                <p className="text-sm text-muted-foreground">Confirmez votre réservation en quelques clics avec paiement 100% sécurisé</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - Hosts */}
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-12 text-foreground">
            Comment ça marche pour les hôteliers ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center relative overflow-hidden animate-slide-up" style={{ animationDelay: '0s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Inscrivez-vous</h3>
                <p className="text-sm text-muted-foreground">Créez votre compte professionnel et ajoutez vos hébergements en quelques minutes</p>
              </div>
            </Card>
            
            <Card className="p-6 text-center relative overflow-hidden animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Gérez facilement</h3>
                <p className="text-sm text-muted-foreground">Tableau de bord centralisé pour gérer calendrier, tarifs et réservations</p>
              </div>
            </Card>
            
            <Card className="p-6 text-center relative overflow-hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Augmentez revenus</h3>
                <p className="text-sm text-muted-foreground">Notre IA optimise vos prix et vous gagnez en visibilité</p>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center relative overflow-hidden animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Communiquez</h3>
                <p className="text-sm text-muted-foreground">Messagerie intégrée pour échanger directement avec vos clients</p>
              </div>
            </Card>
            
            <Card className="p-6 text-center relative overflow-hidden animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Analysez</h3>
                <p className="text-sm text-muted-foreground">Rapports détaillés et statistiques pour suivre vos performances</p>
              </div>
            </Card>
            
            <Card className="p-6 text-center relative overflow-hidden animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">6</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Développez</h3>
                <p className="text-sm text-muted-foreground">Passez au mode Premium pour encore plus de visibilité</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={gradientBg1} alt="" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-secondary/90"></div>
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
    </div>
  );
}
