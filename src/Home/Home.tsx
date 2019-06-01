import { Button } from '@material-ui/core';
import React, { Component } from 'react';

class Home extends Component {
  public props: any;
  public login() {
    this.props.auth.login();
  }
  // tslint:disable
  public render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() && <h4>You are logged in! Now you can see your secret!</h4>}
        {!isAuthenticated() && (
          <h4>
            You are not logged in! Please{' '}
            <Button variant="outlined" onClick={this.login.bind(this)}>
              Log In
            </Button>{' '}
            to continue.
          </h4>
        )}
      </div>
    );
  }
}

export default Home;
