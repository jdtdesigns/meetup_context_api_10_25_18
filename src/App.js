import React, { Component, Fragment } from 'react';
import './App.css';

// Redux
import { connect } from 'react-redux';
import { updateUniversity, getJoke } from './';


const Student = connect(
  state => ({ uni_name: state.uni_name }), // mapStateToProps
  { updateUniversity } // mapDispatchesToProps
)(props => (
  <Fragment>
    <h4>I attend the bootcamp at {props.uni_name}</h4>
    <label>
      Update Name:
      <input 
        type="text" 
        name="uni_name" 
        value={props.uni_name} 
        onChange={({target: {value}}) => props.updateUniversity(value)} />
    </label>
  </Fragment>
));


const Class = connect(
  state => ({ uni_name: state.uni_name, joke: state.joke, loading: state.loading }) // mapStateToProps
)(props => (
  <Fragment>
    <h3>December class at {props.uni_name}</h3>
    
    {props.loading ? <i className="fa fa-spinner fa-spin"></i> : <p dangerouslySetInnerHTML={{ __html: props.joke }}></p>}

    <Student />
  </Fragment>
));


class University extends Component {
  componentDidMount = () => {
    this.props.getJoke();
  };

  render() {
    return (
      <Fragment>
        <h1>Welcome to {this.props.uni_name}</h1>

        <Class />
      </Fragment>
    );
  }
}

// #6-A -- Share properties from the global state with the component
const mapStateToProps = state => ({
  uni_name: state.uni_name
});

// #6-B -- connect actions and/or dispatches with the component
const mapDispatchesToProps = {
  getJoke
};

// #6 -- Connect component to store
export default connect(mapStateToProps, mapDispatchesToProps)(University);

