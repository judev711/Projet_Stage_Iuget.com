import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { SignedIn, useAuth } from "@clerk/clerk-react";
import React from "react";

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
  children: React.ReactNode; // Typage explicite pour children
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();

  // Attendre que l'état d'authentification soit chargé
  if (!isLoaded) {
    return <div>Chargement...</div>; // Placeholder pendant le chargement
  }

  // Rediriger si l'utilisateur n'est pas connecté
  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  // Si l'utilisateur est connecté, afficher les enfants
  return (
    <SignedIn>
      {children}
    </SignedIn>
  );
};

// Login Component Wrapper for Redirection
const LoginRedirect = () => {
  const { isSignedIn } = useAuth();

  // Si l'utilisateur est connecté, redirigez vers /presence
  if (isSignedIn) {
    return <Navigate to="/presence" />;
  }

  // Sinon, affichez le composant Login
  return <Login />;
};

// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Routes publiques */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginRedirect />} />
      <Route path="/register" element={<Register />} />

      {/* Routes accessibles uniquement aux utilisateurs connectés */}
      <Route
        path="/acceuil"
        element={
          <ProtectedRoute>
            <Acceuil />
          </ProtectedRoute>
        }
      />
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
