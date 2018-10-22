import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateUniversity, updateQuote } from './';
import './App.css';

// #6 -- Share properties from the global state with a component
//  -- would be done for each component
const mapStateToProps = state => ({
  uni_name: state.uni_name,
  quote: state.quote
});

// #7 -- Would be imported
const mapDispatchesToProps = dispatch => ({
  handleChange(e) {
    dispatch(updateUniversity(e.target.value));
  },
  getQuote() {
    fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
      .then(res => res.json())
      .then(({ value: { joke } }) => dispatch(updateQuote(joke)));
  }
});


const Student = connect(mapStateToProps, mapDispatchesToProps)(props => (
  <Fragment>
    <h4>I attend the bootcamp at {props.uni_name}</h4>

    <label>
      Update Name:
      <input type="text" name="uni_name" value={props.uni_name} onChange={props.handleChange} />
    </label>
  </Fragment>
));


const Class = connect(mapStateToProps, mapDispatchesToProps)(props => (
  <Fragment>
    <h3>December class at {props.uni_name}</h3>

    <p dangerouslySetInnerHTML={{ __html: props.quote }}></p>

    <Student />
  </Fragment>
));


class University extends Component {
  componentDidMount = () => this.props.getQuote();

  render() {
    return (
      <Fragment>
        <h1>Welcome to {this.props.uni_name}</h1>

        <Class />
      </Fragment>
    );
  }
}

// #8 -- Connect component to store
export default connect(mapStateToProps, mapDispatchesToProps)(University);

