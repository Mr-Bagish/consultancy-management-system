import Sidebar from "../../../components/sidebar/sidebar";
import Navbar from "../../../components/navbar/navbar";
import "./booking.css";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


function Booking() {
  const user = {
    name: "Neeru",
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

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

              <select>
                <option>Services</option>
                <option>Study Abroad</option>
                <option>Visa Consultation</option>
                <option>Career Counseling</option>
              </select>
            </div>

            <div className="booking-row">
              <label>Step 2: Date and Time</label>

              <input type="datetime-local" />
            </div>

            <div className="booking-row">
              <label>Step 3:</label>

              <input
                type="text"
                placeholder="Additional Notes"
              />
            </div>

          </div>

        </div>

        <div className="calendar-card">

          <h3>Select Preferred Date and Time</h3>

         <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
/>

        </div>

      </div>

      <div className="booking-right">

        <div className="details-card">

          <h3>Personal Details</h3>

          <div className="detail">
            <label>Full Name</label>
            <input type="text" value="Neeru" readOnly />
          </div>

          <div className="detail">
            <label>Email</label>
            <input type="email" value="neeru@email.com" readOnly />
          </div>

          <div className="detail">
            <label>Phone</label>
            <input type="text" value="+977 98XXXXXXXX" readOnly />
          </div>

        </div>

       <div className="slot-card">

  <h3>Available Time Slot</h3>

  {["9:00 AM", "1:00 PM", "2:30 PM", "4:00 PM"].map((time) => (
    <button
      key={time}
      className={selectedTime === time ? "slot active-slot" : "slot"}
      onClick={() => setSelectedTime(time)}
    >
      {time}
    </button>
  ))}

</div>

        <button className="continue-btn">
          Continue to Pay
        </button>

      </div>

    </div>

        </div>

      </div>

    
  );
}

export default Booking;