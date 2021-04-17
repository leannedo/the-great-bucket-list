// Libraries
import React from 'react';

// Components
import Modal from '../index';
import Button from '../../Button';

// Styling
import './ConfirmModal.scss';

// Hooks
import { useModal } from '../../../modules/modal/context/ModalContext';

// Types
import { ModalKeys } from '../../../modules/modal/types';

interface IConfirmModalProps {
  className?: string;
  okText: string;
  cancelText: string;
  cancelHandler: () => void;
  okHandler: () => void;
  isVisible: boolean;
  key: string;
}

const ConfirmModal = (props: IConfirmModalProps): JSX.Element => {
  const { confirmModal, closeModal } = useModal();

  const { props: modalProps, isVisible: modalVisible } = confirmModal;

  const mergedProps = {
    ...props,
    ...modalProps,
    ...{ isVisible: modalVisible },
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

  const onModalClose = () => {
    if (cancelHandler) cancelHandler();
    closeModal(ModalKeys.CONFIRM_MODAL);
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

export default ConfirmModal;
