import React, { Component } from 'react';

import { Form, FormGroup, Input } from 'reactstrap';
import * as SearchingActions from '../redux/searching_actions';

class SearchingInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });

  }

  onSubmit = (e) => {
    const store = this.props.store;
    e.preventDefault();
    const { name } = this.state;
    store.dispatch(SearchingActions.addSearchingPlayer(name));
    store.dispatch(SearchingActions.addSearchingNation('All'));
    store.dispatch(SearchingActions.addSearchingLeague('All'));
    store.dispatch(SearchingActions.addSearchingPosition('All'));
    store.dispatch(SearchingActions.addSearchingClub('All'));
  }

  render() {
    const {label} = this.props;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Search by Name"
              onChange={this.handleChange}/>
          </FormGroup>
        </Form>
			</div>
    );
  }
}

export default SearchingInput;
