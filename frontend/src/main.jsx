import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LandProvider from "./context/LandContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LandProvider>
      <App />
    </LandProvider>
  </React.StrictMode>
);
