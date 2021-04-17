// Libraries
import React from 'react';

// Styling
import './Input.scss';

interface IInputProps {
  label?: string;
  className?: string;
  placeholder?: string;
  name: string;
  onChange?: (value: string) => void;
  value?: string;
  onKeyUpHandler?: (value) => void;
  isValid?: boolean;
}

const Input = ({
  label,
  className,
  placeholder,
  name,
  onChange = () => undefined,
  value,
  onKeyUpHandler,
  isValid,
}: IInputProps): JSX.Element => (
  <div className={className}>
    {label && (
      <label className="td-label" htmlFor={name}>
        {label.toUpperCase()}
      </label>
    )}
    <input
      value={value}
      className={`td-input ${isValid === false ? 'invalid' : ''}`}
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={onKeyUpHandler}
    />
  </div>
);

export default Input;
