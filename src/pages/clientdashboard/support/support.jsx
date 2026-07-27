import Sidebar from "../../../components/sidebar/sidebar";
import Navbar from "../../../components/navbar/navbar";
import "./support.css";

function Support() {
  const user = {
    name: "Neeru",
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Navbar
          title="Support"
          username={user.name}
        />

        <div className="support-container">

          <div className="support-left">

            <div className="support-card">

              <h2>Need Help?</h2>

              <p>
                Submit your query and our consultancy team will contact you as
                soon as possible.
              </p>

              <form>

                <div className="form-group">
                  <label>Subject</label>

                  <input
                    type="text"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>

                  <textarea
                    rows="7"
                    placeholder="Describe your issue..."
                  ></textarea>
                </div>

                <button className="send-btn">
                  Send Message
                </button>

              </form>

            </div>

          </div>

          <div className="support-right">

            <div className="contact-card">

              <h3>Contact Information</h3>

              <p>📧 support@consultancy.com</p>

              <p>📞 +977-9800000000</p>

              <p>🕘 Sunday - Friday</p>

              <p>10:00 AM - 6:00 PM</p>

            </div>

            <div className="faq-card">

              <h3>Frequently Asked Questions</h3>

              <ul>

                <li>How do I apply to a university?</li>

                <li>How can I book a consultation?</li>

                <li>How do I upload my documents?</li>

                <li>When will I receive my offer letter?</li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Support;