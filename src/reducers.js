// actions.js

// reducers.js
import {
  ADD_TASK,
  DELETE_TASK,
  VIEW_TASK,
  TOGGLE_TASK,
  LOAD_TASKS,
  SAVE_TASKS,
} from "./action";

const initialState = {
  tasks: [],
  viewedTask: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case VIEW_TASK:
      return {
        ...state,
        viewedTask: action.payload,
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case LOAD_TASKS:
      return {
        ...state,
        tasks: [...action.payload],
      };

    case SAVE_TASKS:
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      return state;
    default:
      return state;
  }
};

export default taskReducer;
