// Libraries
import React, { createContext, useContext } from 'react';

// Hooks
import { useModalHook } from '../hooks/useModal';

/** Initialize context */
const ModalContext = createContext();

/** use context through useModal */
export const useModal = () => useContext(ModalContext);

const ModalHooks = ({ children }) => {
  /** Extract data from useModalHook */
  const { state, showModal, closeModal, closeAllModals } = useModalHook();

  /** Extract data from state in useModalHook */
  const { categoryEditingModal, categorySelectionModal, confirmModal } = state;

  return (
    <ModalContext.Provider
      value={{
        categoryEditingModal,
        categorySelectionModal,
        confirmModal,
        showModal,
        closeModal,
        closeAllModals,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalHooks;
