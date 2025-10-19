import { Header } from '@/components/Header';
import { HostBottomNav } from '@/components/HostBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Plus, TrendingUp, Sparkles, DollarSign, Calendar } from 'lucide-react';
import gradientBg2 from '@/assets/gradient-bg-2.jpg';

export default function HostDashboard() {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="absolute inset-0 z-0">
        <img src={gradientBg2} alt="" className="w-full h-full object-cover opacity-20 fixed" />
      </div>
      
      <div className="relative z-10 pt-20 px-4">
        <div className="container mx-auto max-w-6xl py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                Tableau de bord hôtelier
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">Gérez vos hébergements avec l'IA</p>
            </div>
            <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 gap-2">
              <Plus className="h-5 w-5" />
              <span className="text-sm md:text-base">Ajouter</span>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              <Card className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary text-xs">+12%</Badge>
              </div>
              <p className="text-xl md:text-2xl font-bold text-foreground">24</p>
              <p className="text-xs md:text-sm text-muted-foreground">Réservations ce mois</p>
            </Card>

            <Card className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                </div>
                <Badge className="bg-secondary/10 text-secondary text-xs">+8%</Badge>
              </div>
              <p className="text-xl md:text-2xl font-bold text-foreground">8.4M GNF</p>
              <p className="text-xs md:text-sm text-muted-foreground">Revenus ce mois</p>
            </Card>

            <Card className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <Badge className="bg-accent/10 text-accent text-xs">Excellent</Badge>
              </div>
              <p className="text-xl md:text-2xl font-bold text-foreground">4.6</p>
              <p className="text-xs md:text-sm text-muted-foreground">Note moyenne</p>
            </Card>
          </div>

          {/* AI Insights */}
          <Card className="p-4 md:p-6 mb-8 bg-primary/5 border-primary/20">
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
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
              Vos hébergements
            </h2>
            
            <div className="space-y-3 md:space-y-4">
              {[
                { name: 'Hôtel Fouta Djallon', city: 'Labé', price: 450000, bookings: 12, aiSuggestion: 480000 },
                { name: 'Résidence Nimba', city: "N'Zérékoré", price: 380000, bookings: 8, aiSuggestion: 350000 }
              ].map((property, idx) => (
                <Card key={idx} className="p-4 md:p-6 hover:shadow-medium transition-smooth">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-base md:text-lg text-foreground mb-1">
                        {property.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{property.city}</p>
                      
                      <div className="flex items-center gap-4 md:gap-6">
                        <div>
                          <p className="text-xs text-muted-foreground">Prix actuel</p>
                          <p className="font-bold text-sm md:text-base text-foreground">
                            {new Intl.NumberFormat('fr-GN').format(property.price)} GNF
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Réservations</p>
                          <p className="font-bold text-sm md:text-base text-foreground">{property.bookings}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-left md:text-right">
                      <Badge className="bg-primary/10 text-primary mb-2 md:mb-3 gap-1 text-xs">
                        <Sparkles className="h-3 w-3" />
                        Prix IA suggéré
                      </Badge>
                      <p className="text-xl md:text-2xl font-black text-primary mb-2 md:mb-3">
                        {new Intl.NumberFormat('fr-GN').format(property.aiSuggestion)} GNF
                      </p>
                      <Button size="sm" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-sm">
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
      
      <HostBottomNav />
    </div>
  );
}
