// Hooks
import modalReducer from '../reducer/modalReducer';

const initialModalState = {
  categoryEditingModal: {
    key: 'CATEGORY_EDITING_MODAL',
    isVisible: false,
    props: {},
  },
  categorySelectionModal: {
    key: 'CATEGORY_SELECTION_MODAL',
    isVisible: false,
  },
  confirmModal: {
    key: 'CONFIRM_MODAL',
    isVisible: false,
    props: {},
  },
};

describe('SHOW_MODAL', () => {
  test("it should set modal's isVisible state to true on matching valid key", () => {
    const action = {
      type: 'SHOW_MODAL',
      payload: {
        key: 'CONFIRM_MODAL',
        props: { okText: 'Delete this task?', cancelText: 'Cancel' },
      },
    };

    const result = modalReducer(initialModalState, action);

    expect(result).toHaveProperty('confirmModal');

    const { confirmModal } = result;
    const { props } = confirmModal;

    expect(confirmModal).toHaveProperty('key', 'CONFIRM_MODAL');
    expect(confirmModal).toHaveProperty('isVisible', true);
    expect(props).toHaveProperty('okText', 'Delete this task?');
    expect(props).toHaveProperty('cancelText', 'Cancel');
  });

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'SHOW_MODAL',
    };

    const result = modalReducer(initialModalState, action);

    expect(result).toEqual(initialModalState);
  });

  test('it does not alter state on invalid key', () => {
    const action = {
      type: 'SHOW_MODAL',
      payload: {
        key: 'CATEGORY_MODAL',
        props: { okText: 'Delete this task?', cancelText: 'Cancel' },
      },
    };

    const result = modalReducer(initialModalState, action);

    expect(result).toEqual(initialModalState);
  });
});

describe('CLOSE_MODAL', () => {
  test("it should set modal's isVisible state to false on matching valid key", () => {
    const action = {
      type: 'CLOSE_MODAL',
      payload: { key: 'CATEGORY_EDITING_MODAL' },
    };

    const result = modalReducer(initialModalState, action);
    expect(result).toHaveProperty('categoryEditingModal');

    const { categoryEditingModal } = result;

    expect(categoryEditingModal).toHaveProperty(
      'key',
      'CATEGORY_EDITING_MODAL',
    );
    expect(categoryEditingModal).toHaveProperty('isVisible', false);
  });

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'CLOSE_MODAL',
    };

    const result = modalReducer(initialModalState, action);

    expect(result).toEqual(initialModalState);
  });

  test('it does not alter state on invalid key', () => {
    const action = {
      type: 'CLOSE_MODAL',
      payload: {
        key: 'CATEGORY_MODAL',
      },
    };

    const result = modalReducer(initialModalState, action);

    expect(result).toEqual(initialModalState);
  });
});

describe('CLOSE_ALL_MODALS', () => {
  test("it should set all modal's isVisible state to false", () => {
    const action = {
      type: 'CLOSE_ALL_MODALS',
    };

    const result = modalReducer(initialModalState, action);

    const {
      categoryEditingModal,
      categorySelectionModal,
      confirmModal,
    } = result;
    expect(categoryEditingModal).toHaveProperty('isVisible', false);
    expect(categorySelectionModal).toHaveProperty('isVisible', false);
    expect(confirmModal).toHaveProperty('isVisible', false);
  });

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'CLOSE_ALL_MODALS',
    };

    const result = modalReducer(initialModalState, action);

    expect(result).toEqual(initialModalState);
  });
});
