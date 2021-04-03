// Hooks
import categoryReducer from '../hooks/categoryReducer';

// Data
import categoryData from '../contexts/data';

const initialState = {
  categories: categoryData,
  currentSelectedCategory: {},
};

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Add category', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should add addedCategory from action payload to categories', () => {
    const action = {
      type: 'ADD_CATEGORY',
      payload: { addedCategory: { name: 'Test cat', colorIndicator: '#000' } },
    };

    const result = categoryReducer(initialState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toHaveProperty('categories');

    const { categories } = result;

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(categories).toHaveLength(initialState.categories.length + 1);

    const newAddedCat = categories[categories.length - 1];

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(newAddedCat).toHaveProperty('name', 'Test cat');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(newAddedCat).toHaveProperty('colorIndicator', '#000');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(newAddedCat).toHaveProperty('id');
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'ADD_CATEGORY',
    };

    const result = categoryReducer(initialState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialState);
  });
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Delete category', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should delete category from categories on provided id', () => {
    const action = {
      type: 'DELETE_CATEGORY',
      payload: { id: '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d' },
    };

    const result = categoryReducer(initialState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toHaveProperty('categories');

    const { categories } = result;

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(categories).toHaveLength(initialState.categories.length - 1);

    const deletedCat = categories.find((cat) => cat.id === action.payload.id);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(deletedCat).toBeUndefined();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'DELETE_CATEGORY',
    };

    const result = categoryReducer(initialState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialState);
  });
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Update category', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should update category in categories on provided id', () => {
    const action = {
      type: 'UPDATE_CATEGORY',
      payload: {
        updatedCategory: {
          id: '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d',
          name: 'Test cat',
        },
      },
    };

    const result = categoryReducer(initialState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toHaveProperty('categories');

    const { categories } = result;
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(categories).toHaveLength(4);

    const updatedCategory = categories.find(
      (cat) => cat.id === action.payload.updatedCategory.id,
    );

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(updatedCategory).not.toBeUndefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(updatedCategory).toHaveProperty('name', 'Test cat');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(updatedCategory).toHaveProperty('colorIndicator', '#38C9FF');
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'UPDATE_CATEGORY',
    };

    const result = categoryReducer(initialState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialState);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on invalid id', () => {
    const action = {
      type: 'UPDATE_CATEGORY',
      payload: {
        updatedCategory: {
          id: '6e8-3c57-4ee5-96c1-cc8d6e37d04d',
          name: 'Test cat',
        },
      },
    };

    const result = categoryReducer(initialState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialState);
  });
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Select category', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should update current selected category with selected category', () => {
    const action = {
      type: 'SELECT_CATEGORY',
      payload: {
        selectedCategory: {
          id: '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d',
          name: 'Homework',
          colorIndicator: '#38C9FF',
        },
      },
    };

    const result = categoryReducer(initialState, action);
    const { currentSelectedCategory } = result;
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(currentSelectedCategory).toHaveProperty(
      'id',
      '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d',
    );
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'SELECT_CATEGORY',
    };

    const result = categoryReducer(initialState, action);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialState);
  });
});
