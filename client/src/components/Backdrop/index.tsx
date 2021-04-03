// Libraries
import React from 'react';

// Styling
import './Backdrop.scss';

type Props = {
  className?: string;
  closeModalHandler?: (...args: any[]) => any;
};

const Backdrop = ({ className, closeModalHandler }: Props) => (
  <div onClick={closeModalHandler} className={`td-backdrop ${className}`} />
);

Backdrop.defaultProps = {
  className: '',
  closeModalHandler: () => {},
};

export default Backdrop;
