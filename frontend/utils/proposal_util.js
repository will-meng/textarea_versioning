export const createProposal = proposal => (
  $.ajax({
    url: 'api/proposals',
    method: 'POST',
    data: { proposal }
  })
);

export const fetchProposals = () => (
  $.ajax({
    url: 'api/proposals',
    method: 'GET'
  })
);