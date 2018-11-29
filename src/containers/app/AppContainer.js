import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import App from '../../components/app/App';

function mapDispatchToProps(state) {
    return {
      browser: state.browser,
      value : state.app.value
    };
}


export default withRouter(connect(mapDispatchToProps)(App));