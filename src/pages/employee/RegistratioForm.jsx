import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { MdSaveAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import db from "../../../firebase";

const RegistratioForm = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [rate, setRate] = useState("");
  const [period, setPeriod] = useState("");
  const [hour, setHour] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(name, position, rate, period, hour, salary, status);

    try {
      const employeesRef = collection(db, "employees");

      const docRef = await addDoc(employeesRef, {
        name: name,
        position: position,
        rate: rate,
        period: period,
        workingHour: hour,
        salary: salary,
        status: status,
      });

      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // wrap
    <div className="my-8">
      <div className="w-[600px] h-auto bg-[#4e3b648f] rounded-md m-auto py-6 px-10">
        <h2 className="text-2xl text-white">RegistratioForm</h2>
        <div>
          <form onSubmit={submitHandler}>
            {/* input box  */}
            <div className="w-full mt-2">
              <label htmlFor="" className="text-lg text-[#b1b1b1] ">
                Employee Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={position}
                onChange={(e) => setPosition(e.target.value)}
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
                value={rate}
                onChange={(e) => setRate(e.target.value)}
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
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
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
                value={hour}
                onChange={(e) => setHour(e.target.value)}
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
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full h-12 bg-slate-300 rounded-md mt-2"
              />
            </div>
            {/* input box  */}
            <div className="w-full mt-2">
              <label htmlFor="" className="text-lg text-[#b1b1b1] ">
                Status
              </label>

              <select
                className="w-full h-12 bg-slate-300 rounded-md mt-2"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="active">Select Option</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="w-full mt-2">
              <button
                type="submit"
                className="w-[150px] h-[60px] bg-green-600 px-6  text-lg font-semibold text-white rounded-md border-none flex flex-wrap justify-between items-center"
              >
                <MdSaveAlt size={25} />
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistratioForm;
