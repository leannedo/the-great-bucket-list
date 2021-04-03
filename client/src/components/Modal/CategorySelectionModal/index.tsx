// Libraries
import React from 'react';

// Components
import CategoryList from '../../CategoryList';
import Modal from '../index';

// Styling
import './CategorySelectionModal.scss';

// Hooks
import { useModal } from '../../../modules/modal/contexts/ModalContext';
import { useCategory } from '../../../modules/category/contexts/CategoryContext';

interface ICategorySelectionModalProps {
  className?: string;
}

const CategorySelectionModal = ({
  className,
}: ICategorySelectionModalProps): JSX.Element => {
  const { categorySelectionModal, closeModal } = useModal();
  const { selectCategory } = useCategory();

  /**
   * Save selected category and close modal
   */
  //  ts-migrate(7006) FIXME: Parameter 'category' implicitly has an 'any' type.
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

export default CategorySelectionModal;
