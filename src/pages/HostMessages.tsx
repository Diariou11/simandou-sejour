import { Header } from '@/components/Header';
import { HostBottomNav } from '@/components/HostBottomNav';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, MessageSquare, Send, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import gradientBg1 from '@/assets/gradient-bg-1.jpg';

export default function HostMessages() {
  const { t } = useLanguage();
  const [selectedConv, setSelectedConv] = useState<number | null>(null);
  
  const conversations = [
    {
      id: 1,
      name: 'Mme Aissatou Barry',
      lastMessage: 'Bonjour, nous avons bien reçu votre demande...',
      time: 'Il y a 2h',
      unread: true,
      avatar: 'AB'
    },
    {
      id: 2,
      name: 'M. Bangaly Soumah',
      lastMessage: 'Merci pour la confirmation de réservation',
      time: 'Hier',
      unread: false,
      avatar: 'BS'
    },
    {
      id: 3,
      name: 'Mme Kadiatou Diallo',
      lastMessage: 'Avez-vous une chambre disponible ce weekend ?',
      time: 'Il y a 3 jours',
      unread: true,
      avatar: 'KD'
    }
  ];

  const messages = [
    { sender: 'client', text: 'Bonjour, avez-vous une chambre disponible ce weekend ?', time: '10:30' },
    { sender: 'host', text: 'Bonjour ! Oui, nous avons une Chambre Deluxe disponible à 850 000 GNF/nuit. Voulez-vous que je la réserve pour vous ?', time: '10:32' },
    { sender: 'client', text: 'Parfait ! Je souhaite réserver pour 2 nuits.', time: '10:35' }
  ];

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img src={gradientBg1} alt="" className="w-full h-full object-cover opacity-20 fixed" />
        </div>
        
        <div className="relative z-10 pt-20 px-4">
          <div className="container mx-auto max-w-6xl py-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl md:text-3xl font-black text-foreground">
                {t('messages')}
              </h1>
              <Badge className="bg-secondary text-secondary-foreground">
                Premium
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 h-[calc(100vh-16rem)]">
              {/* Conversations List */}
              <Card className="p-4 md:col-span-1 overflow-y-auto">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Rechercher une conversation..." 
                    className="pl-10"
                  />
                </div>
                
                <div className="space-y-2">
                  {conversations.map((conv) => (
                    <div
                      key={conv.id}
                      onClick={() => setSelectedConv(conv.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-smooth hover:bg-muted/50 ${
                        selectedConv === conv.id ? 'bg-primary/10' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-semibold">
                          {conv.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <p className="font-semibold text-sm text-foreground truncate">{conv.name}</p>
                            {conv.unread && (
                              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1"></div>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{conv.lastMessage}</p>
                          <p className="text-xs text-muted-foreground mt-1">{conv.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* Chat Area */}
              <Card className="p-4 md:col-span-2 flex flex-col">
                {selectedConv ? (
                  <>
                    <div className="flex items-center gap-3 pb-4 border-b border-border">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        {conversations.find(c => c.id === selectedConv)?.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {conversations.find(c => c.id === selectedConv)?.name}
                        </p>
                        <p className="text-xs text-muted-foreground">En ligne</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto py-4 space-y-3">
                      {messages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`flex ${msg.sender === 'host' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              msg.sender === 'host'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-foreground'
                            }`}
                          >
                            <p className="text-sm">{msg.text}</p>
                            <p className={`text-xs mt-1 ${
                              msg.sender === 'host' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                            }`}>
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-4 border-t border-border">
                      <Input placeholder="Écrivez votre message..." className="flex-1" />
                      <Button className="bg-primary hover:bg-primary/90">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Aucune conversation sélectionnée
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Sélectionnez une conversation pour commencer à discuter
                    </p>
                  </div>
                )}
              </Card>
            </div>
            
            <Card className="mt-4 p-4 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  ✨ <strong>IA :</strong> Les hôteliers qui utilisent la messagerie client premium constatent +20% de fidélisation et +15% de réservations récurrentes.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <HostBottomNav />
    </div>
  );
}