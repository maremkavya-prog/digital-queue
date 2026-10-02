import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [service, setService] = useState("General");
  const [token, setToken] = useState(null);
  const [currentToken, setCurrentToken] = useState(12);
  const [waiting, setWaiting] = useState(5);

  const joinQueue = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    const newToken = currentToken + waiting + 1;
    setToken(newToken);
    setWaiting(waiting + 1);
  };

  const nextCustomer = () => {
    if (waiting > 0) {
      setCurrentToken(currentToken + 1);
      setWaiting(waiting - 1);
    }
  };

  const resetQueue = () => {
    setToken(null);
    setCurrentToken(12);
    setWaiting(5);
    setName("");
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">🎟️ Digital Queue</div>

        <div className="status">
          <span className="status-dot"></span>
          Queue Live
        </div>
      </header>

      <main className="container">

        <section className="hero">
          <p className="tag">SMART QUEUE SYSTEM</p>

          <h1>
            Skip the line.
            <br />
            <span>Save your time.</span>
          </h1>

          <p className="subtitle">
            Join the queue digitally and know exactly when it is your turn.
          </p>
        </section>

        <section className="dashboard">

          <div className="join-card">
            <div className="card-title">
              <span>👤</span>
              <div>
                <h2>Join the Queue</h2>
                <p>Get your digital token</p>
              </div>
            </div>

            <label>Your Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Select Service</label>

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option>General</option>
              <option>Doctor Consultation</option>
              <option>Bank Service</option>
              <option>Customer Support</option>
              <option>Government Service</option>
            </select>

            <button className="join-btn" onClick={joinQueue}>
              Get My Token →
            </button>

            {token && (
              <div className="token-result">
                <p>Your Token</p>
                <h3>#{token}</h3>
                <span>{service}</span>
                <small>Thank you, {name}!</small>
              </div>
            )}
          </div>

          <div className="queue-card">
            <div className="queue-header">
              <div>
                <p>NOW SERVING</p>
                <h2>Token #{currentToken}</h2>
              </div>

              <div className="live-icon">●</div>
            </div>

            <div className="queue-info">

              <div className="info-box">
                <span>👥</span>
                <div>
                  <strong>{waiting}</strong>
                  <p>People Waiting</p>
                </div>
              </div>

              <div className="info-box">
                <span>⏱️</span>
                <div>
                  <strong>{waiting * 3} min</strong>
                  <p>Estimated Wait</p>
                </div>
              </div>

            </div>

            <button className="next-btn" onClick={nextCustomer}>
              Call Next Customer
            </button>
          </div>

        </section>

        <button className="reset-btn" onClick={resetQueue}>
          Reset Queue
        </button>

      </main>

      <footer>
        © 2026 Digital Queue • Smart Queue Management
      </footer>
    </div>
  );
}

export default App;