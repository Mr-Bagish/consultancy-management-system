import "./signup.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthButton from "../../components/AuthButton";
import GoogleButton from "../../components/GoogleButton";
import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        console.log({
          name,
          email,
          password,
          confirmPassword,
        });

        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>

        <h1 className="signup-title">Sign Up</h1>

        <p className="signup-subtitle">
          Create your account
        </p>

        <div className="form-box">

         <InputField
            label="Full Name"
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({
                ...prev,
                name: "",
                }));
            }}
            error={errors.name}
            />

        <InputField
        label="Email"
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({
            ...prev,
            email: "",
            }));
        }}
        error={errors.email}
        />

          <PasswordField
            label="Password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({
                ...prev,
                password: "",
                }));
            }}
            showPassword={showPassword}
            togglePassword={() => setShowPassword(!showPassword)}
            error={errors.password}
            />

         <PasswordField
            label="Confirm Password"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrors((prev) => ({
                ...prev,
                confirmPassword: "",
                }));
            }}
            showPassword={showConfirmPassword}
            togglePassword={() =>
                setShowConfirmPassword(!showConfirmPassword)
            }
            error={errors.confirmPassword}
            />

          <AuthButton
            text="Sign Up"
            loadingText="Signing up..."
            loading={loading}
            onClick={handleSignup}
            className="signup-btn"
          />

          <div className="divider">
            <span>OR</span>
          </div>

          <GoogleButton
            text="Continue with Google"
            onClick={() => console.log("Google Signup")}
            />
             <p className="login-text">
          Already have an account?{" "}
          <Link to="/" className="login-link">
            Login
          </Link>
        </p>
        </div>

       

      </div>
    </div>
  );
}

export default Signup;