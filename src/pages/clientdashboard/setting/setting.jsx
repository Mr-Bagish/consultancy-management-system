import Sidebar from "../../../components/sidebar/sidebar";
import Navbar from "../../../components/navbar/navbar";
import "./setting.css";
import { useState } from "react";

function Settings() {
  const [user, setUser] = useState({
    fullName: "Neeru Prajapati",
    email: "neeru@gmail.com",
    phone: "+977 98XXXXXXXX",
    country: "Nepal",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log(user);
    alert("Profile updated successfully!");
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Navbar
          title="Settings"
          username={user.fullName}
        />

        <div className="settings-container">

          <div className="settings-card">

            <h2>Profile Settings</h2>

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Country</label>

              <input
                type="text"
                name="country"
                value={user.country}
                onChange={handleChange}
              />
            </div>

            <button
              className="save-btn"
              onClick={handleSave}
            >
              Save Changes
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;