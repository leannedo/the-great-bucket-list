// Libraries
import React from 'react';

// Styling
import './CategoryList.scss';

// Components
import Category from './Category';

// Hooks
import { useModal } from '../../modules/modal/contexts/ModalContext';
import { useCategory } from '../../modules/category/contexts/CategoryContext';

interface ICategoryListProps {
  className?: string;
}

const CategoryList = ({ className }: ICategoryListProps): JSX.Element => {
  const { showModal, categoryEditingModal } = useModal();
  const { categories } = useCategory();

  const onCategoryClick = (category) => {
    showModal({ key: categoryEditingModal.key, props: { category } });
  };

  const onAddCategoryClick = () => {
    showModal({
      key: categoryEditingModal.key,
      props: { category: { name: '', colorIndicator: '' } },
    });
  };

  return (
    <div className={className}>
      <div className="td-category-list">
        {categories.map((el, id) => (
          <Category
            key={id}
            category={el}
            onClick={() => onCategoryClick(el)}
          />
        ))}
        <div className="td-category-add-btn">
          <i className="fas fa-plus" onClick={onAddCategoryClick} />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
