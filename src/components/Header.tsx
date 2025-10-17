import { Link } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';
import logoSimandou from '@/assets/logo-simandou.svg';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-3 md:px-4 h-14 md:h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 md:gap-3 transition-smooth hover:opacity-80">
          <img src={logoSimandou} alt="Simandou Séjour" className="h-8 md:h-10" />
        </Link>
        
        <LanguageSelector />
      </div>
    </header>
  );
};
