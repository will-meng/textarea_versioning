import { 
  RECEIVE_PROPOSAL, 
  RECEIVE_PROPOSALS 
} from '../actions/proposal_actions';
import merge from 'lodash/merge';

const proposalsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROPOSALS:
      return action.proposals;
    case RECEIVE_PROPOSAL:
      return merge({}, state, { [action.proposal.id]: action.proposal });
    default:
      return state;
  }
};

export default proposalsReducer;