import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./routes/routes";
import AuthProvider from "./contexts/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(

  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={routes}/>
    </AuthProvider>
  </QueryClientProvider>

);