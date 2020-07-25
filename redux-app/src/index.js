import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { newReducer } from './reducers'

function reducer() {
  return {
    user: {
      name: "shannon",
      favcolor: "purple"
    },
    movies: [
      "Where The heart Is",
      "Harry Potter",
      "Black Panther",
      "Girls Trip"
    ],
    todoList: [
      { task: 'Learn to Code', id: 0, completed: false },
      { task: 'Learn to Drive', id: 1, completed: false },
      { task: 'Learn to Walk', id: 2, completed: false }
    ],
    moneyToMake: 500000000000
   
  };
}

// const store = createStore(reducer)
const store = createStore(newReducer)


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

