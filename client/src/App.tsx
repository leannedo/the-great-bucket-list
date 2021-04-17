// Libraries
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createClient } from './graphql/client';

// Components
import Dashboard from './views/Dashboard';

// Styling
import './App.scss';

// Context
import { ModalProvider } from './modules/modal/context/ModalContext';
import { CategoryProvider } from './modules/category/context/CategoryContext';
import TodoProvider from './modules/todo/contexts/TodoContext';

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={createClient()}>
      <ModalProvider>
        <CategoryProvider>
          <TodoProvider>
            <Dashboard />
          </TodoProvider>
        </CategoryProvider>
      </ModalProvider>
    </ApolloProvider>
  );
};

export default App;
