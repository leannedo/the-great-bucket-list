// Libraries
import React, { useReducer, useContext, createContext } from 'react';

// Data
import categoryData from './data';

// Hooks
import categoryReducer from '../hooks/categoryReducer';

/** Initialize context */
//  ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
//  ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
const CategoryContext = createContext(null);

/** use context through useCategory */
//  ts-migrate(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
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
   //  ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
   * @param {string} id - id of category to be found
   * @returns {Object} as category
   */
  const getCategoryById = (id) => {
    //  ts-migrate(7006) FIXME: Parameter 'category' implicitly has an 'any' type.
    if (!categories || categories.length <= 0 || !id) {
      return {};
    }
    return categories.find((category) => category.id === id) || {};
  };

  /**
   * Dispatch action "ADD_CATEGORY"
   //  ts-migrate(7006) FIXME: Parameter 'addedCategory' implicitly has an 'any' ... Remove this comment to see the full error message
   * @param {CategoryEntity} addedCategory - new category to be added
   */
  const addCategory = (addedCategory) => {
    dispatch({ type: 'ADD_CATEGORY', payload: { addedCategory } });
  };

  /**
   * Dispatch action "DELETE_CATEGORY"
   //  ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
   * @param {string} id - category's id to be deleted
   */
  const deleteCategory = (id) => {
    dispatch({ type: 'DELETE_CATEGORY', payload: { id } });
  };

  /**
   * Dispatch action "UPDATE_CATEGORY"
   //  ts-migrate(7006) FIXME: Parameter 'updatedCategory' implicitly has an 'any... Remove this comment to see the full error message
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
   //  ts-migrate(7006) FIXME: Parameter 'selectedCategory' implicitly has an 'an... Remove this comment to see the full error message
   * @param {Object} selectedCategory - current selected category (from category selection modal)
   */
  const selectCategory = (selectedCategory) => {
    //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    dispatch({ type: 'SELECT_CATEGORY', payload: { selectedCategory } });
  };

  return (
    <CategoryContext.Provider
      //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
