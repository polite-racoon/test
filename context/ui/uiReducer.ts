import { UIState } from '.';

type UIActionType =
  | { type: '[UI] - open sidebar' }
  | { type: '[UI] - close sidebar' }
  | { type: '[UI] - open product-added modal' }
  | { type: '[UI] - close product-added modal' }
  | { type: '[UI] - open stock-warning modal' }
  | { type: '[UI] - close stock-warning modal' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case '[UI] - open sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };

    case '[UI] - close sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };

    case '[UI] - open product-added modal':
      return {
        ...state,
        addToCartModalOpen: true,
      };

    case '[UI] - close product-added modal':
      return {
        ...state,
        addToCartModalOpen: false,
      };

    case '[UI] - open stock-warning modal':
      return {
        ...state,
        stockWarningModalOpen: true,
      };

    case '[UI] - close stock-warning modal':
      return {
        ...state,
        stockWarningModalOpen: false,
      };

    default:
      return state;
  }
};
