import "./overviewcards.css";
import {
  FaUsers,
  FaUserPlus,
  FaCalendarCheck,
  FaClipboardList,
} from "react-icons/fa";

function OverviewCards() {
  const cards = [
    {
      title: "Total Clients",
      value: "150",
      icon: <FaUsers />,
      color: "#2563eb",
    },
    {
      title: "New Enquiries",
      value: "20",
      icon: <FaUserPlus />,
      color: "#16a34a",
    },
    {
      title: "Successful Appointments",
      value: "55",
      icon: <FaCalendarCheck />,
      color: "#7c3aed",
    },
    {
      title: "Pending Applications",
      value: "18",
      icon: <FaClipboardList />,
      color: "#ea580c",
    },
  ];

  return (
    <>
      <div className="overview-header">
        <div>
          <h2>System Overview</h2>
          <p>Overview of platform performance</p>
        </div>

        <button className="filter-btn">
          Last 30 Days
        </button>
      </div>

      <div className="overview-grid">
        {cards.map((card, index) => (
          <div className="overview-card" key={index}>

            <div
              className="overview-icon"
              style={{ background: card.color }}
            >
              {card.icon}
            </div>

            <div>
              <h3>{card.value}</h3>
              <p>{card.title}</p>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}

export default OverviewCards;