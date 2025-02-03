import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./components/Loader";

// Pages
import Login from "./components/Login";
import Acceuil from "./components/Acceuil";
import DashboardC from "./components/DashboardC";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import Leaves from "./components/Leaves";
import Reportproblem from "./components/Reportproblem";
import Register from "./components/Register";
import Presence from "./components/Presence";
import Erreur from "./components/Erreur";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();
  
  if (!isLoaded) {
    return <Loader />;
  }

  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

// 🔥 Redirection après connexion (une seule fois)
const RedirectAfterLogin: React.FC = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/presence", { replace: true });
    }
  }, [isSignedIn, navigate]);

  return null;
};

// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Acceuil />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Redirection après connexion */}
      <Route path="/redirect" element={<RedirectAfterLogin />} />

      {/* Pages protégées */}
      <Route
        path="/presence"
        element={
          <ProtectedRoute>
            <Presence />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <DashboardC />
          </ProtectedRoute>
        }
      />
      <Route
        path="/userdetail"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Notification />
          </ProtectedRoute>
        }
      />
      <Route
        path="/leaves"
        element={
          <ProtectedRoute>
            <Leaves />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reportproblem"
        element={
          <ProtectedRoute>
            <Reportproblem />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Erreur />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
