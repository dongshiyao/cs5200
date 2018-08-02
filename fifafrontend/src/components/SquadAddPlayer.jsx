import React, { Component } from 'react';

import * as SquadActions from '../redux/squad_actions';
import * as SearchingActions from '../redux/searching_actions';
import axios from 'axios';

import PlayerCard from './PlayerCard';
import SquadSearchingPlayerContainer from '../containers/squad_searching_player_container';

import '../css/squad_add_player.css';

class SquadAddPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      onPos: null,
      squad: this.props.squad,
      showSearch: this.props.showSearch,
      GKPlayer: this.props.GKPlayer,
    	STPlayer: this.props.STPlayer,
      CFPlayer: this.props.CFPlayer,
    	LMPlayer: this.props.LMPlayer,
    	LCMPlayer: this.props.LCMPlayer,
      RCMPlayer: this.props.RCMPlayer,
      RMPlayer: this.props.RMPlayer,
      LBPlayer: this.props.LBPlayer,
      LCBPlayer: this.props.LCBPlayer,
      RCBPlayer: this.props.RCBPlayer,
      RBPlayer: this.props.RBPlayer
    }
  }

  componentWillMount() {
    if (this.state.squad) {
      let {
        GKPlayer,
        STPlayer,
        CFPlayer,
        LMPlayer,
        LCMPlayer,
        RCMPlayer,
        RMPlayer,
        LBPlayer,
        LCBPlayer,
        RCBPlayer,
        RBPlayer
      } = this.state;
      const squadId = this.state.squad.squadId;
      const { store } = this.props;
      const url = "http://localhost:8080/squad/displayPlayersInSquad?squad_id="+squadId;
      axios.get(url)
      .then(function (response) {
        response.data.map(junction => {
          const playerId = junction.playerId;
          const posNumber = junction.posNumber;
          const url = "http://localhost:8080/players/searchPlayerById?player_id="+playerId;
          axios.get(url)
          .then(function(response) {
            const player = response.data;
            switch (posNumber) {
              case 'ONE': {
                const pos = "ST";
                store.dispatch(SquadActions.addST(player));
                STPlayer = player;
                break;
              }
              case 'TWO': {
                const pos = "LM";
                store.dispatch(SquadActions.addLM(player));
                LMPlayer = player;
                break;
              }
              case 'THREE': {
                const pos = "LCM";
                store.dispatch(SquadActions.addLCM(player));
                LCMPlayer = player;
                break;
              }
              case 'FOUR': {
                const pos = "CF";
                store.dispatch(SquadActions.addCF(player));
                CFPlayer = player;
                break;
              }
              case 'FIVE': {
                const pos = "RCM";
                store.dispatch(SquadActions.addRCM(player));
                RCMPlayer = player;
                break;
              }
              case 'SIX': {
                const pos = "RM";
                store.dispatch(SquadActions.addRM(player));
                RMPlayer = player;
                break;
              }
              case 'SEVEN': {
                const pos = "LB";
                store.dispatch(SquadActions.addLB(player));
                LBPlayer = player;
                break;
              }
              case 'EIGHT': {
                const pos = "LCB";
                store.dispatch(SquadActions.addLCB(player));
                LCBPlayer = player;
                break;
              }
              case 'NINE': {
                const pos = "RCB";
                store.dispatch(SquadActions.addRCB(player));
                RCBPlayer = player;
                break;
              }
              case 'TEN': {
                const pos = "RB";
                store.dispatch(SquadActions.addRB(player));
                RBPlayer = player;
                break;
              }
              case 'ELEVEN': {
                const pos = "GK";
                store.dispatch(SquadActions.addGK(player));
                GKPlayer = player;
                break;
              }
              default:
                console.log('cannot find this position');
            }
            console.log('setstate');
            this.setState({
              GKPlayer: GKPlayer,
              STPlayer: STPlayer,
              CFPlayer: CFPlayer,
              LMPlayer: LMPlayer,
              LCMPlayer: LCMPlayer,
              RCMPlayer: RCMPlayer,
              RMPlayer: RMPlayer,
              LBPlayer: LBPlayer,
              LCBPlayer: LCBPlayer,
              RCBPlayer: RCBPlayer,
              RBPlayer: RBPlayer
            })
          })
          .catch(function (error) {
            console.log(error);
          });
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      showSearch: nextProps.showSearch,
      squad: nextProps.squad,
      GKPlayer: nextProps.GKPlayer,
    	STPlayer: nextProps.STPlayer,
      CFPlayer: nextProps.CFPlayer,
    	LMPlayer: nextProps.LMPlayer,
    	LCMPlayer: nextProps.LCMPlayer,
      RCMPlayer: nextProps.RCMPlayer,
      RMPlayer: nextProps.RMPlayer,
      LBPlayer: nextProps.LBPlayer,
      LCBPlayer: nextProps.LCBPlayer,
      RCBPlayer: nextProps.RCBPlayer,
      RBPlayer: nextProps.RBPlayer
    });
  }

  onClick = (player, position) => {
    const { store } = this.props;
    const { squad } = this.state;
    if (!this.state.showSearch) {
      console.log('!!!!!', player);
      console.log(this.state.showSearch);
      let posNumber = '';
      switch (position) {
        case "GK": {
          posNumber = 'ELEVEN';
          this.setState({
            onPos: 'GK'
          });
          break;
        }
        case "ST": {
          posNumber = 'ONE';
          this.setState({
            onPos: 'ST'
          });
          break;
        }
        case "LM": {
          posNumber = 'TWO';
          this.setState({
            onPos: 'LM'
          });
          break;
        }
        case "LCM": {
          posNumber = 'THREE';
          this.setState({
            onPos: 'LCM'
          });
          break;
        }
        case "CF": {
          posNumber = 'FOUR';
          this.setState({
            onPos: 'CF'
          });
          break;
        }
        case "RCM": {
          posNumber = 'FIVE';
          this.setState({
            onPos: 'RCM'
          });
          break;
        }
        case "RM": {
          posNumber = 'SIX';
          this.setState({
            onPos: 'RM'
          });
          break;
        }
        case "LB": {
          posNumber = 'SEVEN';
          this.setState({
            onPos: 'LB'
          });
          break;
        }
        case "LCB": {
          posNumber = 'EIGHT';
          this.setState({
            onPos: 'LCB'
          });
          break;
        }
        case "RCB": {
          posNumber = 'NINE';
          this.setState({
            onPos: 'RCB'
          });
          break;
        }
        case "RB": {
          posNumber = 'TEN';
          this.setState({
            onPos: 'RB'
          });
          break;
        }
        default:
          posNumber = null;
      }
      if (player) {
        console.log('remove existed player here');
        const oldSquadPlayerJunction = {
          squadId: squad.squadId,
          playerId: player.playerId,
          posNumber: posNumber
        }
        console.log('oldSquadPlayerJunction', oldSquadPlayerJunction);
        const removeUrl = "http://localhost:8080/squad/removePlayerFromSquad";
        axios.delete(removeUrl, { data: oldSquadPlayerJunction })
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    }

    if (this.state.showSearch) {
      console.log('add and update new player');
      console.log(position);
      switch (position) {
        case 'GK': {
          if (player) {
            const url = "http://localhost:8080/squad/addPlayerToSquad";
            const squadPlayerJunction = {
              squadId: squad.squadId,
              playerId: player.playerId,
              posNumber: 'ELEVEN'
            };
            axios.post(url, squadPlayerJunction)
            .then(function (response) {
              const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
              axios.get(url)
              .then(function (response) {
                store.dispatch(SquadActions.addGK(player));
                store.dispatch(SquadActions.createSquad(response.data));
              })
              .catch(function (error) {
                console.log(error);
              })
            })
            .catch(function (error) {
              console.log(error);
              alert('Cannot add duplicate player to a squad!');
            });
          }
          break;
        }
        case 'ST': {
          if (player) {
            const url = "http://localhost:8080/squad/addPlayerToSquad";
            const squadPlayerJunction = {
              squadId: squad.squadId,
              playerId: player.playerId,
              posNumber: 'ONE'
            };
            axios.post(url, squadPlayerJunction)
            .then(function (response) {
              console.log(response);
              const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
              axios.get(url)
              .then(function (response) {
                store.dispatch(SquadActions.addST(player));
                store.dispatch(SquadActions.createSquad(response.data));
              })
              .catch(function (error) {
                console.log(error);
              })
            })
            .catch(function (error) {
              console.log(error);
              alert('Cannot add duplicate player to a squad!');
            });
          }
          break;
        }
        case 'CF': {
          if (player) {
            const url = "http://localhost:8080/squad/addPlayerToSquad";
            const squadPlayerJunction = {
              squadId: squad.squadId,
              playerId: player.playerId,
              posNumber: 'FOUR'
            };
            axios.post(url, squadPlayerJunction)
            .then(function (response) {
              console.log(response);
              const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
              axios.get(url)
              .then(function (response) {
                store.dispatch(SquadActions.addCF(player));
                store.dispatch(SquadActions.createSquad(response.data));
              })
              .catch(function (error) {
                console.log(error);
              })
            })
            .catch(function (error) {
              console.log(error);
              alert('Cannot add duplicate player to a squad!');
            });
          }
          break;
        }
        case 'LM': {
          if (player) {
            const url = "http://localhost:8080/squad/addPlayerToSquad";
            const squadPlayerJunction = {
              squadId: squad.squadId,
              playerId: player.playerId,
              posNumber: 'TWO'
            };
            axios.post(url, squadPlayerJunction)
            .then(function (response) {
              console.log(response);
              const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
              axios.get(url)
              .then(function (response) {
                store.dispatch(SquadActions.addLM(player));
                store.dispatch(SquadActions.createSquad(response.data));
              })
              .catch(function (error) {
                console.log(error);
              })
            })
            .catch(function (error) {
              console.log(error);
              alert('Cannot add duplicate player to a squad!');
            });
          }
          break;
        }
        case 'LCM': {
          if (player) {
            const url = "http://localhost:8080/squad/addPlayerToSquad";
            const squadPlayerJunction = {
              squadId: squad.squadId,
              playerId: player.playerId,
              posNumber: 'THREE'
            };
            axios.post(url, squadPlayerJunction)
            .then(function (response) {
              console.log(response);
              const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
              axios.get(url)
              .then(function (response) {
                store.dispatch(SquadActions.addLCM(player));
                store.dispatch(SquadActions.createSquad(response.data));
              })
              .catch(function (error) {
                console.log(error);
              })
            })
            .catch(function (error) {
              console.log(error);
              alert('Cannot add duplicate player to a squad!');
            });
          }
          break;
        }
        case 'RCM': {
          if (player) {
            const url = "http://localhost:8080/squad/addPlayerToSquad";
            const squadPlayerJunction = {
              squadId: squad.squadId,
              playerId: player.playerId,
              posNumber: 'FIVE'
            };
            axios.post(url, squadPlayerJunction)
            .then(function (response) {
              console.log(response);
              const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
              axios.get(url)
              .then(function (response) {
                store.dispatch(SquadActions.addRCM(player));
                store.dispatch(SquadActions.createSquad(response.data));
              })
              .catch(function (error) {
                console.log(error);
              })
            })
            .catch(function (error) {
              console.log(error);
              alert('Cannot add duplicate player to a squad!');
            });
          }
          break;
        }
        case 'RM': {
          if (player) {
            const url = "http://localhost:8080/squad/addPlayerToSquad";
            const squadPlayerJunction = {
              squadId: squad.squadId,
              playerId: player.playerId,
              posNumber: 'SIX'
            };
            axios.post(url, squadPlayerJunction)
            .then(function (response) {
              console.log(response);
              const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
              axios.get(url)
              .then(function (response) {
                store.dispatch(SquadActions.addRM(player));
                store.dispatch(SquadActions.createSquad(response.data));
              })
              .catch(function (error) {
                console.log(error);
              })
            })
            .catch(function (error) {
              console.log(error);
              alert('Cannot add duplicate player to a squad!');
            });
          }
          break;
        }
        case 'LB': {
          if (player) {
            const url = "http://localhost:8080/squad/addPlayerToSquad";
            const squadPlayerJunction = {
              squadId: squad.squadId,
              playerId: player.playerId,
              posNumber: 'SEVEN'
            };
            axios.post(url, squadPlayerJunction)
            .then(function (response) {
              console.log(response);
              const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
              axios.get(url)
              .then(function (response) {
                store.dispatch(SquadActions.addLB(player));
                store.dispatch(SquadActions.createSquad(response.data));
              })
              .catch(function (error) {
                console.log(error);
              })
            })
            .catch(function (error) {
              console.log(error);
              alert('Cannot add duplicate player to a squad!');
            });
          }
          break;
        }
        case 'LCB': {
          if (player) {
            const url = "http://localhost:8080/squad/addPlayerToSquad";
            const squadPlayerJunction = {
              squadId: squad.squadId,
              playerId: player.playerId,
              posNumber: 'EIGHT'
            };
            axios.post(url, squadPlayerJunction)
            .then(function (response) {
              console.log(response);
              const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
              axios.get(url)
              .then(function (response) {
                store.dispatch(SquadActions.addLCB(player));
                store.dispatch(SquadActions.createSquad(response.data));
              })
              .catch(function (error) {
                console.log(error);
              })
            })
            .catch(function (error) {
              console.log(error);
              alert('Cannot add duplicate player to a squad!');
            });
          }
          break;
        }
        case 'RCB': {
          if (player) {
            const url = "http://localhost:8080/squad/addPlayerToSquad";
            const squadPlayerJunction = {
              squadId: squad.squadId,
              playerId: player.playerId,
              posNumber: 'NINE'
            };
            axios.post(url, squadPlayerJunction)
            .then(function (response) {
              console.log(response);
              const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
              axios.get(url)
              .then(function (response) {
                store.dispatch(SquadActions.addRCB(player));
                store.dispatch(SquadActions.createSquad(response.data));
              })
              .catch(function (error) {
                console.log(error);
              })
            })
            .catch(function (error) {
              console.log(error);
              alert('Cannot add duplicate player to a squad!');
            });
          }
          break;
        }
        case 'RB': {
          if (player) {
            const url = "http://localhost:8080/squad/addPlayerToSquad";
            const squadPlayerJunction = {
              squadId: squad.squadId,
              playerId: player.playerId,
              posNumber: 'TEN'
            };
            axios.post(url, squadPlayerJunction)
            .then(function (response) {
              console.log(response);
              const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
              axios.get(url)
              .then(function (response) {
                store.dispatch(SquadActions.addRB(player));
                store.dispatch(SquadActions.createSquad(response.data));
              })
              .catch(function (error) {
                console.log(error);
              })
            })
            .catch(function (error) {
              console.log(error);
              alert('Cannot add duplicate player to a squad!');
            });
          }
          break;
        }
        default:
          console.log('SquadAddPlayer, position invalid');
      }
    }

    store.dispatch(SquadActions.squadSearchSwitch(this.state.showSearch));
  }

  render() {
    const {
      showSearch,
      GKPlayer,
    	STPlayer,
      CFPlayer,
    	LMPlayer,
    	LCMPlayer,
      RCMPlayer,
      RMPlayer,
      LBPlayer,
      LCBPlayer,
      RCBPlayer,
      RBPlayer
    } = this.state;
    const squadLayer = (
      <div className='formation'>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <PlayerCard onPos='ST' player={STPlayer} onClick={this.onClick}/>
                <div className='position_tag'>ST</div>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <PlayerCard onPos='LM' player={ LMPlayer } onClick={this.onClick}/>
                <div className='position_tag'>LM</div>
              </td>
              <td>
                <PlayerCard onPos='LCM' player={ LCMPlayer } onClick={this.onClick}/>
                <div className='position_tag'>CM</div>
              </td>
              <td>
                <PlayerCard onPos='CF' player={ CFPlayer } onClick={this.onClick}/>
                <div className='position_tag'>CF</div>
              </td>
              <td>
                <PlayerCard  onPos='RCM' player={ RCMPlayer } onClick={this.onClick}/>
                <div className='position_tag'>CM</div>
              </td>
              <td>
                <PlayerCard onPos='RM' player={ RMPlayer } onClick={this.onClick}/>
                <div className='position_tag'>RM</div>
              </td>
            </tr>
            <tr>
              <td>
                <PlayerCard onPos='LB' player={ LBPlayer } onClick={this.onClick}/>
                <div className='position_tag'>LB</div>
              </td>
              <td>
                <PlayerCard onPos='LCB' player={ LCBPlayer } onClick={this.onClick}/>
                <div className='position_tag'>CB</div>
              </td>
              <td>
                <PlayerCard onPos='GK' player={ GKPlayer } onClick={this.onClick}/>
                <div className='position_tag'>GK</div>
              </td>
              <td>
                <PlayerCard onPos='RCB' player={ RCBPlayer } onClick={this.onClick}/>
                <div className='position_tag'>CB</div>
              </td>
              <td>
                <PlayerCard onPos='RB' player={ RBPlayer } onClick={this.onClick}/>
                <div className='position_tag'>RB</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className='squad_bg'>
        {showSearch ? (
          <SquadSearchingPlayerContainer
            store={this.props.store}
            onPos={this.state.onPos}
            onClick={this.onClick}/>
        ) : squadLayer}

      </div>

    );
  }
}

export default SquadAddPlayer;
