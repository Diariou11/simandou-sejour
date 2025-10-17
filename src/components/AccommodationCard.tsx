import { Star, MapPin, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accommodation } from '@/data/mockData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

export const AccommodationCard = ({ accommodation }: AccommodationCardProps) => {
  const { t } = useLanguage();
  
  const formattedPrice = new Intl.NumberFormat('fr-GN').format(accommodation.price);

  return (
    <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-smooth group">
      <div className="relative h-48 bg-muted overflow-hidden">
        <img 
          src={accommodation.image} 
          alt={accommodation.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        {accommodation.sponsored && (
          <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
            {t('sponsored')}
          </Badge>
        )}
        {accommodation.aiPriceSuggestion && (
          <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground gap-1">
            <Sparkles className="h-3 w-3" />
            IA
          </Badge>
        )}
      </div>
      
      <div className="p-3 md:p-4 space-y-2 md:space-y-3">
        <div>
          <h3 className="font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-smooth line-clamp-1">
            {accommodation.name}
          </h3>
          <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground mt-1">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="truncate">{accommodation.city}, {accommodation.region}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs md:text-sm">
            <Star className="h-3 md:h-4 w-3 md:w-4 fill-secondary text-secondary" />
            <span className="font-semibold">{accommodation.rating}</span>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground">
            ({accommodation.reviews} avis)
          </span>
        </div>
        
        <div className="pt-2 border-t border-border">
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
              <p className="text-lg md:text-2xl font-bold text-primary truncate">
                {formattedPrice} <span className="text-xs md:text-sm font-normal text-muted-foreground">GNF</span>
              </p>
              <p className="text-xs text-muted-foreground">{t('perNight')}</p>
            </div>
            
            <Link to={`/accommodation/${accommodation.id}`} className="shrink-0">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs md:text-sm h-8 md:h-9 px-3 md:px-4">
                {t('bookNow')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};
