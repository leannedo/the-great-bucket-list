// Libraries
import React from 'react';

// Components
// @ts-expect-error ts-migrate(6142) FIXME: Module './layout/index' was resolved to '/Users/ng... Remove this comment to see the full error message
import Layout from './layout/index';
// @ts-expect-error ts-migrate(6142) FIXME: Module './views/Dashboard' was resolved to '/Users... Remove this comment to see the full error message
import Dashboard from './views/Dashboard';

// Context
// @ts-expect-error ts-migrate(6142) FIXME: Module './modules/modal/contexts/ModalContext' was... Remove this comment to see the full error message
import ModalProvider from './modules/modal/contexts/ModalContext';
// @ts-expect-error ts-migrate(6142) FIXME: Module './modules/category/contexts/CategoryContex... Remove this comment to see the full error message
import CategoryProvider from './modules/category/contexts/CategoryContext';
// @ts-expect-error ts-migrate(6142) FIXME: Module './modules/todo/contexts/TodoContext' was r... Remove this comment to see the full error message
import TodoProvider from './modules/todo/contexts/TodoContext';

function App() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ModalProvider>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CategoryProvider>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TodoProvider>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Dashboard />
          </TodoProvider>
        </CategoryProvider>
      </ModalProvider>
    </Layout>
  );
}

export default App;
