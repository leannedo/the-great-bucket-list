// Libraries
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
import { v4 as uuidv4 } from 'uuid';

/**
 * categoryReducer receives 2 params: state & action
 * @param {CategoryState} currentState - Initial state to be computed
 * @param {Object} action - {type, payload}
 * @param {string} action.type - Action type, including "ADD_CATEGORY", "DELETE_CATEGORY", "UPDATE_CATEGORY", "SELECT_CATEGORY"
 * @param {Object} action.payload - Extra data
 * @returns {CategoryState} - Return computed state
 */
const categoryReducer = (currentState, { type, payload }) => {
  let state = { ...currentState };

  switch (type) {
    case 'ADD_CATEGORY':
      const { addedCategory } = payload;

      if (!addedCategory) {
        return state;
      }

      return {
        ...state,
        categories: [...state.categories, { id: uuidv4(), ...addedCategory }],
      };

    case 'DELETE_CATEGORY':
      const { id: deletedId } = payload;

      return {
        ...state,
        categories: state.categories.filter((cat) => cat.id !== deletedId),
      };

    case 'UPDATE_CATEGORY':
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

    case 'SELECT_CATEGORY':
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
