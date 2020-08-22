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

const CategoryList = ({ className }) => {
  const { showModal, categoryEditingModal } = useModal();
  const { initialCategoryData } = useCategory();

  return (
    <div className={className}>
      <div className="td-category-list">
        {initialCategoryData.map((el, id) => (
          <Category key={id} {...el} />
        ))}
        <div className="td-category-add-btn">
          <Icon
            onClick={() => showModal({ key: categoryEditingModal.key })}
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
};

export default CategoryList;
