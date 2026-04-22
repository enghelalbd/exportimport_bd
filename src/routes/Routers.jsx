import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Register from "../Component/Register.jsx";
import MyImports from "../Pages/MyImports.jsx";
import AddExport from "../Pages/AddExports.jsx";
import MyExports from "../Pages/MyExports.jsx";
import Login from "../Component/Login.jsx";
import App from "../App.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/MyExports",
    element: <MyExports />,
  },
  {
    path: "/MyImports",
    element: <MyImports />,
  },

  {
    path: "/AddExports",
    element: <AddExport />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
