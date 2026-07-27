import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";

import Client from "./pages/clientdashboard/clientdashboard";
import Booking from "./pages/clientdashboard/booking/booking";
import Services from "./pages/clientdashboard/services/services";
import Support from "./pages/clientdashboard/support/support";
import Settings from "./pages/clientdashboard/setting/setting"; 

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/client/dashboard" element={<Client />} />
        <Route path="/client/booking" element={<Booking />} />
        <Route path="/client/services" element={<Services />} />
        <Route path="/client/support" element={<Support />} />
        <Route path="/client/setting" element={<Settings />} />
      </Routes>
    
  );
}

export default App;