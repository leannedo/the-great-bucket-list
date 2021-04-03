// Libraries
import React from 'react';

// Styling
import './Modal.scss';
import Backdrop from '../Backdrop';

// Hooks
import { useModal } from '../../modules/modal/contexts/ModalContext';

interface IModalProps {
  className?: string;
  children: React.ReactNode;
  modalKey: string;
  visible: boolean;
}

const Modal = ({
  className,
  children,
  modalKey,
  visible = false,
}: IModalProps): JSX.Element => {
  const { closeModal } = useModal();

  /**
   * Close the selected modal
   * @param {event} e
   */
  const closeModalHandler = () => {
    closeModal({ key: modalKey });
  };

  return (
    <div className={`td-modal-wrapper ${visible ? 'show' : 'hide'}`}>
      <div className={`td-modal ${className}`}>{children}</div>
      {/* <Backdrop closeModalHandler={closeModalHandler} modalVisible={visible} /> */}
      <Backdrop closeModalHandler={closeModalHandler} />
    </div>
  );
};

export default Modal;
