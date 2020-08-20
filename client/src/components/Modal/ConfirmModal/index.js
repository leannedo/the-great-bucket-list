// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import Modal from "./../../Modal/index";
import Button from "../../Button";

// Styling
import "./ConfirmModal.scss";

const ConfirmModal = ({
  className,
  okHandler,
  cancelHander,
  okText,
  cancelText,
}) => {
  return (
    <Modal className={className}>
      <div className="td-confirm-modal">
        <Button onClick={okHandler} type="danger">
          {okText}
        </Button>
        <Button
          onClick={cancelHander}
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
