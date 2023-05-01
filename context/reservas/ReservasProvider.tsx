import { FC, ReactNode, useEffect, useReducer } from 'react';
import { ReservasContext, reservasReducer } from './';
import { Producto, ReservasState } from '../../interfaces';
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

  const addReserva = (reserva: Producto) => {
    dispatch({ type: '[Reservas] - addReserva', payload: reserva });
  };
  const deleteReserva = (id: string) => {
    dispatch({ type: '[Reservas] - deleteReserva', payload: id });
  };

  const idsInReservas = state.reservas.reduce(
    (acc, el): any => [...acc, el.id],
    []
  );

  const amountInReservas = (id: string) => {
    const amount = idsInReservas.reduce((acc, el) => {
      if (el === id) acc += 1;
      return acc;
    }, 0);
    return amount;
  };

  return (
    <ReservasContext.Provider
      value={{ ...state, addReserva, deleteReserva, amountInReservas }}
    >
      {children}
    </ReservasContext.Provider>
  );
};
