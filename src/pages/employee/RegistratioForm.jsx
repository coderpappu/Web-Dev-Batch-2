import React from "react";
import { MdSaveAlt } from "react-icons/md";

const RegistratioForm = () => {
  return (
    // wrap
    <div className="my-8">
      <div className="w-[600px] h-auto bg-[#4e3b648f] rounded-md m-auto py-6 px-10">
        <h2 className="text-2xl text-white">RegistratioForm</h2>
        <div>
          {/* input box  */}
          <div className="w-full mt-2">
            <label htmlFor="" className="text-lg text-[#b1b1b1] ">
              Employee Name
            </label>
            <input
              type="text"
              className="w-full h-12 bg-slate-300 rounded-md mt-2"
            />
          </div>
          {/* input box  */}
          <div className="w-full mt-2">
            <label htmlFor="" className="text-lg text-[#b1b1b1] ">
              Employee Position
            </label>
            <input
              type="text"
              className="w-full h-12 bg-slate-300 rounded-md mt-2"
            />
          </div>
          {/* input box  */}
          <div className="w-full mt-2">
            <label htmlFor="" className="text-lg text-[#b1b1b1] ">
              Rate
            </label>
            <input
              type="text"
              className="w-full h-12 bg-slate-300 rounded-md mt-2"
            />
          </div>
          {/* input box  */}
          <div className="w-full mt-2">
            <label htmlFor="" className="text-lg text-[#b1b1b1] ">
              Period
            </label>
            <input
              type="text"
              className="w-full h-12 bg-slate-300 rounded-md mt-2"
            />
          </div>
          {/* input box  */}
          <div className="w-full mt-2">
            <label htmlFor="" className="text-lg text-[#b1b1b1] ">
              Working Hour
            </label>
            <input
              type="text"
              className="w-full h-12 bg-slate-300 rounded-md mt-2"
            />
          </div>
          {/* input box  */}
          <div className="w-full mt-2">
            <label htmlFor="" className="text-lg text-[#b1b1b1] ">
              Salary
            </label>
            <input
              type="text"
              className="w-full h-12 bg-slate-300 rounded-md mt-2"
            />
          </div>
          {/* input box  */}
          <div className="w-full mt-2">
            <label htmlFor="" className="text-lg text-[#b1b1b1] ">
              Working Hour
            </label>

            <select className="w-full h-12 bg-slate-300 rounded-md mt-2">
              <option value="active">Select Option</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="w-full mt-2">
            <button className="w-[150px] h-[60px] bg-green-600 px-6  text-lg font-semibold text-white rounded-md border-none flex flex-wrap justify-between items-center">
              <MdSaveAlt size={25} />
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistratioForm;
