// Libraries
import { v4 as uuidv4 } from 'uuid';

// Types
import { CategoryActions } from '../types';

const categoryReducer = (currentState, { type, payload }) => {
  let state = { ...currentState };

  switch (type) {
    case CategoryActions.ADD_CATEGORY:
      const { addedCategory } = payload;

      if (!addedCategory) {
        return state;
      }

      return {
        ...state,
        categories: [...state.categories, { id: uuidv4(), ...addedCategory }],
      };

    case CategoryActions.DELETE_CATEGORY:
      const { id: deletedId } = payload;

      return {
        ...state,
        categories: state.categories.filter((cat) => cat.id !== deletedId),
      };

    case CategoryActions.UPDATE_CATEGORY:
      const { updatedCategory } = payload;

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
      const { selectedCategory } = payload;

      if (!selectedCategory) {
        return state;
      }

      return {
        ...state,
        currentSelectedCategory: selectedCategory,
      };

    default:
      return currentState;
  }
};

export default categoryReducer;
