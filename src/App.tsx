import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Achat from "./components/Achat";
import Connect from "./components/Connect";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/" element={<Acceuil />}></Route>
          <Route path="/employee/dashboard" element={<DashboardC />}></Route>
          <Route path="/userdetail" element={<Profile/>}></Route>
          <Route path="/employee" element={<Dashboard />}></Route>
          <Route path="/Notifications" element={<Notification/>}></Route>
          <Route path="/Leaves" element={<Leaves/>}></Route>
          <Route path="/Reportproblem" element={<Reportproblem />}></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          <Route path="/Commande" element={<Commande/>}></Route>
          <Route path="/Achat" element={<Achat/>}></Route>
          <Route path="/Connect" element={<Connect/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;