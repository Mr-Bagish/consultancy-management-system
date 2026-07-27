import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import "./clientdashboard.css";
import SummaryCards from "../../components/summarycards/summarycards";
import RecentApplications from "../../components/recentapplications/recentapplications";
import RightPanel from "../../components/rightpanel/rightpanel";
function ClientDashboard() {

  const user = {
    name: "Neeru",
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Navbar
          title="Dashboard"
          username={user.name}
        />

        <div className="dashboard-body">

          <h2>Welcome back, {user.name} 👋</h2>
            <p>
              Manage your applications, appointments, and consultancy services from one place.
            </p>

            <SummaryCards />
            <div className="dashboard-grid">
            <RecentApplications />
            <RightPanel />
            </div>
        </div>

      </div>

    </div>
  );
}

export default ClientDashboard;