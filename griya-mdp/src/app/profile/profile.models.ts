export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  isPremium: boolean;
  isVerified: boolean;
  memberSince: string;
  bio?: string;
  job?: string;
  birthdate?: string;
  status?: string;
}

export interface StatsSummary {
  properties: number; 
  favorites: number;
  rating: number;
  memberSince: string;
}

export interface PropertyItem {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  engineSize: number; 
  horsepower: number;
  mileage: number;
  status: 'Active' | 'Pending' | 'Inactive';
}

export interface FavoriteItem { 
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  engineSize: number; 
  horsepower: number; 
  mileage: number;
  rating: number;
}

export interface HistoryItem {
  icon: string;      
  iconColor: 'success' | 'primary' | 'info' | 'warning' | 'danger';
  title: string;
  description: string;
  time: string;      
  badge?: string;    
  badgeColor?: 'success' | 'primary' | 'info' | 'warning' | 'danger';
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}