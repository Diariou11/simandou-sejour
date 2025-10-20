import { useState } from 'react';
import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Navigation, Sparkles } from 'lucide-react';
import guineaMap from '@/assets/guinea-map.jpg';

export default function ClientLocation() {
  const { t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    { name: 'Conakry', count: 45 },
    { name: 'Kindia', count: 28 },
    { name: 'Boké', count: 15 },
    { name: 'Labé', count: 22 },
    { name: 'Kankan', count: 18 },
    { name: "N'Zérékoré", count: 20 }
  ];

  return (
    <div className="min-h-screen pb-20 gradient-secondary">
      <div className="pt-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-black text-foreground mb-2">
            {t('location')}
          </h1>
          <p className="text-muted-foreground mb-6">
            Explorez les hébergements à travers la Guinée
          </p>

          <Card className="p-4 mb-6 shadow-strong overflow-hidden relative">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-4 bg-muted">
              <img 
                src={guineaMap} 
                alt="Carte de la Guinée"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90">
              <Navigation className="h-4 w-4 mr-2" />
              Utiliser ma position actuelle
            </Button>
          </Card>

          <Card className="p-4 md:p-6 mb-6 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <Sparkles className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Suggestion IA</h3>
                <p className="text-sm text-muted-foreground">
                  Conakry et Labé sont les destinations les plus populaires ce mois-ci
                </p>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground mb-4">Régions populaires</h2>
            
            {regions.map((region) => (
              <Card
                key={region.name}
                className={`p-4 cursor-pointer hover:shadow-medium transition-smooth ${
                  selectedRegion === region.name ? 'border-primary shadow-medium' : ''
                }`}
                onClick={() => setSelectedRegion(region.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{region.name}</h3>
                      <p className="text-sm text-muted-foreground">{region.count} hébergements</p>
                    </div>
                  </div>
                  <Badge variant="outline">Voir</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <ClientBottomNav />
    </div>
  );
}
