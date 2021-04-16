// Libraries
import React, { CSSProperties } from 'react';

// Styling
import './ProgressBar.scss';
import { useTodo } from '../../modules/todo/contexts/TodoContext';

interface IProgressBarProps {
  className?: string;
}

const ProgressBar = ({ className }: IProgressBarProps): JSX.Element => {
  const { completedPercent } = useTodo();
  const style: CSSProperties = { position: 'absolute', right: '20px' };

  return (
    <div className={`td-progress-bar-wrapper ${className}`}>
      <div
        style={{ width: `${completedPercent.toString()}%` }}
        className="td-progress-fill"
      />
      <div
        className="td-progress-text-wrapper"
        style={Number(completedPercent) >= 70 ? style : {}}
      >
        <div className="td-progress-text">{`${completedPercent.toString()}% Completed`}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
