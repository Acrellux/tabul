import React, { useState, useEffect } from "react";
import "./styles/style.css";

function App() {
  const [cameraX, setCameraX] = useState(0); // Camera horizontal position
  const [cameraY, setCameraY] = useState(0); // Camera vertical position
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const [gridX, setGridX] = useState(0); // Infinite grid horizontal tracking

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

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    setCameraX((prev) => prev + deltaX);
    setCameraY((prev) => prev + deltaY);

    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  // Move the grid slowly to the left
  useEffect(() => {
    const interval = setInterval(() => {
      setGridX((prev) => prev - 0.5); // Simulate time passing
    }, 16); // Approx. 60 FPS

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <h1 className="title">tabul.app</h1>
      <div className="box">
        <div
          className="grid"
          style={{
            transform: `translate(${gridX + cameraX}px, ${cameraY}px)`,
            backgroundPosition: `${-gridX - cameraX}px ${-cameraY}px`,
          }}
        ></div>
        <div
          className="timeline"
          style={{
            left: "50%", // Timeline stays centered horizontally
            top: `calc(50% + ${cameraY}px)`, // Moves vertically with the camera
          }}
        >
          <div className="blue-line">
            <div className="current-time-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
