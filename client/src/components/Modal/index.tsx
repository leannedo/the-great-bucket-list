// Libraries
import React from 'react';

// Styling
import './Modal.scss';
import Backdrop from '../Backdrop';

// Hooks
import { useModal } from '../../modules/modal/context/ModalContext';

// Types
import { ModalKeys } from '../../modules/modal/types';

interface IModalProps {
  className?: string;
  children: React.ReactNode;
  modalKey: ModalKeys;
  visible: boolean;
}

const Modal = ({
  className,
  children,
  modalKey,
  visible = false,
}: IModalProps): JSX.Element => {
  const { closeModal } = useModal();

  const closeModalHandler = () => {
    closeModal(modalKey);
  };

  return (
    <div className={`td-modal-wrapper ${visible ? 'show' : 'hide'}`}>
      <div className={`td-modal ${className}`}>{children}</div>
      <Backdrop closeModalHandler={closeModalHandler} />
    </div>
  );
};

export default Modal;
