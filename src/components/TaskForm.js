// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      dueDate: dueDate || null,
      completed: false,
    };

    addTask(newTask);
    setTaskName('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </label>
      <button type="submit">Add Task</button>
      <button onClick={() => setFilter('all')}>Show All</button>
  <button onClick={() => setFilter('completed')}>Show Completed</button>
  <button onClick={() => setFilter('active')}>Show Active</button>

  
    </form>
  );
};

export default TaskForm;
