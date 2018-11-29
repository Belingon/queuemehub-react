import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from '../../router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
              {this.props.value}
          </div>
        </header>
        <Router/>
      </div>
    );
  }
}

App.PropTypes = {
  value: PropTypes.string.isRequired
}
export default App;
