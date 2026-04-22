import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Router } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";

import { router } from "./routes/Routers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
