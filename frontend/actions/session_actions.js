import * as SessionApiUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = userForm => dispatch => (
  SessionApiUtil.login(userForm)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )
);

export const signup = userForm => dispatch => (
  SessionApiUtil.signup(userForm)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(res => dispatch(receiveCurrentUser(null)))
);