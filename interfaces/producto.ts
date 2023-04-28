export interface Producto {
  id: string;
  catergory: 'plantas' | 'accesorios' | 'galletas';
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  sold: boolean;
  date: number;
}
