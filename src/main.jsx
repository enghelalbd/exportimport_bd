import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./Component/Login.jsx";
import Register from "./Component/Register.jsx";
import MyImports from "./Pages/MyImports.jsx";
import AddExport from "./Pages/AddExports.jsx";

const router = createBrowserRouter([
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
