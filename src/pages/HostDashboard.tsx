import { Header } from '@/components/Header';
import { HostBottomNav } from '@/components/HostBottomNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Plus, TrendingUp, Sparkles, DollarSign, Calendar, ChevronLeft, AlertCircle, Star, Clock, Users, Percent, Eye, MessageSquare, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gradientBg2 from '@/assets/gradient-bg-2.jpg';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 7200000 },
  { month: 'Fév', revenue: 6800000 },
  { month: 'Mar', revenue: 7500000 },
  { month: 'Avr', revenue: 8100000 },
  { month: 'Mai', revenue: 8400000 },
  { month: 'Juin', revenue: 9200000 },
];

const bookingSourcesData = [
  { source: 'Direct', count: 45 },
  { source: 'Plateforme', count: 32 },
  { source: 'Téléphone', count: 18 },
  { source: 'Email', count: 12 },
];

const recentActivity = [
  { action: 'Nouvelle réservation', property: 'Hôtel Fouta Djallon', time: 'Il y a 2h', type: 'booking' },
  { action: 'Avis 5 étoiles reçu', property: 'Résidence Nimba', time: 'Il y a 4h', type: 'review' },
  { action: 'Message client', property: 'Hôtel Fouta Djallon', time: 'Il y a 5h', type: 'message' },
  { action: 'Paiement reçu', property: 'Résidence Nimba', time: 'Il y a 7h', type: 'payment' },
];

const upcomingReservations = [
  { guest: 'Mamadou K.', property: 'Hôtel Fouta Djallon', date: '15 Nov', status: 'Confirmée' },
  { guest: 'Fatoumata S.', property: 'Résidence Nimba', date: '16 Nov', status: 'En attente' },
  { guest: 'Ibrahim D.', property: 'Hôtel Fouta Djallon', date: '18 Nov', status: 'Confirmée' },
];

const recentReviews = [
  { guest: 'Aissatou B.', property: 'Hôtel Fouta Djallon', rating: 5, comment: 'Excellent séjour, très professionnel !', time: 'Il y a 1 jour' },
  { guest: 'Mohamed C.', property: 'Résidence Nimba', rating: 4, comment: 'Très bon rapport qualité-prix', time: 'Il y a 2 jours' },
];

export default function HostDashboard() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="absolute inset-0 z-0">
        <img src={gradientBg2} alt="" className="w-full h-full object-cover opacity-20 fixed" />
      </div>
      
      <div className="relative z-10 pt-20 px-4">
        <div className="container mx-auto max-w-6xl py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3 w-full">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/host-home')}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Retour
              </Button>
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                  Tableau de bord hôtelier
                </h1>
                <p className="text-sm md:text-base text-muted-foreground">Gérez vos hébergements avec l'IA</p>
              </div>
            </div>
            <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 gap-2">
              <Plus className="h-5 w-5" />
              <span className="text-sm md:text-base">Ajouter</span>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
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
                  <Star className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <Badge className="bg-accent/10 text-accent text-xs">Excellent</Badge>
              </div>
              <p className="text-xl md:text-2xl font-bold text-foreground">4.6</p>
              <p className="text-xs md:text-sm text-muted-foreground">Note moyenne</p>
            </Card>

            <Card className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Percent className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
                </div>
                <Badge className="bg-blue-500/10 text-blue-500 text-xs">+5%</Badge>
              </div>
              <p className="text-xl md:text-2xl font-bold text-foreground">78%</p>
              <p className="text-xs md:text-sm text-muted-foreground">Taux d'occupation</p>
            </Card>

            <Card className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                </div>
                <Badge className="bg-green-500/10 text-green-500 text-xs">Rapide</Badge>
              </div>
              <p className="text-xl md:text-2xl font-bold text-foreground">2.3h</p>
              <p className="text-xs md:text-sm text-muted-foreground">Temps de réponse moyen</p>
            </Card>

            <Card className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />
                </div>
                <Badge className="bg-purple-500/10 text-purple-500 text-xs">+15%</Badge>
              </div>
              <p className="text-xl md:text-2xl font-bold text-foreground">312K GNF</p>
              <p className="text-xs md:text-sm text-muted-foreground">RevPAR</p>
            </Card>
          </div>

          {/* Alertes et Notifications */}
          <Card className="p-4 md:p-6 mb-8 bg-amber-500/5 border-amber-500/20">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Bell className="h-6 w-6 text-amber-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Alertes importantes
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">3 demandes en attente de confirmation</p>
                      <p className="text-xs text-muted-foreground">Répondez rapidement pour améliorer votre taux de conversion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">2 messages non lus</p>
                      <p className="text-xs text-muted-foreground">Des clients attendent votre réponse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

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

          {/* Graphiques de performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="p-4 md:p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Évolution des revenus
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      formatter={(value: number) => `${(value / 1000000).toFixed(1)}M GNF`}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="p-4 md:p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Sources de réservations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={bookingSourcesData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="source" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="count" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Activité récente et Réservations à venir */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="p-4 md:p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Activité récente
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  {recentActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.type === 'booking' ? 'bg-primary/10' :
                        activity.type === 'review' ? 'bg-accent/10' :
                        activity.type === 'message' ? 'bg-blue-500/10' :
                        'bg-green-500/10'
                      }`}>
                        {activity.type === 'booking' && <Calendar className="h-4 w-4 text-primary" />}
                        {activity.type === 'review' && <Star className="h-4 w-4 text-accent" />}
                        {activity.type === 'message' && <MessageSquare className="h-4 w-4 text-blue-500" />}
                        {activity.type === 'payment' && <DollarSign className="h-4 w-4 text-green-500" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.property}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 md:p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Réservations à venir
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  {upcomingReservations.map((reservation, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">{reservation.guest}</p>
                          <p className="text-xs text-muted-foreground truncate">{reservation.property}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-2">
                        <p className="text-sm font-bold text-foreground">{reservation.date}</p>
                        <Badge className={`text-xs ${
                          reservation.status === 'Confirmée' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'
                        }`}>
                          {reservation.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Avis récents */}
          <Card className="p-4 md:p-6 mb-8">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-accent" />
                Avis récents
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4">
                {recentReviews.map((review, idx) => (
                  <div key={idx} className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-foreground text-sm">{review.guest}</p>
                        <p className="text-xs text-muted-foreground">{review.property}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{review.comment}</p>
                    <p className="text-xs text-muted-foreground">{review.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
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
