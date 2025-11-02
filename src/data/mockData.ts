import hotelFoutaDjallon from '@/assets/accommodations/hotel-fouta-djallon.jpg';
import residenceNimba from '@/assets/accommodations/residence-nimba.jpg';
import aubergeKonkoure from '@/assets/accommodations/auberge-konkoure.jpg';
import motelBadiar from '@/assets/accommodations/motel-badiar.jpg';
import hotelSoumba from '@/assets/accommodations/hotel-soumba.jpg';
import residenceKakoulima from '@/assets/accommodations/residence-kakoulima.jpg';
import aubergeTinkisso from '@/assets/accommodations/auberge-tinkisso.jpg';
import motelKankan from '@/assets/accommodations/motel-kankan.jpg';
import hotelSily from '@/assets/accommodations/hotel-sily.jpg';
import residenceLoos from '@/assets/accommodations/residence-loos.jpg';

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'motel' | 'auberge' | 'residence';
  city: string;
  region: string;
  price: number;
  currency: string;
  rating: number;
  reviews: number;
  sponsored: boolean;
  image: string;
  amenities: string[];
  description: string;
  aiPriceSuggestion?: number;
}

export const mockAccommodations: Accommodation[] = [
  {
    id: '1',
    name: 'Hôtel Fouta Djallon',
    type: 'hotel',
    city: 'Labé',
    region: 'Fouta Djallon',
    price: 450000,
    currency: 'GNF',
    rating: 4.7,
    reviews: 124,
    sponsored: true,
    image: hotelFoutaDjallon,
    amenities: ['WiFi', 'Restaurant', 'Piscine', 'Parking', 'Bar', 'Climatisation'],
    description: "L'Hôtel Fouta Djallon se distingue par son emplacement exceptionnel au cœur des majestueuses montagnes du Fouta Djallon. Cette région offre un cadre naturel d'une beauté rare avec ses cascades spectaculaires et son climat tempéré toute l'année.\n\nNotre établissement moderne propose des chambres spacieuses et élégamment décorées, équipées de tout le confort moderne. Profitez de notre restaurant gastronomique servant une cuisine locale et internationale, d'une piscine extérieure avec vue panoramique, et d'un bar chaleureux. Service de conciergerie disponible 24h/24 pour organiser vos excursions.",
  },
  {
    id: '2',
    name: 'Résidence Nimba',
    type: 'residence',
    city: "N'Zérékoré",
    region: 'Guinée Forestière',
    price: 380000,
    currency: 'GNF',
    rating: 4.5,
    reviews: 89,
    sponsored: true,
    image: residenceNimba,
    amenities: ['WiFi', 'Climatisation', 'Sécurité 24h/24', 'Parking', 'Jardin', 'Blanchisserie'],
    description: "La Résidence Nimba bénéficie d'une position privilégiée près du célèbre Mont Nimba, classé au patrimoine mondial de l'UNESCO. Située dans un quartier calme et sécurisé de N'Zérékoré, elle offre un havre de paix pour les voyageurs d'affaires et touristes.\n\nNos appartements entièrement meublés disposent de cuisines équipées, salons spacieux et chambres confortables. Le jardin tropical luxuriant crée une atmosphère apaisante. Service de blanchisserie, parking sécurisé et WiFi haut débit inclus. Idéal pour séjours prolongés.",
  },
  {
    id: '3',
    name: 'Auberge Konkouré',
    type: 'auberge',
    city: 'Kindia',
    region: 'Kindia',
    price: 250000,
    currency: 'GNF',
    rating: 4.3,
    reviews: 67,
    sponsored: false,
    image: aubergeKonkoure,
    amenities: ['WiFi', 'Restaurant', 'Jardin', 'Parking'],
    description: "L'Auberge Konkouré est nichée à proximité immédiate des spectaculaires chutes de Kindia, aussi appelées Voile de la Mariée. Son emplacement stratégique fait d'elle le point de départ idéal pour explorer la région et ses merveilles naturelles.\n\nCette auberge familiale au charme authentique propose des chambres propres et confortables dans un cadre verdoyant. Notre restaurant sert des spécialités locales préparées avec des produits frais du marché. Jardin ombragé parfait pour se détendre après vos excursions. Ambiance chaleureuse et accueil personnalisé garantis.",
  },
  {
    id: '4',
    name: 'Motel Badiar',
    type: 'motel',
    city: 'Koundara',
    region: 'Boké',
    price: 180000,
    currency: 'GNF',
    rating: 4.0,
    reviews: 45,
    sponsored: false,
    image: motelBadiar,
    amenities: ['Parking', 'Restaurant', 'WiFi', 'Climatisation'],
    description: "Le Motel Badiar est stratégiquement situé sur la route principale de Koundara, offrant un arrêt pratique pour les voyageurs en transit. Proche de la réserve naturelle du Badiar, il constitue une base idéale pour les amoureux de la nature et les aventuriers.\n\nNos chambres fonctionnelles et climatisées assurent un repos mérité après une longue journée de route. Restaurant sur place proposant des plats copieux à prix abordables. Grand parking sécurisé pour tous types de véhicules. WiFi gratuit dans tout l'établissement. Excellent rapport qualité-prix.",
  },
  {
    id: '5',
    name: 'Hôtel Soumba',
    type: 'hotel',
    city: 'Dubréka',
    region: 'Kindia',
    price: 320000,
    currency: 'GNF',
    rating: 4.4,
    reviews: 98,
    sponsored: true,
    image: hotelSoumba,
    amenities: ['WiFi', 'Piscine', 'Restaurant', 'Bar', 'Climatisation', 'Salle de sport'],
    description: "L'Hôtel Soumba se dresse fièrement à Dubréka, offrant une vue imprenable sur la nature environnante. Son architecture moderne s'intègre harmonieusement dans le paysage, créant un équilibre parfait entre confort contemporain et beauté naturelle.\n\nÉtablissement haut de gamme proposant des chambres luxueuses avec balcons privés, une piscine à débordement, un restaurant gastronomique, un bar-lounge et une salle de sport équipée. Services de spa disponibles sur demande. Personnel attentionné et multilingue. Parfait pour événements d'entreprise et séjours romantiques.",
  },
  {
    id: '6',
    name: 'Résidence Kakoulima',
    type: 'residence',
    city: 'Coyah',
    region: 'Kindia',
    price: 280000,
    currency: 'GNF',
    rating: 4.2,
    reviews: 56,
    sponsored: false,
    image: residenceKakoulima,
    amenities: ['WiFi', 'Climatisation', 'Parking', 'Sécurité 24h/24', 'Jardin', 'Cuisine équipée'],
    description: "La Résidence Kakoulima est située dans un quartier résidentiel paisible de Coyah, au pied du mont Kakoulima. Cette localisation privilégiée offre un cadre de vie serein tout en restant proche des commodités urbaines et de la route nationale.\n\nNos appartements spacieux sont entièrement équipés avec cuisines modernes, salons confortables et balcons privés. Sécurité renforcée avec surveillance 24h/24 et accès contrôlé. Jardin communautaire aménagé. Parking privé gratuit. Idéal pour familles et professionnels en mission longue durée.",
  },
  {
    id: '7',
    name: 'Auberge Tinkisso',
    type: 'auberge',
    city: 'Dabola',
    region: 'Faranah',
    price: 220000,
    currency: 'GNF',
    rating: 4.1,
    reviews: 34,
    sponsored: false,
    image: aubergeTinkisso,
    amenities: ['Restaurant', 'Parking', 'WiFi', 'Jardin'],
    description: "L'Auberge Tinkisso tire son nom de la rivière qui traverse la région de Faranah. Située au cœur de Dabola, elle offre un accès facile aux sites miniers tout en procurant une atmosphère relaxante après les journées de travail.\n\nCette auberge conviviale propose des chambres simples mais confortables dans un cadre verdoyant. Notre restaurant familial sert une cuisine locale authentique et généreuse. Jardin ombragé parfait pour les moments de détente. Personnel chaleureux connaissant parfaitement la région. Tarifs compétitifs et accueil personnalisé.",
  },
  {
    id: '8',
    name: 'Motel Kankan Koura',
    type: 'motel',
    city: 'Kankan',
    region: 'Haute Guinée',
    price: 200000,
    currency: 'GNF',
    rating: 3.9,
    reviews: 28,
    sponsored: false,
    image: motelKankan,
    amenities: ['WiFi', 'Parking', 'Restaurant', 'Climatisation'],
    description: "Le Motel Kankan Koura est idéalement positionné dans la capitale de la Haute Guinée, berceau de la culture mandingue. Sa proximité avec le centre-ville et les principaux sites d'intérêt en fait un choix judicieux pour découvrir Kankan et ses environs.\n\nÉtablissement fonctionnel offrant des chambres propres et climatisées à prix abordable. Restaurant proposant plats locaux et internationaux. Grand parking sécurisé. WiFi disponible dans les parties communes. Personnel serviable parlant plusieurs langues locales. Excellent point de chute pour explorer le patrimoine culturel de la région.",
  },
  {
    id: '9',
    name: 'Hôtel Sily National',
    type: 'hotel',
    city: 'Conakry',
    region: 'Conakry',
    price: 580000,
    currency: 'GNF',
    rating: 4.8,
    reviews: 256,
    sponsored: true,
    image: hotelSily,
    amenities: ['WiFi', 'Piscine', 'Restaurant', 'Salle de sport', 'Spa', 'Bar', 'Salle de conférence', 'Blanchisserie'],
    description: "L'Hôtel Sily National trône au cœur de Conakry, incarnant l'excellence hôtelière guinéenne. Sa position centrale dans le quartier d'affaires le rend particulièrement prisé des professionnels internationaux et des touristes de haut standing. Vue panoramique sur l'océan Atlantique depuis les étages supérieurs.\n\nCet hôtel premium cinq étoiles propose des suites luxueuses, restaurants gastronomiques, piscine olympique, spa de renommée internationale, et des salles de conférence ultramodernes. Services de conciergerie VIP 24h/24. Navette aéroport gratuite. Centre d'affaires complet. L'établissement de référence à Conakry.",
  },
  {
    id: '10',
    name: 'Résidence Loos',
    type: 'residence',
    city: 'Îles de Loos',
    region: 'Conakry',
    price: 420000,
    currency: 'GNF',
    rating: 4.6,
    reviews: 142,
    sponsored: true,
    image: residenceLoos,
    amenities: ['WiFi', 'Plage privée', 'Restaurant', 'Sports nautiques', 'Bar', 'Piscine'],
    description: "La Résidence Loos bénéficie d'un emplacement exceptionnel sur les îles de Loos, paradis tropical à quelques kilomètres de Conakry. Accessible uniquement par bateau, elle offre une escapade idyllique loin de l'agitation urbaine, avec plages de sable blanc et eaux cristallines.\n\nRésidence de charme proposant des villas et appartements les pieds dans l'eau. Plage privée équipée de transats et parasols. Restaurant de fruits de mer renommé. Centre de sports nautiques avec kayak, plongée et pêche. Piscine à débordement face à l'océan. Le lieu rêvé pour vacances inoubliables ou retraite ressourçante.",
  },
  {
    id: '11',
    name: 'Hôtel Palais de la République',
    type: 'hotel',
    city: 'Conakry',
    region: 'Conakry',
    price: 520000,
    currency: 'GNF',
    rating: 4.6,
    reviews: 198,
    sponsored: true,
    image: hotelSily,
    amenities: ['WiFi', 'Piscine', 'Restaurant', 'Bar', 'Salle de sport', 'Spa', 'Climatisation'],
    description: "L'Hôtel Palais de la République se situe dans le quartier diplomatique de Conakry, à proximité des ambassades et institutions gouvernementales. Son architecture imposante et son service irréprochable en font l'adresse privilégiée des délégations officielles et hommes d'affaires.\n\nCet établissement prestigieux offre des chambres et suites élégamment décorées, un restaurant étoilé, un spa luxueux et des salles de réception somptueuses. Services de traduction et secrétariat. Sécurité renforcée. Parking souterrain. L'excellence au service de vos séjours d'exception.",
  },
  {
    id: '12',
    name: 'Hôtel Riviera Royal',
    type: 'hotel',
    city: 'Conakry',
    region: 'Conakry',
    price: 480000,
    currency: 'GNF',
    rating: 4.5,
    reviews: 167,
    sponsored: true,
    image: hotelFoutaDjallon,
    amenities: ['WiFi', 'Piscine', 'Restaurant', 'Bar', 'Salle de sport', 'Climatisation', 'Parking'],
    description: "L'Hôtel Riviera Royal domine la corniche de Conakry, offrant une vue spectaculaire sur l'océan Atlantique. Sa position en front de mer et son standing élevé séduisent une clientèle internationale exigeante recherchant confort et élégance.\n\nÉtablissement moderne proposant chambres luxueuses avec balcons vue mer, restaurants internationaux, piscine panoramique, bar-lounge branché et centre de remise en forme. Salles de banquet pour événements. WiFi haut débit. Navette aéroport. Le choix parfait pour allier affaires et plaisir.",
  }
];

export const cities = [
  'Conakry', 'Labé', "N'Zérékoré", 'Kindia', 'Koundara', 
  'Dubréka', 'Coyah', 'Dabola', 'Kankan', 'Îles de Loos'
];
