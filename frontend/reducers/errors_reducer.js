import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import proposalErrorsReducer from './proposal_errors_reducer';

const errorsReducer = combineReducers({
  proposal: proposalErrorsReducer,
  session: sessionErrorsReducer,
});

export default errorsReducer;