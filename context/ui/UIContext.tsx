import { createContext } from "react";
import { Reserva } from "../../interfaces";

interface ContextProps {
  sidemenuOpen: boolean;
  addToCartModalOpen: boolean;
  // methods
  openSidemenu: () => void;
  closeSidemenu: () => void;

  openAddToCartModal: () => void;
  closeAddToCartModal: () => void;
}

export const UIContext = createContext({} as ContextProps);
