import { createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from "react-router-dom";
import Login from "./components/Login";
import Acceuil from "./components/Acceuil";
import DashboardC from "./components/DashboardC";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";
import Leaves from "./components/Leaves";
import Reportproblem from "./components/Reportproblem";
import Register from "./components/Register";
import Commande from "./components/Commande";
// import Achat from "./components/Achat";
// import Connect from "./components/Connect";
import Home from "./components/Home";
const router = createBrowserRouter( 
  createRoutesFromElements(
    <>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Dashboard" element={<DashboardC/>}/>
    <Route path="/Login" element={<Login />}/>
          <Route path="/Acceuil" element={<Acceuil />}/>
          <Route path="/employee/dashboard" element={<DashboardC />}/>
          <Route path="/userdetail" element={<Profile/>}/>
          <Route path="/employee" element={<Dashboard />}/>
          <Route path="/Notifications" element={<Notification/>}/>
          <Route path="/Leaves" element={<Leaves/>}></Route>
          <Route path="/Reportproblem" element={<Reportproblem />}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Commande" element={<Commande/>}/>
    </>
  ))
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;