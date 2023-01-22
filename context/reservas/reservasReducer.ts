import { ReservasState } from "../../interfaces";
import { Reserva } from "../../interfaces";

type ReservasActionType =
  | { type: "[Reservas] - addReserva"; payload: Reserva }
  | { type: "[Reservas] - deleteReserva"; payload: string };

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
      state.reservas.splice(index, 1);
      return {
        ...state,
      };

    default:
      return state;
  }
};
