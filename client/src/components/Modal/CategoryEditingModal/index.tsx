// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Modal from '../index';
import Input from '../../Input/index';
import Button from '../../Button';
import Icon from '../../Icon';

// Styling
import './CategoryEditingModal.scss';

// Hooks
import { useCategoryEditing } from '../../../modules/category/hooks/useCategoryEditing';

const CategoryEditingModal = ({ className }) => {
  const {
    inputChangeHandler,
    submitHandler,
    showModalHandler,
    renderDefaultColorBlocks,
    modalKey,
    modalVisibility,
    categoryProp,
    colorProp,
    formIsValid,
  } = useCategoryEditing();

  return (
    <Modal
      modalKey={modalKey}
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

CategoryEditingModal.defaultProps = {
  className: '',
  onChange: () => {},
};

CategoryEditingModal.propTypes = {
  /** element's class name */
  className: PropTypes.string,
};

export default CategoryEditingModal;
