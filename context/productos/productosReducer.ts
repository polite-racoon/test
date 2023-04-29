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
      return {
        productos: action.payload,
      };

    default:
      return state;
  }
};
