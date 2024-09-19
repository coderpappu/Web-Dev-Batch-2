import React from "react";
import EmployeeList from "./employee/EmployeeList";
import RegistratioForm from "./employee/RegistratioForm";

const Layout = () => {
  return (
    <div className="w-[82%] h-auto bg-[#12081E]">
      {/* <EmployeeList /> */}
      <RegistratioForm />
    </div>
  );
};

export default Layout;
