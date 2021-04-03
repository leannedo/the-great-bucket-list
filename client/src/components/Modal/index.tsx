// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styling
import './Modal.scss';
import Backdrop from '../Backdrop';

// Hooks
import { useModal } from '../../modules/modal/contexts/ModalContext';

const Modal = ({ className, children, modalKey, visible }) => {
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
      <Backdrop closeModalHandler={closeModalHandler} modalVisible={visible} />
    </div>
  );
};

Modal.defaultProps = {
  className: '',
  modalKey: '',
  visible: false,
};

Modal.propTypes = {
  /** component's classname */
  className: PropTypes.string,

  /** component's children */
  children: PropTypes.node,

  /** modal's identify key */
  modalKey: PropTypes.string,

  /** modal's visibility state */
  visible: PropTypes.bool,
};

export default Modal;
