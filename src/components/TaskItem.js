// TaskItem.js
import React from 'react';

const TaskItem = ({ task, markComplete, deleteTask }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name} - {task.dueDate}
      </span>
      <button onClick={() => markComplete(task.id)}>Mark Complete</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
