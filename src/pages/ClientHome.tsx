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
                src={new URL('/src/assets/guinea-map.jpg', import.meta.url).href}
                alt="Carte de la Guinée" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  console.log('Map image failed to load');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              
              {/* Animated Pins for each accommodation - positioned based on Guinea regions */}
              {/* Conakry - Southwest coast */}
              <div className="absolute top-[55%] left-[20%] group">
                <div className="relative animate-bounce" style={{ animationDelay: '0s' }}>
                  <MapPin className="h-7 w-7 text-primary fill-primary drop-shadow-lg cursor-pointer transition-transform hover:scale-125" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-primary/30 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-primary text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  Hôtel Sily National
                </div>
              </div>
              
              <div className="absolute top-[58%] left-[18%] group">
                <div className="relative animate-bounce" style={{ animationDelay: '0.2s' }}>
                  <MapPin className="h-7 w-7 text-secondary fill-secondary drop-shadow-lg cursor-pointer transition-transform hover:scale-125" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-secondary/30 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-secondary text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  Résidence Nimba
                </div>
              </div>
              
              {/* Kindia - North of Conakry */}
              <div className="absolute top-[40%] left-[25%] group">
                <div className="relative animate-bounce" style={{ animationDelay: '0.4s' }}>
                  <MapPin className="h-7 w-7 text-accent fill-accent drop-shadow-lg cursor-pointer transition-transform hover:scale-125" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-accent/30 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-accent text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  Résidence Kakoulima
                </div>
              </div>
              
              <div className="absolute top-[42%] left-[22%] group">
                <div className="relative animate-bounce" style={{ animationDelay: '0.6s' }}>
                  <MapPin className="h-7 w-7 text-primary fill-primary drop-shadow-lg cursor-pointer transition-transform hover:scale-125" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-primary/30 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-primary text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  Résidence Loos
                </div>
              </div>
              
              {/* Labé - North center (Fouta Djallon) */}
              <div className="absolute top-[25%] left-[40%] group">
                <div className="relative animate-bounce" style={{ animationDelay: '0.8s' }}>
                  <MapPin className="h-7 w-7 text-secondary fill-secondary drop-shadow-lg cursor-pointer transition-transform hover:scale-125" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-secondary/30 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-secondary text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  Hôtel Fouta Djallon
                </div>
              </div>
              
              <div className="absolute top-[28%] left-[38%] group">
                <div className="relative animate-bounce" style={{ animationDelay: '1s' }}>
                  <MapPin className="h-7 w-7 text-accent fill-accent drop-shadow-lg cursor-pointer transition-transform hover:scale-125" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-accent/30 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-accent text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  Auberge Tinkisso
                </div>
              </div>
              
              {/* Kankan - East center */}
              <div className="absolute top-[45%] left-[65%] group">
                <div className="relative animate-bounce" style={{ animationDelay: '1.2s' }}>
                  <MapPin className="h-7 w-7 text-primary fill-primary drop-shadow-lg cursor-pointer transition-transform hover:scale-125" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-primary/30 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-primary text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  Motel Kankan
                </div>
              </div>
              
              {/* N'Zérékoré - Southeast (forest region) */}
              <div className="absolute top-[68%] left-[70%] group">
                <div className="relative animate-bounce" style={{ animationDelay: '1.4s' }}>
                  <MapPin className="h-7 w-7 text-secondary fill-secondary drop-shadow-lg cursor-pointer transition-transform hover:scale-125" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-secondary/30 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-secondary text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  Auberge Konkoure
                </div>
              </div>
              
              {/* Boké - Northwest */}
              <div className="absolute top-[20%] left-[15%] group">
                <div className="relative animate-bounce" style={{ animationDelay: '1.6s' }}>
                  <MapPin className="h-7 w-7 text-accent fill-accent drop-shadow-lg cursor-pointer transition-transform hover:scale-125" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-accent/30 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-accent text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  Motel Badiar
                </div>
              </div>
              
              <div className="absolute top-[35%] left-[55%] group">
                <div className="relative animate-bounce" style={{ animationDelay: '1.8s' }}>
                  <MapPin className="h-7 w-7 text-primary fill-primary drop-shadow-lg cursor-pointer transition-transform hover:scale-125" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-primary/30 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-primary text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  Hôtel Soumba
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ClientBottomNav />
    </div>
  );
}
