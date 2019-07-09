import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PageBusinesses from '../../components/businesses/PageBusinesses';
import { 
  updateBusinessFilter, 
  fetchBusinesses,
  updateBusiness
} from './actions';


function mapDispatchToProps(state) {
    return {
      business: state.businesses.business,
      businesses: state.businesses.businesses,
      businessFilter: state.businesses.businessFilter
    };
}

export default compose(connect(mapDispatchToProps, {
  updateBusinessFilter,
  fetchBusinesses,
  updateBusiness
}))(PageBusinesses);