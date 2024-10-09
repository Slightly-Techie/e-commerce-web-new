import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/sonner.tsx";
import "./index.css";
import AppRouter from "./pages/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <RouterProvider router={AppRouter} />
      </CookiesProvider>
      <Toaster />
    </>
  </React.StrictMode>,
);
