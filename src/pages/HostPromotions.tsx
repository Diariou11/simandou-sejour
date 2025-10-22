import { Header } from '@/components/Header';
import { HostBottomNav } from '@/components/HostBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus, Pencil, Trash2, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function HostPromotions() {
  const navigate = useNavigate();
  
  const activePromotions = [
    {
      id: 1,
      name: 'Offre Spéciale Printemps',
      description: 'Profitez de 20% de réduction sur toutes les chambres deluxe pour les réservations en avril.',
      discount: 20,
      validFrom: '01 April 2024',
      validTo: '30 April 2024',
      accommodation: 'Hôtel Le Grand Conakry',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Séjour Famille Étendu',
      description: 'Bénéficiez de 10% de réduction pour tout séjour de 3 nuits ou plus en mai et juin.',
      discount: 10,
      validFrom: '01 May 2024',
      validTo: '30 June 2024',
      accommodation: 'Résidence Kankan',
      status: 'Active'
    }
  ];

  const plannedPromotions = [
    {
      id: 3,
      name: "Vacances d'Été",
      description: "Réservez avant le 30 juillet pour obtenir 25% de réduction sur votre séjour en août.",
      discount: 25,
      validFrom: '01 August 2024',
      validTo: '31 August 2024',
      accommodation: 'Appartements Vue Mer',
      status: 'Planifiée'
    }
  ];

  const endedPromotions = [
    {
      id: 4,
      name: 'Offre Hivernale',
      description: '20% de réduction sur toutes les réservations effectuées en décembre 2023.',
      discount: 20,
      validFrom: '01 December 2023',
      validTo: '31 December 2023',
      accommodation: 'Auberge de la Forêt',
      status: 'Terminée'
    }
  ];

  const renderPromotionCard = (promo: any) => (
    <Card key={promo.id} className="p-6 mb-4">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-foreground">{promo.name}</h3>
        <Badge 
          className={
            promo.status === 'Active' ? 'bg-primary text-primary-foreground' :
            promo.status === 'Planifiée' ? 'bg-secondary text-secondary-foreground' :
            'bg-muted text-muted-foreground'
          }
        >
          {promo.status}
        </Badge>
      </div>
      
      <p className="text-sm text-muted-foreground mb-3">{promo.description}</p>
      
      <div className="space-y-1 mb-4">
        <p className="text-sm font-bold text-primary">Réduction : {promo.discount}%</p>
        <p className="text-sm text-muted-foreground">
          Valide du {promo.validFrom} au {promo.validTo}
        </p>
        <p className="text-sm text-muted-foreground">Hébergement : {promo.accommodation}</p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="gap-2">
          <Pencil className="h-4 w-4" />
          Modifier
        </Button>
        <Button variant="destructive" size="sm" className="gap-2">
          <Trash2 className="h-4 w-4" />
          Supprimer
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen pb-16 bg-background">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/host-home')}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Retour
            </Button>
            <h1 className="text-2xl font-black text-foreground">
              Gestion des Promotions
            </h1>
          </div>

          {/* Create Promotion Form */}
          <Card className="p-6 mb-8">
            <h2 className="text-lg font-bold text-foreground mb-4">
              Créer une nouvelle promotion
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Nom de la promotion
                </label>
                <Input placeholder="Ex: Offre Spéciale Week-end" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Description
                </label>
                <Textarea 
                  placeholder="Détails de la promotion (ex: -15% sur toutes les réservations du vendredi au dimanche)"
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Pourcentage de réduction (%)
                </label>
                <Input type="number" placeholder="Ex: 15" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Période de validité
                </label>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  Sélectionner une plage de dates
                </Button>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Hébergement(s) applicable(s)
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un hébergement" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hotel-belle-vue">Hôtel Belle Vue</SelectItem>
                    <SelectItem value="hotel-fouta">Hôtel Fouta Djallon</SelectItem>
                    <SelectItem value="residence-nimba">Résidence Nimba</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 gap-2">
                <Plus className="h-5 w-5" />
                Créer la Promotion
              </Button>
            </div>
          </Card>

          {/* AI Suggestion */}
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-6">
            <p className="text-sm text-foreground">
              <span className="font-bold">✨ IA :</span> Les promotions de 20 % sur 2 nuits minimum 
              génèrent 40 % de réservations en plus.
            </p>
          </div>

          {/* Active Promotions */}
          <div className="mb-8">
            <h2 className="text-xl font-black text-foreground mb-4">
              Promotions Actives
            </h2>
            {activePromotions.map(renderPromotionCard)}
          </div>

          {/* Planned Promotions */}
          <div className="mb-8">
            <h2 className="text-xl font-black text-foreground mb-4">
              Promotions Planifiées
            </h2>
            {plannedPromotions.map(renderPromotionCard)}
          </div>

          {/* Ended Promotions */}
          <div>
            <h2 className="text-xl font-black text-foreground mb-4">
              Promotions Terminées
            </h2>
            {endedPromotions.map(renderPromotionCard)}
          </div>
        </div>
      </div>
      
      <HostBottomNav />
    </div>
  );
}
