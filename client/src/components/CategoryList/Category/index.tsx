// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styling
import './Category.scss';

const Category = ({ className, category, onClick }) => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'category' does not exist on type 'Props'... Remove this comment to see the full error message
  const [isHover, setIsHover] = useState(false);

  const style = { boxShadow: `inset 7px 0 0 ${category.colorIndicator}` };

  const hoverStyle = {
    backgroundColor: `${category.colorIndicator}`,
    color: 'var(--td-white-color)',
  };

  const toggleHoverHandler = () => {
    setIsHover((isHover) => !isHover);
  };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className={`td-category ${className}`}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      onMouseEnter={toggleHoverHandler}
      onMouseLeave={toggleHoverHandler}
      style={isHover ? hoverStyle : style}
      onClick={() => onClick(category)}
    >
      {category.name}
    </a>
  );
};

Category.defaultProps = {
  className: '',
  name: '',
  colorIndicator: '',
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
