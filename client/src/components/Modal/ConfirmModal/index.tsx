// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Modal from '../index';
import Button from '../../Button';

// Styling
import './ConfirmModal.scss';

// Hooks
import { useModal } from '../../../modules/modal/contexts/ModalContext';

const ConfirmModal = (props) => {
  const { confirmModal, closeModal } = useModal();

  const {
    props: modalProps,
    isVisible: modalVisible,
    key: modalKey,
  } = confirmModal;

  const mergedProps = {
    ...props,
    ...modalProps,
    ...{ isVisible: modalVisible, key: modalKey },
  };

  const {
    className,
    okText,
    okHandler,
    cancelText,
    cancelHandler,
    isVisible,
    key,
  } = mergedProps;

  /**
   * Close modal and trigger additional handler from modal's props
   */
  const onModalClose = () => {
    cancelHandler();
    closeModal({ key });
  };

  return (
    <Modal className={className} visible={isVisible} modalKey={key}>
      <div className="td-confirm-modal">
        <Button onClick={okHandler} type="danger">
          {okText}
        </Button>
        <Button
          onClick={onModalClose}
          className="confirm-modal-cancel-btn"
          type="text"
        >
          {cancelText}
        </Button>
      </div>
    </Modal>
  );
};

ConfirmModal.defaultProps = {
  className: '',
  okText: '',
  cancelText: '',
  okHandler: () => {},
  cancelHandler: () => {},
  isVisible: false,
  key: '',
};

ConfirmModal.propTypes = {
  /** element's class name */
  className: PropTypes.string,

  /** confirm text */
  okText: PropTypes.string,

  /** cancel text  */
  cancelText: PropTypes.string,

  /** confirm text's action */
  cancelHandler: PropTypes.func,

  /** cancel text's action */
  okHandler: PropTypes.func,

  /** modal visibility state */
  isVisible: PropTypes.bool,

  /** modal identified key */
  key: PropTypes.string,
};

export default ConfirmModal;
