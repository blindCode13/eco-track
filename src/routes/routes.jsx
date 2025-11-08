import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout
    }
]);