// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styling
import './Input.scss';

const Input = ({
  label,
  className,
  placeholder,
  name,
  onChange,
  value,
  onKeyUpHandler,
  isValid,
}) => (
  <div className={className}>
    {label && (
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'onKeyUpHandler' does not exist on type '... Remove this comment to see the full error message
      <label className="td-label" htmlFor={name}>
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'isValid' does not exist on type 'Props'. */}
        {label.toUpperCase()}
      </label>
    )}
    <input
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      value={value}
      className={`td-input ${isValid === false ? 'invalid' : ''}`}
      id={name}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={onKeyUpHandler}
    />
  </div>
);

Input.defaultProps = {
  className: '',
  // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
  placeholder: '',
  onChange: () => {},
  name: '',
  label: '',
};

Input.propTypes = {
  /** element's class name */
  className: PropTypes.string,

  /** input's name handler */
  name: PropTypes.string,

  /** input's label */
  label: PropTypes.string,

  /** input's placeholder */
  placeholder: PropTypes.string,

  /** onChange handler */
  onChange: PropTypes.func,

  /** input's value */
  value: PropTypes.string,
};

export default Input;
