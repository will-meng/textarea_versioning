import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProposalFormContainer from './proposal/proposal_form_container';
import ProposalIndexContainer from './proposal/proposal_index_container';

const App = () => (
  <Switch>
    <Route path='/proposals/new' component={ProposalFormContainer}/>
    <Route path='/' component={ProposalIndexContainer}/>
  </Switch>
);

export default App;