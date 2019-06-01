import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { Navbar, Button } from 'react-bootstrap';
import './App.css';

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
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    // const classes = useStyles()
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {/* <AppBar.Brand>
              <a href='#'>Auth0 - React</a>
            </AppBar.Brand> */}
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
