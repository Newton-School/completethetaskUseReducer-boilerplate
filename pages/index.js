import React, { useEffect, useState, useReducer } from "react";



const initialTasks = [
  { id: 1, name: 'Learn React', status: 'todo' },
  { id: 2, name: 'Learn Redux', status: 'todo' },
];

const tasksReducer = (state, action) => {

};
export default function App() {
  
 
  const addTask = (name) => {
    dispatch();
  };

  const toggleTaskStatus = (id) => {
    dispatch();
  };

  const deleteTask = (id) => {
    dispatch();
  };

  return (
    <div>
      <input />
      <button id="addTask" onClick={addTask}>Add Task</button>
      <ul >
       
          <li>
            <h2 className="taskName">taskname</h2>
            <p className="status">Status:taskstatus</p>
            <button className="toggleTaskBtn" onClick={toggleTaskStatus}>
              Mark as taskstatus 
            </button>
            <button className="deleteTaskBtn" onClick={ deleteTask}>Delete Task</button>
          </li>
        
      </ul>
    </div>
  );
  }
  