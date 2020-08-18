import React from "react";
import Logo from "./../../assets/logo.svg";
import "./PageTitle.scss";

const PageTitle = ({ title }) => {
  return (
    <div className="td-page-title">
      <img src={Logo} />
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;
