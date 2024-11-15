import React from "react";

const App = () => {
  return (
    <div className="container is-fluid">
      <header className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Tabul - Your Infinite Organizer
          </p>
          <p className="subtitle">
            Organize tasks, schedule events, and stay on top of your game.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="columns">
          <div className="column">
            <button className="button is-info">Add Event</button>
          </div>
          <div className="column">
            <button className="button is-warning">Create Sticky Note</button>
          </div>
          <div className="column">
            <button className="button is-danger">Taskdeath Mode</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>© 2024 Tabul. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
