import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Challanges from "../pages/Challanges";
import Tips from "../pages/Tips";
import Events from "../pages/Events";
import Leaderboard from "../pages/Leaderboard";
import LoadingState from "../components/LoadingState";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ChallengeDetails from "../components/ChallangeDetails";
import ChallangeJoin from "../components/ChallangeJoin";
import ForgotPassword from "../pages/Auth/ForgotPassword";

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
                path: "/challanges/:id",
                Component: ChallengeDetails
            },
            {
                path: "/challanges/join",
                Component: ChallangeJoin
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
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/forgot-password",
                Component: ForgotPassword
            }
        ]
    }
]);