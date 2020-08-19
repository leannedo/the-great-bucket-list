// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import CategoryList from "../../CategoryList";
import Modal from "../index";

// Styling
import "./CategorySelectionModal.scss";

const CategorySelectionModal = ({}) => {
  return (
    <Modal className="td-category-selection-modal">
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
