// Libraries
import React, { useEffect, useState } from 'react';

// Context
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../modal/contexts/ModalContext' was res... Remove this comment to see the full error message
import { useModal } from '../../modal/contexts/ModalContext';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../contexts/CategoryContext' was resolved ... Remove this comment to see the full error message
import { useCategory } from '../contexts/CategoryContext';

// Hooks
import { useInput } from '../../input/hooks/useInput';

export const useCategoryEditing = () => {
  /** Get data from useModal context */
  const {
    categoryEditingModal,
    closeModal,
    showModal,
    confirmModal,
    closeAllModals,
  } = useModal();

  const {
    key: modalKey,
    isVisible: modalVisibility,
    props: modalProps,
  } = categoryEditingModal;

  const currentCategory = modalProps.category;

  /** Get data from useCategory context */
  const {
    defaultCategories,
    addCategory,
    deleteCategory,
    updateCategory,
  } = useCategory();

  /**
   * Helper functions for displaying default color
   * @param {string} hexCode - initial hex code to be formatted
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'hexCode' implicitly has an 'any' type.
   * @returns {string} return a hex code without #
   */
  const formatColorCode = (hexCode) => hexCode.replace('#', '');

  /**
   * Helpers function to get default color display by current category
   * @returns {string} default color display
   */
  const getDefaultColorDisplay = () => {
    const colorCode =
      currentCategory && currentCategory.colorIndicator
        ? currentCategory.colorIndicator
        : defaultCategories[0].colorIndicator;

    return colorCode ? formatColorCode(colorCode) : '';
  };

  /**
   * Helpers function to get default category name by current category
   * @returns {string} default category name
   */
  const getDefaultCategoryName = () =>
    currentCategory ? currentCategory.name : '';

  /** Establish state for inputs */
  const [colorProp, setColor] = useInput({
    validationRules: { isRequired: true, isHexCode: true },
  });
  const [categoryProp, setCategory] = useInput({
    validationRules: { isRequired: true },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  /**
   * Helper for rendering color blocks component by looping through defaultCategories and map each element to a div with formatted colorCode
   * @returns {React.Component} color blocks component
   */
  const renderDefaultColorBlocks = () =>
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'el' implicitly has an 'any' type.
    defaultCategories.map((el, id) => {
      // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
      const colorCode = el.colorIndicator
        ? formatColorCode(el.colorIndicator)
        : '';
      return (
        <div
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          onClick={() => setColor(colorCode)}
          key={id}
          style={{
            backgroundColor: `${el.colorIndicator}`,
          }}
          className="td-color-block"
        />
      // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
      );
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'input' implicitly has an 'any' type.
    });

  const inputChangeHandler = (value, input) => {
    if (!input) {
      return;
    }
    input.onChange(value);
    input.validate(value);
  };

  /**
   * Trigger showModal function in useModal and pass down key, props to show confirm modal on category deleting
   */
  const showModalHandler = () => {
    // stack modal
    showModal({
      key: confirmModal.key,
      props: {
        okText: 'Delete this category?',
        cancelText: 'Cancel',
        okHandler: () => {
          deleteCurrentCategory();
          closeAllModals();
        },
      },
    });
  };

  /**
   * Update category if it exists and add new one otherwise, then close modal and reset state
   */
  const submitHandler = () => {
    if (currentCategory && currentCategory.id) {
      updateCategory({
        id: currentCategory.id,
        name: categoryProp.value,
        colorIndicator: `#${colorProp.value}`,
      });
    } else {
      addCategory({
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'value' does not exist on type '((value: ... Remove this comment to see the full error message
        name: categoryProp.value,
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'value' does not exist on type '((value: ... Remove this comment to see the full error message
        colorIndicator: `#${colorProp.value}`,
      });
    }

    closeModal({ key: categoryEditingModal.key });
    setColor('');
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'value' does not exist on type '((value: ... Remove this comment to see the full error message
    setCategory('');
  };

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'value' does not exist on type '((value: ... Remove this comment to see the full error message
  /** return form as valid based on valid state of color code and category name */
  const validateForm = () => {
    // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
    setFormIsValid(colorProp.isValid && categoryProp.isValid);
  };

  /**
   * Delete selected category
   */
  const deleteCurrentCategory = () => {
    const currentCategoryId = currentCategory.id;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isValid' does not exist on type '((value... Remove this comment to see the full error message
    deleteCategory(currentCategoryId);
  };

  useEffect(() => setColor(getDefaultColorDisplay()), [currentCategory]);
  useEffect(() => setCategory(getDefaultCategoryName()), [currentCategory]);

  useEffect(() => validateForm(), [categoryProp, colorProp]);

  return {
    // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
    inputChangeHandler,
    submitHandler,
    showModalHandler,
    // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
    renderDefaultColorBlocks,
    modalKey,
    modalVisibility,
    categoryProp,
    colorProp,
    formIsValid,
  };
};
