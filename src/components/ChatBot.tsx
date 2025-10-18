import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const predefinedQuestions = [
  {
    question: "Comment réserver un hébergement ?",
    answer: "Pour réserver, utilisez notre moteur de recherche en sélectionnant votre destination, vos dates et le nombre de personnes. Ensuite, choisissez l'hébergement qui vous convient et suivez le processus de réservation sécurisé."
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons Orange Money, MoMo, Paycard (locaux), ainsi que PayPal, Visa et Mastercard (internationaux). Vous pouvez choisir votre devise préférée : GNF, Euro ou Dollar US."
  },
  {
    question: "Puis-je modifier ou annuler ma réservation ?",
    answer: "Oui, vous pouvez modifier ou annuler votre réservation depuis votre espace 'Mes Réservations'. Les conditions d'annulation varient selon l'établissement et seront affichées avant validation."
  },
  {
    question: "Comment devenir hôtelier sur la plateforme ?",
    answer: "Créez un compte hôtelier via le bouton 'Je propose un hébergement'. Renseignez vos informations, activez votre localisation GPS, puis ajoutez vos hébergements avec photos et descriptions."
  },
  {
    question: "Qu'est-ce que le sponsoring premium ?",
    answer: "Le sponsoring premium met votre établissement en tête des résultats de recherche, vous donnant +35% de visibilité. Vous accédez aussi à la messagerie directe avec vos clients et des statistiques avancées."
  },
  {
    question: "Comment fonctionne la tarification dynamique IA ?",
    answer: "Notre IA analyse la demande locale en temps réel, les événements à venir, et les tendances de réservation pour vous suggérer des prix optimaux qui maximisent votre taux d'occupation et vos revenus."
  },
  {
    question: "Les avis clients sont-ils vérifiés ?",
    answer: "Oui, tous nos avis sont vérifiés par IA. Seuls les clients ayant effectivement séjourné dans l'établissement peuvent laisser un avis, garantissant l'authenticité des commentaires."
  },
  {
    question: "Puis-je réserver des services additionnels ?",
    answer: "Absolument ! Vous pouvez ajouter des services comme le restaurant, spa, navette aéroport, etc. directement lors de votre réservation ou depuis votre espace client après confirmation."
  },
  {
    question: "Comment contacter un hébergeur ?",
    answer: "Les hébergeurs premium disposent d'une messagerie intégrée. Vous pouvez les contacter directement depuis leur fiche établissement. Notre IA peut même traduire vos messages en temps réel."
  },
  {
    question: "Quelles langues sont disponibles ?",
    answer: "Simandou Séjour est disponible en Français, Anglais, Portugais et Chinois (simplifié). Changez la langue depuis le sélecteur en haut de page. Notre IA traduit aussi automatiquement les messages entre utilisateurs."
  }
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: "Bonjour ! Je suis l'assistant IA de Simandou Séjour. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const { language } = useLanguage();

  const handleQuestionClick = (qa: typeof predefinedQuestions[0]) => {
    setMessages(prev => [
      ...prev,
      { type: 'user', content: qa.question },
      { type: 'bot', content: qa.answer }
    ]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInputValue('');

    // Recherche d'une question similaire
    const matchedQ = predefinedQuestions.find(q => 
      q.question.toLowerCase().includes(userMessage.toLowerCase()) ||
      userMessage.toLowerCase().includes(q.question.toLowerCase().split(' ')[0])
    );

    setTimeout(() => {
      if (matchedQ) {
        setMessages(prev => [...prev, { type: 'bot', content: matchedQ.answer }]);
      } else {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: "Je ne suis pas sûr de comprendre votre question. Voici quelques questions fréquentes qui pourraient vous aider. N'hésitez pas à reformuler ou à me poser une autre question !" 
        }]);
      }
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-strong bg-primary hover:bg-primary/90 z-50 animate-float"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[90vw] max-w-md h-[600px] shadow-strong z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="gradient-primary p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
              <h3 className="font-black text-primary-foreground">Assistant IA</h3>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="space-y-2 pt-4">
                  <p className="text-sm text-muted-foreground font-bold">Questions fréquentes :</p>
                  {predefinedQuestions.slice(0, 5).map((qa, idx) => (
                    <Button
                      key={idx}
                      onClick={() => handleQuestionClick(qa)}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-2 px-3 text-sm hover:bg-primary/10 transition-smooth"
                    >
                      {qa.question}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
