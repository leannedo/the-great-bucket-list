// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./index.scss";

const Layout = ({ children }) => <div>{children}</div>;

Layout.propTypes = {
  /** component's children props */
  children: PropTypes.node,
};

export default Layout;
