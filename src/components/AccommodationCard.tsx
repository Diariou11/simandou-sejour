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
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-smooth">
            {accommodation.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <MapPin className="h-3 w-3" />
            {accommodation.city}, {accommodation.region}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="font-semibold">{accommodation.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({accommodation.reviews} avis)
          </span>
        </div>
        
        <div className="pt-2 border-t border-border">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold text-primary">
                {formattedPrice} <span className="text-sm font-normal text-muted-foreground">GNF</span>
              </p>
              <p className="text-xs text-muted-foreground">{t('perNight')}</p>
            </div>
            
            <Link to={`/accommodation/${accommodation.id}`}>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                {t('bookNow')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};
