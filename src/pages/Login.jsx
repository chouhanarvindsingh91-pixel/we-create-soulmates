import { useState } from "react";
import "./Login.css";

function Login({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          ♥ We Create Soulmates
        </div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Log in to continue discovering meaningful connections.
        </p>

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        {success && (
          <div className="login-success">
            Login successful! 🎉
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
          />

          <div className="forgot-password">
            Forgot password?
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Log In →
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <span onClick={onSignup}>Join Us</span>
        </p>

      </div>
    </div>
  );
}

export default Login;