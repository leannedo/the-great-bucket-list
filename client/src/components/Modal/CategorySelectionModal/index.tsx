// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../CategoryList' was resolved to '/User... Remove this comment to see the full error message
// Components
// @ts-expect-error ts-migrate(6142) FIXME: Module '../index' was resolved to '/Users/ngocdo/s... Remove this comment to see the full error message
import CategoryList from '../../CategoryList';
import Modal from '../index';

// Styling
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../modules/modal/contexts/ModalConte... Remove this comment to see the full error message
import './CategorySelectionModal.scss';

// Hooks
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../modules/category/contexts/Categor... Remove this comment to see the full error message
import { useModal } from '../../../modules/modal/contexts/ModalContext';
import { useCategory } from '../../../modules/category/contexts/CategoryContext';

const CategorySelectionModal = ({ className }) => {
  const { categorySelectionModal, closeModal } = useModal();
  const { selectCategory } = useCategory();

  /**
   * Save selected category and close modal
   */
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'category' implicitly has an 'any' type.
  const onCategoryClick = (category) => {
    selectCategory(category);
    closeModal({ key: categorySelectionModal.key });
  };

  return (
    <Modal
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      modalKey={categorySelectionModal.key}
      visible={categorySelectionModal.isVisible}
      className={`td-category-selection-modal ${className}`}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <CategoryList onCategoryClick={(category) => onCategoryClick(category)} />
    </Modal>
  );
};

CategorySelectionModal.defaultProps = {
  className: '',
};

CategorySelectionModal.propTypes = {
  /** element's class name */
  className: PropTypes.string,
};

export default CategorySelectionModal;
