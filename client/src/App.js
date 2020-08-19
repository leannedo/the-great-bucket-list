import React from "react";
import Layout from "./layout/index";
import Dashboard from "./views/Dashboard";
import Icon from "./components/Icon/index";
import Button from "./components/Button";
import ConfirmModal from "./components/Modal/ConfirmModal/index";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <ConfirmModal okText="Delete this category?" cancelText="Cancel" />
    </div>
  );
}

export default App;
