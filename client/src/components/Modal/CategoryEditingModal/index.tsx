// Libraries
import React, { useEffect } from 'react';

// Components
import Modal from '../index';
import Input from '../../Input/index';
import Button from '../../Button';

// Styling
import './CategoryEditingModal.scss';

// Hooks
import { useCategoryEditing } from '../../../modules/category/hooks/useCategoryEditing';

import { formatColorCode } from '../../../modules/category/helper';

// Types

import { ModalKeys } from '../../../modules/modal/types';
// Data
import { DISPLAYED_COLOR_BLOCKS } from '../../../modules/category/context/data';

interface ICategoryEditingModalProps {
  className?: string;
}

const CategoryEditingModal = ({
  className,
}: ICategoryEditingModalProps): JSX.Element => {
  const {
    inputChangeHandler,
    submitHandler,
    showModalHandler,
    setColor,
    modalVisibility,
    categoryProp,
    colorProp,
    formIsValid,
  } = useCategoryEditing();

  const renderDefaultColorBlocks = () =>
    DISPLAYED_COLOR_BLOCKS.map((el) => {
      return (
        <div
          onClick={() => setColor(formatColorCode(el))}
          key={el}
          style={{
            backgroundColor: el,
          }}
          className="td-color-block"
        />
      );
    });

  return (
    <Modal
      modalKey={ModalKeys.CATEGORY_EDITING_MODAL}
      visible={modalVisibility}
      className={`td-category-creation-modal ${className}`}
    >
      <Input
        isValid={categoryProp.isValid}
        label="category name"
        value={categoryProp.value}
        name="name"
        onChange={(value) => inputChangeHandler(value, categoryProp)}
      />
      <div className="td-color-display-wrapper">
        <div className="td-color-display-label">CATEGORY COLOR</div>
        <div
          className="td-color-display"
          style={{ backgroundColor: `#${colorProp.value}` }}
        />
      </div>
      <div className="td-color-selector">
        <div className="td-color-block-wrapper">
          {renderDefaultColorBlocks()}
        </div>
        <div className="td-input-wrapper-modal-context">
          <Input
            isValid={colorProp.isValid}
            name="colorIndicator"
            onChange={(value) => inputChangeHandler(value, colorProp)}
            value={colorProp.value}
          />
        </div>
      </div>
      <div className="td-action-icon-wrapper">
        <i onClick={showModalHandler} className="fas fa-trash td-todo-icon" />
        <Button type="icon" onClick={submitHandler} disabled={!formIsValid}>
          <i className="fas fa-check" />
        </Button>
        <div />
      </div>
    </Modal>
  );
};

export default CategoryEditingModal;
