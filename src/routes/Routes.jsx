import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/pages/ErrorPage";
import Home from "../components/pages/Home";
import CreateProfile from "../components/pages/CreateProfile";
import Profile from "../components/pages/Profile";
import Login from "../components/pages/auth/Login";
import SignUp from "../components/pages/auth/SignUp";
import ForgotPassword from "../components/pages/ForgotPassword";
import ResetPassword from "../components/pages/ResetPassword";
import EditProfile from "../components/pages/EditProfile";
import Members from "../components/pages/Members";
import Gallery from "../components/pages/Gallery";
import AboutUs from "../components/pages/AboutUs";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: "/profile/new",
                element: <PrivateRoute><CreateProfile /></PrivateRoute>,
            },
            {
                path: "/profile/edit",
                element: <PrivateRoute><EditProfile /></PrivateRoute>,
            },
            {
                path: "/members",
                element: <PrivateRoute><Members /></PrivateRoute>,
            },
            {
                path: "/committee",
                element: <PrivateRoute><Members /></PrivateRoute>,
            },
            {
                path: "/gallery",
                element: <Gallery />,
            },
            {
                path: "/about-us",
                element: <AboutUs />,
            },
            // {
            //   path: "/notice-and-events",
            //   element: <NoticeAndEvents />,
            // },
            {
                path: "/forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "/reset-password/:token",
                element: <ResetPassword />,
            }
        ],
    },
]);