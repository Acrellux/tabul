import React, { useState, useRef } from 'react';
import './styles/style.css';
import Timeline from './components/Timeline';

function App() {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventColor, setEventColor] = useState('');
  const [events, setEvents] = useState([]); // Store the events
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 }); // Position of the whole app container

  const dragRef = useRef(null);

  // Handle drag functionality
  const handleMouseMove = (e) => {
    if (dragRef.current.isDragging) {
      const offsetX = e.clientX - dragRef.current.startX;
      const offsetY = e.clientY - dragRef.current.startY;
      setDragPosition({
        x: dragRef.current.initialX + offsetX,
        y: dragRef.current.initialY + offsetY,
      });
    }
  };

  const handleMouseDown = (e) => {
    dragRef.current.isDragging = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.initialX = dragPosition.x;
    dragRef.current.initialY = dragPosition.y;
    document.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseUp = () => {
    dragRef.current.isDragging = false;
    document.removeEventListener('mousemove', handleMouseMove);
  };

  // Function to add an event
  const handleAddEvent = () => {
    if (eventTitle && eventDate) {
      const newEvent = {
        id: Date.now(),
        title: eventTitle,
        date: new Date(eventDate),
        color: eventColor || 'var(--light-red)', // Default color if not provided
      };
      setEvents([...events, newEvent]);
      setEventTitle('');
      setEventDate('');
      setEventColor('');
    } else {
      alert('Please provide both title and date for the event.');
    }
  };

  return (
    <div className="App" ref={dragRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} style={{ transform: `translate(${dragPosition.x}px, ${dragPosition.y}px)` }}>
      <h1>Tabul - Infinite Timeline</h1>

      {/* Event input */}
      <div className="event-input">
        <input
          type="text"
          placeholder="Event Title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <input
          type="color"
          value={eventColor}
          onChange={(e) => setEventColor(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>

      {/* Draggable Grid of Dots */}
      <div className="grid-container">
        <div
          className="grid"
        >
          {[...Array(100)].map((_, index) => (
            <div key={index} className="dot"></div>
          ))}
        </div>
      </div>

      {/* Draggable Timeline */}
      <div className="timeline-container">
        <div className="timeline-line" />
        <div className="timeline-hour-lines">
          {[...Array(24)].map((_, index) => (
            <div key={index} className="hour-line" style={{ left: `${index * 100}px` }} />
          ))}
        </div>
      </div>

      {/* Timeline Component */}
      <Timeline events={events} />
    </div>
  );
}

export default App;
