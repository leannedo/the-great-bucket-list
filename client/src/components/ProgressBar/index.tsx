// Libraries
import React, { CSSProperties } from 'react';

// Styling
import './ProgressBar.scss';

interface IProgressBarProps {
  className?: string;
  progress: number | string;
}

const ProgressBar = ({
  className,
  progress = 0,
}: IProgressBarProps): JSX.Element => {
  const style: CSSProperties = { position: 'absolute', right: '20px' };
  return (
    <div className={`td-progress-bar-wrapper ${className}`}>
      <div
        style={{ width: `${progress.toString()}%` }}
        className="td-progress-fill"
      />
      <div
        className="td-progress-text-wrapper"
        style={Number(progress) >= 70 ? style : {}}
      >
        <div className="td-progress-text">{`${progress.toString()}% Completed`}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
