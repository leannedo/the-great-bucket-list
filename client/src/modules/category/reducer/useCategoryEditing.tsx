// Libraries
import React, { useEffect, useState } from 'react';

// Context
import { useModal } from '../../modal/context/ModalContext';
import { useCategory } from '../context/CategoryContext';

// Hooks
import { useInput } from '../../input/hooks/useInput';

// Types
import { ModalKeys } from '../../modal/types';

export const useCategoryEditing = () => {
  const {
    categoryEditingModal,
    closeModal,
    showModal,
    closeAllModals,
  } = useModal();

  const {
    isVisible: modalVisibility,
    props: modalProps,
  } = categoryEditingModal;

  const currentCategory = modalProps?.category;

  const {
    defaultCategories,
    addCategory,
    deleteCategory,
    updateCategory,
  } = useCategory();

  const formatColorCode = (hexCode) => hexCode.replace('#', '');

  const getDefaultColorDisplay = () => {
    const colorCode = currentCategory?.colorIndicator
      ? currentCategory.colorIndicator
      : defaultCategories[0].colorIndicator;

    return colorCode ? formatColorCode(colorCode) : '';
  };

  const getDefaultCategoryName = () =>
    currentCategory ? currentCategory.name : '';

  const [colorProp, setColor] = useInput({
    validationRules: { isRequired: true, isHexCode: true },
  });
  const [categoryProp, setCategory] = useInput({
    validationRules: { isRequired: true },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const renderDefaultColorBlocks = () =>
    defaultCategories.map((el, id) => {
      const colorCode = el.colorIndicator
        ? formatColorCode(el.colorIndicator)
        : '';
      return (
        <div
          onClick={() => setColor(colorCode)}
          key={id}
          style={{
            backgroundColor: `${el.colorIndicator}`,
          }}
          className="td-color-block"
        />
      );
    });

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
        deleteCurrentCategory();
        closeAllModals();
      },
    });
  };

  const submitHandler = () => {
    if (currentCategory && currentCategory.id) {
      updateCategory({
        id: currentCategory.id,
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

  const deleteCurrentCategory = () => {
    const currentCategoryId = currentCategory.id;
    deleteCategory(currentCategoryId);
  };

  useEffect(() => setColor(getDefaultColorDisplay()), [currentCategory]);
  useEffect(() => setCategory(getDefaultCategoryName()), [currentCategory]);

  useEffect(() => validateForm(), [categoryProp, colorProp]);

  return {
    inputChangeHandler,
    submitHandler,
    showModalHandler,
    renderDefaultColorBlocks,
    modalVisibility,
    categoryProp,
    colorProp,
    formIsValid,
  };
};
