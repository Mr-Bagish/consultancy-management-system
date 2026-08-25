import "./adminsettings.css";
import { FaUser, FaEnvelope, FaLock, FaBell, FaSave } from "react-icons/fa";

function AdminSettings() {
  return (
    <div className="admin-settings">
      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your admin account and system preferences</p>
        </div>
      </div>

      <div className="settings-content">

        {/* Profile Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <div className="settings-icon">
              <FaUser />
            </div>

            <div>
              <h2>Profile Information</h2>
              <p>Update your personal information</p>
            </div>
          </div>

          <div className="settings-form">
            <div className="form-group">
              <label>Full Name</label>

              <div className="input-with-icon">
                <FaUser />
                <input
                  type="text"
                  placeholder="Enter your name"
                  defaultValue="Admin"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <div className="input-with-icon">
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="Enter your email"
                  defaultValue="admin@gmail.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <div className="input-with-icon">
                <FaUser />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>

          <div className="settings-actions">
            <button className="save-btn">
              <FaSave />
              Save Changes
            </button>
          </div>
        </div>

        {/* Password Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <div className="settings-icon">
              <FaLock />
            </div>

            <div>
              <h2>Change Password</h2>
              <p>Update your account password</p>
            </div>
          </div>

          <div className="settings-form">
            <div className="form-group">
              <label>Current Password</label>

              <div className="input-with-icon">
                <FaLock />
                <input
                  type="password"
                  placeholder="Enter current password"
                />
              </div>
            </div>

            <div className="form-group">
              <label>New Password</label>

              <div className="input-with-icon">
                <FaLock />
                <input
                  type="password"
                  placeholder="Enter new password"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Confirm New Password</label>

              <div className="input-with-icon">
                <FaLock />
                <input
                  type="password"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>

          <div className="settings-actions">
            <button className="save-btn">
              <FaSave />
              Update Password
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <div className="settings-icon">
              <FaBell />
            </div>

            <div>
              <h2>Notifications</h2>
              <p>Manage your notification preferences</p>
            </div>
          </div>

          <div className="notification-options">

            <div className="notification-option">
              <div>
                <h3>New Appointment</h3>
                <p>Receive notifications when a client books an appointment.</p>
              </div>

              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>

            <div className="notification-option">
              <div>
                <h3>New Client Registration</h3>
                <p>Receive notifications when a new client registers.</p>
              </div>

              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>

            <div className="notification-option">
              <div>
                <h3>Application Updates</h3>
                <p>Receive notifications about client application updates.</p>
              </div>

              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminSettings;