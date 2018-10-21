import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Types
const UPDATE_TITLE = 'UPDATE_TITLE';

// Actions
export const updateTitle = payload => ({
  type: UPDATE_TITLE,
  payload
});

const initial_state = {
  title: 'Redux Example'
}


const reducer = (state = initial_state , {type, payload}) => {
  switch(type) {
    case UPDATE_TITLE:
      return {...state, title: payload}
    default: return state;
  }
}

const store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
