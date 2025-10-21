import { Header } from '@/components/Header';
import { HostBottomNav } from '@/components/HostBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gradientBg1 from '@/assets/gradient-bg-1.jpg';

const reviews = [
  {
    id: 1,
    guestName: 'Aissatou Barry',
    accommodation: 'Hôtel Belle Vue',
    rating: 5,
    comment: 'Séjour exceptionnel! Le personnel était aux petits soins et les chambres impeccables. Je reviendrai sans hésiter.',
    date: '18 Janvier 2025',
    avatar: 'AB'
  },
  {
    id: 2,
    guestName: 'Mamadou Diallo',
    accommodation: 'Hôtel Belle Vue',
    rating: 4,
    comment: 'Très bon hôtel, bien situé. La restauration est excellente. Seul petit bémol: le wifi pourrait être plus rapide.',
    date: '15 Janvier 2025',
    avatar: 'MD'
  },
  {
    id: 3,
    guestName: 'Kadiatou Camara',
    accommodation: 'Hôtel Belle Vue',
    rating: 5,
    comment: 'Service impeccable du début à la fin. Les installations sont modernes et très propres. Hautement recommandé!',
    date: '12 Janvier 2025',
    avatar: 'KC'
  },
  {
    id: 4,
    guestName: 'Alpha Condé',
    accommodation: 'Hôtel Belle Vue',
    rating: 4,
    comment: 'Belle expérience dans l\'ensemble. Chambre confortable et petit-déjeuner varié.',
    date: '08 Janvier 2025',
    avatar: 'AC'
  },
  {
    id: 5,
    guestName: 'Fatoumata Bah',
    accommodation: 'Hôtel Belle Vue',
    rating: 5,
    comment: 'Magnifique hôtel avec une vue superbe. Le spa est un vrai plus. Merci pour ce merveilleux séjour!',
    date: '05 Janvier 2025',
    avatar: 'FB'
  }
];

export default function HostReviewsManagement() {
  const navigate = useNavigate();

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img src={gradientBg1} alt="" className="w-full h-full object-cover opacity-20 fixed" />
        </div>
        
        <div className="relative z-10 pt-20 px-4">
          <div className="container mx-auto max-w-4xl py-6">
            <div className="flex items-center gap-3 mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/host-dashboard')}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Retour
              </Button>
              <h1 className="text-2xl md:text-3xl font-black text-foreground">
                Gestion des Avis
              </h1>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-black text-primary mb-2">{averageRating}</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= Math.round(parseFloat(averageRating))
                          ? 'fill-primary text-primary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Note moyenne</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-3xl font-black text-secondary mb-2">{reviews.length}</div>
                <p className="text-sm text-muted-foreground">Avis reçus</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                  <div className="text-3xl font-black text-accent">+12%</div>
                </div>
                <p className="text-sm text-muted-foreground">Ce mois-ci</p>
              </Card>
            </div>

            {/* AI Insight */}
            <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-6">
              <p className="text-sm text-foreground">
                <span className="font-bold">✨ IA :</span> Vos avis sont excellents! 
                Continuez à maintenir ce niveau de qualité. Les clients apprécient particulièrement 
                votre service et la propreté de vos installations.
              </p>
            </div>

            {/* Reviews List */}
            <h2 className="text-xl font-bold text-foreground mb-4">Tous les avis</h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                      {review.avatar}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-foreground">{review.guestName}</h3>
                          <p className="text-sm text-muted-foreground">{review.accommodation}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      
                      <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= review.rating
                                ? 'fill-primary text-primary'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
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