import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import App from '../../components/app/App';

import {
  updateUser
} from './actions';

function mapDispatchToProps(state) {
    return {
      browser: state.browser,
      user : state.app.user
    };
}


export default withRouter(connect(mapDispatchToProps, {updateUser})(App));