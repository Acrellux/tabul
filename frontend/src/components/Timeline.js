import React, { useState, useRef, useEffect } from 'react';
import '../styles.css';

const Timeline = () => {
  const timelineRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [timelinePosition, setTimelinePosition] = useState({ x: 0, y: 0 });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  // Update viewport size on window resize
  useEffect(() => {
    const updateViewportSize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight - 60, // Account for the menu height
      });
    };
    updateViewportSize();
    window.addEventListener('resize', updateViewportSize);
    return () => window.removeEventListener('resize', updateViewportSize);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragOffset({ x: e.clientX - timelinePosition.x, y: e.clientY - timelinePosition.y });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setTimelinePosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Render visible grid lines based on viewport and position
  const renderGrid = () => {
    const cellSize = 100; // Size of each grid cell
    const { width, height } = viewportSize;

    const cols = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);

    const startX = Math.floor(-timelinePosition.x / cellSize) - 1;
    const startY = Math.floor(-timelinePosition.y / cellSize) - 1;

    const gridElements = [];

    for (let row = startY; row < startY + rows + 2; row++) {
      for (let col = startX; col < startX + cols + 2; col++) {
        gridElements.push(
          <div
            key={`${row}-${col}`}
            className="grid-cell"
            style={{
              left: col * cellSize,
              top: row * cellSize,
              width: cellSize,
              height: cellSize,
            }}
          />
        );
      }
    }

    return gridElements;
  };

  const renderTimelineHours = () => {
    const hourWidth = 200; // Distance between hour markers
    const { width } = viewportSize;

    const cols = Math.ceil(width / hourWidth);
    const startX = Math.floor(-timelinePosition.x / hourWidth) - 1;

    const hourElements = [];

    for (let col = startX; col < startX + cols + 2; col++) {
      hourElements.push(
        <div
          key={`hour-${col}`}
          className="timeline-hour"
          style={{
            left: col * hourWidth,
          }}
        >
          {`${col >= 0 ? col : 24 + (col % 24)}:00`}
        </div>
      );
    }

    return hourElements;
  };

  return (
    <div
      className="timeline-wrapper"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        ref={timelineRef}
        className="timeline"
        style={{
          transform: `translate(${timelinePosition.x}px, ${timelinePosition.y}px)`,
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Render the visible grid */}
        {renderGrid()}

        {/* Timeline line */}
        <div className="timeline-line" />

        {/* Render the visible hours */}
        {renderTimelineHours()}
      </div>
    </div>
  );
};

export default Timeline;
