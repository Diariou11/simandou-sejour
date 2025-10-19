import { Header } from '@/components/Header';
import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import gradientBg2 from '@/assets/gradient-bg-2.jpg';

export default function ClientFavorites() {
  const { t } = useLanguage();
  const [favorites] = useState([
    {
      id: 1,
      name: 'Hôtel Fouta Djallon',
      city: 'Labé',
      rating: 4.8,
      reviews: 120,
      price: 450000,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Résidence Nimba',
      city: "N'Zérékoré",
      rating: 4.6,
      reviews: 85,
      price: 380000,
      image: '/placeholder.svg'
    }
  ]);

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img src={gradientBg2} alt="" className="w-full h-full object-cover opacity-20 fixed" />
        </div>
        
        <div className="relative z-10 pt-20 px-4">
          <div className="container mx-auto max-w-4xl py-6">
            <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">
              {t('favorites')}
            </h1>
            
            <div className="space-y-4">
              {favorites.map((item) => (
                <Card key={item.id} className="p-4 hover:shadow-medium transition-smooth">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.city}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary">
                          <Heart className="h-5 w-5 fill-current" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-semibold">{item.rating}</span>
                          <span className="text-muted-foreground">({item.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-primary">
                          {new Intl.NumberFormat('fr-GN').format(item.price)} GNF
                          <span className="text-xs text-muted-foreground ml-1">{t('perNight')}</span>
                        </p>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          {t('bookNow')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <ClientBottomNav />
    </div>
  );
}