import { createContext } from 'react';
import { Producto } from '../../interfaces';

interface ContextProps {
  productos: Producto[];
}

export const ProductosContext = createContext({} as ContextProps);
