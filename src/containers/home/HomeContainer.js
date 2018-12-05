import { connect } from 'react-redux';
import HomePage from '../../components/home/HomePage';

function mapDispatchToProps(state) {
    return {
      browser: state.browser,
      otherValue: state.home.otherValue
    };
}

export default connect((mapDispatchToProps))(HomePage);