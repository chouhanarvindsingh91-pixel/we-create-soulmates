import { useState } from "react";
import "./UserProfile.css";

function UserProfile({ profile, onBack }) {
  const [connected, setConnected] = useState(false);

  return (
    <div className="user-profile-page">

      <header className="user-profile-header">

        <div className="user-profile-logo">
          ♥ We Create Soulmates
        </div>

        <button
          className="user-profile-back"
          onClick={onBack}
        >
          ← Back to Discover
        </button>

      </header>

      <main className="user-profile-container">

        <div className="user-profile-card">

          <div className="user-profile-photo">
            👤
          </div>

          <div className="user-profile-info">

            <div className="user-profile-name-row">

              <h1>
                {profile.name}, {profile.age}
              </h1>

              <span className="user-profile-verified">
                ✓
              </span>

            </div>

            <p className="user-profile-location">
              📍 {profile.location}
            </p>

            <div className="user-profile-tags">

              {profile.interests.map((interest) => (
                <span key={interest}>
                  {interest}
                </span>
              ))}

            </div>

            <section className="user-profile-section">

              <h2>About Me</h2>

              <p>
                {profile.about}
              </p>

            </section>

            <div className="user-profile-details">

              <div>
                <strong>Gender</strong>
                <span>{profile.gender}</span>
              </div>

              <div>
                <strong>Interested In</strong>
                <span>
                  {profile.gender === "Man" ? "Women" : "Men"}
                </span>
              </div>

              <div>
                <strong>Age</strong>
                <span>{profile.age}</span>
              </div>

            </div>

            <div className="user-profile-actions">

              <button
                className={
                  connected
                    ? "user-profile-connected"
                    : "user-profile-connect"
                }
                onClick={() => setConnected(!connected)}
              >
                {connected
                  ? "✓ Connection Sent"
                  : "♥ Connect"}
              </button>

              <button className="user-profile-message">
                💬 Message
              </button>

            </div>

            <div className="user-profile-safety">
              🔒 Connect respectfully. Mutual interest and consent always
              come first.
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default UserProfile;