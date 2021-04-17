// Libraries
import React, { useEffect, useState } from 'react';

// Context
import { useModal } from '../../modal/context/ModalContext';
import { useCategory } from '../context/CategoryContext';

// Hooks
import { useInput } from '../../input/hooks/useInput';

import { formatColorCode } from '../helper';

// Types
import { ModalKeys } from '../../modal/types';
import { ICategory, IUseCategoryEditing } from '../types';
import { DISPLAYED_COLOR_BLOCKS } from '../context/data';

export const useCategoryEditing = (): IUseCategoryEditing => {
  const [colorProp, setColor] = useInput({
    validationRules: { isRequired: true, isHexCode: true },
  });
  const [categoryProp, setCategory] = useInput({
    validationRules: { isRequired: true },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    categoryEditingModal,
    closeModal,
    showModal,
    closeAllModals,
  } = useModal();

  const { isVisible: modalVisibility, props } = categoryEditingModal;
  const currentCategory = (props?.category || {}) as Partial<ICategory>;

  const { id, name = '', colorIndicator } = currentCategory;

  const { addCategory, deleteCategory, updateCategory } = useCategory();

  const setDisplayedColor = () => {
    const colorCode = colorIndicator || DISPLAYED_COLOR_BLOCKS[0];
    setColor(formatColorCode(colorCode));
  };

  const inputChangeHandler = (value, input) => {
    if (!input) {
      return;
    }
    input.onChange(value);
    input.validate(value);
  };

  const showModalHandler = () => {
    showModal(ModalKeys.CONFIRM_MODAL, {
      okText: 'Delete this category?',
      cancelText: 'Cancel',
      okHandler: () => {
        deleteCategory(id);
        closeAllModals();
      },
    });
  };

  const submitHandler = () => {
    if (id) {
      updateCategory({
        id,
        name: categoryProp.value,
        colorIndicator: `#${colorProp.value}`,
      });
    } else {
      addCategory({
        name: categoryProp.value,
        colorIndicator: `#${colorProp.value}`,
      });
    }

    closeModal(ModalKeys.CATEGORY_EDITING_MODAL);
    setColor('');
    setCategory('');
  };

  const validateForm = () => {
    setFormIsValid(colorProp.isValid && categoryProp.isValid);
  };

  useEffect(() => setCategory(name), [currentCategory]);
  useEffect(() => setDisplayedColor(), [currentCategory]);

  useEffect(() => validateForm(), [categoryProp, colorProp]);

  return {
    inputChangeHandler,
    submitHandler,
    showModalHandler,
    setColor,
    modalVisibility,
    categoryProp,
    colorProp,
    formIsValid,
  };
};
