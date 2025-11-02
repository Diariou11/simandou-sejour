import { Header } from '@/components/Header';
import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Bell, CheckCircle, Gift, MessageSquare, Sparkles, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import gradientBg1 from '@/assets/gradient-bg-1.jpg';

export default function ClientNotifications() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const notifications = [
    {
      icon: CheckCircle,
      type: 'success',
      title: 'Réservation confirmée',
      message: 'Votre séjour au Grand Hôtel de Conakry est confirmé pour le 15-18 Sept.',
      time: 'Il y a 2h',
      color: 'text-primary'
    },
    {
      icon: Gift,
      type: 'promo',
      title: 'Nouvelle offre spéciale',
      message: '-20% sur 3 nuits minimum. Offre valable jusqu\'au 30 mars.',
      time: 'Il y a 5h',
      color: 'text-secondary'
    },
    {
      icon: MessageSquare,
      type: 'message',
      title: 'Message du personnel',
      message: 'L\'hôtel Fouta Djallon vous souhaite la bienvenue et confirme votre arrivée.',
      time: 'Hier',
      color: 'text-accent'
    },
    {
      icon: Sparkles,
      type: 'ai',
      title: 'Recommandation IA',
      message: 'Nous avons trouvé 3 nouveaux hébergements qui correspondent à vos préférences.',
      time: 'Il y a 2 jours',
      color: 'text-primary'
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img src={gradientBg1} alt="" className="w-full h-full object-cover opacity-20 fixed" />
        </div>
        
        <div className="relative z-10 pt-20 px-4">
          <div className="container mx-auto max-w-4xl py-6">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => navigate('/client-home')}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {t('back')}
                </Button>
              </div>
              <div className="flex items-center justify-between gap-3">
                <h1 className="text-2xl md:text-3xl font-black text-foreground">
                  {t('notifications')}
                </h1>
                <Badge className="bg-primary/10 text-primary whitespace-nowrap">
                  {notifications.length} nouvelles
                </Badge>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-6">
                <TabsTrigger value="all">Toutes</TabsTrigger>
                <TabsTrigger value="reservations">Réservations</TabsTrigger>
                <TabsTrigger value="promos">Promotions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="space-y-3">
                  {notifications.map((notif, idx) => (
                    <Card key={idx} className="p-4 hover:shadow-medium transition-smooth">
                      <div className="flex gap-4">
                        <div className={`h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 ${notif.color}`}>
                          <notif.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className="font-bold text-sm text-foreground">{notif.title}</h3>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{notif.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{notif.message}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reservations">
                <div className="space-y-3">
                  {notifications.filter(n => n.type === 'success' || n.type === 'message').map((notif, idx) => (
                    <Card key={idx} className="p-4">
                      <div className="flex gap-4">
                        <div className={`h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 ${notif.color}`}>
                          <notif.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-sm text-foreground mb-1">{notif.title}</h3>
                          <p className="text-sm text-muted-foreground">{notif.message}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="promos">
                <div className="space-y-3">
                  {notifications.filter(n => n.type === 'promo' || n.type === 'ai').map((notif, idx) => (
                    <Card key={idx} className="p-4">
                      <div className="flex gap-4">
                        <div className={`h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 ${notif.color}`}>
                          <notif.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-sm text-foreground mb-1">{notif.title}</h3>
                          <p className="text-sm text-muted-foreground">{notif.message}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <Card className="mt-6 p-4 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  💡 <strong>IA :</strong> Nous classons vos notifications par priorité pour que vous ne manquiez jamais une offre ou une confirmation importante.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <ClientBottomNav />
    </div>
  );
}