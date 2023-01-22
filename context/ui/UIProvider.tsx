import { FC, ReactNode, useReducer } from "react";
import { UIContext, uiReducer } from "./";

interface Props {
  children: ReactNode;
}

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidemenu = () => {
    dispatch({ type: "[UI] - open sidebar" });
  };

  const closeSidemenu = () => {
    dispatch({ type: "[UI] - close sidebar" });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "[UI] - set isAddingEntry", payload: isAdding });
  };

  const startDragging = () => {
    dispatch({ type: "[UI] - start dragging" });
  };

  const endDragging = () => {
    dispatch({ type: "[UI] - end dragging" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidemenu,
        closeSidemenu,
        setIsAddingEntry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
