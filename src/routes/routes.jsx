import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Challenges from "../pages/Challenges";
import ChallengeDetails from "../components/ChallangeDetails";
import ChallengeJoin from "../components/ChallengeJoin";
import TrackChallenge from '../components/TrackChallenge';
import AddChallenge from '../pages/AddChallange';
import Tips from "../pages/Tips";
import Events from "../pages/Events";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import PrivateRoute from "./PrivateRoute";


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
                path: "/challenges",
                Component: Challenges
            },
            {
                path: "/challenges/:id",
                Component: ChallengeDetails
            },
            {
                path: "/challenges/join/:id",
                Component: ChallengeJoin
            },
            {
                path: "/my-activities/track",
                Component: TrackChallenge
            },
            {
                path: "/challenges/add",
                element: <PrivateRoute><AddChallenge></AddChallenge></PrivateRoute>
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
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/forgot-password",
                Component: ForgotPassword
            }
        ]
    }
]);