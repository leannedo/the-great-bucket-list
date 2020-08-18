// Libraries
import React from "react";

// Styling
import "./Dashboard.scss";

// Components
import PageTitle from "../../components/PageTitle";
import CategoryList from "../../components/CategoryList";
import ProgressBar from "../../components/ProgressBar";
import Input from "../../components/Input";
import ToDoList from "../../components/ToDoList";
import FilterBar from "../../components/FilterBar";

const Dashboard = () => (
  <div className="td-dashboard">
    <div className="td-header-wrapper">
      <div className="td-header">
        <PageTitle title="To-do list" className="td-page-title" />
        <CategoryList className="td-category-list" />
        <ProgressBar className="td-progress-bar" />
      </div>
    </div>
    <div className="td-body">
      <Input className="td-input-wrapper" />
      <ToDoList className="td-todo-list" />
    </div>
    <div className="td-bottom-bar">
      <FilterBar className="td-filter-bar" />
    </div>
  </div>
);

export default Dashboard;
