// Hooks
import categoryReducer from '../hooks/categoryReducer';

// Data
import categoryData from '../contexts/data';

const initialState = {
  categories: categoryData,
  currentSelectedCategory: {},
};

describe('Add category', () => {
  test(
    'it should add addedCategory from ' +
      '' +
      '' +
      'action payload to categories',
    () => {
      const action = {
        type: 'ADD_CATEGORY',
        payload: {
          addedCategory: { name: 'Test cat', colorIndicator: '#000' },
        },
      };

      const result = categoryReducer(initialState, action);

      expect(result).toHaveProperty('categories');

      const { categories } = result;

      expect(categories).toHaveLength(initialState.categories.length + 1);

      const newAddedCat = categories[categories.length - 1];

      expect(newAddedCat).toHaveProperty('name', 'Test cat');
      expect(newAddedCat).toHaveProperty('colorIndicator', '#000');
      expect(newAddedCat).toHaveProperty('id');
    },
  );

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'ADD_CATEGORY',
    };

    const result = categoryReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});

describe('Delete category', () => {
  test('it should delete category from categories on provided id', () => {
    const action = {
      type: 'DELETE_CATEGORY',
      payload: { id: '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d' },
    };

    const result = categoryReducer(initialState, action);

    expect(result).toHaveProperty('categories');

    const { categories } = result;

    expect(categories).toHaveLength(initialState.categories.length - 1);

    const deletedCat = categories.find((cat) => cat.id === action.payload.id);
    expect(deletedCat).toBeUndefined();
  });

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'DELETE_CATEGORY',
    };

    const result = categoryReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});

describe('Update category', () => {
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

    expect(result).toHaveProperty('categories');

    const { categories } = result;
    expect(categories).toHaveLength(4);

    const updatedCategory = categories.find(
      (cat) => cat.id === action.payload.updatedCategory.id,
    );

    expect(updatedCategory).not.toBeUndefined();
    expect(updatedCategory).toHaveProperty('name', 'Test cat');
    expect(updatedCategory).toHaveProperty('colorIndicator', '#38C9FF');
  });

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'UPDATE_CATEGORY',
    };

    const result = categoryReducer(initialState, action);

    expect(result).toEqual(initialState);
  });

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

    expect(result).toEqual(initialState);
  });
});

describe('Select category', () => {
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
    expect(currentSelectedCategory).toHaveProperty(
      'id',
      '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d',
    );
  });

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'SELECT_CATEGORY',
    };

    const result = categoryReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});
