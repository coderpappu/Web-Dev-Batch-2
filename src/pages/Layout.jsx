import React from "react";
import Sidebar from "./employee/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex flex-wrap justify-start">
      <Sidebar />
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
