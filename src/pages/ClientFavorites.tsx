import { Header } from '@/components/Header';
import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Star, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gradientBg2 from '@/assets/gradient-bg-2.jpg';
import hotelFoutaDjallon from '@/assets/accommodations/hotel-fouta-djallon.jpg';
import residenceNimba from '@/assets/accommodations/residence-nimba.jpg';
import motelBadiar from '@/assets/accommodations/motel-badiar.jpg';
import aubergeKonkoure from '@/assets/accommodations/auberge-konkoure.jpg';

export default function ClientFavorites() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [favorites] = useState([
    {
      id: '1',
      name: 'Hôtel Fouta Djallon',
      city: 'Labé',
      rating: 4.8,
      reviews: 120,
      price: 450000,
      image: hotelFoutaDjallon
    },
    {
      id: '2',
      name: 'Résidence Nimba',
      city: "N'Zérékoré",
      rating: 4.6,
      reviews: 85,
      price: 380000,
      image: residenceNimba
    },
    {
      id: '4',
      name: 'Motel Badiar',
      city: 'Koundara',
      rating: 4.0,
      reviews: 45,
      price: 180000,
      image: motelBadiar
    },
    {
      id: '3',
      name: 'Auberge Konkouré',
      city: 'Kindia',
      rating: 4.3,
      reviews: 67,
      price: 250000,
      image: aubergeKonkoure
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
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="gap-2 mb-4"
            >
              <ChevronLeft className="h-4 w-4" />
              Retour
            </Button>

            <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">
              {t('favorites')}
            </h1>
            
            <div className="space-y-4">
              {favorites.map((item) => (
                <Card key={item.id} className="p-3 md:p-4 hover:shadow-medium transition-smooth">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full sm:w-28 h-32 sm:h-28 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-foreground mb-1 truncate">{item.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3 flex-shrink-0" />
                            <span className="truncate">{item.city}</span>
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary flex-shrink-0 -mt-1 -mr-2">
                          <Heart className="h-5 w-5 fill-current" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-semibold">{item.rating}</span>
                          <span className="text-muted-foreground">({item.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <p className="text-base sm:text-lg font-bold text-primary">
                          {new Intl.NumberFormat('fr-GN').format(item.price)} GNF
                          <span className="text-xs text-muted-foreground ml-1">{t('perNight')}</span>
                        </p>
                        <Link to={`/accommodation/${item.id}`} className="w-full sm:w-auto">
                          <Button size="sm" className="bg-primary hover:bg-primary/90 w-full sm:w-auto whitespace-nowrap">
                            {t('bookNow')}
                          </Button>
                        </Link>
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