export interface Producto {
  id: string;
  category: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  landscapeImgUrl?: string;
  sold: boolean;
  date: number;
}
