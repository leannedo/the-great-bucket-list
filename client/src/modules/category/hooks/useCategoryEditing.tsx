// Libraries
import { useEffect } from 'react';

// Context
import { useModal } from '../../modal/context/ModalContext';
import { useCategory } from '../context/CategoryContext';

// Data
import { DISPLAYED_COLOR_BLOCKS } from '../context/data';

// Hooks
import useForm, { FormControls } from '../../../hooks/useForm';

import { formatColorCode } from '../helper';

// Types
import { ModalKeys } from '../../modal/types';
import { ICategory, IUseCategoryEditing } from '../types';

const categoryFormControls: FormControls = {
  name: {
    inputName: 'name',
    label: 'category name',
    value: '',
    valid: false,
    touched: false,
    validationRules: {
      isRequired: true,
    },
  },
  color: {
    inputName: 'color',
    label: 'category color',
    value: formatColorCode(DISPLAYED_COLOR_BLOCKS[0]),
    valid: true,
    touched: false,
    validationRules: {
      isRequired: true,
      isHexCode: true,
    },
  },
};

export const useCategoryEditing = (): IUseCategoryEditing => {
  const {
    form,
    setForm,
    isFormValid,
    inputChangeHandler,
    onFormSubmit,
    clearForm,
  } = useForm(categoryFormControls);

  const {
    categoryEditingModal,
    closeModal,
    showModal,
    closeAllModals,
  } = useModal();

  const { addCategory, deleteCategory, updateCategory } = useCategory();

  /* -------------- modal handler -------------- */

  const { isVisible: modalVisibility, props } = categoryEditingModal;

  const showConfirmModal = () => {
    showModal(ModalKeys.CONFIRM_MODAL, {
      okText: 'Delete this category?',
      cancelText: 'Cancel',
      okHandler: () => {
        deleteCategory(currentCategory.id);
        closeAllModals();
      },
    });
  };

  /* -------------- current category handler -------------- */

  const currentCategory = (props?.category || {}) as Partial<ICategory>;
  useEffect(() => {
    if (currentCategory.id) {
      currentCategoryChangeHandler(currentCategory);
    } else {
      clearForm();
    }
  }, [currentCategory.id]);

  /* -------------- form handler -------------- */

  const onDefaultColorBlockClick = (colorCode: string) => {
    setForm({
      ...form,
      color: {
        ...form.color,
        value: formatColorCode(colorCode),
      },
    });
  };

  const currentCategoryChangeHandler = (currentCategory) => {
    const {
      name = '',
      colorIndicator = DISPLAYED_COLOR_BLOCKS[0],
    } = currentCategory;

    setForm({
      ...form,
      name: {
        ...form.name,
        value: name,
        valid: true,
      },
      color: {
        ...form.color,
        value: formatColorCode(colorIndicator),
        valid: true,
      },
    });
  };

  const submitHandler = () => {
    const formValues = onFormSubmit();

    if (!formValues) {
      return;
    }

    const category = {
      name: formValues.name,
      colorIndicator: `#${formValues.color}`,
    };

    if (currentCategory.id) {
      updateCategory({ ...category, id: currentCategory.id });
    } else {
      addCategory(category);
    }

    closeModal(ModalKeys.CATEGORY_EDITING_MODAL);
  };

  return {
    form,
    isFormValid,
    onDefaultColorBlockClick,
    inputChangeHandler,
    submitHandler,
    showConfirmModal,
    modalVisibility,
  };
};
