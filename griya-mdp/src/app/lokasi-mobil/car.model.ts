export interface Car {
  id: number;
  title: string;
  location: string; 
  price: number;
  engineSize: number; 
  horsepower: number; 
  mileage: number; 
  image: string;
  rating: number;
  status: string;
  type?: string; 
  description?: string;
  postedDays?: number;
}