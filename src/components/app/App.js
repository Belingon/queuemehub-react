import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from '../../router';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Schedule from '@material-ui/icons/Schedule';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { grayLight, green, blueMedium, neutralWhite } from '../theme/colors';

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

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoginDrawerOpen: false,
      isLoginDisabled: true
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.user !== this.props.user){
      this.determineIfLoginIsDisabled();
    }
  };

  determineIfLoginIsDisabled = () => {
    let isDisabled = true;
    if(this.props.user.userName && this.props.user.password){
      isDisabled = false;
    }
    this.setState({isLoginDisabled: isDisabled})
  };

  onClickHome = () => {
    this.props.history.push('/');
  };

  onLoginDrawerOpen = () => {
    this.setState({isLoginDrawerOpen: true})
  };

  onLoginDrawerClose = () => {
    this.setState({isLoginDrawerOpen: false})
  };

  onUserUpdate = (fieldName, value) => {
    let newUserInformation = Object.assign({}, this.props.user);
    newUserInformation[fieldName] = value;
    this.props.updateUser(newUserInformation);
  };

  getNewUserContent = () => {
    return(
      <div className={this.props.classes.userContent}>
        <p className={this.props.classes.marginBottom10}>Create a user </p>
        <TextField
          label="User Name"
          className={this.props.classes.marginBottom10}
          value={this.props.user.userName || ''}
          onChange={(e) => this.onUserUpdate('userName', e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Password"
          value={this.props.user.password || ''}
          onChange={(e) => this.onUserUpdate('password', e.target.value)}
          variant="outlined"
        />
        <em 
          className={this.props.classes.forgotPassword}
          onClick={() => alert("Coming Soon!!")}
        >
          Forgot Password?
        </em>
        <Button 
          variant="contained"
          color="primary"
          className={this.props.classes.loginButton}
          disabled = {this.state.isLoginDisabled}
          onClick = {() => alert("Create User coming soon")}
        >
          Create
        </Button>
        </div>
    )
  }

  getExistingUserContent = () => {
    return(
      <div className={this.props.classes.userContent}>
        <p className={this.props.classes.marginBottom10}>Existing User </p>
        <TextField
          label="User Name"
          className={this.props.classes.marginBottom10}
          value={this.props.user.userName || ''}
          onChange={(e) => this.onUserUpdate('userName', e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Password"
          value={this.props.user.password || ''}
          onChange={(e) => this.onUserUpdate('password', e.target.value)}
          variant="outlined"
        />
        <em 
          className={this.props.classes.forgotPassword}
          onClick={() => alert("Forogt password Coming Soon!!")}
        >
          Forgot Password?
        </em>
        <Button 
          variant="contained"
          color="primary"
          className={this.props.classes.loginButton}
          disabled = {this.state.isLoginDisabled}
          onClick = {() => alert("Login coming soon")}
        >
          Login
        </Button>
        </div>
    )
  }

  render() {
    return (
      <div className={this.props.classes.page}>
        <div>
          <AppBar position='static'>
            <Toolbar className={this.props.classes.toolbar}>
              <div className= {this.props.classes.homeLink} onClick={this.onClickHome}>
                <Schedule className= {this.props.classes.icon}/>
                <p className={this.props.classes.title}>
                  QMEHUB
                </p>
              </div>
              <div>
                <Button onClick={this.onLoginDrawerOpen} className={this.props.classes.loginButton}>Login</Button>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div className={this.props.classes.pageMargins}>
          <Router/>
        </div>
          <Drawer
            anchor = 'right'
            open = {this.state.isLoginDrawerOpen}
            onClose = {this.onLoginDrawerClose}
          >
            <div className={this.props.classes.loginDrawer}>
              <div className={this.props.classes.height50}>
                <p className={this.props.classes.fontSizeLarge}>Login</p>
                <Divider className={this.props.classes.dividerStyle}/>
              </div>
              {this.getExistingUserContent()}
              <Divider className={this.props.classes.dividerStyle}/>
              {this.getNewUserContent()}
            </div>
          </Drawer>
      </div>
    );
  }
}

App.propTypes = {
  updateUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(App);
