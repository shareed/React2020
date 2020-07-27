import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./reducers";
import { Provider } from "react-redux";
import logger from 'redux-logger';//logs previous state, new state and action
import './index.css';
import App from './App';




// const logger = ({ getState }) => next => action => {
//   console.log("Dispatching action:", action);
//   next(action);
// };

let store = createStore(appReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);


