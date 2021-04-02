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
      <ModalProvider>
        <CategoryProvider>
          <TodoProvider>
            <Dashboard />
          </TodoProvider>
        </CategoryProvider>
      </ModalProvider>
    </Layout>
  );
}

export default App;
