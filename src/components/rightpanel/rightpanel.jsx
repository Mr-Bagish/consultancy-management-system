import "./rightpanel.css";
import { FaCalendarAlt, FaUserTie, FaBullhorn } from "react-icons/fa";

function RightPanel() {
  return (
    <div className="right-panel">

      <div className="panel-card">
        <h3>
          <FaCalendarAlt /> Upcoming Appointment
        </h3>

        <p><strong>Date:</strong> 28 July 2026</p>
        <p><strong>Time:</strong> 11:00 AM</p>
        <p><strong>Mode:</strong> Online Meeting</p>
      </div>

      <div className="panel-card">
        <h3>
          <FaUserTie /> Assigned Consultant
        </h3>

        <p><strong>Name:</strong> Sarah Johnson</p>
        <p><strong>Email:</strong> sarah@consultancy.com</p>
      </div>

      <div className="panel-card">
        <h3>
          <FaBullhorn /> Latest Announcement
        </h3>

        <p>
          Applications for the February 2027 intake are now open.
          Submit your documents before the deadline.
        </p>
      </div>

    </div>
  );
}

export default RightPanel;