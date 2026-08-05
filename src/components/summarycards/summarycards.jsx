import "./summarycards.css";
import { FaFileAlt, FaCalendarCheck, FaMoneyBillWave } from "react-icons/fa";

function SummaryCards() {
  const cards = [
    {
      title: "Active Bookings",
      value: "2",
      icon: <FaFileAlt />,
      color: "#2563eb",
    },
    {
      title: "Upcoming Service",
      value: "28 July • 11:00 AM",
      icon: <FaCalendarCheck />,
      color: "#10b981",
    },
   
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className="summary-card" key={index}>
          <div
            className="card-icon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div>
            <h4>{card.title}</h4>
            <p>{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;