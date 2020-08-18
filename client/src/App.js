import React from "react";
import Layout from "./layout/index";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <div className="App">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
