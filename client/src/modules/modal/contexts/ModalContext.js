// Libraries
import React, { createContext, useContext, useReducer } from "react";

// Hooks
import modalReducer from "./../hooks/modalReducer";

const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

const ModalHooks = ({ children }) => {
  const initialModalState = {
    categoryEditingModal: {
      key: "CATEGORY_EDITING_MODAL",
      isVisible: false,
      props: {},
    },
    categorySelectionModal: {
      key: "CATEGORY_SELECTION_MODAL",
      isVisible: false,
    },
    confirmModal: {
      key: "CONFIRM_MODAL",
      isVisible: false,
      props: {},
    },
  };

  const [state, dispatch] = useReducer(modalReducer, initialModalState);

  const showModal = ({ key, props }) => {
    dispatch({ type: "SHOW_MODAL", payload: { key, props } });
  };

  const closeModal = ({ key, props }) => {
    dispatch({ type: "CLOSE_MODAL", payload: { key, props } });
  };

  const { categoryEditingModal, categorySelectionModal, confirmModal } = state;

  return (
    <ModalContext.Provider
      value={{
        categoryEditingModal,
        categorySelectionModal,
        confirmModal,
        showModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalHooks;
