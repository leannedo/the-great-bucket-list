import { FormControls } from '../../hooks/useForm';

export interface ICategory {
  id?: string;
  name: string;
  colorIndicator: string;
}

export interface ICategoryState {
  categories: ICategory[];
  currentSelectedCategory: ICategory;
}

export interface ICategoryReducer extends ICategoryState {
  addCategory: (addedCategory: ICategory) => void;
  deleteCategory: (id: string) => void;
  updateCategory: (updatedCategory: ICategory) => void;
  selectCategory: (selectedCategory: ICategory) => void;
}

export type ICategoryAction =
  | {
      type: CategoryActions.SET_CATEGORIES;
      payload: ICategory[];
    }
  | {
      type: CategoryActions.ADD_CATEGORY;
      payload: ICategory;
    }
  | {
      type: CategoryActions.DELETE_CATEGORY;
      payload: string;
    }
  | {
      type: CategoryActions.UPDATE_CATEGORY;
      payload: ICategory;
    }
  | {
      type: CategoryActions.SELECT_CATEGORY;
      payload: ICategory;
    };

export enum CategoryActions {
  SET_CATEGORIES = 'SET_CATEGORIES',
  ADD_CATEGORY = 'ADD_CATEGORY',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
  UPDATE_CATEGORY = 'UPDATE_CATEGORY',
  SELECT_CATEGORY = 'SELECT_CATEGORY',
}

export interface IUseCategoryEditing {
  form: FormControls;
  isFormValid: boolean;
  onDefaultColorBlockClick: (colorCode: string) => void;
  inputChangeHandler: (value: string, input: string) => void;
  submitHandler: () => void;
  showConfirmModal: () => void;
  modalVisibility: boolean;
}
