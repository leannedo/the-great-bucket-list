// Libraries
import React, { useState } from 'react';

// Styling
import './FilterBar.scss';

// Hooks
import { useTodo } from '../../modules/todo/contexts/TodoContext';

// Types
import { FilterActions } from '../../modules/todo/types';

interface IFilterBarProps {
  className?: string;
}

const FilterBar = ({ className }: IFilterBarProps): JSX.Element => {
  const { uncompletedCount, filterTodo } = useTodo();

  const [active, setActive] = useState(FilterActions.FILTER_ALL);
  const filterAction = [
    FilterActions.FILTER_ALL,
    FilterActions.FILTER_ONGOING,
    FilterActions.FILTER_COMPLETED,
  ];

  const onFilterItemClick = (action) => {
    setActive(action);
    filterTodo(action);
  };

  const formatActionLabel = (action) => {
    if (!action) {
      return '';
    }

    const split = action.split('_');

    return split.length > 1 ? split[1] : '';
  };

  return (
    <div className={`td-filter-bar-wrapper ${className}`}>
      <div className="td-filter-bar-count"> {uncompletedCount} tasks left</div>
      <div className="td-filter-bar-filter-wrapper">
        {filterAction.map((action, id) => (
          <div
            key={id}
            onClick={() => onFilterItemClick(action)}
            className={`filter ${active === action ? 'active' : ''}`}
          >
            {formatActionLabel(action)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
