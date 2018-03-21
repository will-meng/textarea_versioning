import React from 'react';
import { Link } from 'react-router-dom';

class ProposalIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestProposals();
  }

  render() {
    const { proposals } = this.props;
    return (
      <ul>
        {
          proposals.map( proposal => (
            <li key={proposal.id}>
              {proposal.title} {proposal.description} {proposal.author_id}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default ProposalIndex;