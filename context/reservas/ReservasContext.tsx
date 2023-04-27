import { createContext } from 'react';
import { Reserva } from '../../interfaces';

interface ContextProps {
  reservas: Reserva[];
  // methods
  addReserva: (reserva: Reserva) => void;
  deleteReserva: (id: string) => void;
}

export const ReservasContext = createContext({} as ContextProps);
