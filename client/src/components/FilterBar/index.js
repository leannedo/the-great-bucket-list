// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// Styling
import "./FilterBar.scss";

// Hooks
import { useTodo } from "../../modules/todo/contexts/TodoContext";

const FilterBar = ({ count, className }) => {
  const { uncompletedCount, filterTodo } = useTodo();

  const [active, setActive] = useState("FILTER_ALL");
  const filterAction = ["FILTER_ALL", "FILTER_ONGOING", "FILTER_COMPLETED"];

  /**
   * Set active state for filter tab and trigger filter action
   * @param {string} action
   */
  const onFilterItemClick = (action) => {
    setActive(action);
    filterTodo(action);
  };

  /**
   * Format label for filter tab
   * @param {string} action
   * @return {string} label without "FILTER_"
   */
  const formatActionLabel = (action) => {
    if (!action) {
      return "";
    }

    const split = action.split("_");

    return split.length > 1 ? split[1] : "";
  };

  return (
    <div className={`td-filter-bar-wrapper ${className}`}>
      <div className="td-filter-bar-count">{uncompletedCount} tasks left</div>
      <div className="td-filter-bar-filter-wrapper">
        {filterAction.map((action, id) => (
          <div
            key={id}
            onClick={() => onFilterItemClick(action)}
            className={`filter ${active === action ? "active" : ""}`}
          >
            {formatActionLabel(action)}
          </div>
        ))}
      </div>
    </div>
  );
};

FilterBar.defaultProps = {
  className: "",
  count: 0,
};

FilterBar.propTypes = {
  /** component's default classname */
  className: PropTypes.string,

  /** filter's count value */
  count: PropTypes.number,
};

export default FilterBar;
