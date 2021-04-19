// Hooks
import { modalReducer } from '../reducer/useModalReducer';
import { IModalAction, ModalActions, ModalKeys } from '../types';

const initialModalState = {
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

describe('SHOW_MODAL', () => {
  test("it should set modal's isVisible state to true on matching valid key", () => {
    const action: IModalAction = {
      type: ModalActions.SHOW_MODAL,
      payload: {
        key: ModalKeys.CONFIRM_MODAL,
        props: { okText: 'Delete this task?', cancelText: 'Cancel' },
      },
    };

    const result = modalReducer(initialModalState, action);

    expect(result).toHaveProperty(ModalKeys.CONFIRM_MODAL);

    const modal = result[ModalKeys.CONFIRM_MODAL];

    expect(modal).toHaveProperty('isVisible', true);
    expect(modal.props).toHaveProperty('okText', 'Delete this task?');
    expect(modal.props).toHaveProperty('cancelText', 'Cancel');
  });
});

describe('CLOSE_MODAL', () => {
  test("it should set modal's isVisible state to false on matching valid key", () => {
    const action: IModalAction = {
      type: ModalActions.CLOSE_MODAL,
      payload: {
        key: ModalKeys.CONFIRM_MODAL,
      },
    };

    const result = modalReducer(initialModalState, action);

    expect(result).toHaveProperty(ModalKeys.CONFIRM_MODAL);

    const modal = result[ModalKeys.CONFIRM_MODAL];

    expect(modal).toHaveProperty('isVisible', false);
  });
});

describe('CLOSE_ALL_MODALS', () => {
  test("it should set all modal's isVisible state to false", () => {
    const action: IModalAction = {
      type: ModalActions.CLOSE_ALL_MODALS,
    };

    const result = modalReducer(initialModalState, action);

    expect(result[ModalKeys.CONFIRM_MODAL]).toHaveProperty('isVisible', false);
    expect(result[ModalKeys.CATEGORY_SELECTION_MODAL]).toHaveProperty(
      'isVisible',
      false,
    );
    expect(result[ModalKeys.CATEGORY_EDITING_MODAL]).toHaveProperty(
      'isVisible',
      false,
    );
  });
});
