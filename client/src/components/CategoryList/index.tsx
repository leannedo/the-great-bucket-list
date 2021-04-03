// Libraries
import React from 'react';

// Styling
import './CategoryList.scss';

// Components
import Category from './Category';

// Hooks
import { useModal } from '../../modules/modal/contexts/ModalContext';
import { useCategory } from '../../modules/category/contexts/CategoryContext';

// Types
import { ICategory } from '../../types';

interface ICategoryListProps {
  className?: string;
  onCategoryClick: (category: ICategory) => void;
}

const CategoryList = ({
  className,
  onCategoryClick = () => undefined,
}: ICategoryListProps): JSX.Element => {
  const { showModal, categoryEditingModal } = useModal();
  const { categories } = useCategory();

  return (
    <div className={className}>
      <div className="td-category-list">
        {categories.map((el, id) => (
          <Category
            key={id}
            category={el}
            onClick={(category) => onCategoryClick(category)}
          />
        ))}
        <div className="td-category-add-btn">
          <i
            className="fas fa-plus"
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

export default CategoryList;
