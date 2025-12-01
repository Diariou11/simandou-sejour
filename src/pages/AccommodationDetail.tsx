import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ReviewCard } from '@/components/ReviewCard';
import { ReviewForm } from '@/components/ReviewForm';
import { mockAccommodations } from '@/data/mockData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, MapPin, Sparkles, Wifi, UtensilsCrossed, Car, Shield, ChevronLeft as ChevronLeftIcon, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useReviews } from '@/hooks/useReviews';
import modernBuilding from '@/assets/interior/modern-building-1.jpg';
import hotelGarden from '@/assets/interior/hotel-garden-1.jpg';
import hotelRoom from '@/assets/interior/hotel-room-1.jpg';
import hotelCorridor from '@/assets/interior/hotel-corridor-1.jpg';
import hotelBathroom from '@/assets/interior/hotel-bathroom-1.jpg';

export default function AccommodationDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const accommodation = mockAccommodations.find(a => a.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { reviews, loading: reviewsLoading, createReview, markHelpful } = useReviews(id);

  if (!accommodation) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-24 px-4 text-center">
          <h1 className="text-2xl font-bold">Hébergement non trouvé</h1>
        </div>
      </div>
    );
  }

  const amenityIcons: Record<string, any> = {
    'WiFi': <Wifi className="h-5 w-5" />,
    'Restaurant': <UtensilsCrossed className="h-5 w-5" />,
    'Parking': <Car className="h-5 w-5" />,
    'Sécurité 24h/24': <Shield className="h-5 w-5" />,
  };

  // 5 different images for carousel with auto-play
  const images = [
    accommodation.image,
    modernBuilding,
    hotelGarden,
    hotelRoom,
    hotelCorridor,
    hotelBathroom
  ];
  
  // Auto-play carousel every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const formattedPrice = new Intl.NumberFormat('fr-GN').format(accommodation.price);
  const formattedAiPrice = accommodation.aiPriceSuggestion 
    ? new Intl.NumberFormat('fr-GN').format(accommodation.aiPriceSuggestion)
    : null;

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Bouton Retour */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="mb-4 gap-2"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            Retour
          </Button>
          {/* Hero Image Carousel */}
          <div className="relative h-72 md:h-96 bg-muted rounded-2xl overflow-hidden mb-8 shadow-strong group">
            <img 
              src={images[currentImageIndex]} 
              alt={`${accommodation.name} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            
            {accommodation.sponsored && (
              <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground z-10">
                {t('sponsored')}
              </Badge>
            )}
            
            {/* Carousel Controls */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="Image précédente"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="Image suivante"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Image ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl font-black text-foreground mb-2">
                  {accommodation.name}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{accommodation.city}, {accommodation.region}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="font-semibold">{accommodation.rating}</span>
                    <span>({accommodation.reviews} avis)</span>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {accommodation.description}
                </p>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Équipements</h2>
                <div className="grid grid-cols-2 gap-4">
                  {accommodation.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="text-primary">
                        {amenityIcons[amenity] || <Sparkles className="h-5 w-5" />}
                      </div>
                      <span className="text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm mb-2 text-foreground">💡 Comparaison IA</p>
                    <p className="text-sm text-muted-foreground">
                      Dans un établissement similaire à 15km (Motel Safari), le tarif pour une nuit est de <strong className="text-primary">280 000 GNF</strong>, mais il est situé en dehors de la zone urbaine principale.
                    </p>
                  </div>
                </div>
              </Card>

            </div>

            {/* Booking Card */}
            <div>
              <Card className="p-6 sticky top-24 shadow-strong">
                <div className="mb-6">
                  <p className="text-3xl font-black text-primary">
                    {formattedPrice} <span className="text-sm font-normal text-muted-foreground">GNF</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{t('perNight')}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-semibold text-foreground block mb-2">
                      {t('checkIn')}
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground block mb-2">
                      {t('checkOut')}
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <Link to={`/booking-dates/${accommodation.id}`}>
                  <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 shadow-medium">
                    {t('bookNow')}
                  </Button>
                </Link>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  🛡️ Paiement sécurisé par IA
                </p>
              </Card>
            </div>
          </div>
          
          {/* Reviews Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Avis des clients</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <ReviewForm 
                accommodationId={id!} 
                onSubmit={createReview}
              />
              
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Star className="h-6 w-6 fill-primary text-primary" />
                      <span className="text-3xl font-bold text-foreground">{accommodation.rating}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {reviews.length} avis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {reviewsLoading ? (
                <p className="text-center text-muted-foreground">Chargement des avis...</p>
              ) : reviews.length === 0 ? (
                <p className="text-center text-muted-foreground">Aucun avis pour le moment. Soyez le premier à laisser un avis !</p>
              ) : (
                reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    onHelpful={markHelpful}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
