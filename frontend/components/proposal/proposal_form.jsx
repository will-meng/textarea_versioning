import React from 'react';
import { Link } from 'react-router-dom';

class ProposalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '' };
  }

  componentDidMount() {
    
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit() {
    return e => {
      e.preventDefault();
      this.props.createProposal(this.state);
    }
  }

  render() {
    const { } = this.props;
    return (
      <form className='form-container' onSubmit={this.handleSubmit()}>
        <h1>Generic Form</h1>

        <input type="text" 
          id='title' 
          onChange={this.update('title')}
          placeholder='Enter a title'
        />

        <textarea
          id='description'
          onChange={this.update('description')}
          placeholder='Enter a description'
        >
        
        </textarea>

        <input type="submit" 
          className=''
          value='Submit'/>
      </form>
    );
  }
}

export default ProposalForm;