import React, { useState } from "react";
import "./styles/style.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskDeath, setTaskDeath] = useState(false);

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name: "New Task",
      time: new Date().getTime(),
    };
    setTasks([...tasks, newTask]);
  };

  const handleTaskDeath = () => {
    if (tasks.length > 0) {
      setTaskDeath(true);
      setTimeout(() => setTaskDeath(false), 3000); // Task Death message for 3 seconds
    }
  };

  return (
    <div>
      <header>
        Tabul App
      </header>
      <div className="timeline">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`event ${task.time < Date.now() ? "past-event" : "future-event"}`}
            style={{ left: `${task.time % 100}%` }}
          >
            {task.name}
          </div>
        ))}
        <div className="future-line"></div>
      </div>

      <div className="voidboard">
        <div
          className="sticky-note"
          style={{ top: "50px", left: "100px" }}
        >
          Sticky Note 1
        </div>
        <div
          className="sticky-note"
          style={{ top: "200px", left: "300px" }}
        >
          Sticky Note 2
        </div>
      </div>

      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={handleTaskDeath}>Taskdeath</button>

      {taskDeath && (
        <div className="task-death-message">
          Task Death Activated! All events for today are deleted!
        </div>
      )}
    </div>
  );
}

export default App;
