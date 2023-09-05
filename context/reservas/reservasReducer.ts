import { ReservasState } from '../../interfaces';
import { Reserva, Reservas } from '../../interfaces';

type ReservasActionType =
  | { type: '[Reservas] - addReserva'; payload: Reserva }
  | { type: '[Reservas] - deleteReserva'; payload: string }
  | { type: '[Reservas] - Update reservas'; payload: Reservas }
  | {
      type: '[Reservas] - Update reservas quantity';
      payload: { id: string; quantity: number };
    }
  | { type: '[Reservas] - Reset' };

export const reservasReducer = (
  state: ReservasState,
  action: ReservasActionType
): ReservasState => {
  switch (action.type) {
    case '[Reservas] - addReserva':
      return {
        reservasById: {
          ...state.reservasById,
          [action.payload.id]: action.payload,
        },
      };

    case '[Reservas] - deleteReserva':
      const ids = Object.keys(state.reservasById);
      const updatedIds = ids.filter((id) => id !== action.payload);

      const updatedReservas: Reservas = {};
      updatedIds.forEach((id) => {
        updatedReservas[id] = state.reservasById[id];
      });

      return {
        reservasById: updatedReservas,
      };

    case '[Reservas] - Update reservas':
      return {
        reservasById: { ...action.payload },
      };

    case '[Reservas] - Update reservas quantity':
      const updatedReserva = {
        ...state.reservasById[action.payload.id],
      } as Reserva;
      updatedReserva.quantity = action.payload.quantity;
      updatedReserva.updatedByStockChange = false;

      return {
        reservasById: {
          ...state.reservasById,
          [action.payload.id]: updatedReserva,
        },
      };

    case '[Reservas] - Reset':
      return {
        reservasById: {},
      };

    default:
      return state;
  }
};
