import auth0 from 'auth0-js';
import history from '../history';
import { AUTH_CONFIG } from './auth0-variables';

export default class Auth {
  private accessToken: string;
  private idToken: string;
  private expiresAt: number;

  private auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid',
  });

  public constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  public login() {
    this.auth0.authorize();
  }

  public handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/home');
        // tslint:disable-next-line
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  public getAccessToken() {
    return this.accessToken;
  }

  public getIdToken() {
    return this.idToken;
  }

  public setSession(authResult: auth0.Auth0DecodedHash) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    if (authResult.expiresIn && authResult.accessToken && authResult.idToken) {
      const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      this.accessToken = authResult.accessToken;
      this.idToken = authResult.idToken;
      this.expiresAt = expiresAt;

      // navigate to the home route
      history.replace('/home');
    }
  }

  public renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        // tslint:disable-next-line
        console.log(err);
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
      }
    });
  }

  public logout() {
    // Remove tokens and expiry time
    this.accessToken = '';
    this.idToken = '';
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    this.auth0.logout({
      returnTo: window.location.origin,
    });

    // navigate to the home route
    history.replace('/home');
  }

  public isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}
