import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
  children: ReactNode;
}

export interface UIState {
  sidemenuOpen: boolean;
  addToCartModalOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  addToCartModalOpen: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidemenu = () => {
    dispatch({ type: '[UI] - open sidebar' });
  };

  const closeSidemenu = () => {
    dispatch({ type: '[UI] - close sidebar' });
  };

  const openAddToCartModal = () => {
    dispatch({ type: '[UI] - open modal' });
  };

  const closeAddToCartModal = () => {
    dispatch({ type: '[UI] - close modal' });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidemenu,
        closeSidemenu,
        openAddToCartModal,
        closeAddToCartModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
