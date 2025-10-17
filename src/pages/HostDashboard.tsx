import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Plus, TrendingUp, Sparkles, DollarSign, Calendar } from 'lucide-react';

export default function HostDashboard() {
  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-foreground mb-2">
                Tableau de bord hôtelier
              </h1>
              <p className="text-muted-foreground">Gérez vos hébergements avec l'IA</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus className="h-5 w-5" />
              Ajouter un hébergement
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary">+12%</Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">24</p>
              <p className="text-sm text-muted-foreground">Réservations ce mois</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-secondary" />
                </div>
                <Badge className="bg-secondary/10 text-secondary">+8%</Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">8.4M GNF</p>
              <p className="text-sm text-muted-foreground">Revenus ce mois</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <Badge className="bg-accent/10 text-accent">Excellent</Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">4.6</p>
              <p className="text-sm text-muted-foreground">Note moyenne</p>
            </Card>
          </div>

          {/* AI Insights */}
          <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Recommandations IA
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Augmentez vos tarifs de 15% ce weekend - forte demande prévue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Ajoutez des photos de votre restaurant pour augmenter les réservations de 23%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Période creuse détectée du 15-20 mars - promotions recommandées</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Properties List */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Vos hébergements
            </h2>
            
            <div className="space-y-4">
              {[
                { name: 'Hôtel Fouta Djallon', city: 'Labé', price: 450000, bookings: 12, aiSuggestion: 480000 },
                { name: 'Résidence Nimba', city: "N'Zérékoré", price: 380000, bookings: 8, aiSuggestion: 350000 }
              ].map((property, idx) => (
                <Card key={idx} className="p-6 hover:shadow-medium transition-smooth">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground mb-1">
                        {property.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{property.city}</p>
                      
                      <div className="flex items-center gap-6">
                        <div>
                          <p className="text-xs text-muted-foreground">Prix actuel</p>
                          <p className="font-bold text-foreground">
                            {new Intl.NumberFormat('fr-GN').format(property.price)} GNF
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Réservations</p>
                          <p className="font-bold text-foreground">{property.bookings}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <Badge className="bg-primary/10 text-primary mb-3 gap-1">
                        <Sparkles className="h-3 w-3" />
                        Prix IA suggéré
                      </Badge>
                      <p className="text-2xl font-black text-primary">
                        {new Intl.NumberFormat('fr-GN').format(property.aiSuggestion)} GNF
                      </p>
                      <Button size="sm" className="mt-3 bg-primary hover:bg-primary/90">
                        Appliquer
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
