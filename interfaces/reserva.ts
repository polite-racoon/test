export interface Reserva {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  price: number;
  imageUrl: string;
  landscapeImgUrl?: string;
  date: number;
  quantity: number;
  stock: null;
}
