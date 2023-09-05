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

  const { productsByIdObj } = useContext(ProductosContext);

  // Al empezar, lee reservas de las cookies e inicia el estado de las reservas
  useEffect(() => {
    const cookieReservas: Reservas = Cookies.get('reservas')
      ? JSON.parse(Cookies.get('reservas')!)
      : {};

    dispatch({
      type: '[Reservas] - Update reservas',
      payload: cookieReservas,
    });
  }, []);

  // cuando cambia el estado de las reservas, se acualizan las cookies
  useEffect(() => {
    Cookies.set('reservas', JSON.stringify(state.reservasById));
  }, [state.reservasById]);

  // si cambia el estado de los productos, cambia el estado de las reservas
  useEffect(() => {
    // si un producto disminuye su stock disminuye la cantidad en las reservas acordemente
    // copia las reservas del estado actual
    const updatedReservasById = {
      ...state.reservasById,
    };

    // registra posibles cambios
    let updateCounter = 0;

    // si un producto ya no existe se borra de las reservas
    Object.keys(updatedReservasById).forEach((id) => {
      if (!productsByIdObj[id]) delete updatedReservasById[id];
      updateCounter++;
    });

    // disminuye la cantidad de las reservas si el stock no alcanza
    Object.keys(updatedReservasById).forEach((id) => {
      if (
        updatedReservasById[id]!.quantity > (productsByIdObj[id]?.stock || 0)
      ) {
        // Deja un registro de la reserva antes de modificarla, para poder recuperar su estado en caso de que vuelva a haber stock
        // const cookieUpdatedByStock: Reservas = Cookies.get('updatedByStock')
        //   ? JSON.parse(Cookies.get('updatedByStock')!)
        //   : {};
        // cookieUpdatedByStock[id] = state.reservasById[id];
        // Cookies.set('updatedByStock', JSON.stringify(cookieUpdatedByStock));

        // Modifica la reserva
        updatedReservasById[id]!.quantity = productsByIdObj[id]?.stock || 0;
        updatedReservasById[id]!.updatedByStockChange = true;
        updateCounter++;
      }
    });

    // recuperar el estado de la reserva si el stock se recupera ???????????????????

    // Si hubo algun cambio, modifica el estado
    if (updateCounter > 0) {
      dispatch({
        type: '[Reservas] - Update reservas',
        payload: updatedReservasById,
      });
    }
  }, [productsByIdObj]);

  const addReserva = (reserva: Reserva) => {
    dispatch({ type: '[Reservas] - addReserva', payload: reserva });
  };

  const deleteReserva = (id: string) => {
    dispatch({ type: '[Reservas] - deleteReserva', payload: id });
  };

  // actualiza la cantidad de alguna reserva
  const updateQuantity = (id: string, quantity: number) => {
    dispatch({
      type: '[Reservas] - Update reservas quantity',
      payload: { id, quantity },
    });
  };

  // borra las reservas
  const reset = () => {
    dispatch({ type: '[Reservas] - Reset' });
  };

  // devuelve la cantidad reservada de un producto
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

/*
 // borra reserva de las cookies si producto no existe
  useEffect(() => {
    const cookieUpdatedByStock: Reservas = Cookies.get('updatedByStock')
      ? JSON.parse(Cookies.get('updatedByStock')!)
      : {};

    Object.keys(cookieUpdatedByStock).forEach((id) => {
      if (!productsByIdObj[id]) delete cookieUpdatedByStock[id];
    });

    Cookies.set('updatedByStock', JSON.stringify(cookieUpdatedByStock));

    const cookieReservas: Reservas = Cookies.get('reservas')
      ? JSON.parse(Cookies.get('reservas')!)
      : {};

    Object.keys(cookieReservas).forEach((id) => {
      if (!productsByIdObj[id]) delete cookieReservas[id]
    })
  }, [productsByIdObj]);

  // si el estado de los productos cambia, se actualiza el estado de las reservas

  useEffect(() => {
    // copia las reservas del estado actual
    const updatedReservasById = {
      ...state.reservasById,
    };

    // registra posibles cambios
    let updateCounter = 0;

    // disminuye la cantidad de las reservas si el stock no alcanza
    Object.keys(updatedReservasById).forEach((id) => {
      if (
        updatedReservasById[id]!.quantity > (productsByIdObj[id]?.stock || 0)
      ) {
        // Deja un registro de la reserva antes de modificarla, para poder recuperar su estado en caso de que vuelva a haber stock
        const cookieUpdatedByStock: Reservas = Cookies.get('updatedByStock')
          ? JSON.parse(Cookies.get('updatedByStock')!)
          : {};
        cookieUpdatedByStock[id] = state.reservasById[id];
        Cookies.set('updatedByStock', JSON.stringify(cookieUpdatedByStock));

        // Modifica la reserva
        updatedReservasById[id]!.quantity = productsByIdObj[id]?.stock || 0;
        updatedReservasById[id]!.updatedByStockChange = true;
        updateCounter++;
      }
    });

    // Si hubo algun cambio, modifica el estado
    if (updateCounter > 0) {
      dispatch({
        type: '[Reservas] - Update reservas',
        payload: updatedReservasById,
      });
    }
  }, [productsByIdObj]);

  useEffect(() => {
    // copia las reservas del estado actual
    const updatedReservasById = {
      ...state.reservasById,
    };

    // para registrar posibles cambios
    let updateCounter = 0;

    // lee de las cookie las reservas que han sido disminuidas por falta de stock
    const cookieUpdatedByStock: Reservas = Cookies.get('updatedByStock')
      ? JSON.parse(Cookies.get('updatedByStock')!)
      : {};
    console.log(cookieUpdatedByStock);
    // recupera el estado original de la reserva si vuelve a haber stock disponible
    // el estado original esta almacenado en las cookies
    Object.keys(cookieUpdatedByStock).forEach((id) => {
      // primero verifica que la reserva guardada en la cookie exista en las reservas y en los productos
      if (productsByIdObj[id] && updatedReservasById[id]) {
        console.log(id);
        // comprueba que haya stock para reestablecer el valor original
        if (cookieUpdatedByStock[id]!.quantity <= productsByIdObj[id]!.stock) {
          console.log(id);
          // reestablece el valor original
          updatedReservasById[id]!.quantity =
            cookieUpdatedByStock[id]!.quantity;

          // reestablece el valor original
          updatedReservasById[id]!.updatedByStockChange = false;

          // elimina el registro de las cookies
          delete cookieUpdatedByStock[id];
          Cookies.set('updatedByStock', JSON.stringify(cookieUpdatedByStock));

          // registra que hubo un cambio
          updateCounter++;
        }
      }
    });

    // Si hubo algun cambio, modifica el estado
    if (updateCounter > 0) {
      dispatch({
        type: '[Reservas] - Update reservas',
        payload: updatedReservasById,
      });
    }
  }, [productsByIdObj]);
*/
