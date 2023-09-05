import { useEffect, useState } from 'react';
import { ProductosContext } from '.';
import firebase from '../../firebase/client';

export const ProductosProvider = ({ children }) => {
  const [state, setState] = useState({ productos: [] });
  const db = firebase.firestore();

  useEffect(() => {
    const unsubscribe = db
      .collection('productos')
      // .where('stock', '>', 0)
      .onSnapshot((querySnapshot) => {
        const temp = [];
        querySnapshot.forEach((doc) => {
          const id = doc.id;
          const data = doc.data();
          temp.push({ id, ...data });
        });
        setState({ productos: temp });
      });

    return () => {
      unsubscribe();
    };
  }, [db]);

  const productsByIdObj = state.productos.reduce(
    (acc, el) => ({ ...acc, [el.id]: el }),
    {}
  );

  const productsByCategoryObj = state.productos.reduce(
    (acc, el) => ({ ...acc, [el.category]: el }),
    {}
  );

  const productosDisponibles = state.productos.filter(
    (producto) => producto.stock > 0
  );

  const getStockById = (id) => {
    const product = productsByIdObj[id];
    return product ? product.stock : 0;
  };

  return (
    <ProductosContext.Provider
      value={{
        ...state,
        ...productsByIdObj,
        ...productsByCategoryObj,
        productsByIdObj,
        productosDisponibles,
        getStockById,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
