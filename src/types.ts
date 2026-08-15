export interface CategoryItem {
  id: string;
  name: string;
  iconType: 'beaches' | 'nature' | 'heritage' | 'spiritual' | 'food' | 'arts' | 'wildlife' | 'hiddenGems';
  accentColor: string;
  description: string;
  tagline: string;
  popularSpots: string[];
  image?: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  category: string;
  rating: number;
  image: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  nearestHub: string;
  localTip: string;
}

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  iconBadgeBg: string;
  iconType: 'intelligence' | 'personalized' | 'trusted';
  image: string;
  badge?: {
    text?: string;
    icon: string;
  };
}
