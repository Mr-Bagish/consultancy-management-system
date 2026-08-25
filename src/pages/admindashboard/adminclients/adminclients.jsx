import "./adminclients.css";
import { FaUser, FaEnvelope, FaPhone, FaEye, FaTrash } from "react-icons/fa";

function AdminClients() {
  const clients = [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      phone: "9841234567",
      service: "Study Abroad Consultancy",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@gmail.com",
      phone: "9812345678",
      service: "Visa Consultancy",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@gmail.com",
      phone: "9801234567",
      service: "Career Consultancy",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "emily@gmail.com",
      phone: "9861234567",
      service: "Study Abroad Consultancy",
      status: "Active",
    },
  ];

  return (
    <div className="admin-clients">
      <div className="clients-header">
        <div>
          <h1>Clients</h1>
          <p>Manage registered clients and their information</p>
        </div>

        <button className="add-client-btn">
          + Add Client
        </button>
      </div>

      <div className="client-summary">
        <div className="client-summary-card">
          <div className="client-summary-icon">
            <FaUser />
          </div>

          <div>
            <h3>24</h3>
            <p>Total Clients</p>
          </div>
        </div>

        <div className="client-summary-card">
          <div className="client-summary-icon">
            <FaUser />
          </div>

          <div>
            <h3>20</h3>
            <p>Active Clients</p>
          </div>
        </div>

        <div className="client-summary-card">
          <div className="client-summary-icon">
            <FaUser />
          </div>

          <div>
            <h3>4</h3>
            <p>Inactive Clients</p>
          </div>
        </div>
      </div>

      <div className="clients-container">
        <div className="clients-top">
          <h2>Client List</h2>

          <div className="client-filters">
            <input
              type="text"
              placeholder="Search clients..."
            />

            <select>
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="clients-table-wrapper">
          <table className="clients-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Service</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>
                    <div className="client-name">
                      <div className="client-avatar">
                        {client.name.charAt(0)}
                      </div>

                      <span>{client.name}</span>
                    </div>
                  </td>

                  <td>
                    <div className="client-contact">
                      <FaEnvelope />
                      {client.email}
                    </div>
                  </td>

                  <td>
                    <div className="client-contact">
                      <FaPhone />
                      {client.phone}
                    </div>
                  </td>

                  <td>{client.service}</td>

                  <td>
                    <span
                      className={`client-status ${client.status.toLowerCase()}`}
                    >
                      {client.status}
                    </span>
                  </td>

                  <td>
                    <div className="client-actions">
                      <button className="view-client-btn" title="View Client">
                        <FaEye />
                      </button>

                      <button className="delete-client-btn" title="Delete Client">
                        <FaTrash />
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

export default AdminClients;