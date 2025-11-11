import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Challanges from "../pages/Challanges";
import Tips from "../pages/Tips";
import Events from "../pages/Events";
import Leaderboard from "../pages/Leaderboard";
import axios from "axios";
import LoadingState from "../components/LoadingState";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

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
                Component: Tips,
                loader: () => axios('/tips.json').then(resData => resData.data),
                hydrateFallbackElement: <LoadingState></LoadingState>
            },
            {
                path: "/events",
                Component: Events,
                loader: () => axios('/events.json').then(resData => resData.data),
                hydrateFallbackElement: <LoadingState></LoadingState>
            },
            {
                path: "/leaderboard",
                Component: Leaderboard
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            }
        ]
    }
]);