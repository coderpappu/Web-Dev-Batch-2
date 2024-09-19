import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import EmployeeList from "./pages/employee/EmployeeList";
import RegistrationForm from "./pages/employee/RegistratioForm";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <EmployeeList /> },
  { path: "/registrationform", element: <RegistrationForm /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);

// Virtual DOM
