import { createContext } from 'react';
import { Producto } from '../../interfaces';

interface ContextProps {
  productos: Producto[];
  [category: string]: Producto[];
}

export const ProductosContext = createContext({} as ContextProps);
