import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state = { currentUser: null }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    default:
      return state;
  }
};

export default sessionReducer;