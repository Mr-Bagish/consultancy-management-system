import Sidebar from "../../../components/sidebar/sidebar";
import Navbar from "../../../components/navbar/navbar";
import "./services.css";

function Services() {
  const user = {
    name: "Neeru",
  };

  const services = [
    {
      title: "University Admission",
      description:
        "Get guidance on selecting universities and submitting applications.",
    },
    {
      title: "Student Visa",
      description:
        "Receive complete assistance with your student visa application process.",
    },
    {
      title: "Scholarship Guidance",
      description:
        "Explore scholarships and financial aid opportunities available for international students.",
    },
    {
      title: "Career Counseling",
      description:
        "Discuss your career goals and choose the best study pathway.",
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar title="Services" username={user.name} />

        <div className="services-container">
          <h2>Available Services</h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <button>Book Service</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;