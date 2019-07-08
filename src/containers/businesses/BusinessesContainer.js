import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import PageBusinesses from '../../components/businesses/PageBusinesses';
import { 
  updateBusinessFilter, 
  fetchBusinesses,
  resetBusinessFilter
} from './actions';
import { neutralWhite } from '../../components/theme/colors';

const styles = theme => ({
  gridList: {
      overflowY: 'scroll',
      maxHeight: 800
  },
  toolbar: {
    backgroundColor: neutralWhite,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
});

function mapDispatchToProps(state) {
    return {
      businesses: state.businesses.businesses,
      businessFilter: state.businesses.businessFilter
    };
}

export default compose(withStyles(styles), connect(mapDispatchToProps, {
  updateBusinessFilter,
  fetchBusinesses,
  resetBusinessFilter
}))(PageBusinesses);