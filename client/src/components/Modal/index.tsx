// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styling
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Backdrop' was resolved to '/Users/ngocd... Remove this comment to see the full error message
import './Modal.scss';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../modules/modal/contexts/ModalContext'... Remove this comment to see the full error message
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
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={`td-modal ${className}`}>{children}</div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Backdrop closeModalHandler={closeModalHandler} modalVisible={visible} />
    </div>
  );
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
