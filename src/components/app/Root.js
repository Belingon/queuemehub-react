import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../containers/app/AppContainer';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  };
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
