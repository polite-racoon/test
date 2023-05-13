import { createContext } from 'react';
import { Producto } from '../../interfaces';

interface ContextProps {
  productos: Producto[];
  [category: string]:
    | Producto[]
    | { [id: string]: Producto | undefined }
    | ((id: string) => number);
  productsByIdObj: { [id: string]: Producto | undefined };
  // methods
  getStockById: (id: string) => number;
}

export const ProductosContext = createContext({} as ContextProps);
