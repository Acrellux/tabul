import React, { useState, useEffect } from "react";
import "./styles/style.css";

function App() {
  const [offsetX, setOffsetX] = useState(0); // Track horizontal offset
  const [offsetY, setOffsetY] = useState(0); // Track vertical offset
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); // Start position of the drag (x)
  const [startY, setStartY] = useState(0); // Start position of the drag (y)

  // For Timeline
  const [time, setTime] = useState(Date.now()); // Start the time from current date
  const [timelineOffset, setTimelineOffset] = useState(0); // Track timeline movement

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Reset y-axis to 0 after drag
    document.documentElement.style.setProperty("--y-offset", `${offsetY}px`);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX; // Horizontal movement
    const deltaY = e.clientY - startY; // Vertical movement

    setOffsetX((prev) => prev + deltaX); // Update horizontal offset
    setOffsetY((prev) => prev + deltaY); // Update vertical offset

    setStartX(e.clientX); // Update the start position for x
    setStartY(e.clientY); // Update the start position for y
  };

  // Update the timeline every second to simulate time passing
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
      setTimelineOffset((prev) => prev - 0.05); // Slowly move the timeline left
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    // Apply the horizontal and vertical offset dynamically
    document.documentElement.style.setProperty("--x-offset", `${offsetX}px`);
    document.documentElement.style.setProperty("--y-offset", `${offsetY}px`);
  }, [offsetX, offsetY]);

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

      {/* Timeline */}
      <div
        className="timeline"
        style={{
          left: `calc(50% + ${timelineOffset}px)`, // Center the timeline and move it
        }}
      >
        <div className="blue-line">
          <div className="current-time-circle"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
