import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import EmployeeList from "./pages/employee/EmployeeList";
import RegistrationForm from "./pages/employee/RegistratioForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";

import Layout from "./pages/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <EmployeeList />,
      },
      {
        path: "/registrationform",
        element: <RegistrationForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// Virtual DOM
