import React, { useState } from "react";
import "./styles/style.css";

const App = () => {
  const [gridOffsetX, setGridOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      setGridOffsetX((prevOffset) => prevOffset + deltaX);
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Reset to y = 0 if the grid is released
    setGridOffsetX((prevOffset) => prevOffset);
  };

  return (
    <div>
      {/* Title */}
      <header className="hero is-primary">
        <div className="hero-body has-text-centered">
          <h1 className="title">tabul.app</h1>
        </div>
      </header>

      {/* Grid Container */}
      <main
        className="grid-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Handle mouse leaving window
      >
        {/* Grid */}
        <div
          className="grid"
          style={{ transform: `translateX(${gridOffsetX}px)` }}
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <div className="grid-cell" key={i}></div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
