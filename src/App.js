import React, { Component, Fragment } from 'react';
import './App.css';

const Student = props => (
  <Fragment>
    <h4>I attend the bootcamp at {props.uni_name}</h4>

    <label>
      Update Name:
      <input type="text" name="uni_name" value={props.uni_name} onChange={props.handleChange} />
    </label>
  </Fragment>
);

const Class = props => (
  <Fragment>
    <h3>December class at {props.uni_name}</h3>  

    <Student uni_name={props.uni_name} handleChange={props.handleChange} />
  </Fragment>
);

class University extends Component {
  state = {
    uni_name: 'Georgia Tech'
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <Fragment>
        <h1>Welcome to {this.state.uni_name}</h1>

        <Class uni_name={this.state.uni_name} handleChange={this.handleChange} />
      </Fragment>
    );
  }
}

export default University;
