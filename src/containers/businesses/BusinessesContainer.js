import { connect } from 'react-redux';
import PageBusinesses from '../../components/businesses/PageBusinesses';

function mapDispatchToProps(state) {
    return {
      browser: state.browser,
    };
}

export default connect((mapDispatchToProps))(PageBusinesses);