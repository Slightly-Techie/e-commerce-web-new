import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="*"
          element={
            <div>
              <p>404 page</p>
              <Link to="/">Go home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
