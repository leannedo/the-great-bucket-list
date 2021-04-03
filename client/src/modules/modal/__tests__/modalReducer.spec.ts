// Hooks
import modalReducer from '../hooks/modalReducer';

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

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SHOW_MODAL', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("it should set modal's isVisible state to true on matching valid key", () => {
    const action = {
      type: 'SHOW_MODAL',
      payload: {
        key: 'CONFIRM_MODAL',
        props: { okText: 'Delete this task?', cancelText: 'Cancel' },
      },
    };

    const result = modalReducer(initialModalState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toHaveProperty('confirmModal');

    const { confirmModal } = result;
    const { props } = confirmModal;

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(confirmModal).toHaveProperty('key', 'CONFIRM_MODAL');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(confirmModal).toHaveProperty('isVisible', true);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(props).toHaveProperty('okText', 'Delete this task?');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(props).toHaveProperty('cancelText', 'Cancel');
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'SHOW_MODAL',
    };

    const result = modalReducer(initialModalState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialModalState);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on invalid key', () => {
    const action = {
      type: 'SHOW_MODAL',
      payload: {
        key: 'CATEGORY_MODAL',
        props: { okText: 'Delete this task?', cancelText: 'Cancel' },
      },
    };

    const result = modalReducer(initialModalState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialModalState);
  });
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('CLOSE_MODAL', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("it should set modal's isVisible state to false on matching valid key", () => {
    const action = {
      type: 'CLOSE_MODAL',
      payload: { key: 'CATEGORY_EDITING_MODAL' },
    };

    const result = modalReducer(initialModalState, action);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toHaveProperty('categoryEditingModal');

    const { categoryEditingModal } = result;

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(categoryEditingModal).toHaveProperty(
      'key',
      'CATEGORY_EDITING_MODAL',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(categoryEditingModal).toHaveProperty('isVisible', false);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'CLOSE_MODAL',
    };

    const result = modalReducer(initialModalState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialModalState);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on invalid key', () => {
    const action = {
      type: 'CLOSE_MODAL',
      payload: {
        key: 'CATEGORY_MODAL',
      },
    };

    const result = modalReducer(initialModalState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialModalState);
  });
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('CLOSE_ALL_MODALS', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(categoryEditingModal).toHaveProperty('isVisible', false);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(categorySelectionModal).toHaveProperty('isVisible', false);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(confirmModal).toHaveProperty('isVisible', false);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'CLOSE_ALL_MODALS',
    };

    const result = modalReducer(initialModalState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialModalState);
  });
});
