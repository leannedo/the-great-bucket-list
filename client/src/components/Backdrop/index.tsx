// Libraries
import React from 'react';

// Styling
import './Backdrop.scss';

interface IBackdropProps {
  className?: string;
  closeModalHandler?: () => void;
}

const Backdrop = ({
  className,
  closeModalHandler = () => undefined,
}: IBackdropProps): JSX.Element => (
  <div onClick={closeModalHandler} className={`td-backdrop ${className}`} />
);

export default Backdrop;
