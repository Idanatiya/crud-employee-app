import "./main.css";
import "react-toastify/dist/ReactToastify.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
