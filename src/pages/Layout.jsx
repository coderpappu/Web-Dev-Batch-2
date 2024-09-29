import Sidebar from "./employee/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./employee/Header";
import { useEffect } from "react";
const Layout = () => {
  const [mode, setMode] = useState(false);

  // check local storage for dark mode
  const saveDarkMode = localStorage.getItem("darkMode");

  useEffect(() => {
    if (saveDarkMode !== null) {
      setMode(JSON.parse(saveDarkMode));
    }
  }, [saveDarkMode]);

  const handlerMode = () => {
    setMode(!mode);
    localStorage.setItem("darkMode", JSON.stringify(!mode));
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
