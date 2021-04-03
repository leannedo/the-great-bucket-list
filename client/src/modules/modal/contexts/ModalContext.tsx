// Libraries
import React, { createContext, useContext } from 'react';

// Hooks
import { useModalHook } from '../hooks/useModal';

/** Initialize context */
// @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
const ModalContext = createContext();

/** use context through useModal */
export const useModal = () => useContext(ModalContext);

const ModalHooks = ({ children }) => {
  /** Extract data from useModalHook */
  const { state, showModal, closeModal, closeAllModals } = useModalHook();

  /** Extract data from state in useModalHook */
  const { categoryEditingModal, categorySelectionModal, confirmModal } = state;

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
