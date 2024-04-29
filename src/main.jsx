import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home";
import { Toaster } from "react-hot-toast";
import CreateProfile from "./components/pages/CreateProfile";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import EditProfile from "./components/pages/EditProfile";
import Members from "./components/pages/Members";


const router = createBrowserRouter([
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
        element: <Profile />,
      },
      {
        path: "/profile/new",
        element: <CreateProfile />,
      },
      {
        path: "/profile/edit",
        element: <EditProfile />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      // {
      //   path: "/gallery",
      //   element: <Gallery />,
      // },
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);