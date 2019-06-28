import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import {updateBusinessFilter} from '../businesses/actions';
import HomePage from '../../components/home/HomePage';

const styles = theme => ({
  formControl: {
    minWidth: 200
  },
  welcomeText: {
      textAlign: 'center', 
      paddingTop: 50, 
      fontSize: 'large'
  },
  actionGroup: {
      display: 'flex', 
      justifyContent:'center', 
      paddingTop: 20, 
      paddingBottom:20
  },
  textAlignCenter: {
      textAlign:'center'
  },
  marginTop0: {
      marginTop: 0
  }
});

function mapDispatchToProps(state) {
    return {
      businessFilter: state.businesses.businessFilter
    };
}

export default compose(withStyles(styles), connect(mapDispatchToProps, {updateBusinessFilter}))(HomePage);