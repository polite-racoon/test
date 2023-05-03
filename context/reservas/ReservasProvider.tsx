import { FC, ReactNode, useEffect, useReducer } from 'react';
import { ReservasContext, reservasReducer } from './';
import { Reserva, ReservasState } from '../../interfaces';
import Cookies from 'js-cookie';

interface Props {
  children: ReactNode;
}

const Reservas_INITIAL_STATE: ReservasState = {
  reservas: [],
};

export const ReservasProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reservasReducer, Reservas_INITIAL_STATE);

  useEffect(() => {
    const cookieReservas = Cookies.get('reservas')
      ? JSON.parse(Cookies.get('reservas')!)
      : [];
    dispatch({
      type: '[Reservas] - Load reservas from cookies',
      payload: cookieReservas,
    });
  }, []);

  useEffect(() => {
    Cookies.set('reservas', JSON.stringify(state.reservas));
  }, [state.reservas]);

  const addReserva = (reserva: Reserva) => {
    dispatch({ type: '[Reservas] - addReserva', payload: reserva });
  };
  const deleteReserva = (id: string) => {
    dispatch({ type: '[Reservas] - deleteReserva', payload: id });
  };

  const quantityInReservas = (id: string) => {
    const reservasById: any = state.reservas.reduce(
      (acc, el) => ({ ...acc, [el.id]: el }),
      {}
    );
    if (!reservasById[id]) return 0;
    return reservasById[id].quantity;
  };

  return (
    <ReservasContext.Provider
      value={{ ...state, addReserva, deleteReserva, quantityInReservas }}
    >
      {children}
    </ReservasContext.Provider>
  );
};
