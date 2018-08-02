import React, { Component } from 'react';
import { Form } from 'reactstrap';
import axios from 'axios';

import SearchingDropdownContainer from '../containers/searching_dropdown_container';
import SearchingInputContainer from '../containers/searching_input_container';

import * as SearchingActions from '../redux/searching_actions';

import '../css/searching_bar.css';

class SearchingBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerFilters: this.props.playerFilters,
      positionFilters: this.props.positionFilters,
      nationFilters: this.props.nationFilters,
      clubFilters: this.props.clubFilters,
      leagueFilters: this.props.leagueFilters,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      playerFilters: nextProps.playerFilters,
      positionFilters: nextProps.positionFilters,
      nationFilters: nextProps.nationFilters,
      clubFilters: nextProps.clubFilters,
      leagueFilters: nextProps.leagueFilters
    });

    const {
      playerFilters,
      positionFilters,
      nationFilters,
      clubFilters,
      leagueFilters
    } = nextProps;

    const store = this.props.store;
    // if (playerFilters) {
    //   const url = "http://localhost:8080/players/searchPlayerByName?input_player_name="+playerFilters;
    //   axios.get(url).then(res => {
    //     store.dispatch(SearchingActions.setPlayersResults(res.data));
    //   }, err => {
    //     console.log("SearchingBar got an error: ",err);
    //   });
    // } else {
    let url = "http://localhost:8080/players/searchPlayerByCriteria?"
    let tigger = false;
    if (playerFilters) {
      url = url + 'input_player_name=' + playerFilters + '&';
      tigger = true;
    }
    if (positionFilters) {
      url = url + 'position=' + positionFilters + '&';
      tigger = true;
    }
    if (nationFilters) {
      url = url + 'nation=' + nationFilters + '&';
      tigger = true;
    }
    if (leagueFilters) {
      url = url + 'league=' + leagueFilters + '&';
      tigger = true;
    }
    if (clubFilters) {
      url = url + 'club=' + clubFilters + '&'
      tigger = true;
    }
    url = url.slice(0, -1);
    url = tigger ? url + "&sortCriteria=OVERALL" : url;
    axios.get(url).then(res => {
      store.dispatch(SearchingActions.setPlayersResults(res.data));
    }, err => {
      console.log("SearchingBar got an error: ", err);
    });
    // }
  }

  render() {
    const {
      playerFilters,
      positionFilters,
      nationFilters,
      clubFilters,
      leagueFilters
    } = this.state;
    let filterContent = '';
    if (playerFilters) {
      filterContent = filterContent + 'Player-' + playerFilters + '  ';
    }
    if (positionFilters) {
      filterContent = filterContent + 'Position-' + positionFilters + '  ';
    }
    if (nationFilters) {
      filterContent = filterContent + 'Nation-' + nationFilters + '  ';
    }
    if (clubFilters) {
      filterContent = filterContent + 'Club-' + clubFilters + '  ';
    }
    if (leagueFilters) {
      filterContent = filterContent + 'League-' + leagueFilters + '  ';
    }
    if (filterContent.trim() === '') {
      filterContent = 'Please add some filters to start';
    }

    return (
      <div className='searching_bar_container'>
        <div className='searching_input'>
          <Form inline>
            <SearchingInputContainer store={this.props.store} />
            <SearchingDropdownContainer
              store={this.props.store}
              label='Position' />
            <SearchingDropdownContainer
              store={this.props.store}
              label='Nation' />
            <SearchingDropdownContainer
              store={this.props.store}
              label='League' />
            <SearchingDropdownContainer
              store={this.props.store}
              label='Club'
              leagueSelected={this.state.leagueFilters}/>
          </Form>
        </div>
        <div className='filter_summary'>
          {filterContent}
        </div>
			</div>
    );
  }
}

export default SearchingBar;
