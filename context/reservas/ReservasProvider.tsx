import { FC, ReactNode, useEffect, useReducer, useContext } from 'react';
import { ReservasContext, reservasReducer } from './';
import { Reserva, Reservas, ReservasState } from '../../interfaces';
import Cookies from 'js-cookie';
import { ProductosContext } from '../productos';

interface Props {
  children: ReactNode;
}

const Reservas_INITIAL_STATE: ReservasState = {
  reservasById: {},
};

export const ReservasProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reservasReducer, Reservas_INITIAL_STATE);
  console.log(state);
  // // aqui debo saber el estado de los productos. si este cambia debo actualizar el estado de las reservas
  // // ademas si se quieren modificar las reservas se debe corroborar que cumpla con los productos
  const { productsByIdObj } = useContext(ProductosContext);

  useEffect(() => {
    // actualiza las reservas segun el stock disponible
    const newReservasById = {
      ...state.reservasById,
    };
    console.log(newReservasById);
    Object.keys(newReservasById).forEach((id) => {
      if (newReservasById[id]!.quantity > (productsByIdObj[id]?.stock || 0)) {
        newReservasById[id]!.quantity = productsByIdObj[id]?.stock || 0;
      }
    });
    dispatch({
      type: '[Reservas] - Load reservas from cookies',
      payload: newReservasById,
    });
  }, [productsByIdObj]);

  // // TODO informar al usuario

  useEffect(() => {
    const cookieReservas: Reservas = Cookies.get('reservas')
      ? JSON.parse(Cookies.get('reservas')!)
      : {};

    dispatch({
      type: '[Reservas] - Load reservas from cookies',
      payload: cookieReservas,
    });
  }, []);

  useEffect(() => {
    Cookies.set('reservas', JSON.stringify(state.reservasById));
  }, [state.reservasById]);

  const addReserva = (reserva: Reserva) => {
    dispatch({ type: '[Reservas] - addReserva', payload: reserva });
  };
  const deleteReserva = (id: string) => {
    dispatch({ type: '[Reservas] - deleteReserva', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({
      type: '[Reservas] - Update reservas quantity',
      payload: { id, quantity },
    });
  };

  const reset = () => {
    dispatch({ type: '[Reservas] - Reset' });
  };

  const itemQuantityInReservas = (id: string) => {
    return state.reservasById[id] ? state.reservasById[id]!.quantity : 0;
  };

  const reservas = Object.values(state.reservasById) || [];

  const numOfReservas = reservas.reduce(
    (acc, reserva) => acc + (reserva?.quantity || 0),
    0
  );

  return (
    <ReservasContext.Provider
      value={{
        ...state,
        reservas,
        numOfReservas,
        itemQuantityInReservas,
        addReserva,
        deleteReserva,
        updateQuantity,
        reset,
      }}
    >
      {children}
    </ReservasContext.Provider>
  );
};
