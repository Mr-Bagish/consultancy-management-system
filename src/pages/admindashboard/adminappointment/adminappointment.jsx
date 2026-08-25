import "./adminappointment.css";
import { FaCalendarAlt, FaClock, FaUser, FaCheck, FaTimes } from "react-icons/fa";

function AdminAppointment() {
  const appointments = [
    {
      id: 1,
      client: "John Doe",
      service: "Study Abroad Consultancy",
      date: "25 Aug 2026",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: 2,
      client: "Sarah Smith",
      service: "Visa Consultancy",
      date: "26 Aug 2026",
      time: "11:30 AM",
      status: "Confirmed",
    },
    {
      id: 3,
      client: "Michael Brown",
      service: "Career Consultancy",
      date: "27 Aug 2026",
      time: "02:00 PM",
      status: "Pending",
    },
    {
      id: 4,
      client: "Emily Wilson",
      service: "Study Abroad Consultancy",
      date: "28 Aug 2026",
      time: "03:30 PM",
      status: "Cancelled",
    },
  ];

  return (
    <div className="admin-appointment">
      <div className="appointment-header">
        <div>
          <h1>Appointments</h1>
          <p>Manage and track client appointments</p>
        </div>

        <button className="add-appointment-btn">
          + Add Appointment
        </button>
      </div>

      <div className="appointment-stats">
        <div className="appointment-stat-card">
          <div className="stat-icon">
            <FaCalendarAlt />
          </div>
          <div>
            <h3>12</h3>
            <p>Total Appointments</p>
          </div>
        </div>

        <div className="appointment-stat-card">
          <div className="stat-icon">
            <FaClock />
          </div>
          <div>
            <h3>5</h3>
            <p>Pending</p>
          </div>
        </div>

        <div className="appointment-stat-card">
          <div className="stat-icon">
            <FaCheck />
          </div>
          <div>
            <h3>6</h3>
            <p>Confirmed</p>
          </div>
        </div>

        <div className="appointment-stat-card">
          <div className="stat-icon">
            <FaTimes />
          </div>
          <div>
            <h3>1</h3>
            <p>Cancelled</p>
          </div>
        </div>
      </div>

      <div className="appointment-table-container">
        <div className="table-header">
          <h2>Appointment List</h2>

          <select className="status-filter">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="appointment-table-wrapper">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>
                    <div className="client-info">
                      <div className="client-icon">
                        <FaUser />
                      </div>
                      <span>{appointment.client}</span>
                    </div>
                  </td>

                  <td>{appointment.service}</td>

                  <td>{appointment.date}</td>

                  <td>{appointment.time}</td>

                  <td>
                    <span
                      className={`appointment-status ${appointment.status.toLowerCase()}`}
                    >
                      {appointment.status}
                    </span>
                  </td>

                  <td>
                    <div className="appointment-actions">
                      <button className="confirm-btn" title="Confirm">
                        <FaCheck />
                      </button>

                      <button className="cancel-btn" title="Cancel">
                        <FaTimes />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminAppointment;