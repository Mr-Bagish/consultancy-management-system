import "./applications.css";
import AdminLayout from "../../../layouts/adminlayout";

function Applications() {
  const applications = [
    {
      id: "APP001",
      client: "John Rai",
      destination: "Canada",
      service: "Student Visa",
      date: "22 Oct 2026",
      status: "Pending",
    },
    {
      id: "APP002",
      client: "James Gurung",
      destination: "Australia",
      service: "Career Counselling",
      date: "20 Oct 2026",
      status: "Approved",
    },
    {
      id: "APP003",
      client: "Hari Bista",
      destination: "UK",
      service: "Visa Processing",
      date: "18 Oct 2026",
      status: "In Progress",
    },
    {
      id: "APP004",
      client: "Sita Shrestha",
      destination: "USA",
      service: "Interview Preparation",
      date: "15 Oct 2026",
      status: "Rejected",
    },
  ];

  return (
    <AdminLayout>

      <div className="applications-page">

        <div className="page-header">
          <h2>Applications</h2>
          <p>Manage all consultancy applications.</p>
        </div>

        <div className="applications-card">

          <table className="applications-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Client</th>
                <th>Destination</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.client}</td>
                  <td>{item.destination}</td>
                  <td>{item.service}</td>
                  <td>{item.date}</td>

                  <td>
                    <span
                      className={`status ${item.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button className="view-btn">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>
  );
}

export default Applications;