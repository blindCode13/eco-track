import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Challenges from "../pages/Challenges";
import ChallengeDetails from "../components/ChallengeDetails";
import ChallengeJoin from "../components/ChallengeJoin";
import TrackChallenge from '../components/TrackChallenge';
import AddChallenge from '../pages/AddChallenge';
import Tips from "../pages/Tips";
import Events from "../pages/Events";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import MyActivities from "../pages/MyActivities";
import EditChallenge from "../pages/EditChallenge";
import NotFound from "../components/NotFound";
import TipDetails from "../components/TipsDetails";
import EventDetails from "../components/EventDetails";


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
                element: <PrivateRoute><ChallengeJoin></ChallengeJoin></PrivateRoute>
            },
            {
                path: "/my-activities",
                Component: MyActivities
            },
            {
                path: "/my-activities/:id",
                Component: TrackChallenge
            },
            {
                path: "/challenges/add",
                element: <PrivateRoute><AddChallenge></AddChallenge></PrivateRoute>
            },
            {
                path: "/challenges/edit/:id",
                element: <PrivateRoute><EditChallenge></EditChallenge></PrivateRoute>
            },
            {
                path: "/tips",
                Component: Tips
            },
            {
                path: "/tips/:id",
                Component: TipDetails
            },
            {
                path: "/events",
                Component: Events
            },
            {
                path: "/events/:id",
                Component: EventDetails
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
            },
            {
                path: "*",
                Component: NotFound
            }
        ]
    }
]);