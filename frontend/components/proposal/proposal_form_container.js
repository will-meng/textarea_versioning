import { connect } from 'react-redux';
import { createProposal } from '../../actions/proposal_actions'
import ProposalForm from './proposal_form';

const mapStateToProps = (state, ownProps) => {
  return { 
    
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createProposal: proposalForm => dispatch(createProposal(proposalForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalForm);
