// Libraries
import React from 'react';

// Styling
import './PageTitle.scss';

interface IPageTitleProps {
  title: string;
  className?: string;
}

const PageTitle = ({ title, className }: IPageTitleProps): JSX.Element => (
  <div className={className}>
    <h1>{title}</h1>
  </div>
);

export default PageTitle;
