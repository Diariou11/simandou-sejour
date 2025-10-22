import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageSquare, Phone, Mail, HelpCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function ClientSupport() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message envoyé ! Notre équipe vous répondra sous 24h.');
  };

  const faqs = [
    {
      question: 'Comment modifier ma réservation ?',
      answer: 'Vous pouvez modifier votre réservation jusqu\'à 24h avant votre arrivée en accédant à "Mes réservations" dans votre profil.'
    },
    {
      question: 'Quels sont les modes de paiement acceptés ?',
      answer: 'Nous acceptons Mobile Money (Orange, MTN, Moov), cartes bancaires (Visa, Mastercard) et paiement à l\'arrivée pour certains établissements.'
    },
    {
      question: 'Puis-je annuler gratuitement ?',
      answer: 'Les conditions d\'annulation varient selon l\'établissement. Consultez les détails lors de votre réservation.'
    },
    {
      question: 'Comment fonctionne le programme Premium ?',
      answer: 'Premium vous donne accès à des réductions exclusives, des offres anticipées et un service client prioritaire.'
    }
  ];

  return (
    <div className="min-h-screen pb-20 gradient-primary">
      <div className="pt-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/client-home')}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              {t('back')}
            </Button>
            <h1 className="text-2xl md:text-3xl font-black text-foreground">
              {t('support')}
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="p-4 hover:shadow-medium transition-smooth cursor-pointer group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-smooth">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">Téléphone</h3>
              <p className="text-sm text-muted-foreground">+224 620 00 00 00</p>
            </Card>

            <Card className="p-4 hover:shadow-medium transition-smooth cursor-pointer group">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-smooth">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">support@simandou.com</p>
            </Card>

            <Card className="p-4 hover:shadow-medium transition-smooth cursor-pointer group">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-smooth">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-1">Chat en direct</h3>
              <p className="text-sm text-muted-foreground">Disponible 24/7</p>
            </Card>
          </div>

          <Card className="p-4 md:p-6 mb-8 shadow-medium">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Questions fréquentes</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <Card className="p-4 md:p-6 shadow-medium">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Sujet
                </label>
                <Input placeholder="Ex: Problème de réservation" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Message
                </label>
                <Textarea 
                  placeholder="Décrivez votre problème ou question..."
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <ChevronRight className="h-4 w-4 mr-2" />
                Envoyer
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <ClientBottomNav />
    </div>
  );
}