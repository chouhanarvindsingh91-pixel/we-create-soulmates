import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="profile-page">

      <div className="profile-header">
        <div className="profile-logo">
          ♥ We Create Soulmates
        </div>

        <button className="profile-back">
          ← Home
        </button>
      </div>

      <div className="profile-container">

        <div className="profile-card">

          <div className="profile-photo">
            👤
          </div>

          <div className="profile-info">

            <div className="profile-name-row">
              <h1>Arjun, 27</h1>
              <span className="verified">✓</span>
            </div>

            <p className="profile-location">
              📍 Jaipur, Rajasthan
            </p>

            <div className="profile-tags">
              <span>Travel</span>
              <span>Coffee</span>
              <span>Movies</span>
              <span>Food</span>
            </div>

            <div className="profile-section">
              <h2>About Me</h2>

              <p>
                I enjoy travelling, discovering new places, good conversations,
                coffee and meeting people with a positive mindset. Looking for
                meaningful connections and someone who enjoys sharing new
                experiences.
              </p>
            </div>

            <div className="profile-details">

              <div>
                <strong>Gender</strong>
                <span>Man</span>
              </div>

              <div>
                <strong>Interested In</strong>
                <span>Women</span>
              </div>

              <div>
                <strong>Age</strong>
                <span>27</span>
              </div>

            </div>

            <div className="profile-actions">

              <button
                className={connected ? "connected-button" : "connect-button"}
                onClick={() => setConnected(!connected)}
              >
                {connected ? "✓ Connection Sent" : "♥ Connect"}
              </button>

              <button className="message-button">
                💬 Message
              </button>

            </div>

            <div className="profile-safety">
              🔒 Your privacy matters. Connect only when interest is mutual.
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Profile;