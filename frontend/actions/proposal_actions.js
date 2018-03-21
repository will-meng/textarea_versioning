import * as ProposalApiUtil from '../utils/proposal_util';

export const RECEIVE_PROPOSAL = 'RECEIVE_PROPOSAL';
export const RECEIVE_PROPOSALS = 'RECEIVE_PROPOSALS';
export const RECEIVE_PROPOSAL_ERRORS = 'RECEIVE_PROPOSAL_ERRORS';

const receiveProposal = proposal => ({
  type: RECEIVE_PROPOSAL,
  proposal
});

const receiveProposals = proposals => ({
  type: RECEIVE_PROPOSALS,
  proposals
});

const receiveProposalErrors = errors => ({
  type: RECEIVE_PROPOSAL_ERRORS,
  errors
})

export const createProposal = proposalForm => dispatch => (
  ProposalApiUtil.createProposal(proposalForm)
    .then(
      proposal => dispatch(receiveProposal(proposal)),
      errors => dispatch(receiveProposalErrors(errors.responseJSON))
    )
);

export const requestProposals = () => dispatch => (
  ProposalApiUtil.fetchProposals()
    .then(proposals => dispatch(receiveProposals(proposals)))
);