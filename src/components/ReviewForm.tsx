import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ReviewFormProps {
  accommodationId: string;
  onSubmit: (review: { rating: number; title: string; comment: string }) => void;
}

export const ReviewForm = ({ accommodationId, onSubmit }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: 'Évaluation requise',
        description: 'Veuillez donner une note',
        variant: 'destructive',
      });
      return;
    }

    if (!title.trim() || !comment.trim()) {
      toast({
        title: 'Informations manquantes',
        description: 'Veuillez remplir tous les champs',
        variant: 'destructive',
      });
      return;
    }

    onSubmit({ rating, title, comment });
    setRating(0);
    setTitle('');
    setComment('');
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4 text-foreground">Laisser un avis</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            Votre note
          </label>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setRating(i + 1)}
                onMouseEnter={() => setHoveredRating(i + 1)}
                onMouseLeave={() => setHoveredRating(0)}
              >
                <Star
                  className={`h-8 w-8 cursor-pointer transition-colors ${
                    i < (hoveredRating || rating)
                      ? 'fill-primary text-primary'
                      : 'text-muted'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            Titre de votre avis
          </label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Résumez votre expérience"
            maxLength={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            Votre commentaire
          </label>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Partagez les détails de votre séjour..."
            rows={5}
            maxLength={1000}
          />
          <p className="text-xs text-muted-foreground mt-1">
            {comment.length}/1000 caractères
          </p>
        </div>

        <Button type="submit" className="w-full">
          Publier l'avis
        </Button>
      </form>
    </Card>
  );
};
