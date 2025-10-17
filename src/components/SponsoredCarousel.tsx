import { useEffect, useState } from 'react';
import { mockAccommodations } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export const SponsoredCarousel = () => {
  const { t } = useLanguage();
  const [offset, setOffset] = useState(0);
  
  const sponsored = mockAccommodations.filter(a => a.sponsored);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => prev + 1);
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-card/50 py-6 md:py-8 border-y border-border">
      <div className="mb-4 text-center px-4">
        <h3 className="text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-wide">
          Établissements en vedette
        </h3>
      </div>
      
      <div className="relative">
        <div 
          className="flex gap-4"
          style={{ 
            transform: `translateX(-${offset}px)`,
            transition: 'none'
          }}
        >
          {[...sponsored, ...sponsored, ...sponsored, ...sponsored].map((acc, idx) => (
            <div
              key={`${acc.id}-${idx}`}
              className="flex-shrink-0 w-64 md:w-72 bg-card rounded-lg overflow-hidden shadow-soft border border-border"
            >
              <div className="relative h-32 md:h-40">
                <img 
                  src={acc.image} 
                  alt={acc.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 md:p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-sm md:text-base text-foreground line-clamp-1">{acc.name}</h4>
                  <Badge variant="secondary" className="text-xs shrink-0 ml-2">
                    {t('sponsored')}
                  </Badge>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mb-2">{acc.city}</p>
                <p className="text-base md:text-lg font-bold text-primary">
                  {new Intl.NumberFormat('fr-GN').format(acc.price)} GNF
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
