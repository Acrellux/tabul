import React from 'react';
import './styles/style.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Welcome to Tabul</h1>
        <p>Plan your tasks on the Voidboard timeline</p>
      </header>
      <main className="voidboard">
        <div className="timeline">
          <div className="event past-event">Past Event 1</div>
          <div className="event future-event">Future Event 1</div>
          <div className="event future-event">Future Event 2</div>
          <div className="event past-event">Past Event 2</div>
        </div>
      </main>
    </div>
  );
}

export default App;
