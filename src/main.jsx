import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/router.jsx";
import Cursor from "./Cursor/Cursor.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Cursor></Cursor>
      <RouterProvider router={router} />
  </StrictMode>
);
