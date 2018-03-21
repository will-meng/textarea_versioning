import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING
// import * as SessionApiUtil from './utils/session_api_util';
// window.signup = SessionApiUtil.signup;
// window.login = SessionApiUtil.login;
// window.logout = SessionApiUtil.logout;

// import * as SessionActions from './actions/session_actions';
// window.login = SessionActions.login;
// window.logout = SessionActions.logout;
// TESTING

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING

  ReactDOM.render(<Root store={ store}/>, root);
});