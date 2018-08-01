import React, { Component } from 'react';
import '../css/playersdb_header.css';

class PlayersDBHeader extends Component {

  render() {
    return (
      <div className='player_header'>
        <br />
        <h2>FIFA 18 Players</h2>
        <p>FIFA 18 Database</p>
        <a href="#">home</a>{'/'}<a href="#">players</a>
			</div>
    );
  }
}

export default PlayersDBHeader;
