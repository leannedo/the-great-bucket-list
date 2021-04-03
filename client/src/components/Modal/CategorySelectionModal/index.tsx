// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import CategoryList from '../../CategoryList';
import Modal from '../index';

// Styling
import './CategorySelectionModal.scss';

// Hooks
import { useModal } from '../../../modules/modal/contexts/ModalContext';
import { useCategory } from '../../../modules/category/contexts/CategoryContext';

const CategorySelectionModal = ({ className }) => {
  const { categorySelectionModal, closeModal } = useModal();
  const { selectCategory } = useCategory();

  /**
   * Save selected category and close modal
   */
  const onCategoryClick = (category) => {
    selectCategory(category);
    closeModal({ key: categorySelectionModal.key });
  };

  return (
    <Modal
      modalKey={categorySelectionModal.key}
      visible={categorySelectionModal.isVisible}
      className={`td-category-selection-modal ${className}`}
    >
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
