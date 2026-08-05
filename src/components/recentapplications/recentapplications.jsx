import "./recentapplications.css";

function RecentApplications() {

  const applications = [
    {
      client: "John Rai",
      destination: "Canada",
      service: "Student Visa",
      date: "Oct 22",
      status: "Pending",
    },
    {
      client: "James Gurung",
      destination: "Australia",
      service: "Admission",
      date: "Oct 21",
      status: "Completed",
    },
    {
      client: "Hari Bista",
      destination: "UK",
      service: "Visa Processing",
      date: "Nov 1",
      status: "In Progress",
    },
  ];

  return (
    <div className="recent-card">

      <div className="recent-header">
        <h3>Recent Applications</h3>
      </div>

      <table className="recent-table">

        <thead>
          <tr>
            <th>Client Name</th>
            <th>Destination</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {applications.map((item, index) => (

            <tr key={index}>

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
  );
}

export default RecentApplications;