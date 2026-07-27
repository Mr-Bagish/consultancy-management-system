import "./recentapplications.css";

function RecentApplications() {
  const applications = [
    {
      university: "University of Sydney",
      program: "Master of IT",
      intake: "Feb 2027",
      status: "Under Review",
    },
    {
      university: "Deakin University",
      program: "Master of Data Science",
      intake: "July 2027",
      status: "Accepted",
    },
    {
      university: "Monash University",
      program: "MBA",
      intake: "Feb 2027",
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
            <th>University</th>
            <th>Program</th>
            <th>Intake</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {applications.map((item, index) => (
            <tr key={index}>
              <td>{item.university}</td>
              <td>{item.program}</td>
              <td>{item.intake}</td>
              <td>{item.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentApplications;