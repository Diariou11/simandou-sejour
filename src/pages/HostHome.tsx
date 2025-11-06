import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Plus, BarChart3, Calendar, Users } from 'lucide-react';

const aiTips = [
  "✨ IA : Activez le sponsoring pour apparaître en tête des résultats et attirer +35 % de clients.",
  "✨ IA : Les clients recherchent beaucoup Conakry ce mois-ci. Ajustez vos prix pour rester compétitif.",
  "✨ IA : Ajoutez des photos haute définition de vos chambres. Les annonces avec 4+ photos obtiennent 50 % de clics en plus.",
  "✨ IA : Répondez rapidement aux avis clients. Les établissements réactifs gagnent +20 % de réservations.",
  "✨ IA : Proposez des services additionnels (restaurant, spa, navette). Cela augmente le panier moyen de 25 %."
];

const testimonials = [
  {
    name: "Mamadou Diallo",
    role: "Gérant – Hôtel Fouta Djallon",
    text: "Grâce à Simandou Séjour, j'ai augmenté mon taux d'occupation de 30 % en 3 mois. L'IA m'aide à ajuster mes prix au bon moment.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    name: "Aissata Camara",
    role: "Directrice – Résidence Nimba",
    text: "La gestion des réservations est devenue simple et rapide. Je gagne du temps et mes clients sont plus satisfaits.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
  },
  {
    name: "Ibrahima Bah",
    role: "Responsable – Auberge Konkouré",
    text: "Les conseils IA sont précieux. J'ai découvert que répondre aux avis clients boostait vraiment mes réservations.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
  }
];

export default function HostHome() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % aiTips.length);
    }, 3000);

    return () => clearInterval(tipInterval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-black text-foreground mb-2">
              Bienvenue sur votre espace Hôtelier
            </h1>
            <p className="text-muted-foreground">
              Gérez, optimisez et développez votre établissement avec l'aide de l'IA.
            </p>
          </div>

          {/* AI Tips Banner */}
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-8 animate-fade-in">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-foreground">
                {aiTips[currentTipIndex]}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link to="/host-dashboard">
              <Card className="p-6 hover:shadow-medium transition-smooth cursor-pointer">
                <BarChart3 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-1">Tableau de Bord</h3>
                <p className="text-sm text-muted-foreground">Statistiques et performances</p>
              </Card>
            </Link>

            <Link to="/host-calendar">
              <Card className="p-6 hover:shadow-medium transition-smooth cursor-pointer">
                <Calendar className="h-8 w-8 text-secondary mb-3" />
                <h3 className="font-bold text-foreground mb-1">Calendrier</h3>
                <p className="text-sm text-muted-foreground">Gérez vos disponibilités</p>
              </Card>
            </Link>

            <Link to="/host-services">
              <Card className="p-6 hover:shadow-medium transition-smooth cursor-pointer">
                <Users className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-1">Services</h3>
                <p className="text-sm text-muted-foreground">Gérez vos services internes</p>
              </Card>
            </Link>
          </div>

          <Link to="/host-dashboard">
            <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 gap-2 mb-8">
              <Plus className="h-5 w-5" />
              Ajouter un hébergement
            </Button>
          </Link>

          {/* Testimonials */}
          <div className="mb-8">
            <h2 className="text-xl font-black text-foreground mb-4">Témoignages</h2>
            <Card className="p-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <img
                  src={testimonials[currentTestimonialIndex].image}
                  alt={testimonials[currentTestimonialIndex].name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-foreground mb-3 italic">
                    "{testimonials[currentTestimonialIndex].text}"
                  </p>
                  <p className="font-bold text-foreground">
                    {testimonials[currentTestimonialIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonialIndex].role}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Optimisation IA en Temps Réel
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Notre intelligence artificielle analyse en temps réel le marché, vos concurrents et les tendances pour vous suggérer les meilleurs prix et stratégies. Augmentez votre chiffre d'affaires jusqu'à 40% avec nos recommandations personnalisées.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Analyse de la demande locale en temps réel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Suggestions de prix dynamiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Alertes sur les opportunités de marché</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/5 to-accent/5">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                Gestion Simplifiée & Automatisée
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Gérez toutes vos réservations, disponibilités et services depuis une seule interface intuitive. Automatisez les tâches répétitives et concentrez-vous sur l'essentiel : vos clients.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Calendrier synchronisé multi-plateformes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Notifications automatiques aux clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Facturation et paiements intégrés</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Success Metrics */}
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 mb-8">
            <h3 className="font-bold text-foreground mb-4 text-center">
              Rejoignez des centaines d'établissements qui ont transformé leur activité
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-black text-primary mb-1">+40%</p>
                <p className="text-xs text-muted-foreground">Taux d'occupation moyen</p>
              </div>
              <div>
                <p className="text-3xl font-black text-secondary mb-1">-60%</p>
                <p className="text-xs text-muted-foreground">Temps de gestion</p>
              </div>
              <div>
                <p className="text-3xl font-black text-accent mb-1">+35%</p>
                <p className="text-xs text-muted-foreground">Revenus moyens</p>
              </div>
              <div>
                <p className="text-3xl font-black text-primary mb-1">4.8/5</p>
                <p className="text-xs text-muted-foreground">Satisfaction clients</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
