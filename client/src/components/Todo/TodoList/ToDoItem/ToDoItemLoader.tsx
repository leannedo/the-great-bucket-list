// Libraries
import React from 'react';

// Components
import ContentLoader from 'react-content-loader';

interface IToDoItemLoaderProps {
  width?: string | number;
  height?: string | number;
}

const ToDoItemLoader = ({
  width = 768,
  height = 25,
}: IToDoItemLoaderProps): JSX.Element => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox="0 0 768 23"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ marginBottom: '20px' }}
  >
    <circle cx="10" cy="10" r="10" />
    <rect x="34" y="0" rx="0" ry="0" width="20" height="20" />
    <rect x="79" y="1" rx="0" ry="0" width="90%" height="19" />
  </ContentLoader>
);

export default ToDoItemLoader;
