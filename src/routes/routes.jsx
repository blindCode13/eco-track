import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Challanges from "../pages/Challanges";
import Tips from "../pages/Tips";
import Events from "../pages/Events";
import Leaderboard from "../pages/Leaderboard";
import axios from "axios";
import LoadingState from "../components/LoadingState";

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
                Component: Challanges,
                loader: () => axios('/challanges.json').then(resData => resData.data),
                hydrateFallbackElement: <LoadingState></LoadingState>
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