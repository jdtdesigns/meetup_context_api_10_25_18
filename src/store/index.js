import React, { Component, createContext } from 'react';
import * as main_actions from './main_actions';

const Context = createContext(); // Provider & Consumer

const Consumer = Context.Consumer;

export class Provider extends Component {
  state = {
    uni_name: 'Georgia Tech',
    joke: '',
    bg: ''
  }

  attachMethods = data_obj => {
    return Object.keys(data_obj).reduce((obj, prop) => {
      obj[prop] = data_obj[prop].bind(this);

      return obj;
    }, {});
  }

  render() {
    return (
      <Context.Provider value={{
        ...this.state,
        ...this.attachMethods(main_actions)
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export function connectStore(DependentComponent) {
  return class extends Component {
    render() {
      return (
        <Consumer>
          {context => <DependentComponent {...context} />}
        </Consumer>
      )
    }
  }
}