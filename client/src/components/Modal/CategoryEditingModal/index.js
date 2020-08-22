// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import Modal from "./../../Modal/index";
import Input from "./../../Input/index";
import Button from "../../Button";
import Icon from "../../Icon";

// Styling
import "./CategoryEditingModal.scss";

// Data
import CategoryData from "./../../CategoryList/data";

// Context
import { useModal } from "../../../modules/modal/contexts/ModalContext";

const CategoryEditingModal = ({ className }) => {
  const {
    categoryEditingModal,
    closeModal,
    showModal,
    confirmModal,
  } = useModal();

  const toggleModalHandler = () => {
    // stack modal
    showModal({
      key: confirmModal.key,
      props: { okText: "Delete this category?", cancelText: "Cancel" },
    });
  };

  return (
    <Modal
      modalKey={categoryEditingModal.key}
      visible={categoryEditingModal.isVisible}
      className={`td-category-creation-modal ${className}`}
    >
      <Input label="category name" value="Homework" name="text" />
      <div className="td-color-display-wrapper">
        <div className="td-color-display-label">CATEGORY COLOR</div>
        <div className="td-color-display" />
      </div>
      <div className="td-color-selector">
        <div className="td-color-block-wrapper">
          {CategoryData.map((el, id) => (
            <div
              key={id}
              style={{
                backgroundColor: `${el.colorIndicator}`,
              }}
              className="td-color-block"
            />
          ))}
        </div>
        <div className="td-input-wrapper-modal-context">
          <Input value="F77062" />
        </div>
      </div>
      <div className="td-action-icon-wrapper">
        <Icon onClick={toggleModalHandler} name="trash-solid" />
        <Button type="icon">
          <Icon name="check-solid" />
        </Button>
        <div></div>
      </div>
    </Modal>
  );
};

CategoryEditingModal.defaultProps = {
  className: "",
};

CategoryEditingModal.propTypes = {
  /** element's class name */
  className: PropTypes.string,
};

export default CategoryEditingModal;
