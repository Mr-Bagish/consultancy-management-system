import "./upcomingbookings.css";

function UpcomingBookings() {
  const bookings = [
    {
      serviceName: "Career and Education Counselling",
      dateTime: "Oct 24, 2:00 PM",
      provider: "Karan Joshi",
      status: "Confirmed",
    },
    {
      serviceName: "Interview Preparation",
      dateTime: "Nov 02, 9:00 AM",
      provider: "Sushma Rai",
      status: "Pending",
    },
    {
      serviceName: "Visa Consultation",
      dateTime: "Nov 10, 11:30 AM",
      provider: "Ramesh Shrestha",
      status: "Confirmed",
    },
  ];

  return (
    <div className="table-card">

      <div className="table-header">
        <h3>Upcoming Bookings</h3>

        <button>View All</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Date & Time</th>
            <th>Provider</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((item, index) => (
            <tr key={index}>
              <td>{item.serviceName}</td>
              <td>{item.dateTime}</td>
              <td>{item.provider}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default UpcomingBookings;