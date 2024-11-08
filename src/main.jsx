import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeeList from "./pages/employee/EmployeeList";
import RegistrationForm from "./pages/employee/RegistratioForm";
import NotFound from "./pages/NotFound";

import App from "./App";
import Signin from "./pages/Signin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/list",
        element: <EmployeeList />,
      },
      {
        path: "/registrationform",
        element: <RegistrationForm />,
      },
      {
        path: "/login",
        element: <Signin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// Virtual DOM
