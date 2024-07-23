import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BranchProvider } from "./context/centerContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BranchProvider>
        <App />
      </BranchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
