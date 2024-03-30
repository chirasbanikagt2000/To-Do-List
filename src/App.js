// App.js
// App.js
/* import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskReducer from './reducers';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

import './styles.css';

const store = createStore(taskReducer);

const App = () => {
  return (
    <Provider store={store}>
     
      <div>
        <h1>ToDo App</h1>
        <TaskInput />
        <TaskList />
      </div>
     
    </Provider>
  );
};

export default App; */

import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import taskReducer from "./reducers";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

import "./styles.css";

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// Load tasks from local storage when the app loads
const savedTasks = JSON.parse(localStorage.getItem("tasks"));
if (savedTasks) {
  store.dispatch({ type: "LOAD_TASKS", payload: savedTasks });
}

const App = () => {
  return (
    <Provider store={store}>
      <div className="todo">
        <h1>ToDo App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
