import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux Imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// #4
// Action Types
const UPDATE_UNIVERSITY = 'UPDATE_UNIVERSITY';
const UPDATE_QUOTE = 'UPDATE_QUOTE';

// Actions
export const updateUniversity = payload => ({
  type: UPDATE_UNIVERSITY,
  payload
});

export const updateQuote = payload => ({
  type: UPDATE_QUOTE,
  payload
});



// #1
const initial_state = {
  uni_name: 'Georgia Tech',
  quote: ''
}

// #2
const reducer = (state = initial_state, {type, payload}) => {
  switch(type) {
    case UPDATE_UNIVERSITY:
      return {...state, uni_name: payload}
    case UPDATE_QUOTE:
      return { ...state, quote: payload }
    default: return state;
  }
}

// #3
const store = createStore(reducer);

ReactDOM.render((
  // #5 PROVIDE our app with the store
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
