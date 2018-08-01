import React, { Component } from 'react';
import SquadProfileBarContainer from '../containers/squad_profile_bar_container';
import SquadAddPlayerContainer from '../containers/squad_add_player_container';

import '../css/playersdb_header.css';


class SquadBuilder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      formation: this.props.formation,
      squad: this.props.squad
    }
  }

  render() {
    const header = (
      <div className='player_header'>
        <br />
        <h2>FIFA 18 Squad Builder</h2>
        <p>Create FIFA 18 Squad</p>
        <a href="#">home</a>
        {'/'}
        <a href="#">Squads</a>
        {'/'}
        <a href="#">Squad Builder</a>
			</div>
    )

    return (
      <div>
        {header}
        <SquadProfileBarContainer store={this.props.store}/>
        <SquadAddPlayerContainer store={this.props.store} />
      </div>
    );
  }
}

export default SquadBuilder;
