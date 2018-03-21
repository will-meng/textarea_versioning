import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import proposalsReducer from './proposals_reducer';

const rootReducer = combineReducers({
  proposals: proposalsReducer,
  session: sessionReducer,
  errors: errorsReducer,
});

export default rootReducer;