import App from './App';
import Auth from './Auth/Auth';
import Callback from './Callback/Callback';
import history from './history';
import Home from './Home/Home';
// tslint:disable
import React from 'react';
import { Route, Router } from 'react-router-dom';

const auth = new Auth();
const handleAuthentication = ({ location }: any) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={props => <App auth={auth} {...props} />} />
        <Route path="/home" render={props => <Home auth={auth} {...props} />} />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
