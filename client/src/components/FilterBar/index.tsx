// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styling
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../modules/todo/contexts/TodoContext' w... Remove this comment to see the full error message
import './FilterBar.scss';

// Hooks
import { useTodo } from '../../modules/todo/contexts/TodoContext';

const FilterBar = ({ className }) => {
  const { uncompletedCount, filterTodo } = useTodo();

  const [active, setActive] = useState('FILTER_ALL');
  const filterAction = ['FILTER_ALL', 'FILTER_ONGOING', 'FILTER_COMPLETED'];

  /**
   * Set active state for filter tab and trigger filter action
   * @param {string} action
   */
  const onFilterItemClick = (action) => {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'action' implicitly has an 'any' type.
    setActive(action);
    filterTodo(action);
  };

  /**
   * Format label for filter tab
   * @param {string} action
   * @return {string} label without "FILTER_"
   */
  const formatActionLabel = (action) => {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'action' implicitly has an 'any' type.
    if (!action) {
      return '';
    }

    const split = action.split('_');

    return split.length > 1 ? split[1] : '';
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={`td-filter-bar-wrapper ${className}`}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-filter-bar-count">{uncompletedCount} tasks left</div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-filter-bar-filter-wrapper">
        {filterAction.map((action, id) => (
          <div
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

FilterBar.defaultProps = {
  className: '',
  count: 0,
};

FilterBar.propTypes = {
  /** component's default classname */
  className: PropTypes.string,
};

export default FilterBar;
