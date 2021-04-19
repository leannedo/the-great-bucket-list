// Libraries
import React from 'react';

// Styling
import './CategoryList.scss';

// Components
import Category from '../Category';

// Hooks
import { useModal } from '../../../modal/context/ModalContext';
import { useCategory } from '../../context/CategoryContext';

// Types
import { ICategory } from '../../types';
import { ModalKeys } from '../../../modal/types';

interface ICategoryListProps {
  className?: string;
  onCategoryClick: (category: ICategory) => void;
}

const CategoryList = ({
  className,
  onCategoryClick = () => undefined,
}: ICategoryListProps): JSX.Element => {
  const { showModal } = useModal();
  const { categories } = useCategory();

  const onAddCategoryClick = () => {
    showModal(ModalKeys.CATEGORY_EDITING_MODAL);
  };

  return (
    <div className={className}>
      <div className="td-category-list">
        {categories.length > 0 ? (
          categories.map((el, id) => (
            <Category
              key={id}
              category={el}
              onClick={() => onCategoryClick(el)}
            />
          ))
        ) : (
          <p>Add category</p>
        )}
        <div className="td-category-add-btn">
          <i className="fas fa-plus" onClick={onAddCategoryClick} />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
