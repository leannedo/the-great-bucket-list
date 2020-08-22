// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// Styling
import "./FilterBar.scss";

const FilterBar = ({ count, className }) => {
  const [active, setActive] = useState("ALL");
  const filterAction = ["ALL", "ONGOING", "COMPLETED"];

  return (
    <div className={`td-filter-bar-wrapper ${className}`}>
      <div className="td-filter-bar-count">{count} tasks left</div>
      <div className="td-filter-bar-filter-wrapper">
        {filterAction.map((action, id) => (
          <div
            key={id}
            onClick={() => setActive(action)}
            className={`filter ${active === action ? "active" : ""}`}
          >
            {action}
          </div>
        ))}
      </div>
    </div>
  );
};

FilterBar.defaultProps = {
  className: "",
};

FilterBar.propTypes = {
  className: PropTypes.string,
};

export default FilterBar;
