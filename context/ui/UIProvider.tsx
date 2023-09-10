import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
  children: ReactNode;
}

export interface UIState {
  sidemenuOpen: boolean;
  addToCartModalOpen: boolean;
  stockWarningModalOpen: boolean;
  purchaseModalOpen: boolean;
  copyToastOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  addToCartModalOpen: false,
  stockWarningModalOpen: false,
  purchaseModalOpen: false,
  copyToastOpen: false,
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
    dispatch({ type: '[UI] - open product-added modal' });
  };

  const closeAddToCartModal = () => {
    dispatch({ type: '[UI] - close product-added modal' });
  };

  const openStockWarningModal = () => {
    dispatch({ type: '[UI] - open stock-warning modal' });
  };

  const closeStockWarningModal = () => {
    dispatch({ type: '[UI] - close stock-warning modal' });
  };

  const showPurchaseModal = (arg: boolean) => {
    dispatch({ type: '[UI] - show purchase modal', payload: arg });
  };

  const showCopyToast = (arg: boolean) => {
    dispatch({ type: '[UI] - show copy toast', payload: arg });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidemenu,
        closeSidemenu,
        openAddToCartModal,
        closeAddToCartModal,
        openStockWarningModal,
        closeStockWarningModal,
        showPurchaseModal,
        showCopyToast,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
