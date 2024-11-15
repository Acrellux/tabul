import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Make sure App.js is in the same folder as index.js
import "./styles/style.css"; // This matches styles in frontend/src/styles/

const root = ReactDOM.createRoot(document.getElementById("root")); // Must match `id="root"` in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
