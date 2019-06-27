import { connect } from 'react-redux';
import PageBusinesses from '../../components/businesses/PageBusinesses';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';

const styles = theme => ({
  gridList: {
      overflowY: 'scroll',
      maxHeight: 800
    }
});

function mapDispatchToProps(state) {
    return {
      browser: state.browser,
    };
}

export default compose(withStyles(styles), connect(mapDispatchToProps))(PageBusinesses);