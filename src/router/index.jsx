import Login from "@/components/login/login";
import SignUp from "@/components/signUp/signUp/SignUp";
import ProtectedRoute from "@/layout/ProtectedRoute";
import PublicRoute from "@/layout/PublicRoute";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "@/pages/homePage";
import DestinationPage from "@/pages/destinationPage";

const router = createBrowserRouter([
  {

    element: <PublicRoute />,
    children: [
      {
        path: '/',
        element: <Navigate to='/login' />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/home",
        element:  <HomePage/>
      },
      {
        path: "/destinations",
        element: <DestinationPage/>
      },

      
    ],
  }


]);

export default router