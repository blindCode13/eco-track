import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Challanges from "../pages/Challanges";
import Tips from "../pages/Tips";
import Events from "../pages/Events";
import Leaderboard from "../pages/Leaderboard";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/challanges",
                Component: Challanges
            },
            {
                path: "/tips",
                Component: Tips
            },
            {
                path: "/events",
                Component: Events
            },
            {
                path: "/leaderboard",
                Component: Leaderboard
            }
        ]
    }
]);