// Libraries
import React, { useContext, createContext } from 'react';

// Hooks
import useCategoryReducer from '../reducer/useCategoryReducer';

// Types
import { ICategory, ICategoryReducer } from '../types';

interface ICategoryContext extends ICategoryReducer {
  getCategoryById: (id: string) => Partial<ICategory>;
}

const CategoryContext = createContext<ICategoryContext | null>(null);

const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const {
    categories,
    currentSelectedCategory,
    addCategory,
    deleteCategory,
    updateCategory,
    selectCategory,
  } = useCategoryReducer();

  const getCategoryById = (id) => {
    if (!categories || categories.length <= 0 || !id) {
      return {};
    }
    return categories.find((category) => category.id === id) || {};
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        currentSelectedCategory,
        addCategory,
        deleteCategory,
        updateCategory,
        getCategoryById,
        selectCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = (): ICategoryContext | null => useContext(CategoryContext);

export { CategoryProvider, useCategory };
