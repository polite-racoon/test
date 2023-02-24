import { ReservasState } from "../../interfaces";
import { Reserva } from "../../interfaces";

type ReservasActionType =
  | { type: "[Reservas] - addReserva"; payload: Reserva }
  | { type: "[Reservas] - deleteReserva"; payload: string }
  | { type: "[Reservas] - Load reservas from cookies"; payload: Reserva[] };

export const reservasReducer = (
  state: ReservasState,
  action: ReservasActionType
): ReservasState => {
  switch (action.type) {
    case "[Reservas] - addReserva":
      return {
        ...state,
        reservas: [...state.reservas, action.payload],
      };

    case "[Reservas] - deleteReserva":
      const index = state.reservas.findIndex(
        (reserva) => reserva.id === action.payload
      );
      const newReservas = [...state.reservas];
      newReservas.splice(index, 1);
      return {
        ...state,
        reservas: newReservas,
      };

    case "[Reservas] - Load reservas from cookies":
      return {
        ...state,
        reservas: [...action.payload],
      };
    default:
      return state;
  }
};
