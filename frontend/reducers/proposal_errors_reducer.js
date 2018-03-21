import { 
  RECEIVE_PROPOSAL_ERRORS, 
  RECEIVE_PROPOSAL
} from '../actions/proposal_actions';

const defaultState = [];

const proposalErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PROPOSAL_ERRORS:
      return action.errors;
    case RECEIVE_PROPOSAL:
      return defaultState;
    default:
      return state
  }
};

export default proposalErrorsReducer;