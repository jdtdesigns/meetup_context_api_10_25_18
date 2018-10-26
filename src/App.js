import React, { Component, Fragment } from 'react';
import './App.css';

import { connectStore } from './store';

const Student = connectStore(props => (
  <Fragment>
    <input type="text" name="bg" value={props.bg} onChange={props.handleChange} />
  </Fragment>
));

class University extends Component {
  componentDidMount = () => {
    this.props.getJoke();
  }
  

  render() {
    return (
      <Fragment>
        <h1 style={{backgroundColor: this.props.bg}}>Welcome to {this.props.uni_name}</h1>

        <input type="text" name="uni_name" value={this.props.uni_name} onChange={this.props.handleChange} />

        <p dangerouslySetInnerHTML={{ __html: this.props.joke }}></p>

        <button onClick={this.props.getJoke}>Get Joke</button>

        <Student />
      </Fragment>
    );
  }
}

export default connectStore(University);
