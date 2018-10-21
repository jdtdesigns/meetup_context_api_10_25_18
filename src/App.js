import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTitle } from './';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <input type="text" value={this.props.title} onChange={this.props.handleChange} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.title
});

const mapDispatchToProps = dispatch => ({
  handleChange(e) {
    dispatch(updateTitle(e.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
