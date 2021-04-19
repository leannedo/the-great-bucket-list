// Libraries
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useReducer } from 'react';

// Types
import {
  CategoryActions,
  ICategoryState,
  ICategoryAction,
  ICategoryReducer,
  ICategory,
} from '../types';

// Default data
import { defaultCategories } from '../context/data';

const getSavedCats = () => {
  const localItem = localStorage.getItem('categories');
  return localItem ? JSON.parse(localItem) : null;
};

const initialCategoryState: ICategoryState = {
  categories: getSavedCats() ? getSavedCats() : defaultCategories,
  currentSelectedCategory: { id: '', name: '', colorIndicator: '' },
};

export const categoryReducer = (
  state: ICategoryState,
  action: ICategoryAction,
): ICategoryState => {
  switch (action.type) {
    case CategoryActions.ADD_CATEGORY:
      const addedCategory = action.payload;

      if (!addedCategory) {
        return state;
      }

      return {
        ...state,
        categories: [...state.categories, { id: uuidv4(), ...addedCategory }],
      };

    case CategoryActions.DELETE_CATEGORY:
      const deletedId = action.payload;

      return {
        ...state,
        categories: state.categories.filter((cat) => cat.id !== deletedId),
      };

    case CategoryActions.UPDATE_CATEGORY:
      const updatedCategory = action.payload;

      if (!updatedCategory) {
        return state;
      }

      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === updatedCategory.id
            ? { ...category, ...updatedCategory }
            : category,
        ),
      };

    case CategoryActions.SELECT_CATEGORY:
      const selectedCategory = action.payload;

      if (!selectedCategory) {
        return state;
      }

      return {
        ...state,
        currentSelectedCategory: selectedCategory,
      };

    default:
      return state;
  }
};

const useCategoryReducer = (
  initialState = initialCategoryState,
): ICategoryReducer => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  const addCategory = (addedCategory) => {
    dispatch({
      type: CategoryActions.ADD_CATEGORY,
      payload: addedCategory,
    });
  };

  const deleteCategory = (id) => {
    dispatch({ type: CategoryActions.DELETE_CATEGORY, payload: id });
  };

  const updateCategory = (updatedCategory) => {
    dispatch({
      type: CategoryActions.UPDATE_CATEGORY,
      payload: updatedCategory,
    });
  };

  const selectCategory = (selectedCategory) => {
    dispatch({
      type: CategoryActions.SELECT_CATEGORY,
      payload: selectedCategory,
    });
  };

  const updateLocalStorage = (categories: ICategory[]) => {
    localStorage.setItem('categories', JSON.stringify(categories));
  };

  useEffect(() => {
    updateLocalStorage(state.categories);
  }, [state.categories]);

  return {
    categories: state.categories,
    currentSelectedCategory: state.currentSelectedCategory,
    addCategory,
    deleteCategory,
    updateCategory,
    selectCategory,
  };
};

export default useCategoryReducer;
