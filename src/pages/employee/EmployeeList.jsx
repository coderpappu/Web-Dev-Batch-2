import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../../../firebase";
const EmployeeList = () => {
  const [data, setData] = useState([]);

  const [searchDept, setSearchDept] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const datacheck = async () => {
    try {
      const employeeRef = collection(db, "employees");
      const querySnapshot = await getDocs(employeeRef);

      const employees = querySnapshot.docs.map((employee) => employee.data());
      // Set the fetched data to a variable
      setData(employees); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  // datacheck();

  useEffect(() => {
    datacheck();
  }, []);

  const searchHandler = (event) => {
    event.preventDefault();
    // employeeData?.Position.toLowerCase() === searchDept.toLowerCase()
    let filteredData = data.filter(
      (employeeData) =>
        employeeData?.position.toLowerCase() === searchDept.toLowerCase()
    );

    if (searchDept === "") {
      setFilteredData(data);
    } else {
      setFilteredData(filteredData);
    }
  };

  let content = filteredData.map((employee, index) => (
    <tr className="border-b h-[50px] border-[#3f2d54]" key={index}>
      <td>{employee.name}</td>
      <td className="flex justify-center items-center">
        <div className="bg-[#F8D8AB] p-[3px] rounded-2xl text-black">
          {employee.position}
        </div>
      </td>
      <td>{employee.rate}</td>
      <td>{employee.period}</td>
      <td>{employee.workingHour}</td>
      <td>{employee.salary}</td>
      <td>{employee.status}</td>
    </tr>
  ));

  return (
    <div className="text-white w-full h-[700px] pt-8">
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-xl font-bold">Payroll</h1>

        {/* search bar */}
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="Search here"
            className="py-1 px-2 rounded-md text-black"
            onChange={(event) => setSearchDept(event.target.value)}
          />
        </form>
      </div>

      {/* employee table */}
      <table className="w-full mt-3">
        <thead className="bg-[#22182D] dark:bg-dark-layer border-b border-[#3f2d54] h-[50px]">
          <tr className="rounded-md">
            <th>Home</th>
            <th>Position</th>
            <th>Rate</th>
            <th>Period</th>
            <th>Working Hour</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-center w-full bg-[#22182D] dark:bg-dark-card mt-3">
          {content}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
