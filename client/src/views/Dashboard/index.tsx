// Libraries
import React from 'react';

// Styling
import './Dashboard.scss';

// Components
//  ts-migrate(6142) FIXME: Module '../../components/PageTitle' was resolved t... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../components/PageTitle' was resolved t... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../components/Todo/TodoList' was resolv... Remove this comment to see the full error message
import PageTitle from '../../components/PageTitle';
//  ts-migrate(6142) FIXME: Module '../../components/Todo/TodoInput/TodoInput'... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../components/CategoryList' was resolve... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../components/Modal/CategorySelectionMo... Remove this comment to see the full error message
import CategoryList from '../../components/CategoryList';
//  ts-migrate(6142) FIXME: Module '../../components/Modal/CategoryEditingModa... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../components/ProgressBar' was resolved... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../modules/modal/contexts/ModalContext'... Remove this comment to see the full error message
import ProgressBar from '../../components/ProgressBar';
//  ts-migrate(6142) FIXME: Module '../../modules/todo/contexts/TodoContext' w... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../components/Todo/TodoList' was resolv... Remove this comment to see the full error message
import ToDoList from '../../components/Todo/TodoList';
//  ts-migrate(7006) FIXME: Parameter 'category' implicitly has an 'any' type.
//  ts-migrate(6142) FIXME: Module '../../components/Todo/TodoInput/TodoInput'... Remove this comment to see the full error message
import TodoInput from '../../components/Todo/TodoInput/TodoInput';
//  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../components/FilterBar' was resolved t... Remove this comment to see the full error message
//  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
import FilterBar from '../../components/FilterBar';
//  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../components/Modal/CategorySelectionMo... Remove this comment to see the full error message
//  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
import CategorySelectionModal from '../../components/Modal/CategorySelectionModal';
//  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../components/Modal/CategoryEditingModa... Remove this comment to see the full error message
//  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
import CategoryEditingModal from '../../components/Modal/CategoryEditingModal';
//  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../components/Modal/ConfirmModal' was r... Remove this comment to see the full error message
//  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
import ConfirmModal from '../../components/Modal/ConfirmModal';

// Hooks
//  ts-migrate(6142) FIXME: Module '../../modules/modal/contexts/ModalContext'... Remove this comment to see the full error message
import { useModal } from '../../modules/modal/contexts/ModalContext';
//  ts-migrate(6142) FIXME: Module '../../modules/todo/contexts/TodoContext' w... Remove this comment to see the full error message
import { useTodo } from '../../modules/todo/contexts/TodoContext';

const Dashboard = () => {
  const { showModal, categoryEditingModal } = useModal();
  const { completedPercent } = useTodo();

  /**
   * Trigger showModal function from useModal
   * @param {Object} category
   */
  const onCategoryClick = (category) => {
    showModal({ key: categoryEditingModal.key, props: { category } });
  };

  return (
    //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="td-dashboard">
      {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-header-wrapper">
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="td-header">
          {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <PageTitle title="The Great Bucket List" className="td-page-title" />
          {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <CategoryList
            className="td-category-list-wrapper"
            onCategoryClick={(category) => onCategoryClick(category)}
          />
          {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ProgressBar
            className="td-progress-bar"
            progress={completedPercent}
          />
        </div>
      </div>
      {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-body">
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TodoInput />
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ToDoList className="td-todo-list" />
      </div>
      {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="td-bottom-bar">
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FilterBar className="td-filter-bar" />
      </div>
      {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="modal-container">
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CategorySelectionModal />
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CategoryEditingModal />
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ConfirmModal />
      </div>
    </div>
  );
};

export default Dashboard;
