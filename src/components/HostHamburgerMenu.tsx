import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, TrendingUp, Settings, MessageSquare, Menu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export const HostHamburgerMenu = () => {
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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:flex hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <nav className="flex flex-col gap-2 mt-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                  isActive 
                    ? 'text-primary bg-primary/10 font-semibold' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
