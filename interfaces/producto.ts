export interface Producto {
  id: string;
  catergory: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  landscapeImgUrl?: string;
  sold: boolean;
  date: number;
}
