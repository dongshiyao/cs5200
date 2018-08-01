import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

import '../css/player_card.css';


class PlayerCard extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
    const { onPos, player, onClick } = this.props;
    
    const emptyCard = (
      <div>
        <Card
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333' }}
          onClick={onClick.bind(this, player, onPos)}>
          <CardImg top width="100%" src='https://www.iconspng.com/images/-abstract-user-icon-1/-abstract-user-icon-1.jpg' alt='NULL' />
          <CardBody>
            <CardTitle>Player Name</CardTitle>
            <CardSubtitle>
              Profile
            </CardSubtitle>
            <CardText>
              PAC  DRI <br/>
              SHO  DEF <br/>
              PAS  PHY
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
		return player ? (
		  <div>
        <Card
          className="card_container"
          onClick={onClick.bind(this, player, onPos)}>
          <CardImg top width="100%" src={player.photo} alt={player.playerName} />
          <CardBody>
            <CardTitle>{player.playerName}</CardTitle>
            <CardSubtitle>
              {player.overall}
              {' '}
              {player.position}
              {' '}
              <img height={20} src={player.flag} />
              <img height={20} src={player.clubLogo} />
            </CardSubtitle>
            <CardText>
              PAC {player.pace} DRI {player.dribbling}<br/>
            SHO {player.shooting} DEF {player.defending}<br/>
          PAS {player.passing} PHY {player.physicality}
            </CardText>
          </CardBody>
        </Card>
      </div>
		) : emptyCard;
	}
}

export default PlayerCard;
