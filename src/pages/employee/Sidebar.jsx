import React from "react";
import { GoPeople } from "react-icons/go";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";

const Sidebar = () => {
  const Logout = () => {
    auth.signOut();
  };

  console.log(auth.currentUser);
  return (
    <div className="w-[20%] h-screen bg-[#270E5F] dark:bg-dark-sidebar text-white px-8 pt-4">
      <h2 className="text-2xl font-semibold ">SOFT DESK</h2>
      <div className="mt-14">
        <div className="flex flex-wrap items-center gap-3 text-xl my-3 bg-blue-600 p-2 rounded-sm ">
          <GoPeople />
          <Link to="/list">Employee List</Link>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xl my-3">
          <MdOutlineCreateNewFolder />
          <Link to="/registrationform">Employee Registration</Link>
        </div>

        <div>
          Welcome {auth.currentUser.email}
          Name {auth.currentUser.displayName}
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocK9xAGkioA7AApG8OA14l5xdbpvrciT0fTgJfjPs7ArAgwXyjsN=s96-c"
            alt="user pic"
          />
          <button onClick={Logout}> Logout </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
