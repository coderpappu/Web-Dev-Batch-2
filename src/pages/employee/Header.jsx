import React from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";
const Header = ({ handler, modeCheck }) => {
  return (
    <div className="w-full dark:bg-dark-layer py-2 flex flex-wrap justify-between items-center px-3">
      <div>
        <h2 className="text-blue dark:text-white text-xl font-semibold">
          <Link to="/"> Codex Devware</Link>
        </h2>
      </div>
      <div className="w-[50px] h-[45px] p-2 bg-dark-card text-white rounded-md">
        {modeCheck ? (
          <CiLight size={25} className="cursor-pointer" onClick={handler} />
        ) : (
          <CiDark size={25} className="cursor-pointer" onClick={handler} />
        )}
      </div>
    </div>
  );
};

export default Header;
