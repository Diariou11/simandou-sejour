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
      setOffset(prev => (prev + 1) % (sponsored.length * 200));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [sponsored.length]);

  return (
    <div className="w-full overflow-hidden bg-card/50 py-6 border-y border-border">
      <div className="mb-3 text-center">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Établissements en vedette
        </h3>
      </div>
      
      <div className="relative">
        <div 
          className="flex gap-4 transition-transform duration-1000 ease-linear"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {[...sponsored, ...sponsored, ...sponsored].map((acc, idx) => (
            <div
              key={`${acc.id}-${idx}`}
              className="flex-shrink-0 w-64 bg-card rounded-lg p-4 shadow-soft border border-border"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-sm text-foreground">{acc.name}</h4>
                <Badge variant="secondary" className="text-xs">
                  {t('sponsored')}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{acc.city}</p>
              <p className="text-lg font-bold text-primary mt-2">
                {new Intl.NumberFormat('fr-GN').format(acc.price)} GNF
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
