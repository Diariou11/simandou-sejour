import { useState } from 'react';
import { Header } from '@/components/Header';
import { AccommodationCard } from '@/components/AccommodationCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockAccommodations, cities } from '@/data/mockData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search as SearchIcon, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Search() {
  const { t } = useLanguage();
  const [searchCity, setSearchCity] = useState('');
  const [filteredResults, setFilteredResults] = useState(mockAccommodations);

  const handleSearch = () => {
    if (searchCity) {
      setFilteredResults(
        mockAccommodations.filter(acc => 
          acc.city.toLowerCase().includes(searchCity.toLowerCase())
        )
      );
    } else {
      setFilteredResults(mockAccommodations);
    }
  };

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Search Bar */}
          <div className="bg-card rounded-2xl shadow-strong p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="city" className="text-sm font-semibold mb-2 block">
                  {t('city')}
                </Label>
                <Select value={searchCity} onValueChange={setSearchCity}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choisir une ville" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="checkin" className="text-sm font-semibold mb-2 block">
                  {t('checkIn')}
                </Label>
                <Input type="date" id="checkin" className="h-12" />
              </div>
              
              <div>
                <Label htmlFor="checkout" className="text-sm font-semibold mb-2 block">
                  {t('checkOut')}
                </Label>
                <Input type="date" id="checkout" className="h-12" />
              </div>
            </div>
            
            <Button 
              onClick={handleSearch}
              className="w-full mt-4 h-12 text-lg bg-primary hover:bg-primary/90"
            >
              <SearchIcon className="mr-2 h-5 w-5" />
              {t('search')}
            </Button>
          </div>

          {/* AI Suggestions Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge className="bg-primary/10 text-primary px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              ✨ Suggestions pour vous
            </Badge>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              {filteredResults.length} hébergements disponibles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map(accommodation => (
                <AccommodationCard 
                  key={accommodation.id} 
                  accommodation={accommodation} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
