// Libraries
import React from "react";

// Styling
import "./Dashboard.scss";

// Components
import PageTitle from "../../components/PageTitle";
import CategoryList from "../../components/CategoryList";
import ProgressBar from "../../components/ProgressBar";
import Input from "../../components/Input";
import InputCheckbox from "../../components/Input/InputCheckbox";
import ToDoList from "../../components/ToDoList";
import FilterBar from "../../components/FilterBar";
import CategorySelectionModal from "../../components/Modal/CategorySelectionModal";
import CategoryEditingModal from "../../components/Modal/CategoryEditingModal";
import ConfirmModal from "../../components/Modal/ConfirmModal";

const Dashboard = () => {
  return (
    <div className="td-dashboard">
      <div className="td-header-wrapper">
        <div className="td-header">
          <PageTitle title="To-do list" className="td-page-title" />
          <CategoryList className="td-category-list-wrapper" />
          <ProgressBar className="td-progress-bar" progress={40} />
        </div>
      </div>
      <div className="td-body">
        <div className="input-container">
          <InputCheckbox />
          <Input
            className="td-input-wrapper"
            placeholder="What's needed to be done?"
            name="text"
          />
        </div>
        <ToDoList className="td-todo-list" />
      </div>
      <div className="td-bottom-bar">
        <FilterBar className="td-filter-bar" />
      </div>
      <div className="modal-container">
        <CategorySelectionModal />
        <CategoryEditingModal />
        <ConfirmModal />
      </div>
    </div>
  );
};

export default Dashboard;
