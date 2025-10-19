import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en' | 'pt' | 'zh';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
    pt: string;
    zh: string;
  };
}

const translations: Translations = {
  slogan: {
    fr: "Votre séjour, simplifié par l'IA",
    en: "Your stay, simplified by AI",
    pt: "Sua estadia, simplificada pela IA",
    zh: "人工智能简化您的住宿"
  },
  forTravelers: {
    fr: "Je cherche un hébergement",
    en: "I'm looking for accommodation",
    pt: "Procuro alojamento",
    zh: "我在找住宿"
  },
  forHosts: {
    fr: "Je propose un hébergement",
    en: "I offer accommodation",
    pt: "Ofereço alojamento",
    zh: "我提供住宿"
  },
  aiRecommendations: {
    fr: "Recommandations IA personnalisées",
    en: "Personalized AI recommendations",
    pt: "Recomendações de IA personalizadas",
    zh: "个性化人工智能推荐"
  },
  simpleBooking: {
    fr: "Réservation simple et sécurisée",
    en: "Simple and secure booking",
    pt: "Reserva simples e segura",
    zh: "简单安全的预订"
  },
  autoItineraries: {
    fr: "Itinéraires générés automatiquement",
    en: "Automatically generated itineraries",
    pt: "Itinerários gerados automaticamente",
    zh: "自动生成的行程"
  },
  centralBooking: {
    fr: "Gestion centralisée des réservations",
    en: "Centralized booking management",
    pt: "Gestão centralizada de reservas",
    zh: "集中预订管理"
  },
  dynamicPricing: {
    fr: "Pricing dynamique propulsé par IA",
    en: "AI-powered dynamic pricing",
    pt: "Preços dinâmicos com IA",
    zh: "人工智能驱动的动态定价"
  },
  predictiveDashboard: {
    fr: "Tableaux de bord prédictifs",
    en: "Predictive dashboards",
    pt: "Painéis preditivos",
    zh: "预测性仪表板"
  },
  exploreOffers: {
    fr: "Explorer les offres",
    en: "Explore offers",
    pt: "Explorar ofertas",
    zh: "探索优惠"
  },
  manageProperty: {
    fr: "Gérer mon établissement",
    en: "Manage my property",
    pt: "Gerir meu estabelecimento",
    zh: "管理我的物业"
  },
  sponsored: {
    fr: "Sponsorisé",
    en: "Sponsored",
    pt: "Patrocinado",
    zh: "赞助"
  },
  search: {
    fr: "Rechercher",
    en: "Search",
    pt: "Pesquisar",
    zh: "搜索"
  },
  city: {
    fr: "Ville",
    en: "City",
    pt: "Cidade",
    zh: "城市"
  },
  checkIn: {
    fr: "Arrivée",
    en: "Check-in",
    pt: "Check-in",
    zh: "入住"
  },
  checkOut: {
    fr: "Départ",
    en: "Check-out",
    pt: "Check-out",
    zh: "退房"
  },
  perNight: {
    fr: "par nuit",
    en: "per night",
    pt: "por noite",
    zh: "每晚"
  },
  bookNow: {
    fr: "Réserver maintenant",
    en: "Book now",
    pt: "Reservar agora",
    zh: "立即预订"
  },
  aiSuggested: {
    fr: "Prix suggéré par IA",
    en: "AI suggested price",
    pt: "Preço sugerido pela IA",
    zh: "人工智能建议价格"
  },
  // Navigation
  home: {
    fr: "Accueil",
    en: "Home",
    pt: "Início",
    zh: "首页"
  },
  favorites: {
    fr: "Favoris",
    en: "Favorites",
    pt: "Favoritos",
    zh: "收藏"
  },
  notifications: {
    fr: "Notifications",
    en: "Notifications",
    pt: "Notificações",
    zh: "通知"
  },
  profile: {
    fr: "Profil",
    en: "Profile",
    pt: "Perfil",
    zh: "个人资料"
  },
  dashboard: {
    fr: "Tableau de bord",
    en: "Dashboard",
    pt: "Painel",
    zh: "仪表板"
  },
  calendar: {
    fr: "Calendrier",
    en: "Calendar",
    pt: "Calendário",
    zh: "日历"
  },
  reports: {
    fr: "Rapports",
    en: "Reports",
    pt: "Relatórios",
    zh: "报告"
  },
  services: {
    fr: "Services",
    en: "Services",
    pt: "Serviços",
    zh: "服务"
  },
  messages: {
    fr: "Messages",
    en: "Messages",
    pt: "Mensagens",
    zh: "消息"
  },
  // Auth pages
  signUp: {
    fr: "Inscription",
    en: "Sign Up",
    pt: "Cadastrar",
    zh: "注册"
  },
  signIn: {
    fr: "Connexion",
    en: "Sign In",
    pt: "Entrar",
    zh: "登录"
  },
  fullName: {
    fr: "Nom complet",
    en: "Full name",
    pt: "Nome completo",
    zh: "全名"
  },
  email: {
    fr: "Email",
    en: "Email",
    pt: "Email",
    zh: "电子邮件"
  },
  password: {
    fr: "Mot de passe",
    en: "Password",
    pt: "Senha",
    zh: "密码"
  },
  confirmPassword: {
    fr: "Confirmer le mot de passe",
    en: "Confirm password",
    pt: "Confirmar senha",
    zh: "确认密码"
  },
  continue: {
    fr: "Continuer",
    en: "Continue",
    pt: "Continuar",
    zh: "继续"
  },
  welcome: {
    fr: "Bienvenue",
    en: "Welcome",
    pt: "Bem-vindo",
    zh: "欢迎"
  },
  location: {
    fr: "Localisation",
    en: "Location",
    pt: "Localização",
    zh: "位置"
  },
  specialOffers: {
    fr: "Offres spéciales",
    en: "Special offers",
    pt: "Ofertas especiais",
    zh: "特别优惠"
  },
  myAccount: {
    fr: "Mon compte",
    en: "My account",
    pt: "Minha conta",
    zh: "我的账户"
  },
  logout: {
    fr: "Déconnexion",
    en: "Logout",
    pt: "Sair",
    zh: "登出"
  },
  promotions: {
    fr: "Promotions",
    en: "Promotions",
    pt: "Promoções",
    zh: "促销"
  },
  myReservations: {
    fr: "Mes réservations",
    en: "My reservations",
    pt: "Minhas reservas",
    zh: "我的预订"
  },
  transactionHistory: {
    fr: "Historique des transactions",
    en: "Transaction history",
    pt: "Histórico de transações",
    zh: "交易历史"
  },
  support: {
    fr: "Support",
    en: "Support",
    pt: "Suporte",
    zh: "支持"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
