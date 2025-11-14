import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./routes/routes";
import AuthProvider from "./contexts/AuthProvider";

createRoot(document.getElementById("root")).render(

    <AuthProvider>
      <RouterProvider router={routes}/>
    </AuthProvider>

);