import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import App from './App';

// Display an alert message when the app loads
window.alert("Warning: This is a browser message example!");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
