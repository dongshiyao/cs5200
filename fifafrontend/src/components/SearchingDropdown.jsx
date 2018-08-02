import React, { Component } from 'react';
import * as SearchingActions from '../redux/searching_actions';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SearchingDropdown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }
    this.handleChange = this.handleChange.bind(this);

  }

  componentWillMount() {

    const { label } = this.props;
    switch (label) {
      case 'Position': {
        // hardcode position
        let items = ['All','RW','RF','RM','RB','ST','CF','CAM','CM','CDM','CB','LW','LM','LB','LF','GK'];

        this.setState({
          items: items
        });
        break;
      }
      case 'Nation': {
        const url = "http://localhost:8080/players/displayNationByFirstLetterInRange"
        axios.get(url).then(res => {
          let items = res.data;
          items.unshift('All');
          this.setState({
            items: items
          })
        }, err => {
          console.log("Read Nation got an error: ",err);
        });
        break;
      }
      case 'League': {
        const url = "http://localhost:8080/players/displayLeagueByFirstLetterInRange"
        axios.get(url).then(res => {
          let items = res.data;
          items.unshift('All');
          this.setState({
            items: items
          });
        }, err => {
          console.log("Read League got an error: ", err);
        });
        break;
      }
      case 'Club': {
        this.setState({
          items: ['All']
        });
        break;
      }
      default:

    }
  }

  componentWillReceiveProps(nextProps) {
    const { leagueSelected } = nextProps;
    if (leagueSelected) {
      const url = "http://localhost:8080/players/searchClubByLeagueName?league="+leagueSelected;
      axios.get(url).then(res => {
        let items = res.data;
        items.unshift('All');
        this.setState({
          items: items
        });
      }, err => {
        console.log("Read Clubs got an error: ", err);
      });
    } else {
      this.setState({
        items: ['All']
      });
    }
  }

  handleChange(event) {
    const selected = event.target.value;
    const { store, label } = this.props;

    switch (label) {
      case "Position": {
        store.dispatch(SearchingActions.addSearchingPosition(selected));
        break;
      }
      case "Nation": {
        store.dispatch(SearchingActions.addSearchingNation(selected));
        break;
      }
      case "League": {
        store.dispatch(SearchingActions.addSearchingLeague(selected));
        break;
      }
      case "Club": {
        store.dispatch(SearchingActions.addSearchingClub(selected));
        break;
      }
    }
  }

  render() {
    const { label } = this.props;
    const { items, optionSelected } = this.state;

    return (
      <div>
        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for={label} className="mr-sm-2">{label}</Label>
            <Input
              type="select"
              name={label}
              id={label}
              onChange={this.handleChange}>
              {items.map(function(item) {
                return (
                  <option id={item}>{item}</option>
                )
              })}
            </Input>
          </FormGroup>
        </Form>
			</div>
    );
  }
}

export default SearchingDropdown;
