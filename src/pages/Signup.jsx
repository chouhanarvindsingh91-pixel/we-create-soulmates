import { useState } from "react";
import "./Signup.css";

function Signup({ onLogin, onProfile }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    email: "",
    password: "",
    interestedIn: "",
    interests: "",
    about: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.gender ||
      !formData.location ||
      !formData.email ||
      !formData.password ||
      !formData.interestedIn ||
      !formData.interests ||
      !formData.about
    ) {
      setError("Please complete all the fields.");
      setSuccess(false);
      return;
    }

    if (Number(formData.age) < 18) {
      setError("You must be 18 years or older to join.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);

    setTimeout(() => {
      onProfile();
    }, 1000);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="signup-logo">
          ♥ We Create Soulmates
        </div>

        <h1>Create your account</h1>

        <p className="signup-subtitle">
          Start discovering meaningful connections.
        </p>

        {error && (
          <div className="signup-error">
            {error}
          </div>
        )}

        {success && (
          <div className="signup-success">
            Account created successfully! 🎉
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          <label>Age</label>

          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="You must be 18+"
            min="18"
          />

          <label>Gender</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select gender</option>
            <option>Man</option>
            <option>Woman</option>
            <option>Other</option>
          </select>

          <label>Location</label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your city"
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
          />

          <label>I'm interested in</label>

          <select
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
          >
            <option value="">Select preference</option>
            <option>Men</option>
            <option>Women</option>
            <option>Both</option>
          </select>

          <label>Interests</label>

          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="Travel, music, food..."
          />

          <label>About Me</label>

          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Tell people a little about yourself..."
            rows="4"
          ></textarea>

          <label className="age-check">
            <input
              type="checkbox"
              required
            />
            I confirm that I am 18 years or older.
          </label>

          <button
            type="submit"
            className="signup-button"
          >
            Create Account →
          </button>

        </form>

        <p className="login-text">
          Already have an account?{" "}
          <span onClick={onLogin}>Log in</span>
        </p>

      </div>
    </div>
  );
}

export default Signup;