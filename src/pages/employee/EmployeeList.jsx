import { useState } from "react";
import EmployeeListData from "../../utils/data";

const EmployeeList = () => {
  const [data, setData] = useState(EmployeeListData);
  const [searchDept, setSearchDept] = useState("");
  // search handler

  const searchHandler = (event) => {
    event.preventDefault();
    let filteredData = EmployeeListData.filter(
      (employeeData) =>
        employeeData.position.toLowerCase() == searchDept.toLowerCase()
    );
    if (searchDept == "") {
      setData(EmployeeListData);
    } else {
      setData(filteredData);
    }
  };

  console.log(searchDept);
  console.log(data);
  let content = data.map((employee, index) => (
    <tr className="border-b h-[50px] border-[#3f2d54]" key={employee.id}>
      <td>{employee.name}</td>
      <td className=" flex justify-center items-center ">
        <div className="bg-[#F8D8AB]  p-[3px] rounded-2xl text-black ">
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
    <div className="w-full h-[700px] pt-4 text-white">
      {/* employee page header  */}
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-xl font-medium">Payroll</h1>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="Search here"
            className="py-1 px-2 rounded-md text-black"
            onChange={(event) => setSearchDept(event.target.value)}
          />
        </form>
      </div>

      {/* employee table  */}
      <table className="w-full mt-3">
        <thead className="bg-[#22182D] h-[50px] border-b border-[#3f2d54]">
          <tr className="">
            <th>Name</th>
            <th>Position</th>
            <th>Rate</th>
            <th>Period</th>
            <th>Working Hour</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="w-full text-center bg-[#22182D] mt-2">
          {content}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
