// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import CategoryList from "../../CategoryList";
import Modal from "../index";

// Styling
import "./CategorySelectionModal.scss";

// Hooks
import { useModal } from "../../../modules/modal/contexts/ModalContext";

const CategorySelectionModal = ({ className }) => {
  const { categorySelectionModal } = useModal();

  return (
    <Modal
      modalKey={categorySelectionModal.key}
      visible={categorySelectionModal.isVisible}
      className={`td-category-selection-modal ${className}`}
    >
      <CategoryList />
    </Modal>
  );
};

CategorySelectionModal.defaultProps = {
  className: "",
};

CategorySelectionModal.propTypes = {
  /** element's class name */
  className: PropTypes.string,
};

export default CategorySelectionModal;
