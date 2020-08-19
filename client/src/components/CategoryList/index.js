// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// Styling
import "./CategoryList.scss";

// Components
import Category from "./Category";
import Icon from "./../Icon/index";

// Initial Data
import CategoryData from "./data";

const CategoryList = ({ className }) => {
  const [initialData, setInitialData] = useState(CategoryData);

  return (
    <div className={`td-category-list-wrapper ${className}`}>
      <div className="td-category-list">
        {initialData.map((el, id) => (
          <Category key={id} {...el} />
        ))}
      </div>
      <div className="td-category-add-btn">
        <Icon name="plus-solid" />
      </div>
    </div>
  );
};

CategoryList.defaultProps = {
  className: "",
};

CategoryList.propTypes = {
  className: PropTypes.string,
};

export default CategoryList;
