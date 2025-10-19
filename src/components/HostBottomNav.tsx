import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, TrendingUp, Settings, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const HostBottomNav = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const navItems = [
    { path: '/host-dashboard', icon: LayoutDashboard, label: t('dashboard') },
    { path: '/host-calendar', icon: Calendar, label: t('calendar') },
    { path: '/host-reports', icon: TrendingUp, label: t('reports') },
    { path: '/host-services', icon: Settings, label: t('services') },
    { path: '/host-messages', icon: MessageSquare, label: t('messages') }
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border shadow-strong">
      <div className="flex items-center justify-around h-16 px-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-lg transition-smooth ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'animate-float' : ''}`} />
              <span className="text-[10px] font-medium text-center leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};