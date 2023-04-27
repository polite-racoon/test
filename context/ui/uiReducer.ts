import { UIState } from '.';
import { Reserva } from '../../interfaces';

type UIActionType =
  | { type: '[UI] - open sidebar' }
  | { type: '[UI] - close sidebar' }
  | { type: '[UI] - open modal' }
  | { type: '[UI] - close modal' };

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

    case '[UI] - open modal':
      return {
        ...state,
        addToCartModalOpen: true,
      };

    case '[UI] - close modal':
      return {
        ...state,
        addToCartModalOpen: false,
      };

    default:
      return state;
  }
};
