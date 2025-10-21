import { useState } from 'react';
import { Header } from '@/components/Header';
import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star, ChevronLeft, Edit2, Trash2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import gradientBg2 from '@/assets/gradient-bg-2.jpg';

export default function ClientReviews() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  const [myReviews, setMyReviews] = useState([
    {
      id: 1,
      accommodation: 'Hôtel Fouta Djallon',
      rating: 5,
      comment: 'Excellent séjour! Personnel accueillant et chambres très confortables.',
      date: '15 Janvier 2025',
      editable: true
    },
    {
      id: 2,
      accommodation: 'Résidence Nimba',
      rating: 4,
      comment: 'Très bon hébergement, bien situé. Je recommande vivement.',
      date: '02 Janvier 2025',
      editable: true
    },
    {
      id: 3,
      accommodation: 'Hôtel Sily National',
      rating: 5,
      comment: 'Service impeccable, restauration excellente. Un vrai plaisir!',
      date: '20 Décembre 2024',
      editable: true
    }
  ]);

  const handleSubmit = () => {
    if (rating === 0) {
      toast.error('Veuillez sélectionner une note');
      return;
    }
    if (!review.trim()) {
      toast.error('Veuillez écrire un commentaire');
      return;
    }

    if (editingId) {
      setMyReviews(prev => prev.map(r => 
        r.id === editingId ? { ...r, rating, comment: review } : r
      ));
      toast.success('Avis modifié avec succès');
      setEditingId(null);
    } else {
      toast.success('Avis publié avec succès');
    }
    
    setRating(0);
    setReview('');
  };

  const handleEdit = (reviewItem: typeof myReviews[0]) => {
    setEditingId(reviewItem.id);
    setRating(reviewItem.rating);
    setReview(reviewItem.comment);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: number) => {
    setMyReviews(prev => prev.filter(r => r.id !== id));
    toast.success('Avis supprimé');
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img src={gradientBg2} alt="" className="w-full h-full object-cover opacity-20 fixed" />
        </div>
        
        <div className="relative z-10 pt-20 px-4">
          <div className="container mx-auto max-w-4xl py-6">
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
                Mes Avis
              </h1>
            </div>

            {/* Write Review Form */}
            <Card className="p-6 mb-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                {editingId ? 'Modifier mon avis' : 'Laisser un avis'}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Note</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-smooth hover:scale-110"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            star <= (hoveredRating || rating)
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Votre commentaire</p>
                  <Textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Partagez votre expérience..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={handleSubmit}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    {editingId ? 'Mettre à jour' : 'Publier'}
                  </Button>
                  {editingId && (
                    <Button 
                      onClick={() => {
                        setEditingId(null);
                        setRating(0);
                        setReview('');
                      }}
                      variant="outline"
                      className="flex-1"
                    >
                      Annuler
                    </Button>
                  )}
                </div>
              </div>
            </Card>

            {/* My Reviews */}
            <h2 className="text-xl font-bold text-foreground mb-4">Mes avis précédents</h2>
            <div className="space-y-4">
              {myReviews.map((reviewItem) => (
                <Card key={reviewItem.id} className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">
                        {reviewItem.accommodation}
                      </h3>
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= reviewItem.rating
                                ? 'fill-primary text-primary'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(reviewItem)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(reviewItem.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {reviewItem.comment}
                  </p>
                  <p className="text-xs text-muted-foreground">{reviewItem.date}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <ClientBottomNav />
    </div>
  );
}