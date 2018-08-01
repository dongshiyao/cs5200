import React, { Component } from 'react';

import axios from 'axios';

import Header from './PlayersDBHeader';
import PlayersTable from './PlayersTable';
import SearchingBarContainer from '../containers/searching_bar_container';

class PlayersDB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.playerResults
    }
  }

  componentWillMount() {
    const url = "http://localhost:8080/players/searchPlayerByCriteria"
    axios.get(url).then(res => {
      this.setState({
        data: res.data
      })
    }, err => {
      console.log("Get all player got an error: ", err);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.playerResults
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>

        <Header />
        <div>
          <SearchingBarContainer
            store={this.props.store}/>
        </div>
        <div>
          <PlayersTable data={data}/>
        </div>

      </div>
    );
  }
}

export default PlayersDB;
