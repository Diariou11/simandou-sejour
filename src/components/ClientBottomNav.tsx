import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Heart, User, Bell } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ClientBottomNav = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const navItems = [
    { path: '/client-home', icon: Home, label: t('home') },
    { path: '/search', icon: Search, label: t('search') },
    { path: '/client-favorites', icon: Heart, label: t('favorites') },
    { path: '/client-notifications', icon: Bell, label: t('notifications') },
    { path: '/client-profile', icon: User, label: t('profile') }
  ];
  
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border shadow-strong">
      <div className="flex items-center justify-around h-16 px-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-smooth ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'animate-float' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};