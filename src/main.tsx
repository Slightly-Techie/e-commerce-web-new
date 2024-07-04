import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Filters from "./components/Filter.tsx";
import "./index.css";
import App from "./pages/App.tsx";
import Signup from "./pages/Signup.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/filter" element={<Filters />} />
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
  </React.StrictMode>,
);
