// Hooks
import { categoryReducer } from '../reducer/useCategoryReducer';

// Data
import { defaultCategories } from '../context/data';
import { CategoryActions, ICategoryAction, ICategoryState } from '../types';

const initialState: ICategoryState = {
  categories: defaultCategories,
  currentSelectedCategory: { id: '', name: '', colorIndicator: '' },
};

describe('Add category', () => {
  test('it should add addedCategory from action payload to categories', () => {
    const action: ICategoryAction = {
      type: CategoryActions.ADD_CATEGORY,
      payload: { name: 'Test cat', colorIndicator: '#000' },
    };

    const result = categoryReducer(initialState, action);

    expect(result).toHaveProperty('categories');

    const { categories } = result;

    expect(categories).toHaveLength(initialState.categories.length + 1);

    const newAddedCat = categories[categories.length - 1];

    expect(newAddedCat).toHaveProperty('name', 'Test cat');
    expect(newAddedCat).toHaveProperty('colorIndicator', '#000');
    expect(newAddedCat).toHaveProperty('id');
  });

  test('it does not alter state on error', () => {
    const action: ICategoryAction = {
      type: CategoryActions.ADD_CATEGORY,
      payload: undefined,
    };

    const result = categoryReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});

describe('Delete category', () => {
  test('it should delete category from categories on provided id', () => {
    const action: ICategoryAction = {
      type: CategoryActions.DELETE_CATEGORY,
      payload: '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d',
    };

    const result = categoryReducer(initialState, action);

    expect(result).toHaveProperty('categories');

    const { categories } = result;

    expect(categories).toHaveLength(initialState.categories.length - 1);

    const deletedCat = categories.find((cat) => cat.id === action.payload);
    expect(deletedCat).toBeUndefined();
  });

  test('it does not alter state on error', () => {
    const action: ICategoryAction = {
      type: CategoryActions.DELETE_CATEGORY,
      payload: '',
    };

    const result = categoryReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});

describe('Update category', () => {
  test('it should update category in categories on provided id', () => {
    const action: ICategoryAction = {
      type: CategoryActions.UPDATE_CATEGORY,
      payload: {
        id: '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d',
        name: 'Test cat',
        colorIndicator: '#38C9FF',
      },
    };

    const result = categoryReducer(initialState, action);

    expect(result).toHaveProperty('categories');

    const { categories } = result;
    expect(categories).toHaveLength(4);

    const updatedCategory = categories.find(
      (cat) => cat.id === action.payload.id,
    );

    expect(updatedCategory).not.toBeUndefined();
    expect(updatedCategory).toHaveProperty('name', 'Test cat');
    expect(updatedCategory).toHaveProperty('colorIndicator', '#38C9FF');
  });

  test('it does not alter state on error', () => {
    const action = {
      type: CategoryActions.UPDATE_CATEGORY,
      payload: undefined,
    };

    const result = categoryReducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  test('it does not alter state on invalid id', () => {
    const action: ICategoryAction = {
      type: CategoryActions.UPDATE_CATEGORY,
      payload: {
        id: '6e8-3c57-4ee5-96c1-cc8d6e37d04d',
        name: 'Test cat',
        colorIndicator: '#38C9FF',
      },
    };

    const result = categoryReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});

describe('Select category', () => {
  test('it should update current selected category with selected category', () => {
    const action: ICategoryAction = {
      type: CategoryActions.SELECT_CATEGORY,
      payload: {
        id: '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d',
        name: 'Homework',
        colorIndicator: '#38C9FF',
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
    const action: ICategoryAction = {
      type: CategoryActions.SELECT_CATEGORY,
      payload: undefined,
    };

    const result = categoryReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});
