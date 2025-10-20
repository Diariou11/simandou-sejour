import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function Privacy() {
  const { t } = useLanguage();

  const protections = [
    { icon: Shield, title: 'Protection des données', desc: 'Vos données sont cryptées et sécurisées' },
    { icon: Lock, title: 'Confidentialité', desc: 'Nous ne vendons jamais vos informations' },
    { icon: Eye, title: 'Transparence', desc: 'Vous contrôlez vos données personnelles' },
    { icon: Database, title: 'Stockage sécurisé', desc: 'Serveurs protégés et certifiés' }
  ];

  return (
    <div className="min-h-screen gradient-primary">
      <Header />
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            {t('privacy')}
          </h1>
          <p className="text-muted-foreground mb-8">
            Votre vie privée est notre priorité
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {protections.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-6 shadow-medium">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              );
            })}
          </div>

          <Card className="p-6 md:p-8 shadow-strong mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Collecte de données</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nous collectons uniquement les informations nécessaires pour fournir nos services : 
              nom, email, numéro de téléphone et historique de réservations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ces données sont utilisées pour améliorer votre expérience et vous proposer des 
              recommandations personnalisées via notre intelligence artificielle.
            </p>
          </Card>

          <Card className="p-6 md:p-8 shadow-strong mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Vos droits</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Droit d'accès à vos données personnelles</li>
              <li>✓ Droit de rectification de vos informations</li>
              <li>✓ Droit à l'effacement de votre compte</li>
              <li>✓ Droit d'opposition au traitement</li>
              <li>✓ Droit à la portabilité des données</li>
            </ul>
          </Card>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <p className="text-sm text-muted-foreground">
              Pour exercer vos droits ou poser des questions, contactez privacy@simandousejour.com
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}