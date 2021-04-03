/**
 * modalReducer receives 2 params: state & action
 * @param {Object} currentState - Initial state to be computed
 * @param {Object} action
 * @param {string} action.type - Action type, including "SHOW_MODAL", "CLOSE_MODAL", "CLOSE_ALL_MODALS"
 * @param {Object} action.payload - Extra data
 * @returns {Object} - Return computed state
 */

const modalReducer = (currentState: any, { type, payload = {} }: any) => {
  const { key, props } = payload;
  let state = { ...currentState };

  switch (type) {
    case 'SHOW_MODAL':
      for (const field in state) {
        if (state[field].key === key) {
          state = {
            ...state,
            [field]: { ...state[field], isVisible: true, props },
          };
        }
      }
      return state;

    case 'CLOSE_MODAL':
      for (const field in state) {
        if (state[field].key === key) {
          state = { ...state, [field]: { ...state[field], isVisible: false } };
        }
      }
      return state;

    case 'CLOSE_ALL_MODALS':
      for (const field in state) {
        if (state[field].isVisible === true) {
          state = { ...state, [field]: { ...state[field], isVisible: false } };
        }
      }
      return state;

    default:
      return currentState;
  }
};

export default modalReducer;
