import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Camera, Upload, Award, Star, MapPin, Calendar, 
  Heart, Shield, Sparkles, Edit2, Check
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface EnhancedProfileProps {
  userId?: string;
  isOwnProfile?: boolean;
}

const mockBadges = [
  { id: '1', name: 'Explorer', icon: '🌍', description: 'A visité 5+ établissements', earned: true },
  { id: '2', name: 'Reviewer', icon: '⭐', description: 'A laissé 10+ avis', earned: true },
  { id: '3', name: 'VIP', icon: '👑', description: 'Membre premium', earned: false },
  { id: '4', name: 'Fidèle', icon: '💎', description: '1 an d\'ancienneté', earned: true },
];

const mockStayHistory = [
  { id: '1', accommodation: 'Hôtel Fouta Djallon', date: '2024-10-15', nights: 3, rating: 5 },
  { id: '2', accommodation: 'Résidence Nimba', date: '2024-09-20', nights: 2, rating: 4 },
  { id: '3', accommodation: 'Auberge Tinkisso', date: '2024-08-10', nights: 5, rating: 5 },
];

export function EnhancedProfile({ userId, isOwnProfile = true }: EnhancedProfileProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>('/placeholder.svg');
  const [isUploading, setIsUploading] = useState(false);
  const [rewardPoints, setRewardPoints] = useState(1250);
  const [preferences, setPreferences] = useState({
    preferredLocation: 'Conakry',
    budgetRange: 'medium',
    travelStyle: 'comfort',
    notifications: true,
  });

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({ title: t('error'), description: t('invalidFileType'), variant: 'destructive' });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: t('error'), description: t('fileTooLarge'), variant: 'destructive' });
      return;
    }

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${userId || 'user'}-${Date.now()}.${fileExt}`;
      const filePath = `${userId || 'user'}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      setAvatarUrl(publicUrl);
      toast({ title: t('success'), description: t('avatarUpdated') });
    } catch (error) {
      console.error('Upload error:', error);
      toast({ title: t('error'), description: t('uploadFailed'), variant: 'destructive' });
    } finally {
      setIsUploading(false);
    }
  };

  const levelProgress = (rewardPoints % 500) / 5;
  const currentLevel = Math.floor(rewardPoints / 500) + 1;

  return (
    <div className="space-y-6">
      {/* Avatar Section */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <div className="h-28 w-28 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src={avatarUrl} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {isOwnProfile && (
              <>
                <Button
                  size="sm"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full p-0"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                >
                  <Camera className="h-4 w-4" />
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </>
            )}
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-foreground">Mamadou Diaouné</h2>
            <p className="text-muted-foreground flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="h-4 w-4" />
              Conakry, Guinée
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
              <Badge className="bg-primary/10 text-primary">
                <Shield className="h-3 w-3 mr-1" />
                {t('verifiedMember')}
              </Badge>
              <Badge className="bg-accent/10 text-accent">
                Level {currentLevel}
              </Badge>
            </div>
          </div>

          {/* Reward Points */}
          <Card className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">{rewardPoints}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{t('rewardPoints')}</p>
              <Progress value={levelProgress} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                {500 - (rewardPoints % 500)} {t('pointsToNextLevel')}
              </p>
            </div>
          </Card>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="badges" className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="badges" className="gap-2">
            <Award className="h-4 w-4" />
            {t('badges')}
          </TabsTrigger>
          <TabsTrigger value="history" className="gap-2">
            <Calendar className="h-4 w-4" />
            {t('stayHistory')}
          </TabsTrigger>
          <TabsTrigger value="preferences" className="gap-2">
            <Heart className="h-4 w-4" />
            {t('preferences')}
          </TabsTrigger>
        </TabsList>

        {/* Badges Tab */}
        <TabsContent value="badges">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">{t('myBadges')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mockBadges.map((badge) => (
                <div 
                  key={badge.id}
                  className={`p-4 rounded-lg text-center transition-all ${
                    badge.earned 
                      ? 'bg-primary/10 border border-primary/20' 
                      : 'bg-muted/50 opacity-50'
                  }`}
                >
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <p className="font-semibold text-sm">{badge.name}</p>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                  {badge.earned && (
                    <Badge className="mt-2 bg-green-500/10 text-green-500">
                      <Check className="h-3 w-3 mr-1" />
                      {t('earned')}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Stay History Tab */}
        <TabsContent value="history">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">{t('stayHistory')}</h3>
            <div className="space-y-4">
              {mockStayHistory.map((stay) => (
                <div key={stay.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <p className="font-semibold">{stay.accommodation}</p>
                    <p className="text-sm text-muted-foreground">
                      {stay.date} • {stay.nights} {t('nights')}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(stay.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">{t('myPreferences')}</h3>
            <div className="space-y-4">
              <div>
                <Label>{t('preferredLocation')}</Label>
                <Input 
                  value={preferences.preferredLocation}
                  onChange={(e) => setPreferences({...preferences, preferredLocation: e.target.value})}
                />
              </div>
              <div>
                <Label>{t('budgetRange')}</Label>
                <div className="flex gap-2 mt-2">
                  {['low', 'medium', 'high'].map((budget) => (
                    <Button
                      key={budget}
                      variant={preferences.budgetRange === budget ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPreferences({...preferences, budgetRange: budget})}
                    >
                      {t(budget)}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <Label>{t('travelStyle')}</Label>
                <div className="flex gap-2 mt-2">
                  {['budget', 'comfort', 'luxury'].map((style) => (
                    <Button
                      key={style}
                      variant={preferences.travelStyle === style ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPreferences({...preferences, travelStyle: style})}
                    >
                      {t(style)}
                    </Button>
                  ))}
                </div>
              </div>
              <Button className="w-full mt-4">
                <Check className="h-4 w-4 mr-2" />
                {t('savePreferences')}
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}