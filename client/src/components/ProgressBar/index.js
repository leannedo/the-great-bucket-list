// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./ProgressBar.scss";

const ProgressBar = ({ className, progress }) => {
  const style = { position: "absolute", right: "20px" };
  return (
    <div className={`td-progress-bar-wrapper ${className}`}>
      <div
        style={{ width: `${progress.toString()}%` }}
        className="td-progress-fill"
      />
      <div
        className="td-progress-text-wrapper"
        style={progress >= 70 ? style : {}}
      >
        <div className="td-progress-text">{`${progress.toString()}% Completed`}</div>
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  className: "",
  progress: 0,
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  progress: PropTypes.number,
};

export default ProgressBar;
