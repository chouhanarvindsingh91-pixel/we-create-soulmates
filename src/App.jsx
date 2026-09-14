```jsx
import { useState } from "react";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
import UserProfile from "./pages/UserProfile";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showDiscover, setShowDiscover] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  if (showSignup) {
    return (
      <Signup
        onLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
        onProfile={() => {
          setShowSignup(false);
          setShowProfile(true);
        }}
      />
    );
  }

  if (showLogin) {
    return (
      <Login
        onSignup={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
      />
    );
  }

  if (showProfile) {
    return <Profile />;
  }

  if (selectedProfile) {
    return (
      <UserProfile
        profile={selectedProfile}
        onBack={() => setSelectedProfile(null)}
      />
    );
  }

  if (showDiscover) {
    return (
      <Discover
        onViewProfile={(profile) => setSelectedProfile(profile)}
      />
    );
  }

  return (
    <div className="app">

      <header className="navbar">

        <div className="logo">
          ♥ We Create Soulmates
        </div>

        <nav className="nav-links">

          <button
            onClick={() => setShowDiscover(true)}
          >
            Discover
          </button>

          <a href="#how-it-works">
            How It Works
          </a>

          <a href="#safety">
            Safety
          </a>

        </nav>

        <div className="nav-actions">

          <button
            className="login-button"
            onClick={() => setShowLogin(true)}
          >
            Log in
          </button>

          <button
            className="join-button"
            onClick={() => setShowSignup(true)}
          >
            Join Us
          </button>

        </div>

      </header>

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            ❤️ Meaningful connections. Real experiences.
          </p>

          <h1>
            Find someone who makes
            <span> life more meaningful.</span>
          </h1>

          <p className="hero-text">
            Discover compatible people, build genuine connections,
            and create memorable experiences together.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => setShowSignup(true)}
            >
              Create Your Profile →
            </button>

            <button
              className="secondary-button"
              onClick={() => setShowDiscover(true)}
            >
              Find a Partner
            </button>

          </div>

          <div className="hero-note">
            🔒 18+ only • Privacy focused • Mutual consent
          </div>

        </div>

      </section>

      <section
        className="how-section"
        id="how-it-works"
      >

        <div className="section-heading">

          <p>HOW IT WORKS</p>

          <h2>
            Simple. Genuine. Mutual.
          </h2>

          <span>
            Finding meaningful connections shouldn't be complicated.
          </span>

        </div>

        <div className="steps">

          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <h3>
              Create Your Profile
            </h3>

            <p>
              Tell people about yourself, your interests,
              and what kind of connection you're looking for.
            </p>

          </div>

          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <h3>
              Discover People
            </h3>

            <p>
              Browse profiles based on shared interests,
              preferences, and location.
            </p>

          </div>

          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <h3>
              Connect Mutually
            </h3>

            <p>
              Send a connection request and start a conversation
              when interest is mutual.
            </p>

          </div>

        </div>

      </section>

      <section className="discover-preview">

        <div className="section-heading">

          <p>DISCOVER</p>

          <h2>
            Meet people who match your vibe.
          </h2>

          <span>
            Explore profiles and discover new possibilities.
          </span>

        </div>

        <div className="preview-cards">

          <div className="preview-card">

            <div className="preview-photo">
              👤
            </div>

            <h3>
              Riya, 25
            </h3>

            <p>
              📍 Udaipur, Rajasthan
            </p>

            <div className="preview-tags">
              <span>Travel</span>
              <span>Music</span>
              <span>Food</span>
            </div>

          </div>

          <div className="preview-card">

            <div className="preview-photo">
              👤
            </div>

            <h3>
              Karan, 29
            </h3>

            <p>
              📍 Delhi, India
            </p>

            <div className="preview-tags">
              <span>Fitness</span>
              <span>Travel</span>
              <span>Movies</span>
            </div>

          </div>

          <div className="preview-card">

            <div className="preview-photo">
              👤
            </div>

            <h3>
              Meera, 26
            </h3>

            <p>
              📍 Mumbai, India
            </p>

            <div className="preview-tags">
              <span>Books</span>
              <span>Coffee</span>
              <span>Movies</span>
            </div>

          </div>

        </div>

        <button
          className="discover-more-button"
          onClick={() => setShowDiscover(true)}
        >
          Explore Discover →
        </button>

      </section>

      <section
        className="safety-section"
        id="safety"
      >

        <div className="safety-content">

          <p className="safety-label">
            YOUR SAFETY MATTERS
          </p>

          <h2>
            Connections built on
            <span> respect and consent.</span>
          </h2>

          <p>
            We believe every connection should be comfortable,
            respectful, private, and mutually agreed upon.
          </p>

          <div className="safety-points">

            <div>

              <strong>
                🔒 Privacy
              </strong>

              <span>
                Your personal information stays protected.
              </span>

            </div>

            <div>

              <strong>
                ✓ Mutual Interest
              </strong>

              <span>
                Connect only when both people are interested.
              </span>

            </div>

            <div>

              <strong>
                🚫 Report & Block
              </strong>

              <span>
                Control who you interact with at all times.
              </span>

            </div>

          </div>

        </div>

      </section>

      <section className="cta-section">

        <h2>
          Ready to find your connection?
        </h2>

        <p>
          Create your profile and start discovering people today.
        </p>

        <button
          className="primary-button"
          onClick={() => setShowSignup(true)}
        >
          Join We Create Soulmates →
        </button>

      </section>

      <footer className="footer">

        <div className="logo">
          ♥ We Create Soulmates
        </div>

        <p>
          Meaningful connections. Real experiences.
        </p>

        <span>
          © 2026 We Create Soulmates. 18+ only.
        </span>

      </footer>

    </div>
  );
}

export default App;
```