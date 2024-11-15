import React, { useState, useEffect } from "react";
import "./styles/style.css";

function App() {
  const [cameraX, setCameraX] = useState(0); // Camera horizontal position
  const [cameraY, setCameraY] = useState(0); // Camera vertical position
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); // Start position of the drag (x)
  const [startY, setStartY] = useState(0); // Start position of the drag (y)

  // For Timeline
  const [time, setTime] = useState(Date.now()); // Start the time from current date
  const [timelineY, setTimelineY] = useState(0); // Track vertical timeline position

  // For the grid's leftward movement (simulating time passing)
  const [gridX, setGridX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX; // Horizontal movement
    const deltaY = e.clientY - startY; // Vertical movement

    // Move the camera (the grid) horizontally and vertically when dragging
    setCameraX((prev) => prev + deltaX);
    setCameraY((prev) => prev + deltaY); // Move the timeline vertically with the mouse

    // Move the grid horizontally as well
    setGridX((prev) => prev + deltaX); // Move the grid with mouse drag on X axis

    setStartX(e.clientX); // Update the start position for x
    setStartY(e.clientY); // Update the start position for y

    // Update the timeline's vertical position based on mouse drag (y movement)
    setTimelineY(cameraY + deltaY);
  };

  // Update the grid movement (time passing) every second
  useEffect(() => {
    const interval = setInterval(() => {
      // Slowly move the grid to the left
      setGridX((prev) => prev - 0.5); // Move grid left by 0.5 pixels every second
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    // Apply the horizontal and vertical camera offset dynamically for the grid
    document.documentElement.style.setProperty("--camera-x", `${cameraX}px`);
    document.documentElement.style.setProperty("--camera-y", `${cameraY}px`);
  }, [cameraX, cameraY]);

  return (
    <div
      className="container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <h1 className="title">tabul.app</h1>
      <div className="grid-container">
        <div
          className="grid"
          style={{
            transform: `translateX(${gridX}px) translateY(${cameraY}px)`, // Move the grid with both X and Y
          }}
        ></div>

        {/* Timeline */}
        <div
          className="timeline"
          style={{
            left: `calc(50% + ${cameraX}px)`, // Move timeline with the camera
            top: `${timelineY}px`, // Move timeline vertically with mouse drag
          }}
        >
          <div className="blue-line">
            <div className="current-time-circle"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
