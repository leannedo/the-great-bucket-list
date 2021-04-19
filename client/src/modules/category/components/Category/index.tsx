// Libraries
import React, { useState } from 'react';

// Styling
import './Category.scss';

// Types
import { ICategory } from '../../types';

interface ICategoryProps {
  className?: string;
  category: ICategory;
  onClick: () => void;
}

const Category = ({
  className,
  category,
  onClick = () => undefined,
}: ICategoryProps): JSX.Element => {
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
    <a
      className={`td-category ${className}`}
      onMouseEnter={toggleHoverHandler}
      onMouseLeave={toggleHoverHandler}
      style={isHover ? hoverStyle : style}
      onClick={onClick}
    >
      {category.name}
    </a>
  );
};

export default Category;
