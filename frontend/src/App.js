// src/App.js
import React from 'react';
import AppRoutes from './Routes';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">Home</a>
        </div>
        <div className="navbar-menu">
          <a className="navbar-item" href="/timeline">Timeline</a>
          <a className="navbar-item" href="/voidboard">Voidboard</a>
        </div>
      </nav>
      <AppRoutes />
    </div>
  );
}

export default App;