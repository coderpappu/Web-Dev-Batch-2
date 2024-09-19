import React from "react";
import EmployeeList from "./pages/employee/EmployeeList";
import Sidebar from "./pages/employee/Sidebar";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between ">
        <Sidebar />
        <Layout />
      </div>
    </>
  );
};

export default App;
