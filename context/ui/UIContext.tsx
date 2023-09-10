import { createContext } from 'react';

interface ContextProps {
  sidemenuOpen: boolean;
  addToCartModalOpen: boolean;
  stockWarningModalOpen: boolean;
  purchaseModalOpen: boolean;
  copyToastOpen: boolean;
  // methods
  openSidemenu: () => void;
  closeSidemenu: () => void;

  openAddToCartModal: () => void;
  closeAddToCartModal: () => void;

  openStockWarningModal: () => void;
  closeStockWarningModal: () => void;

  showPurchaseModal: (arg: boolean) => void;
  showCopyToast: (arg: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
