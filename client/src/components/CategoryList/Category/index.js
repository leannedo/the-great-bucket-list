// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// Hooks
import { useModal } from "../../../modules/modal/contexts/ModalContext";

// Styling
import "./Category.scss";

const Category = ({ className, name, colorIndicator }) => {
  const { categoryEditingModal, showModal } = useModal();

  const [isHover, setIsHover] = useState(false);

  const style = { boxShadow: `inset 7px 0 0 ${colorIndicator}` };

  const hoverStyle = {
    backgroundColor: `${colorIndicator}`,
    color: "var(--td-white-color)",
  };

  const toggleHoverHandler = () => {
    setIsHover((isHover) => !isHover);
  };

  return (
    <a
      className={`td-category ${className}`}
      onMouseEnter={toggleHoverHandler}
      onMouseLeave={toggleHoverHandler}
      onClick={() => showModal({ key: categoryEditingModal.key })}
      style={isHover ? hoverStyle : style}
    >
      {name}
    </a>
  );
};

Category.defaultProps = {
  className: "",
  name: "",
  colorIndicator: "",
};

Category.propTypes = {
  /** element's class name */
  className: PropTypes.string,

  /** category's name */
  name: PropTypes.string,

  /** category's color indicator */
  colorIndicator: PropTypes.string,
};

export default Category;
