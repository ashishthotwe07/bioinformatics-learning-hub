// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import ResetPasswordConfirmation from "./pages/Auth/ResetPasswordConfirmation";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import AuthRoute from "./utils/AuthRoute";
import Profile from "./pages/Profle";
import Connections from "./pages/Connections";
import Groups from "./pages/Groups";
import Chat from "./pages/Chat";
import Notifications from "./pages/Notifications";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/signin",
          element: (
            <AuthRoute>
              <SignIn />
            </AuthRoute>
          ),
        },
        {
          path: "/signup",
          element: (
            <AuthRoute>
              <SignUp />
            </AuthRoute>
          ),
        },
        {
          path: "/reset-password",
          element: (
            <AuthRoute>
              <ResetPassword />
            </AuthRoute>
          ),
        },
        {
          path: "/verify-email",
          element: <VerifyEmail />,
        },
        {
          path: "/reset-password-confirmation",
          element: (
            <AuthRoute>
              <ResetPasswordConfirmation />
            </AuthRoute>
          ),
        },
        {
          path: "/forgot-password",
          element: (
            <AuthRoute>
              <ForgotPassword />
            </AuthRoute>
          ),
        },

        {
          path: "/user",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "profile",
              element: (
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              ),
            },

          ],
        },
  
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </div>
  );
}
