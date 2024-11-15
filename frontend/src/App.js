import React, { useState, useEffect } from "react";
import "./styles/style.css";

function App() {
  const [offsetX, setOffsetX] = useState(0); // Track horizontal offset
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); // Start position of the drag

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Reset the y-axis
    document.documentElement.style.setProperty("--y-offset", "0px");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX; // Horizontal movement
    setOffsetX((prev) => prev + deltaX);
    setStartX(e.clientX);

    // Reset y-axis offset
    document.documentElement.style.setProperty("--y-offset", "0px");
  };

  useEffect(() => {
    // Apply the horizontal offset dynamically
    document.documentElement.style.setProperty("--x-offset", `${offsetX}px`);
  }, [offsetX]);

  return (
    <div
      className="container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <h1 className="title">tabul.app</h1>
      <div className="grid-container">
        <div className="grid"></div>
      </div>
    </div>
  );
}

export default App;
