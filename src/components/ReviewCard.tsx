import { Star, ThumbsUp } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface ReviewCardProps {
  review: {
    id: string;
    rating: number;
    title: string;
    comment: string;
    created_at: string;
    verified_stay: boolean;
    helpful_count: number;
    profiles: {
      full_name: string;
      avatar_url?: string;
    };
    host_response?: string;
    host_response_date?: string;
  };
  onHelpful?: (id: string) => void;
}

export const ReviewCard = ({ review, onHelpful }: ReviewCardProps) => {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={review.profiles.avatar_url} />
            <AvatarFallback>{review.profiles.full_name?.[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-foreground">{review.profiles.full_name}</h4>
            <p className="text-sm text-muted-foreground">
              {new Date(review.created_at).toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long' 
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < review.rating ? 'fill-primary text-primary' : 'text-muted'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h5 className="font-semibold text-foreground">{review.title}</h5>
        <p className="text-muted-foreground">{review.comment}</p>
        {review.verified_stay && (
          <span className="inline-flex items-center text-xs text-primary">
            ✓ Séjour vérifié
          </span>
        )}
      </div>

      {review.host_response && (
        <div className="bg-muted/50 p-4 rounded-lg space-y-2">
          <p className="text-sm font-semibold text-foreground">Réponse de l'hôte</p>
          <p className="text-sm text-muted-foreground">{review.host_response}</p>
          <p className="text-xs text-muted-foreground">
            {new Date(review.host_response_date!).toLocaleDateString('fr-FR')}
          </p>
        </div>
      )}

      <div className="flex items-center gap-2 pt-2 border-t">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onHelpful?.(review.id)}
          className="text-muted-foreground hover:text-foreground"
        >
          <ThumbsUp className="h-4 w-4 mr-1" />
          Utile ({review.helpful_count})
        </Button>
      </div>
    </Card>
  );
};
