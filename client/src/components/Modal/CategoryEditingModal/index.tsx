// Libraries
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../index' was resolved to '/Users/ngocdo/s... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// Components
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Input/index' was resolved to '/Users... Remove this comment to see the full error message
import Modal from '../index';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Button' was resolved to '/Users/ngoc... Remove this comment to see the full error message
import Input from '../../Input/index';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon' was resolved to '/Users/ngocdo... Remove this comment to see the full error message
import Button from '../../Button';
import Icon from '../../Icon';

// Styling
import './CategoryEditingModal.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../modules/category/hooks/useCategor... Remove this comment to see the full error message
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
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      modalKey={modalKey}
      visible={modalVisibility}
      className={`td-category-creation-modal ${className}`}
    >
      <Input
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        isValid={categoryProp.isValid}
        label="category name"
        value={categoryProp.value}
        name="name"
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
        onChange={(value) => inputChangeHandler(value, categoryProp)}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-color-display-wrapper">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="td-color-display-label">CATEGORY COLOR</div>
        <div
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          className="td-color-display"
          style={{ backgroundColor: `#${colorProp.value}` }}
        />
      </div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-color-selector">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="td-color-block-wrapper">
          {renderDefaultColorBlocks()}
        </div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="td-input-wrapper-modal-context">
          <Input
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            isValid={colorProp.isValid}
            name="colorIndicator"
            // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
            onChange={(value) => inputChangeHandler(value, colorProp)}
            value={colorProp.value}
          />
        </div>
      </div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-action-icon-wrapper">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <i onClick={showModalHandler} className="fas fa-trash td-todo-icon" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button type="icon" onClick={submitHandler} disabled={!formIsValid}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <i className="fas fa-check" />
        </Button>
        <div />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
