import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { LeadsProvider } from "./context/LeadsContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<AuthProvider>
  <LeadsProvider>
    <App />
  </LeadsProvider>
</AuthProvider>

  </React.StrictMode>
);
