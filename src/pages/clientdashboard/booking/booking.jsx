import Sidebar from "../../../components/sidebar/sidebar";
import Navbar from "../../../components/navbar/navbar";
import "./booking.css";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Booking() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Get logged-in user
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access_token");

      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/accounts/profile/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        setUser({
          name: data.full_name,
          email: data.email,
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  // Get services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/content/services/"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleBooking = async () => {
    setMessage("");
    setError("");

    if (!selectedService) {
      setError("Please select a service.");
      return;
    }

    if (!selectedDate) {
      setError("Please select a date.");
      return;
    }

    if (!selectedTime) {
      setError("Please select a time slot.");
      return;
    }

    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    setLoading(true);

    const token = localStorage.getItem("access_token");

    const bookingData = {
      service: Number(selectedService),
      booking_date: selectedDate.toISOString().split("T")[0],
      booking_time: selectedTime,
      phone_no: phone,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/bookings/bookings/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Booking error:", data);
        setError("Unable to create booking. Please try again.");
        return;
      }

      setMessage("Booking created successfully! 🎉");

      setSelectedService("");
      setSelectedTime("");
      setPhone("");
    } catch (error) {
      console.error("Booking request failed:", error);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar
          title="Booking"
          username={user.name}
        />

        <div className="booking-container">

          <div className="booking-left">

            <div className="booking-card">

              <h3>Book a New Service</h3>

              <div className="booking-form">

                <div className="booking-row">
                  <label>Step 1: Select Services</label>

                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">Services</option>

                    {services.map((service) => (
                      <option
                        key={service.id}
                        value={service.id}
                      >
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="booking-row">
                  <label>Step 2: Date and Time</label>

                  <input
                    type="datetime-local"
                    value={
                      selectedDate
                        ? `${selectedDate.toISOString().slice(0, 10)}T${
                            selectedTime || "09:00"
                          }`
                        : ""
                    }
                    readOnly
                  />
                </div>

                <div className="booking-row">
                  <label>Step 3: Phone</label>

                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

              </div>

              {error && (
                <p className="booking-error">
                  {error}
                </p>
              )}

              {message && (
                <p className="booking-success">
                  {message}
                </p>
              )}

              <button
                className="book-btn"
                onClick={handleBooking}
                disabled={loading}
              >
                {loading ? "Booking..." : "Book Service"}
              </button>

            </div>

            <div className="calendar-card">

              <h3>Select Preferred Date and Time</h3>

              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                minDate={new Date()}
              />

            </div>

          </div>

          <div className="booking-right">

            <div className="details-card">

              <h3>Personal Details</h3>

              <div className="detail">
                <label>Full Name</label>

                <input
                  type="text"
                  value={user.name}
                  readOnly
                />
              </div>

              <div className="detail">
                <label>Email</label>

                <input
                  type="email"
                  value={user.email}
                  readOnly
                />
              </div>

              <div className="detail">
                <label>Phone</label>

                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+977 98XXXXXXXX"
                />
              </div>

            </div>

            <div className="slot-card">

              <h3>Available Time Slot</h3>

              {["09:00:00", "13:00:00", "14:30:00", "16:00:00"].map(
                (time) => (
                  <button
                    key={time}
                    className={
                      selectedTime === time
                        ? "slot active-slot"
                        : "slot"
                    }
                    onClick={() => setSelectedTime(time)}
                  >
                    {new Date(`1970-01-01T${time}`).toLocaleTimeString(
                      [],
                      {
                        hour: "numeric",
                        minute: "2-digit",
                      }
                    )}
                  </button>
                )
              )}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Booking;