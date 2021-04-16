// Libraries
import React from 'react';

// Styling
import './Dashboard.scss';

// Components
import PageTitle from '../../components/PageTitle';
import CategoryList from '../../components/CategoryList';
import ProgressBar from '../../components/ProgressBar';
import ToDoList from '../../components/Todo/TodoList';
import TodoInput from '../../components/Todo/TodoInput/TodoInput';
import FilterBar from '../../components/FilterBar';
import CategorySelectionModal from '../../components/Modal/CategorySelectionModal';
import CategoryEditingModal from '../../components/Modal/CategoryEditingModal';
import ConfirmModal from '../../components/Modal/ConfirmModal';

// Hooks
import { useTodo } from '../../modules/todo/contexts/TodoContext';

const Dashboard = () => {
  const { completedPercent } = useTodo();

  return (
    <div className="td-dashboard">
      <div className="td-header-wrapper">
        <div className="td-header">
          <PageTitle title="The Great Bucket List" className="td-page-title" />
          <CategoryList className="td-category-list-wrapper" />
          <ProgressBar
            className="td-progress-bar"
            progress={completedPercent}
          />
        </div>
      </div>
      <div className="td-body">
        <TodoInput />
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
