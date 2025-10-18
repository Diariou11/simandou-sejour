import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Sparkles, MapPin, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ClientLocation() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    prefecture: '',
    quartier: '',
    country: 'Guinée'
  });
  const [aiSuggestion, setAiSuggestion] = useState('');

  const handlePrefectureChange = (value: string) => {
    setFormData({...formData, prefecture: value});
    
    if (value.toLowerCase().includes('conakry')) {
      setAiSuggestion("✨ IA : En fonction de votre localisation (Conakry), nous vous proposerons des hébergements et services à proximité. Top hébergements disponibles à Conakry : Hôtel Sily National, Résidence Loos.");
    } else if (value.toLowerCase().includes('labé')) {
      setAiSuggestion("✨ IA : Labé est une destination magnifique ! Nous vous recommandons Hôtel Fouta Djallon pour votre prochain séjour.");
    } else if (value) {
      setAiSuggestion(`✨ IA : Nous enregistrons votre localisation (${value}) pour vous proposer les meilleures offres disponibles dans votre région.`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Compte créé avec succès !",
      description: "Bienvenue sur Simandou Séjour"
    });
    
    setTimeout(() => navigate('/client-home'), 1500);
  };

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="p-6 md:p-8 shadow-strong animate-scale-in">
            <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6 text-center">
              Localisation Client
            </h1>

            <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-md mb-6 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-destructive">
                Accès à la position refusé. Veuillez saisir manuellement.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="prefecture">Préfecture / Commune</Label>
                <Input
                  id="prefecture"
                  placeholder="Ex: Conakry"
                  value={formData.prefecture}
                  onChange={(e) => handlePrefectureChange(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="quartier">Sous-préfecture / Quartier</Label>
                <Input
                  id="quartier"
                  placeholder="Ex: Kaloum"
                  value={formData.quartier}
                  onChange={(e) => setFormData({...formData, quartier: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="country">Pays</Label>
                <Input
                  id="country"
                  placeholder="Ex: Guinée"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  required
                />
              </div>

              {aiSuggestion && (
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-md animate-fade-in">
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      {aiSuggestion}
                    </p>
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-bold">
                <MapPin className="mr-2 h-5 w-5" />
                Valider et créer mon compte
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
