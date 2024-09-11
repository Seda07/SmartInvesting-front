import { createBrowserRouter, Navigate } from 'react-router-dom';
import Company from "@/components/company/Company"
import HomePage from "@/pages/homePage";
import ProtectedRoute from "@/layout/ProtectedRoute";
import PublicRoute from "@/layout/PublicRoute";
import Login from "@/components/login/login";
import SignUp from "@/components/signUp/SignUp";

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
        element: <Login/>,
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
        path: "/company",  // Ruta para la página "Company"
        element: <Company/>
      },
    ],
  }
]);

export default router;

