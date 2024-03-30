import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./action";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({ id: Date.now(), text: taskText }));
      setTaskText("");
      console.log("Tasks stored:", JSON.parse(localStorage.getItem("tasks")));
    }
  };

  return (
    <div className="add">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
