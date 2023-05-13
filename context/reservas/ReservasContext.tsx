import { createContext } from 'react';
import { Reserva, Reservas } from '../../interfaces';

interface ContextProps {
  reservasById: Reservas;
  reservas: (Reserva | undefined)[];
  numOfReservas: number;
  // methods
  itemQuantityInReservas: (id: string) => number;
  // dispatchers
  addReserva: (reserva: Reserva) => void;
  deleteReserva: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  reset: () => void;
}

export const ReservasContext = createContext({} as ContextProps);
