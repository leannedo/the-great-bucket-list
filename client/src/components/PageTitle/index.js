// Libraries
import React from "react";
import PropTypes from "prop-types";

// Assets
import Logo from "./../../assets/logo.svg";

// Styling
import "./PageTitle.scss";

const PageTitle = ({ title, className = "" }) => {
  return (
    <div className={className}>
      <img src={Logo} />
      <h1>{title}</h1>
    </div>
  );
};

PageTitle.defaultProps = {
  title: "",
  className: "",
};

PageTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default PageTitle;
