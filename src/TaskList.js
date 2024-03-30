// //TaskList.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "./action";
import "./styles.css";

/*const TaskList = () => {
  const [showTasks, setShowTasks] = useState(false);
  const [viewedTask, setViewedTask] = useState();

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
    dispatch(saveTasks());
  };
  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
    dispatch(saveTasks());
  };

  useEffect(() => {
    const savedTasks = JSON.parse(window.localStorage.getItem("tasks"));
    if (savedTasks) {
      console.log("Tasks loaded:", savedTasks);
      dispatch(loadTasks(savedTasks));
    }
  }, [dispatch]);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h2>Tasks</h2>

      <button
        onClick={() => {
          if (viewedTask) {
            // If a task is being viewed, toggle back to showing all tasks and clear the viewed task
            setViewedTask(null);
          } else {
            // If no task is being viewed, toggle between showing and hiding tasks
            setShowTasks(!showTasks);
          }
        }}
      >
        {viewedTask ? "Back to Tasks" : showTasks ? "Hide Tasks" : "View Tasks"}
      </button>

      {/* {showTasks && (
        <ul className="task-list">
          {tasks.length === 0 ? (
            <li className="empty-task">No tasks available</li>
          ) : (
            tasks.map(task => (
              <li className="task-item" key={task.id}>
                {task.text}
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </li>
              
            ))

           
          )}
        </ul>
      )} */ /*
      {showTasks && (
        <ul className="task-list">
          {tasks.length === 0 ? (
            <li className="empty-task">No tasks available</li>
          ) : (
            tasks.map((task) => (
              <li className="task-item" key={task.id}>
                <span
                  className={`task-text ${task.completed ? "completed" : ""}`}
                  onClick={() => handleToggleTask(task.id)}
                >
                  {task.text}
                </span>
                <button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}; */

const TaskList = () => {
  const [showTasks, setShowTasks] = useState(false);
  const [viewedTask, setViewedTask] = useState();

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = window.localStorage.getItem("tasks");
    if (savedTasks) {
      dispatch({ type: "LOAD_TASKS", payload: JSON.parse(savedTasks) });
    }
  }, [dispatch]);

  return (
    <div>
      <h2>Tasks</h2>

      <button
        onClick={() => {
          if (viewedTask) {
            // If a task is being viewed, toggle back to showing all tasks and clear the viewed task
            setViewedTask(null);
          } else {
            // If no task is being viewed, toggle between showing and hiding tasks
            setShowTasks(!showTasks);
          }
        }}
      >
        {viewedTask ? "Back to Tasks" : showTasks ? "Hide Tasks" : "View Tasks"}
      </button>

      {showTasks && (
        <ul className="task-list">
          {tasks.length === 0 ? (
            <li className="empty-task">No tasks available</li>
          ) : (
            tasks.map((task) => (
              <li className="task-item" key={task.id}>
                <span
                  className={`task-text ${task.completed ? "completed" : ""}`}
                  onClick={() => handleToggleTask(task.id)}
                >
                  {task.text}
                </span>
                <button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
