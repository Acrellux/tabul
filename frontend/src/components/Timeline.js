import React from 'react';
import '../styles/style.css'; // Assuming your styles are in style.css

const Timeline = ({ events }) => {
  const currentDate = new Date();

  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      {events.map(event => (
        <div
          key={event.id}
          className="event"
          style={{
            backgroundColor: event.color || "var(--light-red)", // default color if not set
            position: event.date > currentDate ? 'absolute' : 'relative',
            top: event.date > currentDate ? '20px' : 'unset',
            bottom: event.date <= currentDate ? '20px' : 'unset',
          }}
        >
          {event.title}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
