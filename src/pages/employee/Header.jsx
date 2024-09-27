import React from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const Header = ({ handler, modeCheck }) => {
  console.log(modeCheck);
  return (
    <div className="w-full dark:bg-dark-layer py-2 flex flex-wrap justify-between items-center px-3">
      <div>
        <h2 className="text-white text-xl font-semibold">Codex Devware</h2>
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
