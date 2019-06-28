import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import PageBusinesses from '../../components/businesses/PageBusinesses';
import { 
  updateBusinessFilter, 
  fetchBusinesses
} from './actions';

const styles = theme => ({
  gridList: {
      overflowY: 'scroll',
      maxHeight: 800
    }
});

function mapDispatchToProps(state) {
    return {
      businesses: state.businesses.businesses,
      businessFilter: state.businesses.businessFilter
    };
}

export default compose(withStyles(styles), connect(mapDispatchToProps, {
  updateBusinessFilter,
  fetchBusinesses
}))(PageBusinesses);