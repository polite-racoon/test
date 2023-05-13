import { Reserva } from './reserva';

export interface Reservas {
  [key: string]: Reserva | undefined;
}

export interface ReservasState {
  reservasById: Reservas;
}
