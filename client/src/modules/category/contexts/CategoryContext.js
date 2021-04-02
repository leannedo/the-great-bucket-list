// Libraries
import React, { useReducer, useContext, createContext } from 'react';

// Data
import categoryData from './data';

// Hooks
import categoryReducer from '../hooks/categoryReducer';

/** Initialize context */
const CategoryContext = createContext();

/** use context through useCategory */
export const useCategory = () => useContext(CategoryContext);

const CategoryHooks = ({ children }) => {
  /**
   * @typedef {Object} CategoryState
   * @property {Array} categories
   * @property {Object} currentSelectedCategory
   */
  const initialState = {
    categories: categoryData,
    currentSelectedCategory: {},
  };

  const [state, dispatch] = useReducer(categoryReducer, initialState);

  const { categories, currentSelectedCategory } = state;

  /**
   * Helper functions returns category with supplied Id
   * @param {string} id - id of category to be found
   * @returns {Object} as category
   */
  const getCategoryById = (id) => {
    if (!categories || categories.length <= 0 || !id) {
      return {};
    }
    return categories.find((category) => category.id === id) || {};
  };

  /**
   * Dispatch action "ADD_CATEGORY"
   * @param {CategoryEntity} addedCategory - new category to be added
   */
  const addCategory = (addedCategory) => {
    dispatch({ type: 'ADD_CATEGORY', payload: { addedCategory } });
  };

  /**
   * Dispatch action "DELETE_CATEGORY"
   * @param {string} id - category's id to be deleted
   */
  const deleteCategory = (id) => {
    dispatch({ type: 'DELETE_CATEGORY', payload: { id } });
  };

  /**
   * Dispatch action "UPDATE_CATEGORY"
   * @param {CategoryEntity} updatedCategory - updated data on existing category
   */
  const updateCategory = (updatedCategory) => {
    dispatch({
      type: 'UPDATE_CATEGORY',
      payload: { updatedCategory },
    });
  };

  /**
   * Dispatch action "SELECT_CATEGORY"
   * @param {Object} selectedCategory - current selected category (from category selection modal)
   */
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

export default CategoryHooks;
