export interface Producto {
  id: 'accesorios' | 'plantas' | 'galletas';
  catergory: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  sold: boolean;
  date: number;
}
