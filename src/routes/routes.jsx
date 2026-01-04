import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Challenges from "../pages/Challenges";
import ChallengeDetails from "../components/ChallengeDetails";
import ChallengeJoin from "../components/ChallengeJoin";
import Tips from "../pages/Tips";
import Events from "../pages/Events";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../components/NotFound";
import TipDetails from "../components/TipsDetails";
import EventDetails from "../components/EventDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import Error from "../components/Error";
import AddChallenge from "../pages/Dashboard/AddChallenge";
import EditChallenge from "../pages/Dashboard/EditChallenge";
import MyChallenges from "../pages/Dashboard/MyChallenges";
import MyTasks from "../pages/Dashboard/MyTasks";
import Profile from "../pages/Dashboard/Profile";
import Overview from "../pages/Dashboard/Overview";
import TrackChallenge from "../pages/Dashboard/TrackChallenge";


export const routes = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <Error/>,
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
                path: "/forgot-password",
                Component: ForgotPassword
            }
        ]
    },
    {
        path: "/dashboard",
        errorElement: <Error/>,
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                Component: Overview
            },
            {
                path: "/dashboard/add-challenge",
                Component: AddChallenge
            },
            {
                path: "/dashboard/edit-challenge/:id",
                Component: EditChallenge
            },
            {
                path: "/dashboard/my-challenges",
                Component: MyChallenges
            },
            {
                path: "/dashboard/my-tasks",
                Component: MyTasks
            },
            {
                path: "/dashboard/track-challenge/:id",
                Component: TrackChallenge
            },
            {
                path: "/dashboard/profile",
                Component: Profile
            }
        ]
    },
    {
        path: "*",
        Component: NotFound
    }
]);