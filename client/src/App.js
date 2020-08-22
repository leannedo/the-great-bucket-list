import React from "react";
import Layout from "./layout/index";
import Dashboard from "./views/Dashboard";
import ModalProvider from "./modules/modal/contexts/ModalContext";
import CategoryProvider from "./modules/category/contexts/CategoryContext";

function App() {
  return (
    <Layout>
      <ModalProvider>
        <CategoryProvider>
          <Dashboard />
        </CategoryProvider>
      </ModalProvider>
    </Layout>
  );
}

export default App;
