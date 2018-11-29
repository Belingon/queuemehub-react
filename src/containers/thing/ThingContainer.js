import { connect } from 'react-redux';
import ThingPage from '../../components/thing/ThingPage';

function mapDispatchToProps(state) {
    return {
      browser: state.browser,
      otherValue: state.things.otherValue
    };
}

export default connect((mapDispatchToProps))(ThingPage);