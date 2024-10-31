import React, { useState } from "react";
import "./EventScheduler.css";
function EventScheduler() {
  const [events, setEvents] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const addEvent = () => {
    if (startTime >= endTime) {
      alert("End time should be after start time!");
      return;
    }
    const newEvent = {
      start_time: parseInt(startTime),
      end_time: parseInt(endTime),
    };
    setEvents([...events, newEvent]);
    setStartTime("");
    setEndTime("");
  };

  const deleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div className="scheduler-container">
      <h2 className="scheduler-header">Daily Event Scheduler</h2>

      <div className="event-form">
        <input
          type="number"
          min="0"
          max="23"
          placeholder="Start Time (0-23)"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="number"
          min="0"
          max="23"
          placeholder="End Time (0-23)"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <button onClick={addEvent}>Add Event</button>
      </div>

      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-item" key={index}>
            <span>
              {event.start_time}:00 - {event.end_time}:00
            </span>
            <button
              className="delete-button"
              onClick={() => deleteEvent(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventScheduler;
