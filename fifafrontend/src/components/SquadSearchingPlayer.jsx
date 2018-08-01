import React, { Component } from 'react';

import SearchingBarContainer from '../containers/searching_bar_container';
import PlayerCardsPanelContainer from '../containers/player_cards_panel_container';

import '../css/playersdb_header.css';

class SquadSearchingPlayer extends Component {

  constructor(props) {
    super(props);
    // console.log('squadSearchingPlayer', props);
    this.state = {
      data: this.props.playerResults
    }
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
        <SearchingBarContainer store={this.props.store} />
        <PlayerCardsPanelContainer
          store={this.props.store}
          onPos={this.props.onPos}
          data={data}
          onClick={this.props.onClick}/>
      </div>
    );
  }
}

export default SquadSearchingPlayer;
