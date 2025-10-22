import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import travelData from "./components/data";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App data={travelData} />
  </StrictMode>
);
