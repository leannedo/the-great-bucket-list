import React from "react";
import Layout from "./layout/index";
import Dashboard from "./views/Dashboard";
import CategorySelectionModal from "./components/Modal/CategorySelectionModal";
import Input from "./components/Input";
import CategoryEditingModal from "./components/Modal/CategoryEditingModal";
import ConfirmModal from "./components/Modal/ConfirmModal";

function App() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export default App;
