import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, CreditCard, Bell, Lock, Globe, Moon, Crown, ChevronRight } from 'lucide-react';

export default function ClientAccount() {
  const { t, language, setLanguage } = useLanguage();

  const menuSections = [
    {
      title: 'Informations personnelles',
      icon: User,
      items: [
        { label: 'Profil', value: 'Jean Camara', link: '/client-profile' },
        { label: 'Email', value: 'jean.camara@email.com', link: null },
        { label: 'Téléphone', value: '+224 620 00 00 00', link: null }
      ]
    },
    {
      title: 'Préférences',
      icon: Bell,
      items: [
        { label: 'Notifications', isSwitch: true, defaultChecked: true },
        { label: 'Mode sombre', isSwitch: true, defaultChecked: false },
        { label: 'Langue', value: language.toUpperCase(), link: null }
      ]
    },
    {
      title: 'Paiement',
      icon: CreditCard,
      items: [
        { label: 'Modes de paiement', link: '/payment-methods' },
        { label: 'Historique', link: '/client-transactions' }
      ]
    },
    {
      title: 'Sécurité',
      icon: Lock,
      items: [
        { label: 'Changer le mot de passe', link: '/change-password' },
        { label: 'Authentification à deux facteurs', isSwitch: true, defaultChecked: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-20 gradient-primary">
      <div className="pt-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">
            {t('account')}
          </h1>

          <Card className="p-6 mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-medium">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">Jean Camara</h2>
                <p className="text-sm text-muted-foreground">Membre depuis oct. 2025</p>
              </div>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                Standard
              </Badge>
            </div>

            <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Crown className="h-4 w-4 mr-2" />
              {t('upgradeToPremium')}
            </Button>
          </Card>

          <div className="space-y-6">
            {menuSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <Card key={idx} className="p-4 md:p-6 shadow-medium">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{section.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-smooth"
                      >
                        <div>
                          <p className="font-medium text-foreground">{item.label}</p>
                          {item.value && (
                            <p className="text-sm text-muted-foreground">{item.value}</p>
                          )}
                        </div>
                        
                        {item.isSwitch ? (
                          <Switch defaultChecked={item.defaultChecked} />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          <Button variant="outline" className="w-full mt-6 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
            {t('logout')}
          </Button>
        </div>
      </div>

      <ClientBottomNav />
    </div>
  );
}