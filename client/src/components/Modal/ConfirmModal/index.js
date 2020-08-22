// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import Modal from "./../../Modal/index";
import Button from "../../Button";

// Styling
import "./ConfirmModal.scss";

// Hooks
import { useModal } from "../../../modules/modal/contexts/ModalContext";

const ConfirmModal = ({ className, okHandler, cancelHandler }) => {
  const { confirmModal, closeModal } = useModal();

  return (
    <Modal
      className={className}
      visible={confirmModal.isVisible}
      modalKey={confirmModal.key}
    >
      <div className="td-confirm-modal">
        <Button onClick={okHandler} type="danger">
          {confirmModal.props.okText}
        </Button>
        <Button
          onClick={() => closeModal({ key: confirmModal.key })}
          className="confirm-modal-cancel-btn"
          type="text"
        >
          {confirmModal.props.cancelText}
        </Button>
      </div>
    </Modal>
  );
};

ConfirmModal.defaultProps = {
  className: "",
  okText: "",
  cancelText: "",
  okHandler: () => {},
  cancelHandler: () => {},
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
};

export default ConfirmModal;
