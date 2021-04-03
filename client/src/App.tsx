// Libraries
import React from 'react';

// Components
import Layout from './layout/index';
import Dashboard from './views/Dashboard';

// Context
import ModalProvider from './modules/modal/contexts/ModalContext';
import CategoryProvider from './modules/category/contexts/CategoryContext';
import TodoProvider from './modules/todo/contexts/TodoContext';

function App() {
  return (
    <Layout>
      {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ModalProvider>
        {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CategoryProvider>
          {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TodoProvider>
            {/*  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Dashboard />
          </TodoProvider>
        </CategoryProvider>
      </ModalProvider>
    </Layout>
  );
}

export default App;
