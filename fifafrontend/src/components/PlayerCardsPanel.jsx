import React, { Component } from 'react';
import { Card, Row, Col, Jumbotron, Container } from 'reactstrap';

import PlayerCard from './PlayerCard';

import * as SquadActions from '../redux/squad_actions';

class PlayerCardsPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showSearch: this.props.showSearch
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showSearch: nextProps.showSearch
    });
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              {
                this.props.data.map(player => {
                  return (
                    <Col sm="2">
                      <PlayerCard
                        player={player}
                        onPos={this.props.onPos}
                        onClick={this.props.onClick}
                        />
                    </Col>
                  );
                })
              }
            </Row>
          </Container>
        </Jumbotron>

			</div>
    );
  }
}

export default PlayerCardsPanel;
