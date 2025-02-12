import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App.tsx";
import "./index.css";

const app = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
