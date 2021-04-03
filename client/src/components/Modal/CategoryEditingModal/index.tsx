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

//  ts-migrate(6142) FIXME: Module '../../../modules/category/hooks/useCategor... Remove this comment to see the full error message
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
      //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      modalKey={modalKey}
      visible={modalVisibility}
      className={`td-category-creation-modal ${className}`}
    >
      <Input
        //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        isValid={categoryProp.isValid}
        label="category name"
        value={categoryProp.value}
        name="name"
        //  ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
        onChange={(value) => inputChangeHandler(value, categoryProp)}
      />
      {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-color-display-wrapper">
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="td-color-display-label">CATEGORY COLOR</div>
        <div
          //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          className="td-color-display"
          style={{ backgroundColor: `#${colorProp.value}` }}
        />
      </div>
      {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-color-selector">
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="td-color-block-wrapper">
          {renderDefaultColorBlocks()}
        </div>
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="td-input-wrapper-modal-context">
          <Input
            //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            isValid={colorProp.isValid}
            name="colorIndicator"
            //  ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
            onChange={(value) => inputChangeHandler(value, colorProp)}
            value={colorProp.value}
          />
        </div>
      </div>
      {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-action-icon-wrapper">
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <i onClick={showModalHandler} className="fas fa-trash td-todo-icon" />
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button type="icon" onClick={submitHandler} disabled={!formIsValid}>
          {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <i className="fas fa-check" />
        </Button>
        <div />
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
