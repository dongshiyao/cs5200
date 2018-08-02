import React, { Component } from 'react';

import { Form, FormGroup, Input, Button } from 'reactstrap';
import * as SearchingActions from '../redux/searching_actions';

class SearchingInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      playerSelected: this.props.playerSelected
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      playerSelected: nextProps.playerSelected
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { store } = this.props;
    this.setState({ [name]: value });

    store.dispatch(SearchingActions.addSearchingPlayer(value));
  }

  render() {
    const { label } = this.props;
    return (
      <div>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Search by Name"
            onChange={this.handleChange}/>
        </FormGroup>
			</div>
    );
  }
}

export default SearchingInput;
