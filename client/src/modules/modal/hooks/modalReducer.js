/** modalReducer to manage state change in modal */

const modalReducer = (currentState, { type, payload }) => {
  const { key, props } = payload;
  let state = { ...currentState };

  switch (type) {
    case "SHOW_MODAL":
      for (const field in state) {
        if (state[field].key === key) {
          state = {
            ...state,
            [field]: { ...state[field], isVisible: true, props: props },
          };
        }
      }
      return state;

    case "CLOSE_MODAL":
      for (const field in state) {
        if (state[field].key === key) {
          state = { ...state, [field]: { ...state[field], isVisible: false } };
        }
      }
      return state;

    default:
      return currentState;
  }
};

export default modalReducer;
