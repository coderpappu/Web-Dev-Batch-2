import Sidebar from "./employee/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./employee/Header";
const Layout = () => {
  const [mode, setMode] = useState(false);

  const handlerMode = () => {
    setMode(!mode);
  };
  
  return (
    // main container
    <div
      className={`flex flex-wrap justify-start ${
        mode && "dark"
      }  dark:bg-dark-container`}
    >
      {/* side bar  */}
      <Sidebar />

      {/* content box  */}
      <div className="w-[80%]">
        <Header handler={handlerMode} modeCheck={mode} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
