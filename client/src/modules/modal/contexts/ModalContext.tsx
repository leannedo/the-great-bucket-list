// Libraries
import React, { createContext, useContext } from 'react';

// Hooks
import { useModalHook } from '../hooks/useModal';

interface IModalContext {
  categoryEditingModal: unknown;
  categorySelectionModal: unknown;
  confirmModal: unknown;
  showModal: unknown;
  closeModal: unknown;
  closeAllModals: unknown;
}

/** Initialize context */
//  ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
//  ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
const ModalContext = createContext<IModalContext | null>(null);

/** use context through useModal */
//  ts-migrate(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
export const useModal = (): IModalContext | null => useContext(ModalContext);

const ModalHooks = ({ children }) => {
  /** Extract data from useModalHook */
  const { state, showModal, closeModal, closeAllModals } = useModalHook();

  /** Extract data from state in useModalHook */
  //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const { categoryEditingModal, categorySelectionModal, confirmModal } = state;

  return (
    //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
