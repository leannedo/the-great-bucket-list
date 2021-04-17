// Libraries
import React, { useReducer, useContext, createContext } from 'react';

// Data
import categoryData from './data';

// Hooks
import categoryReducer from '../reducer/categoryReducer';

const CategoryContext = createContext(null);

const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const initialState = {
    categories: categoryData,
    currentSelectedCategory: {},
  };

  const [state, dispatch] = useReducer(categoryReducer, initialState);

  const { categories, currentSelectedCategory } = state;

  const getCategoryById = (id) => {
    if (!categories || categories.length <= 0 || !id) {
      return {};
    }
    return categories.find((category) => category.id === id) || {};
  };

  const addCategory = (addedCategory) => {
    dispatch({ type: 'ADD_CATEGORY', payload: { addedCategory } });
  };

  const deleteCategory = (id) => {
    dispatch({ type: 'DELETE_CATEGORY', payload: { id } });
  };

  const updateCategory = (updatedCategory) => {
    dispatch({
      type: 'UPDATE_CATEGORY',
      payload: { updatedCategory },
    });
  };

  const selectCategory = (selectedCategory) => {
    dispatch({ type: 'SELECT_CATEGORY', payload: { selectedCategory } });
  };

  return (
    <CategoryContext.Provider
      value={{
        defaultCategories: categoryData,
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

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
