// Libraries
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../index' was resolved to '/Users/ngocdo/s... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// Components
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Button' was resolved to '/Users/ngoc... Remove this comment to see the full error message
import Modal from '../index';
import Button from '../../Button';

// Styling
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../modules/modal/contexts/ModalConte... Remove this comment to see the full error message
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        </Button>
        <Button
          onClick={onModalClose}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          className="confirm-modal-cancel-btn"
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          type="text"
        >
          {cancelText}
        </Button>
      </div>
    </Modal>
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
