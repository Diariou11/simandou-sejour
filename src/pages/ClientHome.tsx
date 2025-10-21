import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { ClientBottomNav } from '@/components/ClientBottomNav';
import { AccommodationCard } from '@/components/AccommodationCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockAccommodations } from '@/data/mockData';
import { Search, Sparkles, MapPin } from 'lucide-react';
import gradientBg1 from '@/assets/gradient-bg-1.jpg';

export default function ClientHome() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const categories = ['Tous', 'Hôtel', 'Motel', 'Résidence', 'Auberge'];
  
  const popularAccommodations = mockAccommodations.filter(acc => acc.rating >= 4.5).slice(0, 3);

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="absolute inset-0 z-0">
        <img src={gradientBg1} alt="" className="w-full h-full object-cover opacity-20 fixed" />
      </div>
      
      <div className="relative z-10 pt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Search Bar */}
          <div className="mb-6 mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher un hébergement..."
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-lg font-black text-foreground mb-4">Catégories d'hébergement</h2>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  className="flex-shrink-0"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-1">✨ IA : Recommandations pour vous</h3>
                <p className="text-sm text-muted-foreground">
                  Voici des hébergements recommandés pour vous, basés sur vos préférences et votre localisation.
                </p>
              </div>
            </div>
          </div>

          {/* Popular Suggestions */}
          <div className="mb-8">
            <h2 className="text-lg font-black text-foreground mb-4">Suggestions Populaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularAccommodations.map((accommodation) => (
                <Link key={accommodation.id} to={`/accommodation/${accommodation.id}`}>
                  <AccommodationCard accommodation={accommodation} />
                </Link>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-8">
            <h2 className="text-lg font-black text-foreground mb-4">Explorer sur la carte</h2>
            <div className="relative rounded-lg h-72 md:h-96 overflow-hidden shadow-medium">
              <img 
                src="/src/assets/guinea-map.jpg" 
                alt="Carte de la Guinée" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              
              {/* Animated Pins */}
              <div className="absolute top-1/4 left-1/3 animate-bounce" style={{ animationDelay: '0s' }}>
                <div className="relative">
                  <MapPin className="h-8 w-8 text-primary fill-primary drop-shadow-lg" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary/30 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="absolute top-1/3 right-1/4 animate-bounce" style={{ animationDelay: '0.3s' }}>
                <div className="relative">
                  <MapPin className="h-8 w-8 text-secondary fill-secondary drop-shadow-lg" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-secondary/30 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 left-1/2 animate-bounce" style={{ animationDelay: '0.6s' }}>
                <div className="relative">
                  <MapPin className="h-8 w-8 text-accent fill-accent drop-shadow-lg" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent/30 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 right-1/3 animate-bounce" style={{ animationDelay: '0.9s' }}>
                <div className="relative">
                  <MapPin className="h-8 w-8 text-primary fill-primary drop-shadow-lg" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary/30 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/4 animate-bounce" style={{ animationDelay: '1.2s' }}>
                <div className="relative">
                  <MapPin className="h-8 w-8 text-secondary fill-secondary drop-shadow-lg" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-secondary/30 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <Badge className="bg-primary/90 text-white gap-2 px-4 py-2 text-sm backdrop-blur-sm shadow-lg">
                  <Sparkles className="h-4 w-4" />
                  Meilleur rapport qualité/prix selon IA
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ClientBottomNav />
    </div>
  );
}
