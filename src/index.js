import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux Imports
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// #4
  // Action Types
const UPDATE_UNIVERSITY = 'UPDATE_UNIVERSITY';
const UPDATE_JOKE = 'UPDATE_JOKE';
const UPDATE_LOADING = 'UPDATE_LOADING';

  // Actions
export function updateUniversity(university) {
  return {
    type: UPDATE_UNIVERSITY,
    payload: university
  }
};

function updateJoke(joke) {
  return {
    type: UPDATE_JOKE,
    payload: joke
  }
};

function updateLoading(val) {
  return {
    type: UPDATE_LOADING,
    payload: val
  }
};

  // Async Actions
export function getJoke() {
  return async dispatch => {
    const res = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
    const { value: { joke } } = await res.json();

    dispatch(updateJoke(joke));
    dispatch(updateLoading(0));
  }
}
  


// #1
const initial_state = {
  uni_name: 'Georgia Tech',
  quote: '',
  loading: 1
}

// #2
const reducer = (state = initial_state, action) => {
  switch(action.type) {
    case UPDATE_UNIVERSITY:
      return { ...state, uni_name: action.payload };
    case UPDATE_JOKE:
      return { ...state, joke: action.payload };
    case UPDATE_LOADING:
      return { ...state, loading: action.payload };
    default: return state;
  }
}

// #3
const store = createStore(reducer, applyMiddleware(thunk));

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
