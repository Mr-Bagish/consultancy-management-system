import "./recentapplications.css";

function RecentApplications() {
  const applications = [
    {
      client: "John Rai",
      university: "University of Sydney",
      program: "Master of IT",
      destination: "Australia",
      intake: "Feb 2027",
      service: "Student Visa",
      date: "Oct 22",
      status: "Under Review",
    },
    {
      client: "James Gurung",
      university: "Deakin University",
      program: "Master of Data Science",
      destination: "Australia",
      intake: "July 2027",
      service: "Admission",
      date: "Oct 21",
      status: "Accepted",
    },
    {
      client: "Hari Bista",
      university: "Monash University",
      program: "MBA",
      destination: "Australia",
      intake: "Feb 2027",
      service: "Visa Processing",
      date: "Nov 1",
      status: "Documents Pending",
    },
  ];

  return (
    <div className="table-card">
      <div className="table-header">
        <h3>Recent Applications</h3>
        <button>View All</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>University</th>
            <th>Program</th>
            <th>Destination</th>
            <th>Intake</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((item, index) => (
            <tr key={index}>
              <td>{item.client}</td>
              <td>{item.university}</td>
              <td>{item.program}</td>
              <td>{item.destination}</td>
              <td>{item.intake}</td>

              <td>
                <span
                  className={`status ${item.status
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  {item.status}
                </span>
              </td>

              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentApplications;