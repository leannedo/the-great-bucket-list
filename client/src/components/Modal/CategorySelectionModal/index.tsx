// Libraries
import React from 'react';

// Components
import CategoryList from '../../CategoryList';
import Modal from '../index';

// Styling
import './CategorySelectionModal.scss';

// Hooks
import { useModal } from '../../../modules/modal/context/ModalContext';
import { useCategory } from '../../../modules/category/context/CategoryContext';

// Types
import { ModalKeys } from '../../../modules/modal/types';

interface ICategorySelectionModalProps {
  className?: string;
}

const CategorySelectionModal = ({
  className,
}: ICategorySelectionModalProps): JSX.Element => {
  const { categorySelectionModal, closeModal } = useModal();
  const { selectCategory } = useCategory();

  const onCategoryClick = (category) => {
    selectCategory(category);
    closeModal(ModalKeys.CATEGORY_SELECTION_MODAL);
  };

  return (
    <Modal
      modalKey={ModalKeys.CATEGORY_SELECTION_MODAL}
      visible={categorySelectionModal.isVisible}
      className={`td-category-selection-modal ${className}`}
    >
      <CategoryList onCategoryClick={(category) => onCategoryClick(category)} />
    </Modal>
  );
};

export default CategorySelectionModal;
