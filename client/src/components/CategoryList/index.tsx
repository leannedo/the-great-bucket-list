// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styling
import './CategoryList.scss';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Category' was resolved to '/Users/ngocdo... Remove this comment to see the full error message

// Components
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../modules/modal/contexts/ModalContext'... Remove this comment to see the full error message
import Category from './Category';

// Hooks
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../modules/category/contexts/CategoryCo... Remove this comment to see the full error message
import { useModal } from '../../modules/modal/contexts/ModalContext';
import { useCategory } from '../../modules/category/contexts/CategoryContext';

const CategoryList = ({ className, onCategoryClick }) => {
  const { showModal, categoryEditingModal } = useModal();
  const { categories } = useCategory();

  return (
    <div className={className}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-category-list">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {categories.map((el, id) => (
          <Category
            key={id}
            // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'el' implicitly has an 'any' type.
            category={el}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            onClick={(category) => onCategoryClick(category)}
          />
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'category' implicitly has an 'any' type.
        ))}
        {/* @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message */}
        <div className="td-category-add-btn">
          <i
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            className="fas fa-plus"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            onClick={() =>
              showModal({
                key: categoryEditingModal.key,
                props: { category: { name: '', colorIndicator: '' } },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

CategoryList.defaultProps = {
  className: '',
};

CategoryList.propTypes = {
  /** component's classname */
  className: PropTypes.string,

  /** function triggered by category click */
  onCategoryClick: PropTypes.func,
};

export default CategoryList;
