import { Routes, Route } from "react-router-dom";

import PublicWebsite from "./publicWebsite/PublicWebsite";

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
      {/* Public Website */}
      <Route path="/*" element={<PublicWebsite />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Client Dashboard */}
      <Route path="/client/dashboard" element={<Client />} />
      <Route path="/client/booking" element={<Booking />} />
      <Route path="/client/services" element={<Services />} />
      <Route path="/client/support" element={<Support />} />
      <Route path="/client/setting" element={<Settings />} />
    </Routes>
  );
}

export default App;