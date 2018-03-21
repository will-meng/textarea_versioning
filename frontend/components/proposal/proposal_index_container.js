import { connect } from 'react-redux';
import { requestProposals } from '../../actions/proposal_actions'
import ProposalIndex from './proposal_index';

const mapStateToProps = (state, ownProps) => {
  return { 
    proposals: Object.values(state.proposals)
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestProposals: () => dispatch(requestProposals()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalIndex);
