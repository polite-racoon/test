import { FC, ReactNode, useReducer } from "react";
import { ReservasContext, reservasReducer } from "./";
import { Reserva, ReservasState } from "../../interfaces";

interface Props {
  children: ReactNode;
}

const Reservas_INITIAL_STATE: ReservasState = {
  reservas: [],
};

export const ReservasProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reservasReducer, Reservas_INITIAL_STATE);

  const addReserva = (reserva: Reserva) => {
    dispatch({ type: "[Reservas] - addReserva", payload: reserva });
  };
  const deleteReserva = (id: string) => {
    dispatch({ type: "[Reservas] - deleteReserva", payload: id });
  };

  return (
    <ReservasContext.Provider value={{ ...state, addReserva, deleteReserva }}>
      {children}
    </ReservasContext.Provider>
  );
};
