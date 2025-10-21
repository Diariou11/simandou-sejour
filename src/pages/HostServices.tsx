import { Header } from '@/components/Header';
import { HostBottomNav } from '@/components/HostBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Pencil, Trash2, Clock, Euro } from 'lucide-react';
import spaImage from '@/assets/services/spa-wellness.jpg';
import restaurantImage from '@/assets/services/restaurant-gourmet.jpg';
import gymImage from '@/assets/services/gym-sport.jpg';
import conciergeImage from '@/assets/services/concierge.jpg';

const services = [
  {
    id: 1,
    name: 'Spa & Bien-être',
    description: 'Détendez-vous dans notre espace spa, profitez de massages et de soins personnalisés pour une expérience relaxante.',
    hours: '09h00 - 20h00',
    price: 'À partir de 50€',
    capacity: '20 personnes',
    image: spaImage
  },
  {
    id: 2,
    name: 'Restaurant Gourmet',
    description: 'Découvrez une cuisine raffinée avec des produits locaux frais dans une ambiance élégante.',
    hours: '12h00 - 14h00 | 19h00 - 22h00',
    price: 'À partir de 50 000 GNF',
    capacity: '100 personnes',
    image: restaurantImage
  },
  {
    id: 3,
    name: 'Salle de Sport',
    description: 'Équipements modernes pour maintenir votre routine fitness. Accès gratuit pour les clients.',
    hours: '06h00 - 23h00',
    price: 'Gratuit',
    capacity: '50 personnes',
    image: gymImage
  },
  {
    id: 4,
    name: 'Service de Conciergerie',
    description: "Notre équipe de concierges est à votre disposition pour toutes vos demandes et réservations.",
    hours: '24h/24',
    price: 'Inclus',
    capacity: '10 personnes',
    image: conciergeImage
  }
];

export default function HostServices() {
  return (
    <div className="min-h-screen pb-16 bg-background">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl font-black text-foreground mb-8">
            Gestion des Services Internes
          </h1>

          {/* AI Suggestion */}
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-8">
            <p className="text-sm text-foreground">
              <span className="font-bold">✨ IA :</span> Le service 'Restaurant Gourmet' est le plus consulté 
              par vos clients. Proposez une offre spéciale pour augmenter vos ventes de 25 %.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-8">
            <h2 className="text-xl font-black text-primary mb-6">
              Mes Services
            </h2>
            
            <div className="space-y-6">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-56 object-cover"
                  />
                  
                  <div className="p-6">
                    <h3 className="text-lg font-black text-primary mb-3">
                      {service.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{service.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <span className="font-bold">💰</span>
                        <span>{service.price}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2 flex-1">
                        <Pencil className="h-4 w-4" />
                        Modifier
                      </Button>
                      <Button variant="destructive" size="sm" className="gap-2 flex-1">
                        <Trash2 className="h-4 w-4" />
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Add Service Button */}
          <Button className="w-full bg-primary hover:bg-primary/90 gap-2 h-12">
            <Plus className="h-5 w-5" />
            Ajouter un Service
          </Button>
        </div>
      </div>
      
      <HostBottomNav />
    </div>
  );
}
