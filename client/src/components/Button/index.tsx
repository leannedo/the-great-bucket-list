// Libraries
import React from 'react';

// Styling
import './Button.scss';

interface IButtonProps {
  className?: string;
  block?: boolean;
  type: string;
  onClick: () => void;
  children: string | React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  className,
  block,
  type = 'primary',
  onClick = () => undefined,
  children,
  disabled,
}: IButtonProps): JSX.Element => (
  <button
    className={`td-btn ${className} btn-${type} ${block ? 'btn-block' : ''}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
