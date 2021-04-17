// Libraries
import { useReducer } from 'react';

// Types
import {
  IModalState,
  IModalReducer,
  IModalAction,
  ModalActions,
  ModalKeys,
} from '../types';

const initialModalState: IModalState = {
  [ModalKeys.CATEGORY_EDITING_MODAL]: {
    isVisible: false,
    props: {},
  },
  [ModalKeys.CATEGORY_SELECTION_MODAL]: {
    isVisible: false,
  },
  [ModalKeys.CONFIRM_MODAL]: {
    isVisible: false,
    props: {},
  },
};

const reducer = (state: IModalState, action: IModalAction) => {
  switch (action.type) {
    case ModalActions.SHOW_MODAL: {
      const { key, props = {} } = action.payload;

      if (!state[key]) {
        return state;
      }

      return {
        ...state,
        [key]: {
          ...state[key],
          isVisible: true,
          props,
        },
      };
    }

    case ModalActions.CLOSE_MODAL: {
      const { key } = action.payload;

      if (!state[key]) {
        return state;
      }

      return {
        ...state,
        [key]: {
          ...state[key],
          isVisible: false,
        },
      };
    }

    case ModalActions.CLOSE_ALL_MODALS: {
      return {
        ...state,
        [ModalKeys.CATEGORY_EDITING_MODAL]: {
          isVisible: false,
        },
        [ModalKeys.CATEGORY_SELECTION_MODAL]: {
          isVisible: false,
        },
        [ModalKeys.CONFIRM_MODAL]: {
          isVisible: false,
        },
      };
    }

    default:
      return state;
  }
};

const useModalReducer = (initialState = initialModalState): IModalReducer => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showModal = (key: ModalKeys, props?: Record<string, unknown>) => {
    dispatch({ type: ModalActions.SHOW_MODAL, payload: { key, props } });
  };

  const closeModal = (key: ModalKeys) => {
    dispatch({ type: ModalActions.CLOSE_MODAL, payload: { key } });
  };

  const closeAllModals = () => {
    dispatch({ type: ModalActions.CLOSE_ALL_MODALS });
  };

  return {
    categoryEditingModal: state[ModalKeys.CATEGORY_EDITING_MODAL],
    categorySelectionModal: state[ModalKeys.CATEGORY_SELECTION_MODAL],
    confirmModal: state[ModalKeys.CONFIRM_MODAL],
    showModal,
    closeModal,
    closeAllModals,
  };
};

export default useModalReducer;
