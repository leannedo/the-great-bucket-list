// Libraries
import React, { createContext, useContext } from 'react';

// Hooks
import useModalReducer from '../reducer/useModalReducer';

// Types
import { IModalReducer } from '../types';

type IModalContext = IModalReducer;

const ModalContext = createContext<IModalContext | null>(null);

const ModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const {
    categoryEditingModal,
    categorySelectionModal,
    confirmModal,
    showModal,
    closeModal,
    closeAllModals,
  } = useModalReducer();

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

const useModal = (): IModalContext | null => useContext(ModalContext);

export { ModalProvider, useModal };
