export interface ICategory {
  id?: string;
  name: string;
  colorIndicator: string;
}

export interface ICategoryState {
  categories: ICategory[];
  currentSelectedCategory: ICategory;
}

export interface ICategoryReducer {
  categories: ICategory[];
  currentSelectedCategory: ICategory;
  addCategory: (addedCategory: ICategory) => void;
  deleteCategory: (id: string) => void;
  updateCategory: (updatedCategory: ICategory) => void;
  selectCategory: (selectedCategory: ICategory) => void;
}

export interface IUseCategoryEditing {
  inputChangeHandler: (value: string, input: string) => void;
  submitHandler: () => void;
  showModalHandler: () => void;
  modalVisibility: boolean;
  categoryProp: unknown;
  colorProp: unknown;
  formIsValid: boolean;
  setColor: (colorCode: string) => void;
}

export type ICategoryAction =
  | {
      type: CategoryActions.ADD_CATEGORY;
      payload: { addedCategory: ICategory };
    }
  | {
      type: CategoryActions.DELETE_CATEGORY;
      payload: { id: string };
    }
  | {
      type: CategoryActions.UPDATE_CATEGORY;
      payload: { updatedCategory: ICategory };
    }
  | {
      type: CategoryActions.SELECT_CATEGORY;
      payload: { selectedCategory: ICategory };
    };

export enum CategoryActions {
  ADD_CATEGORY = 'ADD_CATEGORY',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
  UPDATE_CATEGORY = 'UPDATE_CATEGORY',
  SELECT_CATEGORY = 'SELECT_CATEGORY',
}
