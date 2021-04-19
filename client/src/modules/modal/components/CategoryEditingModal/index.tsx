// Libraries
import React from 'react';

// Components
import Modal from '../../../../components/Modal';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

// Styling
import './CategoryEditingModal.scss';

// Hooks
import { useCategoryEditing } from '../../../category/hooks/useCategoryEditing';

// Types
import { ModalKeys } from '../../types';

// Data
import { DISPLAYED_COLOR_BLOCKS } from '../../../category/context/data';

interface ICategoryEditingModalProps {
  className?: string;
}

const CategoryEditingModal = ({
  className,
}: ICategoryEditingModalProps): JSX.Element => {
  const {
    form,
    isFormValid,
    onDefaultColorBlockClick,
    inputChangeHandler,
    submitHandler,
    showConfirmModal,
    modalVisibility,
  } = useCategoryEditing();

  const { name, color } = form;

  const renderDefaultColorBlocks = () =>
    DISPLAYED_COLOR_BLOCKS.map((el) => {
      return (
        <div
          onClick={() => onDefaultColorBlockClick(el)}
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
      {name && (
        <Input
          isValid={!name.touched || name.valid}
          label="category name"
          value={name.value}
          name="name"
          onChange={(value) => inputChangeHandler(value, name.inputName)}
        />
      )}
      {color && (
        <div className="td-color-display-wrapper">
          <div className="td-color-display-label">{color.label}</div>
          <div
            key={color.value}
            className="td-color-display"
            style={{ backgroundColor: `#${color.value}` }}
          />
        </div>
      )}
      <div className="td-color-selector">
        <div className="td-color-block-wrapper">
          {renderDefaultColorBlocks()}
        </div>
        <div className="td-input-wrapper-modal-context">
          <Input
            isValid={!color.touched || color.valid}
            name="colorIndicator"
            onChange={(value) => inputChangeHandler(value, color.inputName)}
            value={color.value}
          />
        </div>
      </div>
      <div className="td-action-icon-wrapper">
        <i onClick={showConfirmModal} className="fas fa-trash td-todo-icon" />
        <Button type="icon" onClick={submitHandler} disabled={!isFormValid}>
          <i className="fas fa-check" />
        </Button>
        <div />
      </div>
    </Modal>
  );
};

export default CategoryEditingModal;
