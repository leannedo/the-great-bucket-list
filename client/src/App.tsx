// Libraries
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createClient } from './graphql/client';

// Components
import Layout from './layout/index';
import Dashboard from './views/Dashboard';

// Context
import ModalProvider from './modules/modal/contexts/ModalContext';
import CategoryProvider from './modules/category/contexts/CategoryContext';
import TodoProvider from './modules/todo/contexts/TodoContext';

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={createClient()}>
      <Layout>
        <ModalProvider>
          <CategoryProvider>
            <TodoProvider>
              <Dashboard />
            </TodoProvider>
          </CategoryProvider>
        </ModalProvider>
      </Layout>
    </ApolloProvider>
  );
};

export default App;
