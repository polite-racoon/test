export interface Producto {
  catergory: 'plantas' | 'accesorios' | 'galletas';
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  id: string;
  sold: boolean;
}
