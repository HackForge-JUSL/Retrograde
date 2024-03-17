import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
// import Auth0Povider from "./auth/Auth0Povider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
        <AppRoutes />
    </Router>
  </React.StrictMode>
);
