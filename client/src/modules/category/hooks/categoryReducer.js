// Libraries
import { v4 as uuidv4 } from "uuid";

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
    case "ADD_CATEGORY":
      const { addedCategory } = payload;

      return {
        ...state,
        categories: [...state.categories, { id: uuidv4(), ...addedCategory }],
      };

    case "DELETE_CATEGORY":
      const { id: deletedId } = payload;

      return {
        ...state,
        categories: state.categories.filter((cat) => cat.id !== deletedId),
      };

    case "UPDATE_CATEGORY":
      const { updatedCategory } = payload;

      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === updatedCategory.id
            ? { ...category, ...updatedCategory }
            : category
        ),
      };

    case "SELECT_CATEGORY":
      const { selectedCategory } = payload;

      return {
        ...state,
        currentSelectedCategory: selectedCategory,
      };

    default:
      return currentState;
  }
};

export default categoryReducer;
