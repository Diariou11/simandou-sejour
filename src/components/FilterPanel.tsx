import { Card } from './ui/card';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface FilterPanelProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedAmenities: string[];
  toggleAmenity: (amenity: string) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
}

export const FilterPanel = ({
  priceRange,
  setPriceRange,
  selectedAmenities,
  toggleAmenity,
  minRating,
  setMinRating,
}: FilterPanelProps) => {
  const { t } = useLanguage();

  const amenities = ['WiFi', 'Parking', 'Restaurant', 'Piscine', 'Climatisation', 'Spa'];
  const ratings = [3, 3.5, 4, 4.5];

  return (
    <Card className="p-4 space-y-6 sticky top-20">
      <div>
        <Label className="text-base font-semibold mb-4 block">
          {t('priceRange')}
        </Label>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            min={0}
            max={1000000}
            step={50000}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{priceRange[0].toLocaleString()} GNF</span>
            <span>{priceRange[1].toLocaleString()} GNF</span>
          </div>
        </div>
      </div>

      <div>
        <Label className="text-base font-semibold mb-4 block">
          {t('amenities')}
        </Label>
        <div className="space-y-3">
          {amenities.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={amenity}
                checked={selectedAmenities.includes(amenity)}
                onCheckedChange={() => toggleAmenity(amenity)}
              />
              <label
                htmlFor={amenity}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-semibold mb-4 block">
          {t('minRating')}
        </Label>
        <div className="flex flex-wrap gap-2">
          {ratings.map((rating) => (
            <Badge
              key={rating}
              variant={minRating === rating ? 'default' : 'outline'}
              className="cursor-pointer transition-smooth hover:scale-105"
              onClick={() => setMinRating(rating)}
            >
              ⭐ {rating}+
            </Badge>
          ))}
          <Badge
            variant={minRating === 0 ? 'default' : 'outline'}
            className="cursor-pointer transition-smooth hover:scale-105"
            onClick={() => setMinRating(0)}
          >
            {t('all')}
          </Badge>
        </div>
      </div>
    </Card>
  );
};
