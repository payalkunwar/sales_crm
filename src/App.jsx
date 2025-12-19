import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import About from "./pages/about";
import Contact from "./pages/contact";
import Leads from "./pages/Leads";
import Deals from "./pages/Deals";
import Contacts from "./pages/Contacts";
import Layout from "./components/layout/Layout";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Welcome from "./pages/Welcome";


function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "leads", element: <Leads /> },
      { path: "deals", element: <Deals /> },
      { path: "contacts", element: <Contacts /> },

    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
