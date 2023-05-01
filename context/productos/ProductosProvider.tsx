import { FC, ReactNode, useEffect, useReducer } from 'react';
import { ProductosContext, productosReducer } from '.';
import { Producto } from '../../interfaces';
import firebase from '../../firebase/client';

interface Props {
  children: ReactNode;
}

interface ProductosState {
  productos: Producto[];
}

const Productos_INITIAL_STATE: ProductosState = {
  productos: [],
};

export const ProductosProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    productosReducer,
    Productos_INITIAL_STATE
  );

  useEffect(() => {
    const db = firebase.firestore();
    const temp: any = [];
    db.collection('productos')
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          temp.push({ ...data, id });
        });
        dispatch({ type: '[Productos] - loadProductos', payload: temp });
      });

    return () => {};
  }, []);

  const productsByIdObj = state.productos.reduce(
    (acc, el) => ({ ...acc, [el.id]: el }),
    {}
  );

  const productsByCategoryObj = state.productos.reduce(
    (acc, el) => ({ ...acc, [el.category]: el }),
    {}
  );

  return (
    <ProductosContext.Provider
      value={{ ...state, ...productsByIdObj, ...productsByCategoryObj }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
