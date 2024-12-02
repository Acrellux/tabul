// src/components/TopMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const TopMenu = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/timeline" className="navbar-item has-text-light is-family-code">Timeline</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/voidboard" className="navbar-item has-text-light is-family-code">Voidboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;