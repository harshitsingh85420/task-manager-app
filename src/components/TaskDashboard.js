// TaskDashboard.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filtertask, setfilterTask] =useState('all');
  

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const markTaskComplete = (taskId) => {
    // Implement marking task as complete
    const updatedTasks=tasks.map(task=>{
        if(task.id===taskId){
            return {...task,completed:!task.completed};
        }
        return task;
    });
    setTasks(updatedTasks);
 
  };

  const deleteTask = (taskId) => {
    // Implement deleting a task
    const updatedTasks = tasks.filter(task => task.id !== taskId);
  setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            markComplete={markTaskComplete}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskDashboard;
