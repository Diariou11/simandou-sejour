import { Header } from '@/components/Header';
import { HostBottomNav } from '@/components/HostBottomNav';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, TrendingUp, TrendingDown, Building, Euro, Percent, BookOpen } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyOccupationData = [
  { month: 'Jan', value: 65 },
  { month: 'Fév', value: 70 },
  { month: 'Mar', value: 75 },
  { month: 'Avr', value: 80 },
  { month: 'Mai', value: 85 },
  { month: 'Juin', value: 90 },
];

const annualRevenueData = [
  { quarter: 'T1', value: 125 },
  { quarter: 'T2', value: 145 },
  { quarter: 'T3', value: 130 },
  { quarter: 'T4', value: 175 },
];

const reservationSourcesData = [
  { name: 'Direct', value: 45, color: '#0B3B66' },
  { name: 'RS', value: 30, color: '#F34300' },
  { name: 'Agence', value: 25, color: '#228C22' },
];

export default function HostReports() {
  return (
    <div className="min-h-screen pb-16 bg-background">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-2xl font-black text-foreground mb-8">
            Rapports & Statistiques
          </h1>

          {/* Search and Filters */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="md:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher des données..." 
                  className="pl-10"
                />
              </div>
            </div>
            
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Date début
            </Button>
            
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Date fin
            </Button>
          </div>

          {/* Key Indicators */}
          <div className="mb-8">
            <h2 className="text-xl font-black text-foreground mb-4">
              Indicateurs Clés
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-primary text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>+5%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Occupation</p>
                <p className="text-3xl font-black text-foreground">78%</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Euro className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="flex items-center gap-1 text-destructive text-sm">
                    <TrendingDown className="h-4 w-4" />
                    <span>-2%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">RevPAR</p>
                <p className="text-3xl font-black text-foreground">125 €</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Percent className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex items-center gap-1 text-primary text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>+1.5%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Conversion</p>
                <p className="text-3xl font-black text-foreground">12.3%</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-primary text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>+10%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Réservations</p>
                <p className="text-3xl font-black text-foreground">450</p>
              </Card>
            </div>
          </div>

          {/* Monthly Occupation Chart */}
          <Card className="p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Occupation Mensuelle
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyOccupationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#228C22" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Annual Revenue Chart */}
          <Card className="p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Revenus Annuels
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={annualRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#0B3B66" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Reservation Sources */}
          <Card className="p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Sources de Réservations
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <ResponsiveContainer width="100%" height={300} className="max-w-sm">
                <PieChart>
                  <Pie
                    data={reservationSourcesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {reservationSourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="flex flex-col gap-3">
                {reservationSourcesData.map((source) => (
                  <div key={source.name} className="flex items-center gap-3">
                    <div 
                      className="h-4 w-4 rounded-full" 
                      style={{ backgroundColor: source.color }}
                    />
                    <span className="text-sm font-medium text-foreground">
                      {source.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* AI Insights */}
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
            <p className="text-sm text-foreground mb-2">
              <span className="font-bold">✨ IA :</span> Vos revenus annuels pourraient atteindre 200 000 000 GNF 
              si vous maintenez ce rythme.
            </p>
            <p className="text-sm text-foreground">
              <span className="font-bold">✨ IA :</span> 60 % de vos réservations viennent du direct. 
              Investissez davantage dans vos canaux digitaux.
            </p>
          </div>
        </div>
      </div>
      
      <HostBottomNav />
    </div>
  );
}
