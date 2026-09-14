import { useState } from "react";
import "./Discover.css";

function Discover({ onViewProfile }) {
  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("All");
  const [connected, setConnected] = useState([]);

  const profiles = [
    {
      id: 1,
      name: "Arjun",
      age: 27,
      gender: "Man",
      location: "Jaipur, Rajasthan",
      interests: ["Travel", "Coffee", "Movies"],
      about:
        "I enjoy travelling, discovering new places, good conversations and meeting positive people.",
    },
    {
      id: 2,
      name: "Riya",
      age: 25,
      gender: "Woman",
      location: "Udaipur, Rajasthan",
      interests: ["Music", "Travel", "Food"],
      about:
        "Love exploring new places, trying different food and having meaningful conversations.",
    },
    {
      id: 3,
      name: "Karan",
      age: 29,
      gender: "Man",
      location: "Delhi, India",
      interests: ["Fitness", "Travel", "Photography"],
      about:
        "Fitness enthusiast who enjoys photography, travelling and meeting interesting people.",
    },
    {
      id: 4,
      name: "Meera",
      age: 26,
      gender: "Woman",
      location: "Mumbai, India",
      interests: ["Movies", "Books", "Coffee"],
      about:
        "Book lover and movie enthusiast looking for genuine conversations and new experiences.",
    },
  ];

  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch =
      profile.name.toLowerCase().includes(search.toLowerCase()) ||
      profile.location.toLowerCase().includes(search.toLowerCase()) ||
      profile.interests.some((interest) =>
        interest.toLowerCase().includes(search.toLowerCase())
      );

    const matchesGender =
      genderFilter === "All" || profile.gender === genderFilter;

    return matchesSearch && matchesGender;
  });

  const handleConnect = (id) => {
    if (connected.includes(id)) {
      setConnected(
        connected.filter((profileId) => profileId !== id)
      );
    } else {
      setConnected([...connected, id]);
    }
  };

  return (
    <div className="discover-page">

      <header className="discover-header">

        <div className="discover-logo">
          ♥ We Create Soulmates
        </div>

        <nav className="discover-nav">
          <button>Discover</button>
          <button>How It Works</button>
          <button>Safety</button>
          <button className="discover-login">
            Log In
          </button>
        </nav>

      </header>

      <main className="discover-container">

        <div className="discover-intro">

          <h1>Discover Connections</h1>

          <p>
            Find people who share your interests and are open to meaningful
            connections.
          </p>

        </div>

        <div className="discover-filters">

          <div className="search-box">
            🔍

            <input
              type="text"
              placeholder="Search by name, city or interest..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

          </div>

          <select
            value={genderFilter}
            onChange={(event) =>
              setGenderFilter(event.target.value)
            }
          >
            <option value="All">Everyone</option>
            <option value="Woman">Women</option>
            <option value="Man">Men</option>
          </select>

        </div>

        <div className="profile-count">
          {filteredProfiles.length} connections found
        </div>

        <div className="discover-grid">

          {filteredProfiles.map((profile) => (

            <div
              className="discover-card"
              key={profile.id}
            >

              <div className="discover-photo">
                👤
              </div>

              <div className="discover-card-content">

                <div className="discover-name-row">

                  <h2>
                    {profile.name}, {profile.age}
                  </h2>

                  <span className="verified-small">
                    ✓
                  </span>

                </div>

                <p className="discover-location">
                  📍 {profile.location}
                </p>

                <div className="discover-tags">

                  {profile.interests.map((interest) => (
                    <span key={interest}>
                      {interest}
                    </span>
                  ))}

                </div>

                <p className="discover-about">
                  {profile.about}
                </p>

                <div className="discover-actions">

                  <button
                    className="view-profile-button"
                    onClick={() => onViewProfile(profile)}
                  >
                    View Profile
                  </button>

                  <button
                    className={
                      connected.includes(profile.id)
                        ? "connected-discover-button"
                        : "connect-discover-button"
                    }
                    onClick={() => handleConnect(profile.id)}
                  >
                    {connected.includes(profile.id)
                      ? "✓ Connected"
                      : "♥ Connect"}
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {filteredProfiles.length === 0 && (

          <div className="no-results">

            <div>🔎</div>

            <h2>No connections found</h2>

            <p>
              Try searching for another name, city or interest.
            </p>

          </div>

        )}

      </main>

      <footer className="discover-footer">

        <p>
          🔒 Connect respectfully. Mutual interest and consent always come
          first.
        </p>

      </footer>

    </div>
  );
}

export default Discover;