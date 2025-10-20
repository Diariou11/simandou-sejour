import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { CreditCard, Smartphone, TrendingDown, TrendingUp } from 'lucide-react';

export default function ClientTransactions() {
  const { t } = useLanguage();

  const transactions = [
    {
      id: '1',
      type: 'payment',
      description: 'Hôtel Sily National',
      amount: -580000,
      date: '2025-10-15',
      method: 'Mobile Money',
      status: 'completed'
    },
    {
      id: '2',
      type: 'refund',
      description: 'Remboursement - Auberge Konkouré',
      amount: 250000,
      date: '2025-10-10',
      method: 'Mobile Money',
      status: 'completed'
    },
    {
      id: '3',
      type: 'payment',
      description: 'Résidence Nimba',
      amount: -380000,
      date: '2025-10-05',
      method: 'Carte bancaire',
      status: 'pending'
    }
  ];

  return (
    <div className="min-h-screen pb-20 gradient-secondary">
      <div className="pt-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">
            {t('transactionHistory')}
          </h1>

          <Card className="p-4 md:p-6 mb-6 bg-primary/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Solde total</p>
                <p className="text-3xl font-black text-primary">2,450,000 GNF</p>
              </div>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            {transactions.map((transaction) => (
              <Card key={transaction.id} className="p-4 hover:shadow-medium transition-smooth">
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                    transaction.amount > 0 ? 'bg-secondary/10' : 'bg-primary/10'
                  }`}>
                    {transaction.amount > 0 ? (
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    ) : (
                      <TrendingDown className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-foreground truncate">{transaction.description}</h3>
                      <p className={`font-bold text-lg shrink-0 ${
                        transaction.amount > 0 ? 'text-secondary' : 'text-foreground'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}{new Intl.NumberFormat('fr-GN').format(Math.abs(transaction.amount))} GNF
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{transaction.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Smartphone className="h-3 w-3" />
                        <span>{transaction.method}</span>
                      </div>
                      <span>•</span>
                      <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'} className="text-[10px] px-2 py-0">
                        {t(transaction.status)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <ClientBottomNav />
    </div>
  );
}