import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message envoyé ! Nous vous répondrons sous 24h');
  };

  return (
    <div className="min-h-screen gradient-secondary">
      <Header />
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4 text-center">
            {t('contact')}
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Notre équipe est à votre écoute
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center shadow-medium hover:shadow-strong transition-smooth">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Téléphone</h3>
              <p className="text-muted-foreground">+224 620 00 00 00</p>
            </Card>

            <Card className="p-6 text-center shadow-medium hover:shadow-strong transition-smooth">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">contact@simandousejour.com</p>
            </Card>

            <Card className="p-6 text-center shadow-medium hover:shadow-strong transition-smooth">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Adresse</h3>
              <p className="text-muted-foreground">Conakry, Guinée</p>
            </Card>
          </div>

          <Card className="p-6 md:p-8 shadow-strong max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Nom complet" required />
                </div>
                <div>
                  <Input type="email" placeholder="Email" required />
                </div>
              </div>
              <div>
                <Input placeholder="Sujet" required />
              </div>
              <div>
                <Textarea placeholder="Votre message..." rows={6} required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}