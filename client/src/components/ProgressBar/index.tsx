// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styling
import './ProgressBar.scss';

const ProgressBar = ({ className, progress }) => {
  const style = { position: 'absolute', right: '20px' };
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={`td-progress-bar-wrapper ${className}`}>
      <div
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        style={{ width: `${progress.toString()}%` }}
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        className="td-progress-fill"
      />
      <div
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        className="td-progress-text-wrapper"
        style={Number(progress) >= 70 ? style : {}}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ position: string; right: string; } | {}' i... Remove this comment to see the full error message
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="td-progress-text">{`${progress.toString()}% Completed`}</div>
      {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  className: '',
  progress: 0,
};

ProgressBar.propTypes = {
  /** component's classname */
  className: PropTypes.string,

  /** percent of completion */
  progress: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ProgressBar;
