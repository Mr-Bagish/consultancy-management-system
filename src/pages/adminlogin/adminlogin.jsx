import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError("");

  try {
    const response = await api.post("/accounts/admin-login/", {
      email,
      password,
    });

    console.log("SUCCESS:", response.data);

    alert("Login Successful!");

  } catch (err) {

    console.log("FULL ERROR:", err);

    if (err.response) {
      console.log("STATUS:", err.response.status);
      console.log("DATA:", err.response.data);
      setError(JSON.stringify(err.response.data));
    } else if (err.request) {
      console.log("NO RESPONSE:", err.request);
      setError("Cannot reach backend.");
    } else {
      console.log("ERROR:", err.message);
      setError(err.message);
    }

  } finally {
    setLoading(false);
  }
};

  return (
    <div style={{ width: "400px", margin: "80px auto" }}>

      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

    </div>
  );
}

export default AdminLogin;