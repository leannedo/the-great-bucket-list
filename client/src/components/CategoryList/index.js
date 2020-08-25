// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// Styling
import "./CategoryList.scss";

// Components
import Category from "./Category";
import Icon from "./../Icon/index";

// Hooks
import { useModal } from "../../modules/modal/contexts/ModalContext";
import { useCategory } from "../../modules/category/contexts/CategoryContext";

const CategoryList = ({ className, onCategoryClick }) => {
  const { showModal, categoryEditingModal } = useModal();
  const { categories } = useCategory();

  return (
    <div className={className}>
      <div className="td-category-list">
        {categories.map((el, id) => (
          <Category
            key={id}
            category={el}
            onClick={(category) => onCategoryClick(category)}
          />
        ))}
        <div className="td-category-add-btn">
          <Icon
            onClick={() =>
              showModal({
                key: categoryEditingModal.key,
                props: { category: { name: "", colorIndicator: "" } },
              })
            }
            name="plus-solid"
          />
        </div>
      </div>
    </div>
  );
};

CategoryList.defaultProps = {
  className: "",
};

CategoryList.propTypes = {
  /** component's classname */
  className: PropTypes.string,

  /** function triggered by category click */
  onCategoryClick: PropTypes.func,
};

export default CategoryList;
