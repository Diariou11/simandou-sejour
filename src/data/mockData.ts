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
    amenities: ['WiFi', 'Restaurant', 'Piscine', 'Parking'],
    description: 'Hôtel moderne au cœur des montagnes du Fouta Djallon',
    aiPriceSuggestion: 420000
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
    amenities: ['WiFi', 'Climatisation', 'Sécurité 24h/24'],
    description: 'Résidence confortable près du Mont Nimba',
    aiPriceSuggestion: 350000
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
    amenities: ['WiFi', 'Restaurant', 'Jardin'],
    description: 'Auberge charmante près des chutes de Kindia',
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
    amenities: ['Parking', 'Restaurant'],
    description: 'Motel pratique sur la route de Koundara',
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
    amenities: ['WiFi', 'Piscine', 'Restaurant', 'Bar'],
    description: 'Hôtel moderne avec vue sur la nature',
    aiPriceSuggestion: 300000
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
    amenities: ['WiFi', 'Climatisation', 'Parking'],
    description: 'Résidence calme à Coyah',
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
    amenities: ['Restaurant', 'Parking'],
    description: 'Auberge accueillante dans la région de Faranah',
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
    amenities: ['WiFi', 'Parking'],
    description: 'Motel pratique à Kankan',
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
    amenities: ['WiFi', 'Piscine', 'Restaurant', 'Salle de sport', 'Spa'],
    description: 'Hôtel premium au centre de Conakry',
    aiPriceSuggestion: 550000
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
    amenities: ['WiFi', 'Plage privée', 'Restaurant', 'Sports nautiques'],
    description: 'Résidence de charme sur les îles de Loos',
    aiPriceSuggestion: 400000
  }
];

export const cities = [
  'Conakry', 'Labé', "N'Zérékoré", 'Kindia', 'Koundara', 
  'Dubréka', 'Coyah', 'Dabola', 'Kankan', 'Îles de Loos'
];
