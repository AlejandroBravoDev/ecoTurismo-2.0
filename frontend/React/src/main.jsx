import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import Registro from "./components/registro/index.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Registro />
  </React.StrictMode>
);
