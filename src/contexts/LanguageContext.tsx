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
  // Landing & General
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
  },
  
  // Additional keys
  reservations: {
    fr: "Réservations",
    en: "Reservations",
    pt: "Reservas",
    zh: "预订"
  },
  reviews: {
    fr: "Avis",
    en: "Reviews",
    pt: "Avaliações",
    zh: "评论"
  },
  transactions: {
    fr: "Transactions",
    en: "Transactions",
    pt: "Transações",
    zh: "交易"
  },
  offers: {
    fr: "Offres",
    en: "Offers",
    pt: "Ofertas",
    zh: "优惠"
  },
  account: {
    fr: "Compte",
    en: "Account",
    pt: "Conta",
    zh: "账户"
  },
  about: {
    fr: "À propos",
    en: "About",
    pt: "Sobre",
    zh: "关于"
  },
  howItWorks: {
    fr: "Comment ça marche",
    en: "How it works",
    pt: "Como funciona",
    zh: "如何工作"
  },
  terms: {
    fr: "Conditions",
    en: "Terms",
    pt: "Termos",
    zh: "条款"
  },
  privacy: {
    fr: "Confidentialité",
    en: "Privacy",
    pt: "Privacidade",
    zh: "隐私"
  },
  contact: {
    fr: "Contact",
    en: "Contact",
    pt: "Contato",
    zh: "联系"
  },
  seeMore: {
    fr: "Voir plus",
    en: "See more",
    pt: "Ver mais",
    zh: "查看更多"
  },
  confirm: {
    fr: "Confirmer",
    en: "Confirm",
    pt: "Confirmar",
    zh: "确认"
  },
  cancel: {
    fr: "Annuler",
    en: "Cancel",
    pt: "Cancelar",
    zh: "取消"
  },
  save: {
    fr: "Enregistrer",
    en: "Save",
    pt: "Salvar",
    zh: "保存"
  },
  edit: {
    fr: "Modifier",
    en: "Edit",
    pt: "Editar",
    zh: "编辑"
  },
  delete: {
    fr: "Supprimer",
    en: "Delete",
    pt: "Excluir",
    zh: "删除"
  },
  back: {
    fr: "Retour",
    en: "Back",
    pt: "Voltar",
    zh: "返回"
  },
  loading: {
    fr: "Chargement...",
    en: "Loading...",
    pt: "Carregando...",
    zh: "加载中..."
  },
  noResults: {
    fr: "Aucun résultat",
    en: "No results",
    pt: "Nenhum resultado",
    zh: "无结果"
  },
  filter: {
    fr: "Filtrer",
    en: "Filter",
    pt: "Filtrar",
    zh: "筛选"
  },
  sort: {
    fr: "Trier",
    en: "Sort",
    pt: "Ordenar",
    zh: "排序"
  },
  apply: {
    fr: "Appliquer",
    en: "Apply",
    pt: "Aplicar",
    zh: "应用"
  },
  reset: {
    fr: "Réinitialiser",
    en: "Reset",
    pt: "Redefinir",
    zh: "重置"
  },
  selectDates: {
    fr: "Sélectionner les dates",
    en: "Select dates",
    pt: "Selecionar datas",
    zh: "选择日期"
  },
  guests: {
    fr: "Voyageurs",
    en: "Guests",
    pt: "Hóspedes",
    zh: "客人"
  },
  rooms: {
    fr: "Chambres",
    en: "Rooms",
    pt: "Quartos",
    zh: "房间"
  },
  total: {
    fr: "Total",
    en: "Total",
    pt: "Total",
    zh: "总计"
  },
  paymentMethod: {
    fr: "Méthode de paiement",
    en: "Payment method",
    pt: "Método de pagamento",
    zh: "支付方式"
  },
  bookingConfirmed: {
    fr: "Réservation confirmée",
    en: "Booking confirmed",
    pt: "Reserva confirmada",
    zh: "预订已确认"
  },
  pending: {
    fr: "En attente",
    en: "Pending",
    pt: "Pendente",
    zh: "待定"
  },
  completed: {
    fr: "Terminé",
    en: "Completed",
    pt: "Concluído",
    zh: "已完成"
  },
  cancelled: {
    fr: "Annulé",
    en: "Cancelled",
    pt: "Cancelado",
    zh: "已取消"
  },
  premium: {
    fr: "Premium",
    en: "Premium",
    pt: "Premium",
    zh: "高级"
  },
  upgradeToPremium: {
    fr: "Passer à Premium",
    en: "Upgrade to Premium",
    pt: "Atualizar para Premium",
    zh: "升级到高级"
  },
  darkMode: {
    fr: "Mode sombre",
    en: "Dark mode",
    pt: "Modo escuro",
    zh: "深色模式"
  },
  language: {
    fr: "Langue",
    en: "Language",
    pt: "Idioma",
    zh: "语言"
  },
  settings: {
    fr: "Paramètres",
    en: "Settings",
    pt: "Configurações",
    zh: "设置"
  },
  
  // Admin Dashboard
  adminDashboard: {
    fr: "Tableau de bord Admin",
    en: "Admin Dashboard",
    pt: "Painel de Administração",
    zh: "管理员仪表板"
  },
  adminDashboardDesc: {
    fr: "Gestion centralisée de la plateforme",
    en: "Centralized platform management",
    pt: "Gestão centralizada da plataforma",
    zh: "平台集中管理"
  },
  totalUsers: {
    fr: "Utilisateurs totaux",
    en: "Total users",
    pt: "Total de usuários",
    zh: "总用户数"
  },
  accommodations: {
    fr: "Hébergements",
    en: "Accommodations",
    pt: "Alojamentos",
    zh: "住宿"
  },
  totalReviews: {
    fr: "Avis totaux",
    en: "Total reviews",
    pt: "Total de avaliações",
    zh: "总评论数"
  },
  growthThisMonth: {
    fr: "Croissance ce mois",
    en: "Growth this month",
    pt: "Crescimento este mês",
    zh: "本月增长"
  },
  overview: {
    fr: "Vue d'ensemble",
    en: "Overview",
    pt: "Visão geral",
    zh: "概览"
  },
  users: {
    fr: "Utilisateurs",
    en: "Users",
    pt: "Usuários",
    zh: "用户"
  },
  pendingActions: {
    fr: "Actions en attente",
    en: "Pending actions",
    pt: "Ações pendentes",
    zh: "待处理操作"
  },
  pendingReviews: {
    fr: "Avis en attente",
    en: "Pending reviews",
    pt: "Avaliações pendentes",
    zh: "待审核评论"
  },
  pendingAccommodations: {
    fr: "Hébergements en attente",
    en: "Pending accommodations",
    pt: "Alojamentos pendentes",
    zh: "待审核住宿"
  },
  reportedContent: {
    fr: "Contenu signalé",
    en: "Reported content",
    pt: "Conteúdo reportado",
    zh: "举报内容"
  },
  recentActivity: {
    fr: "Activité récente",
    en: "Recent activity",
    pt: "Atividade recente",
    zh: "最近活动"
  },
  newUserRegistered: {
    fr: "Nouvel utilisateur inscrit",
    en: "New user registered",
    pt: "Novo usuário registrado",
    zh: "新用户注册"
  },
  newReviewSubmitted: {
    fr: "Nouvel avis soumis",
    en: "New review submitted",
    pt: "Nova avaliação enviada",
    zh: "新评论提交"
  },
  searchUsers: {
    fr: "Rechercher des utilisateurs",
    en: "Search users",
    pt: "Pesquisar usuários",
    zh: "搜索用户"
  },
  name: {
    fr: "Nom",
    en: "Name",
    pt: "Nome",
    zh: "名称"
  },
  role: {
    fr: "Rôle",
    en: "Role",
    pt: "Função",
    zh: "角色"
  },
  status: {
    fr: "Statut",
    en: "Status",
    pt: "Estado",
    zh: "状态"
  },
  joinDate: {
    fr: "Date d'inscription",
    en: "Join date",
    pt: "Data de inscrição",
    zh: "注册日期"
  },
  actions: {
    fr: "Actions",
    en: "Actions",
    pt: "Ações",
    zh: "操作"
  },
  changeRole: {
    fr: "Changer le rôle",
    en: "Change role",
    pt: "Alterar função",
    zh: "更改角色"
  },
  suspend: {
    fr: "Suspendre",
    en: "Suspend",
    pt: "Suspender",
    zh: "暂停"
  },
  host: {
    fr: "Hôte",
    en: "Host",
    pt: "Anfitrião",
    zh: "房东"
  },
  rating: {
    fr: "Note",
    en: "Rating",
    pt: "Avaliação",
    zh: "评分"
  },
  pendingReviewModeration: {
    fr: "Modération des avis en attente",
    en: "Pending review moderation",
    pt: "Moderação de avaliações pendentes",
    zh: "待审核评论"
  },
  approve: {
    fr: "Approuver",
    en: "Approve",
    pt: "Aprovar",
    zh: "批准"
  },
  reject: {
    fr: "Rejeter",
    en: "Reject",
    pt: "Rejeitar",
    zh: "拒绝"
  },
  reviewApproved: {
    fr: "Avis approuvé",
    en: "Review approved",
    pt: "Avaliação aprovada",
    zh: "评论已批准"
  },
  reviewApprovedDesc: {
    fr: "L'avis a été publié avec succès",
    en: "The review has been published successfully",
    pt: "A avaliação foi publicada com sucesso",
    zh: "评论已成功发布"
  },
  reviewRejected: {
    fr: "Avis rejeté",
    en: "Review rejected",
    pt: "Avaliação rejeitada",
    zh: "评论已拒绝"
  },
  reviewRejectedDesc: {
    fr: "L'avis a été supprimé",
    en: "The review has been removed",
    pt: "A avaliação foi removida",
    zh: "评论已删除"
  },
  roleUpdated: {
    fr: "Rôle mis à jour",
    en: "Role updated",
    pt: "Função atualizada",
    zh: "角色已更新"
  },
  roleUpdatedDesc: {
    fr: "Le rôle de l'utilisateur a été changé en",
    en: "User role has been changed to",
    pt: "A função do usuário foi alterada para",
    zh: "用户角色已更改为"
  },
  userSuspended: {
    fr: "Utilisateur suspendu",
    en: "User suspended",
    pt: "Usuário suspenso",
    zh: "用户已暂停"
  },
  userSuspendedDesc: {
    fr: "L'utilisateur a été suspendu avec succès",
    en: "The user has been suspended successfully",
    pt: "O usuário foi suspenso com sucesso",
    zh: "用户已成功暂停"
  },
  
  // Enhanced Profile
  verifiedMember: {
    fr: "Membre vérifié",
    en: "Verified member",
    pt: "Membro verificado",
    zh: "已验证会员"
  },
  rewardPoints: {
    fr: "Points de récompense",
    en: "Reward points",
    pt: "Pontos de recompensa",
    zh: "奖励积分"
  },
  pointsToNextLevel: {
    fr: "points pour le niveau suivant",
    en: "points to next level",
    pt: "pontos para o próximo nível",
    zh: "积分到下一级"
  },
  badges: {
    fr: "Badges",
    en: "Badges",
    pt: "Distintivos",
    zh: "徽章"
  },
  stayHistory: {
    fr: "Historique des séjours",
    en: "Stay history",
    pt: "Histórico de estadias",
    zh: "住宿历史"
  },
  preferences: {
    fr: "Préférences",
    en: "Preferences",
    pt: "Preferências",
    zh: "偏好设置"
  },
  myBadges: {
    fr: "Mes badges",
    en: "My badges",
    pt: "Meus distintivos",
    zh: "我的徽章"
  },
  earned: {
    fr: "Obtenu",
    en: "Earned",
    pt: "Obtido",
    zh: "已获得"
  },
  nights: {
    fr: "nuits",
    en: "nights",
    pt: "noites",
    zh: "晚"
  },
  myPreferences: {
    fr: "Mes préférences",
    en: "My preferences",
    pt: "Minhas preferências",
    zh: "我的偏好"
  },
  preferredLocation: {
    fr: "Localisation préférée",
    en: "Preferred location",
    pt: "Localização preferida",
    zh: "首选位置"
  },
  budgetRange: {
    fr: "Gamme de budget",
    en: "Budget range",
    pt: "Faixa de orçamento",
    zh: "预算范围"
  },
  travelStyle: {
    fr: "Style de voyage",
    en: "Travel style",
    pt: "Estilo de viagem",
    zh: "旅行风格"
  },
  low: {
    fr: "Économique",
    en: "Budget",
    pt: "Econômico",
    zh: "经济型"
  },
  medium: {
    fr: "Moyen",
    en: "Medium",
    pt: "Médio",
    zh: "中等"
  },
  high: {
    fr: "Élevé",
    en: "High",
    pt: "Alto",
    zh: "高端"
  },
  budget: {
    fr: "Économique",
    en: "Budget",
    pt: "Econômico",
    zh: "经济型"
  },
  comfort: {
    fr: "Confort",
    en: "Comfort",
    pt: "Conforto",
    zh: "舒适型"
  },
  luxury: {
    fr: "Luxe",
    en: "Luxury",
    pt: "Luxo",
    zh: "豪华型"
  },
  savePreferences: {
    fr: "Enregistrer les préférences",
    en: "Save preferences",
    pt: "Salvar preferências",
    zh: "保存偏好"
  },
  avatarUpdated: {
    fr: "Photo de profil mise à jour",
    en: "Profile photo updated",
    pt: "Foto de perfil atualizada",
    zh: "头像已更新"
  },
  invalidFileType: {
    fr: "Type de fichier invalide",
    en: "Invalid file type",
    pt: "Tipo de arquivo inválido",
    zh: "无效的文件类型"
  },
  fileTooLarge: {
    fr: "Fichier trop volumineux (max 5MB)",
    en: "File too large (max 5MB)",
    pt: "Arquivo muito grande (max 5MB)",
    zh: "文件太大（最大5MB）"
  },
  uploadFailed: {
    fr: "Échec du téléchargement",
    en: "Upload failed",
    pt: "Falha no upload",
    zh: "上传失败"
  },
  
  // Enhanced Messaging
  searchConversations: {
    fr: "Rechercher des conversations",
    en: "Search conversations",
    pt: "Pesquisar conversas",
    zh: "搜索对话"
  },
  typing: {
    fr: "En train d'écrire",
    en: "Typing",
    pt: "Digitando",
    zh: "正在输入"
  },
  searchInMessages: {
    fr: "Rechercher dans les messages",
    en: "Search in messages",
    pt: "Pesquisar em mensagens",
    zh: "在消息中搜索"
  },
  typeMessage: {
    fr: "Tapez votre message...",
    en: "Type your message...",
    pt: "Digite sua mensagem...",
    zh: "输入您的消息..."
  },
  selectConversation: {
    fr: "Sélectionnez une conversation",
    en: "Select a conversation",
    pt: "Selecione uma conversa",
    zh: "选择一个对话"
  },
  image: {
    fr: "Image",
    en: "Image",
    pt: "Imagem",
    zh: "图片"
  },
  document: {
    fr: "Document",
    en: "Document",
    pt: "Documento",
    zh: "文档"
  },
  fileSent: {
    fr: "Fichier envoyé",
    en: "File sent",
    pt: "Arquivo enviado",
    zh: "文件已发送"
  },
  error: {
    fr: "Erreur",
    en: "Error",
    pt: "Erro",
    zh: "错误"
  },
  success: {
    fr: "Succès",
    en: "Success",
    pt: "Sucesso",
    zh: "成功"
  },
  
  // Reviews
  writeReview: {
    fr: "Écrire un avis",
    en: "Write a review",
    pt: "Escrever uma avaliação",
    zh: "写评论"
  },
  yourRating: {
    fr: "Votre note",
    en: "Your rating",
    pt: "Sua avaliação",
    zh: "您的评分"
  },
  yourReview: {
    fr: "Votre avis",
    en: "Your review",
    pt: "Sua avaliação",
    zh: "您的评论"
  },
  submitReview: {
    fr: "Soumettre l'avis",
    en: "Submit review",
    pt: "Enviar avaliação",
    zh: "提交评论"
  },
  helpful: {
    fr: "Utile",
    en: "Helpful",
    pt: "Útil",
    zh: "有帮助"
  },
  verifiedStay: {
    fr: "Séjour vérifié",
    en: "Verified stay",
    pt: "Estadia verificada",
    zh: "已验证住宿"
  },
  
  // Booking
  selectRooms: {
    fr: "Sélectionner les chambres",
    en: "Select rooms",
    pt: "Selecionar quartos",
    zh: "选择房间"
  },
  adults: {
    fr: "Adultes",
    en: "Adults",
    pt: "Adultos",
    zh: "成人"
  },
  children: {
    fr: "Enfants",
    en: "Children",
    pt: "Crianças",
    zh: "儿童"
  },
  proceedToPayment: {
    fr: "Procéder au paiement",
    en: "Proceed to payment",
    pt: "Prosseguir para pagamento",
    zh: "继续付款"
  },
  bookingDetails: {
    fr: "Détails de la réservation",
    en: "Booking details",
    pt: "Detalhes da reserva",
    zh: "预订详情"
  },
  
  // Misc
  seeAll: {
    fr: "Voir tout",
    en: "See all",
    pt: "Ver tudo",
    zh: "查看全部"
  },
  viewDetails: {
    fr: "Voir les détails",
    en: "View details",
    pt: "Ver detalhes",
    zh: "查看详情"
  },
  close: {
    fr: "Fermer",
    en: "Close",
    pt: "Fechar",
    zh: "关闭"
  },
  next: {
    fr: "Suivant",
    en: "Next",
    pt: "Próximo",
    zh: "下一步"
  },
  previous: {
    fr: "Précédent",
    en: "Previous",
    pt: "Anterior",
    zh: "上一步"
  },
  submit: {
    fr: "Soumettre",
    en: "Submit",
    pt: "Enviar",
    zh: "提交"
  },
  update: {
    fr: "Mettre à jour",
    en: "Update",
    pt: "Atualizar",
    zh: "更新"
  },
  create: {
    fr: "Créer",
    en: "Create",
    pt: "Criar",
    zh: "创建"
  },
  add: {
    fr: "Ajouter",
    en: "Add",
    pt: "Adicionar",
    zh: "添加"
  },
  remove: {
    fr: "Retirer",
    en: "Remove",
    pt: "Remover",
    zh: "移除"
  },
  
  // Footer
  allRightsReserved: {
    fr: "Tous droits réservés",
    en: "All rights reserved",
    pt: "Todos os direitos reservados",
    zh: "保留所有权利"
  },
  termsOfService: {
    fr: "Conditions d'utilisation",
    en: "Terms of Service",
    pt: "Termos de Serviço",
    zh: "服务条款"
  },
  privacyPolicy: {
    fr: "Politique de confidentialité",
    en: "Privacy Policy",
    pt: "Política de Privacidade",
    zh: "隐私政策"
  },
  contactUs: {
    fr: "Contactez-nous",
    en: "Contact us",
    pt: "Contate-nos",
    zh: "联系我们"
  },
  
  // Errors & Validation
  required: {
    fr: "Obligatoire",
    en: "Required",
    pt: "Obrigatório",
    zh: "必填"
  },
  invalidEmail: {
    fr: "Email invalide",
    en: "Invalid email",
    pt: "Email inválido",
    zh: "无效的电子邮件"
  },
  passwordTooShort: {
    fr: "Mot de passe trop court",
    en: "Password too short",
    pt: "Senha muito curta",
    zh: "密码太短"
  },
  passwordsDontMatch: {
    fr: "Les mots de passe ne correspondent pas",
    en: "Passwords don't match",
    pt: "As senhas não coincidem",
    zh: "密码不匹配"
  },
  
  // Time
  today: {
    fr: "Aujourd'hui",
    en: "Today",
    pt: "Hoje",
    zh: "今天"
  },
  yesterday: {
    fr: "Hier",
    en: "Yesterday",
    pt: "Ontem",
    zh: "昨天"
  },
  daysAgo: {
    fr: "il y a {count} jours",
    en: "{count} days ago",
    pt: "há {count} dias",
    zh: "{count}天前"
  },
  hoursAgo: {
    fr: "il y a {count} heures",
    en: "{count} hours ago",
    pt: "há {count} horas",
    zh: "{count}小时前"
  },
  minutesAgo: {
    fr: "il y a {count} minutes",
    en: "{count} minutes ago",
    pt: "há {count} minutos",
    zh: "{count}分钟前"
  },
  
  // Amenities
  wifi: {
    fr: "WiFi",
    en: "WiFi",
    pt: "WiFi",
    zh: "无线网络"
  },
  parking: {
    fr: "Parking",
    en: "Parking",
    pt: "Estacionamento",
    zh: "停车场"
  },
  pool: {
    fr: "Piscine",
    en: "Pool",
    pt: "Piscina",
    zh: "游泳池"
  },
  gym: {
    fr: "Salle de sport",
    en: "Gym",
    pt: "Academia",
    zh: "健身房"
  },
  restaurant: {
    fr: "Restaurant",
    en: "Restaurant",
    pt: "Restaurante",
    zh: "餐厅"
  },
  spa: {
    fr: "Spa",
    en: "Spa",
    pt: "Spa",
    zh: "水疗中心"
  },
  airConditioning: {
    fr: "Climatisation",
    en: "Air conditioning",
    pt: "Ar condicionado",
    zh: "空调"
  },
  roomService: {
    fr: "Service en chambre",
    en: "Room service",
    pt: "Serviço de quarto",
    zh: "客房服务"
  },
  
  // Property types
  hotel: {
    fr: "Hôtel",
    en: "Hotel",
    pt: "Hotel",
    zh: "酒店"
  },
  apartment: {
    fr: "Appartement",
    en: "Apartment",
    pt: "Apartamento",
    zh: "公寓"
  },
  villa: {
    fr: "Villa",
    en: "Villa",
    pt: "Vila",
    zh: "别墅"
  },
  guesthouse: {
    fr: "Maison d'hôtes",
    en: "Guesthouse",
    pt: "Pousada",
    zh: "民宿"
  },
  resort: {
    fr: "Resort",
    en: "Resort",
    pt: "Resort",
    zh: "度假村"
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string, params?: Record<string, string | number>): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    
    let result = translation[language] || translation.fr || key;
    
    // Replace parameters
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        result = result.replace(`{${paramKey}}`, String(value));
      });
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}