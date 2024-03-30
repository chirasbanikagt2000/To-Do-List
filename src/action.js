export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const VIEW_TASK = "VIEW_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const LOAD_TASKS = "LOAD_TASKS";
export const SAVE_TASKS = "SAVE_TASKS";
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const viewTask = (taskId, message) => ({
  type: VIEW_TASK,
  payload: taskId,
  message,
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const loadTasks = (tasks) => ({
  type: LOAD_TASKS,
  payload: tasks,
});

export const saveTasks = () => ({
  type: SAVE_TASKS,
});
