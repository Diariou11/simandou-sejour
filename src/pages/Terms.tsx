import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Terms() {
  const { t } = useLanguage();

  const sections = [
    {
      title: '1. Acceptation des conditions',
      content: 'En utilisant Simandou Séjour, vous acceptez d\'être lié par ces conditions générales d\'utilisation.'
    },
    {
      title: '2. Services proposés',
      content: 'Simandou Séjour est une plateforme de mise en relation entre voyageurs et hôteliers en Guinée.'
    },
    {
      title: '3. Réservations',
      content: 'Les réservations effectuées via la plateforme sont soumises aux conditions de l\'établissement choisi.'
    },
    {
      title: '4. Paiements',
      content: 'Les paiements sont sécurisés et traités par nos partenaires certifiés. Plusieurs méthodes sont acceptées.'
    },
    {
      title: '5. Annulations',
      content: 'Les conditions d\'annulation varient selon les établissements. Consultez les détails avant réservation.'
    },
    {
      title: '6. Responsabilités',
      content: 'Simandou Séjour agit comme intermédiaire et n\'est pas responsable de la qualité des services des établissements.'
    }
  ];

  return (
    <div className="min-h-screen gradient-secondary">
      <Header />
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            {t('terms')}
          </h1>
          <p className="text-muted-foreground mb-8">
            Dernière mise à jour : Octobre 2025
          </p>

          <div className="space-y-6">
            {sections.map((section, idx) => (
              <Card key={idx} className="p-6 shadow-medium">
                <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
            <p className="text-sm text-muted-foreground">
              Pour toute question concernant ces conditions, contactez-nous à legal@simandousejour.com
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}