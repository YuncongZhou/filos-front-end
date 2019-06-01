import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import './App.css';
// import { makeStyles } from '@material-ui/core/styles'
// import { Navbar, Button } from 'react-bootstrap';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }))

class App extends Component {
  public props: any;

  public goTo(route: string) {
    this.props.history.replace(`/${route}`);
  }

  public login() {
    this.props.auth.login();
  }

  public logout() {
    this.props.auth.logout();
  }

  public componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  // tslint:disable
  public render() {
    const { isAuthenticated } = this.props.auth;
    // const classes = useStyles()
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {/* <a href='#'>Auth0 - React</a> */}
            <Typography variant="h6">
              {' '}
              {/*className={classes.title}>*/}
              Auth login page
            </Typography>
            <Button color="inherit" className="btn-margin" onClick={this.goTo.bind(this, 'home')}>
              Home
            </Button>
            {!isAuthenticated() && (
              <Button color="inherit" id="qsLoginBtn" className="btn-margin" onClick={this.login.bind(this)}>
                Log In
              </Button>
            )}
            {isAuthenticated() && (
              <Button id="qsLogoutBtn" color="inherit" className="btn-margin" onClick={this.logout.bind(this)}>
                Log Out
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
