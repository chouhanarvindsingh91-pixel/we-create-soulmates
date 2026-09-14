import { useState } from "react";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

if (showSignup) {
  return <Signup onLogin={() => {
    setShowSignup(false);
    setShowLogin(true);
  }} />;
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

  return (
    <div className="website">

      {/* NAVBAR */}
      <header className="navbar">

        <div className="brand">
          <span className="heart">♥</span>
          <span>We Create Soulmates</span>
        </div>

        <nav className="nav-links">
          <a href="#discover">Discover</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#safety">Safety</a>
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

      {/* HERO */}
      <main>

        <section className="hero">

          <div className="hero-text">

            <div className="small-badge">
              ♥ Meaningful connections start here
            </div>

            <h1>
              Find someone.
              <br />
              <span>Make a connection.</span>
            </h1>

            <p>
              Discover interesting people, create genuine connections,
              and mutually plan memorable experiences together.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => setShowSignup(true)}
              >
                Find a Partner →
              </button>

              <button
                className="secondary-button"
                onClick={() => setShowSignup(true)}
              >
                Create Your Profile
              </button>

            </div>

            <div className="trust-points">
              <span>✓ 18+ community</span>
              <span>✓ Mutual connections</span>
              <span>✓ Privacy focused</span>
            </div>

          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">

            <div className="circle">

              <div className="big-heart">♥</div>

              <div className="profile-card profile-card-one">

                <div className="avatar avatar-one">
                  A
                </div>

                <div>
                  <strong>Alex, 26</strong>
                  <small>Delhi · Travel lover</small>
                </div>

                <span className="online">●</span>

              </div>

              <div className="profile-card profile-card-two">

                <div className="avatar avatar-two">
                  R
                </div>

                <div>
                  <strong>Riya, 25</strong>
                  <small>Mumbai · Music & food</small>
                </div>

                <span className="online">●</span>

              </div>

            </div>

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="how-section" id="how-it-works">

          <div className="section-title">

            <span>HOW IT WORKS</span>

            <h2>
              Connection should feel simple.
            </h2>

            <p>
              Create your profile, discover people and connect when
              the interest is mutual.
            </p>

          </div>

          <div className="steps">

            <div className="step">
              <div className="step-number">01</div>

              <h3>Create your profile</h3>

              <p>
                Tell people about your interests, personality and
                the experiences you enjoy.
              </p>
            </div>

            <div className="step">
              <div className="step-number">02</div>

              <h3>Discover people</h3>

              <p>
                Browse profiles and find people who share your
                interests and preferences.
              </p>
            </div>

            <div className="step">
              <div className="step-number">03</div>

              <h3>Connect mutually</h3>

              <p>
                Send interest and start connecting when both people
                agree.
              </p>
            </div>

            <div className="step">
              <div className="step-number">04</div>

              <h3>Plan your experience</h3>

              <p>
                Mutually agree on a date, time and suitable public
                place.
              </p>
            </div>

          </div>

        </section>

        {/* DISCOVER */}
        <section className="discover-section" id="discover">

          <div className="section-title">

            <span>DISCOVER</span>

            <h2>
              People you might connect with.
            </h2>

            <p>
              Explore people based on interests, personality and
              location.
            </p>

          </div>

          <div className="profiles">

            <div className="profile">

              <div className="profile-image profile-image-one">
                A
              </div>

              <div className="profile-details">

                <h3>Arjun, 27</h3>

                <p>📍 Jaipur</p>

                <div className="tags">
                  <span>Travel</span>
                  <span>Coffee</span>
                </div>

              </div>

            </div>

            <div className="profile">

              <div className="profile-image profile-image-two">
                S
              </div>

              <div className="profile-details">

                <h3>Simran, 25</h3>

                <p>📍 Delhi</p>

                <div className="tags">
                  <span>Music</span>
                  <span>Food</span>
                </div>

              </div>

            </div>

            <div className="profile">

              <div className="profile-image profile-image-three">
                K
              </div>

              <div className="profile-details">

                <h3>Karan, 28</h3>

                <p>📍 Mumbai</p>

                <div className="tags">
                  <span>Movies</span>
                  <span>Fitness</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SAFETY */}
        <section className="safety-section" id="safety">

          <div className="safety-text">

            <span>SAFETY FIRST</span>

            <h2>
              Connections built around respect.
            </h2>

            <p>
              We want every interaction to be comfortable, respectful
              and consensual. Users should have control over their
              profiles, connections and communication.
            </p>

          </div>

          <div className="safety-list">

            <div>✓ Adults 18+ only</div>
            <div>✓ Mutual interest</div>
            <div>✓ Report & block controls</div>
            <div>✓ Privacy-focused profiles</div>

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="cta-section">

          <h2>
            Ready to meet someone interesting?
          </h2>

          <p>
            Create your profile and start discovering meaningful
            connections.
          </p>

          <button
            className="primary-button"
            onClick={() => setShowSignup(true)}
          >
            Create Your Profile →
          </button>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <div className="brand">
          <span className="heart">♥</span>
          We Create Soulmates
        </div>

        <p>
          Connect mutually. Create memorable experiences.
        </p>

        <div className="footer-links">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Safety</span>
          <span>Contact</span>
        </div>

      </footer>

    </div>
  );
}

export default App;