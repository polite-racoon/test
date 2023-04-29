import { Producto, ProductosState } from '../../interfaces';

type ProductosActionType = {
  type: '[Productos] - loadProductos';
  payload: Producto[];
};

export const productosReducer = (
  state: ProductosState,
  action: ProductosActionType
): ProductosState => {
  switch (action.type) {
    case '[Productos] - loadProductos':
      const productos = [...action.payload];
      productos.sort((a: Producto, b: Producto) => b.date - a.date);

      return {
        productos,
      };

    default:
      return state;
  }
};
