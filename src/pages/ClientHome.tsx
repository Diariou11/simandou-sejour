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
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 gradient-primary opacity-10"></div>
              <div className="text-center z-10">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-foreground font-bold">Carte interactive</p>
                <p className="text-sm text-muted-foreground">Découvrez les hébergements près de vous</p>
                <Badge className="mt-2 bg-primary/10 text-primary gap-1">
                  <Sparkles className="h-3 w-3" />
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
