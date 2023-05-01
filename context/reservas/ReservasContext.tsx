import { createContext } from 'react';
import { Producto } from '../../interfaces';

interface ContextProps {
  reservas: Producto[];
  // methods
  addReserva: (reserva: Producto) => void;
  deleteReserva: (id: string) => void;
  amountInReservas: (id: string) => number;
}

export const ReservasContext = createContext({} as ContextProps);
