// Libraries
import { useReducer } from "react";

// Hooks
import modalReducer from "./modalReducer";

/**
 * @typedef {Object} initialModalState
 * @property {Object} categoryEditingModal
 * @property {Object} categorySelectionModal
 * @property {Object} confirmModal
 */
const initialModalState = {
  categoryEditingModal: {
    key: "CATEGORY_EDITING_MODAL",
    isVisible: false,
    props: {},
  },
  categorySelectionModal: {
    key: "CATEGORY_SELECTION_MODAL",
    isVisible: false,
  },
  confirmModal: {
    key: "CONFIRM_MODAL",
    isVisible: false,
    props: {},
  },
};

export const useModalHook = (initialState = initialModalState) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  /**
   * dispatch action "SHOW_MODAL"
   * @param {string} key - which modal is selected to show
   * @param {Object} props - props passed down to modal depending on context
   */
  const showModal = ({ key, props = {} }) => {
    dispatch({ type: "SHOW_MODAL", payload: { key, props } });
  };

  /**
   * dispatch action "CLOSE_MODAL"
   * @param {string} key - which modal is selected to close
   */
  const closeModal = ({ key }) => {
    dispatch({ type: "CLOSE_MODAL", payload: { key } });
  };

  /**
   * dispatch action "CLOSE_ALL_MODALS"
   */
  const closeAllModals = () => {
    dispatch({ type: "CLOSE_ALL_MODALS" });
  };

  return { state, showModal, closeModal, closeAllModals };
};
