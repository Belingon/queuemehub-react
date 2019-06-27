import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import App from '../../components/app/App';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { grayLight, green, blueMedium, neutralWhite } from '../../components/theme/colors';
import {
  updateUser
} from './actions';

const styles = theme => ({
  toolbar: {
    backgroundColor: green,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
  title: {
    marginLeft: 10
  },
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  homeLink: {
    display: 'flex',
    flexDirection: 'row'
  },
  forgotPassword: {
    marginTop: 0, 
    marginBottom: 10, 
    cursor: 'pointer', 
    color: blueMedium
  },
  loginButton: {
    width: '50%',
    color: neutralWhite
  },
  page: {
    backgroundColor: grayLight,
    transition: 'left .3s ease-out',
    display: 'flex',
    flexDirection: 'column',
    flex: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '100vh'
  },
  pageMargins: {
    height: '100%',
    marginLeft: 20, 
    marginRight: 20,
    marginTop: 20
  },
  loginDrawer: {
    display: 'flex', 
    flexDirection: 'column', 
    marginLeft: 10, 
    marginRight: 10
  },
  userContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  height50: {
    height: 50
  },
  fontSizeLarge: {
    fontSize: 'large'
  },
  marginBottom10: {
    marginBottom: 10
  },
  dividerStyle: {
    marginTop: 20,
    marginBottom: 20
  }
})

function mapDispatchToProps(state) {
    return {
      user : state.app.user,
    };
}


export default withRouter(compose(withStyles(styles) ,connect(mapDispatchToProps, {updateUser}))(App));