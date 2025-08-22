import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      {/* Input & Button */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200"
        />
        <button
          onClick={addTask}
          className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {tasks.map((t, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-pink-50 p-2 rounded-lg shadow-sm hover:scale-105 transform transition-transform duration-200"
          >
            <span>{t}</span>
            <button
              onClick={() => removeTask(i)}
              className="text-pink-500 hover:text-pink-700 font-bold transition-colors duration-200"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
